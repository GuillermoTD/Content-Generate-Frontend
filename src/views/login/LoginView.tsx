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
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box w="full" maxW="md" p="2rem">
        <VStack gap={10} align="stretch">
          {/* HEADER */}
          <VStack gap={3} textAlign="center">
            <Box
              w="20"
              h="20"
              bgGradient="linear(to-br, blue.600, purple.600)"
              borderRadius="3xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              boxShadow="xl"
            >
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
          <Box bg="white" borderWidth="1px" borderRadius="3xl" p="10" boxShadow="2xl">
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
                    bg="gray.50"
                    borderWidth="2px"
                    borderRadius="xl"
                    h="14"
                    px="5"
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
                    bg="gray.50"
                    borderWidth="2px"
                    borderRadius="xl"
                    h="14"
                    px="5"
                  />

                  <Button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    position="absolute"
                    right="1rem"
                    top="50%"
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
                  w="full"
                  h="14"
                  borderRadius="xl"
                  bgGradient="linear(to-r, blue.600, purple.600)"
                  color="white"
                  _hover={{ opacity: 0.9 }}
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
    </Box>
  );
}
