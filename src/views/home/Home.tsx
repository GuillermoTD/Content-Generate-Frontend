"use client"

import { Box, Container, Heading, Text, Button, Flex, VStack, HStack, SimpleGrid, Icon, Link } from "@chakra-ui/react"
import { Sparkles, Zap, FileText, ImageIcon, Globe, Shield, ArrowRight, Check } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: FileText,
      title: "Generación de Texto",
      description: "Crea artículos, blogs y contenido escrito de alta calidad en segundos con IA avanzada.",
    },
    {
      icon: ImageIcon,
      title: "Creación de Imágenes",
      description: "Genera imágenes únicas y profesionales para tu contenido con descripciones simples.",
    },
    {
      icon: Zap,
      title: "Velocidad Instantánea",
      description: "Obtén resultados en tiempo real. Nuestra IA procesa miles de palabras por segundo.",
    },
    {
      icon: Globe,
      title: "Multilenguaje",
      description: "Genera contenido en más de 50 idiomas con la misma calidad y precisión.",
    },
    {
      icon: Shield,
      title: "Contenido Original",
      description: "Todo el contenido es 100% único y libre de plagio, verificado automáticamente.",
    },
    {
      icon: Sparkles,
      title: "Optimización SEO",
      description: "Contenido optimizado para motores de búsqueda que mejora tu ranking automáticamente.",
    },
  ]

  const stats = [
    { value: "1M+", label: "Contenidos Generados" },
    { value: "50K+", label: "Usuarios Activos" },
    { value: "99.9%", label: "Tiempo Activo" },
    { value: "4.9/5", label: "Valoración" },
  ]

  const plans = [
    {
      name: "Básico",
      price: "$19",
      features: ["10,000 palabras/mes", "Generación de texto", "Soporte por email", "Acceso a plantillas"],
    },
    {
      name: "Pro",
      price: "$49",
      features: ["100,000 palabras/mes", "Texto e imágenes", "Soporte prioritario", "API access", "Sin marca de agua"],
      popular: true,
    },
    {
      name: "Empresa",
      price: "Personalizado",
      features: ["Palabras ilimitadas", "Todo incluido", "Soporte 24/7", "Integración dedicada", "SLA garantizado"],
    },
  ]

  return (
    <Box bg="gray.900" color="white" minH="100vh">
      {/* Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={10}
        bg="rgba(17, 24, 39, 0.8)"
        backdropFilter="blur(12px)"
        borderBottom="1px"
        borderColor="gray.800"
      >
        <Container maxW="7xl" py={4}>
          <Flex justify="space-between" align="center">
            <Flex align="center" gap={2}>
              <Icon as={Sparkles} boxSize={8} color="blue.400" />
              <Heading size="lg" fontWeight="bold">
                ContentAI
              </Heading>
            </Flex>

            <HStack gap={8} display={{ base: "none", md: "flex" }}>
              <Link href="#features" fontWeight="medium" _hover={{ color: "blue.400" }}>
                Características
              </Link>
              <Link href="#pricing" fontWeight="medium" _hover={{ color: "blue.400" }}>
                Precios
              </Link>
              <Link href="#about" fontWeight="medium" _hover={{ color: "blue.400" }}>
                Nosotros
              </Link>
            </HStack>

            <HStack gap={3}>
              <Button variant="ghost" display={{ base: "none", sm: "inline-flex" }}>
                Iniciar Sesión
              </Button>
              <Button colorScheme="blue">
                Comenzar Gratis
                <ArrowRight size={16} style={{ marginLeft: "8px" }} />
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="600px"
          height="600px"
          bg="blue.500"
          opacity={0.1}
          filter="blur(100px)"
          borderRadius="full"
        />

        <Container maxW="7xl" position="relative">
          <VStack gap={6} maxW="3xl" mx="auto" textAlign="center">
            <Box
              display="inline-flex"
              alignItems="center"
              gap={2}
              px={4}
              py={2}
              bg="blue.900"
              borderRadius="full"
              border="1px"
              borderColor="blue.700"
            >
              <Sparkles size={16} />
              <Text fontSize="sm" fontWeight="medium">
                Impulsado por IA de última generación
              </Text>
            </Box>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="extrabold"
              lineHeight="1.1"
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
            >
              Crea Contenido Increíble en Segundos con IA
            </Heading>

            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" maxW="2xl">
              Transforma tus ideas en contenido profesional. Genera textos, imágenes y más con el poder de la
              inteligencia artificial más avanzada.
            </Text>

            <HStack gap={4} pt={4} flexWrap="wrap" justify="center">
              <Button size="lg" colorScheme="blue"  px={8} fontSize="lg">
                Prueba Gratis
              </Button>
              <Button size="lg" variant="outline" colorScheme="whiteAlpha" px={8} fontSize="lg">
                Ver Demo
              </Button>
            </HStack>

            <HStack gap={6} pt={4} fontSize="sm" color="gray.500">
              <HStack gap={2}>
                <Check size={16} color="#10b981" />
                <Text>Sin tarjeta de crédito</Text>
              </HStack>
              <HStack gap={2}>
                <Check size={16} color="#10b981" />
                <Text>Cancelación gratuita</Text>
              </HStack>
              <HStack gap={2}>
                <Check size={16} color="#10b981" />
                <Text>Soporte 24/7</Text>
              </HStack>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box as="section" py={12} bg="gray.800" borderY="1px" borderColor="gray.700">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
            {stats.map((stat, index) => (
              <VStack key={index} gap={2}>
                <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="blue.400">
                  {stat.value}
                </Text>
                <Text fontSize="sm" color="gray.400" textAlign="center">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box as="section" id="features" py={{ base: 16, md: 24 }}>
        <Container maxW="7xl">
          <VStack gap={4} maxW="3xl" mx="auto" textAlign="center" mb={16}>
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
              Potencia tu Creatividad con IA
            </Heading>
            <Text fontSize="lg" color="gray.400">
              Todas las herramientas que necesitas para crear contenido profesional en un solo lugar.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {features.map((feature, index) => (
              <Box
                key={index}
                p={6}
                bg="gray.800"
                borderRadius="xl"
                border="1px"
                borderColor="gray.700"
                _hover={{ borderColor: "blue.500", transform: "translateY(-4px)" }}
                transition="all 0.3s"
              >
                <Flex w={12} h={12} align="center" justify="center" bg="blue.900" borderRadius="lg" mb={4}>
                  <Icon as={feature.icon} boxSize={6} color="blue.400" />
                </Flex>
                <Heading as="h3" size="md" mb={2}>
                  {feature.title}
                </Heading>
                <Text color="gray.400">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box as="section" id="pricing" py={{ base: 16, md: 24 }} bg="gray.800">
        <Container maxW="7xl">
          <VStack gap={4} maxW="3xl" mx="auto" textAlign="center" mb={16}>
            <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
              Precios Simples y Transparentes
            </Heading>
            <Text fontSize="lg" color="gray.400">
              Elige el plan perfecto para ti. Todos los planes incluyen 14 días de prueba gratuita.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {plans.map((plan, index) => (
              <Box
                key={index}
                p={8}
                bg={plan.popular ? "blue.900" : "gray.900"}
                borderRadius="xl"
                border="2px"
                borderColor={plan.popular ? "blue.500" : "gray.700"}
                position="relative"
              >
                {plan.popular && (
                  <Box
                    position="absolute"
                    top={-3}
                    left="50%"
                    transform="translateX(-50%)"
                    px={3}
                    py={1}
                    bg="blue.500"
                    borderRadius="full"
                    fontSize="xs"
                    fontWeight="bold"
                  >
                    MÁS POPULAR
                  </Box>
                )}

                <VStack align="stretch" gap={6}>
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold" mb={2}>
                      {plan.name}
                    </Text>
                    <Flex align="baseline" gap={1}>
                      <Text fontSize="4xl" fontWeight="bold">
                        {plan.price}
                      </Text>
                      {plan.price !== "Personalizado" && (
                        <Text color="gray.400" fontSize="sm">
                          /mes
                        </Text>
                      )}
                    </Flex>
                  </Box>

                  <VStack align="stretch" gap={3}>
                    {plan.features.map((feature, idx) => (
                      <HStack key={idx} gap={3}>
                        <Icon as={Check} boxSize={5} color="blue.400" flexShrink={0} />
                        <Text fontSize="sm">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Button
                    colorScheme={plan.popular ? "blue" : "whiteAlpha"}
                    variant={plan.popular ? "solid" : "outline"}
                    size="lg"
                    w="full"
                  >
                    Comenzar Ahora
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box as="section" py={{ base: 16, md: 24 }}>
        <Container maxW="5xl">
          <Box
            p={{ base: 8, md: 12 }}
            bg="blue.900"
            borderRadius="2xl"
            border="1px"
            borderColor="blue.700"
            textAlign="center"
          >
            <VStack gap={6}>
              <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
                ¿Listo para Crear Contenido Increíble?
              </Heading>
              <Text fontSize="lg" color="gray.300" maxW="2xl">
                Únete a miles de creadores que ya están usando ContentAI para transformar sus ideas en contenido
                profesional.
              </Text>
              <HStack gap={4} flexWrap="wrap" justify="center">
                <Button
                  size="lg"
                  colorScheme="whiteAlpha"
                  bg="white"
                  color="gray.900"
                  _hover={{ bg: "gray.100" }}
                  px={8}
                >
                  Comenzar Ahora
                  <ArrowRight size={20} style={{ marginLeft: "8px" }} />
                </Button>
                <Button size="lg" variant="outline" colorScheme="whiteAlpha" px={8}>
                  Hablar con Ventas
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" borderTop="1px" borderColor="gray.800" py={12} bg="gray.900">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={8} mb={8}>
            <VStack align="start" gap={4}>
              <Flex align="center" gap={2}>
                <Icon as={Sparkles} boxSize={6} color="blue.400" />
                <Heading size="md">ContentAI</Heading>
              </Flex>
              <Text fontSize="sm" color="gray.400">
                Generación de contenido impulsado por IA para creadores modernos.
              </Text>
            </VStack>

            <VStack align="start" gap={3}>
              <Text fontWeight="semibold" mb={2}>
                Producto
              </Text>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Características
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Precios
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                API
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Integraciones
              </Link>
            </VStack>

            <VStack align="start" gap={3}>
              <Text fontWeight="semibold" mb={2}>
                Empresa
              </Text>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Sobre Nosotros
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Blog
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Carreras
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Contacto
              </Link>
            </VStack>

            <VStack align="start" gap={3}>
              <Text fontWeight="semibold" mb={2}>
                Legal
              </Text>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Privacidad
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Términos
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Cookies
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                Licencias
              </Link>
            </VStack>
          </SimpleGrid>

          <Box pt={8} borderTop="1px" borderColor="gray.800">
            <Flex justify="space-between" align="center" flexWrap="wrap" gap={4}>
              <Text fontSize="sm" color="gray.400">
                © 2025 ContentAI. Todos los derechos reservados.
              </Text>
              <HStack gap={6}>
                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                  Twitter
                </Link>
                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                  LinkedIn
                </Link>
                <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: "white" }}>
                  GitHub
                </Link>
              </HStack>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
