import { handleFreeSubscription } from "../controllers/stripePaymentController";
import errorHandlerMiddleware from "../middleware/errorHandlerMiddleware";
import handleStripePayment from "../middleware/handleStripePayment";
import isUserAuthenticatedHandler from "../middleware/isUserAuthenticatedHandler";
import { Router } from "express";
const router = Router();

router.post(
  "/checkout",
  isUserAuthenticatedHandler,
  errorHandlerMiddleware,
  handleStripePayment
);

router.post(
  "/free-plan",
  isUserAuthenticatedHandler,
  // errorHandlerMiddleware,
  handleFreeSubscription

);


export default router;

