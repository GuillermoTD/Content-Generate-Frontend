import asyncHandler from "express-async-handler";
import { Response, Request } from "express";
import Stripe from "stripe";
import paymentModel from "../models/Payments";
import calculateNextBillingDate from "../utils/calculateNextBillingDate";
import shouldRenewSubscriptionPlan from "../utils/shouldRenewSubscriptionPlan";
import paymentsModel from "../models/Payments";

export const stripePaymentController = asyncHandler(
  async (req: Request, res: Response) => {
    const { amount, suscriptionPlan } = req.body;
    const token = req.cookies.token;
    console.log(amount, suscriptionPlan);
    const user = req.user;
    const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string);

    //Validamos que se envian los campos en el body
    if (!amount && !suscriptionPlan) {
      res
        .status(401)
        .json({ message: "amount and subscriptionPlan are required" });
      return;
    }

    //validamos usuario
    if (!user || !token) {
      res.status(403).json({ message: "Usuario no autenticado" });
      return;
    }

    // res.json("funciona")
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(amount) * 100,
        currency: "usd",
        //metadata
        metadata: {
          userId: user?._id.toString(),
          userEmail: user?.email,
          suscriptionPlan,
        },
      });

      res.json({
        clientSecret: paymentIntent?.client_secret,
        paymentId: paymentIntent?.id,
        metada: paymentIntent?.metadata,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
);

export const handleFreeSubscription = asyncHandler(
  async (req: Request, res: Response) => {
    //Get the logued user
    const user = req?.user;
    //Calculate the next billing date
    const nextBillingCalculated = calculateNextBillingDate();
    //Check if user account should be renew or not
    const renewedSubscription = shouldRenewSubscriptionPlan(user);
    console.log(user)
    try {
      if (!user) {
        res.json("user is not loggued");
        return;
      }
      if (!renewedSubscription) {
        res.status(403).json("Subscription renewal not due yet");
        return;
      }
      //Update the user account
      user.subscriptionPlan = "Free";
      user.monthlyRequestCount = 5;
      user.apiRequestCount = 0;
      user.nextBillingDate = nextBillingCalculated;

      //save user settings
      await user.save();

      //Create new payment and save into DB
      const newPayment = await paymentsModel.create({
        userId: user?._id,
        susbcriptionPlan: "Free",
        count: 0,
        status: "success",
        reference: crypto.randomUUID(), //crypto is an native api of node js
        monthlyRequestCount:0,
        currency:"usd"
      });
      console.log("este es el resultado del pago")
      console.log(newPayment)
      //save payment
      user.payments.push(newPayment?._id);

      //Send the response
      res.json({
        status: "success",
        message: "Subscription plan updated successfully",
        user,
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);
