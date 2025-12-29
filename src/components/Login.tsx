import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Heading,
  Link,
  Separator,
  Field,
} from "@chakra-ui/react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Correo inválido")
      .required("El correo es obligatorio"),
    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .required("La contraseña es obligatoria"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      console.log(values);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 1500);
    },
  });

  return (
    <Box className="w-full max-w-md" p="2rem">
      <VStack gap={10} align="stretch">
        {/* HEADER */}
        <VStack gap={3} textAlign="center">
          <Box className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
            <Text fontSize="3xl" fontWeight="bold" color="white">
              AI
            </Text>
          </Box>
          <Heading size="2xl">Bienvenido de nuevo</Heading>
          <Text color="gray.600">
            Inicia sesión en tu cuenta para continuar
          </Text>
        </VStack>

        {/* FORM */}
        <Box className="bg-white border rounded-3xl p-10 shadow-2xl">
          <form onSubmit={formik.handleSubmit}>
            <VStack gap={7} align="stretch">
              {/* EMAIL */}
              <Field.Root
                label="Correo electrónico"
                invalid={!!formik.errors.email && formik.touched.email}
                errorText={
                  formik.touched.email ? formik.errors.email : undefined
                }
              >
                <Input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  size="lg"
                  className="bg-gray-50 border-4 rounded-xl h-14 px-5"
                />
              </Field.Root>

              {/* PASSWORD */}
              <Field.Root
                label="Contraseña"
                position="relative"
                invalid={
                  !!formik.errors.password && formik.touched.password
                }
                errorText={
                  formik.touched.password
                    ? formik.errors.password
                    : undefined
                }
              >
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  size="lg"
                  className="bg-gray-50 border-2 rounded-xl h-14 px-5"
                />

                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  position="absolute"
                  right="1rem"
                  top="65%"
                  transform="translateY(-50%)"
                  variant="ghost"
                  size="sm"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </Button>
              </Field.Root>

              {/* SUBMIT */}
              <Button
                type="submit"
                size="lg"
                loading={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl h-14"
              >
                Iniciar Sesión
              </Button>

              <HStack gap={4}>
                <Separator flex={1} />
                <Text fontSize="sm" color="gray.500">
                  O continúa con
                </Text>
                <Separator flex={1} />
              </HStack>

              <HStack gap={4}>
                <Button flex={1} variant="outline">
                  Google
                </Button>
                <Button flex={1} variant="outline">
                  GitHub
                </Button>
              </HStack>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}
