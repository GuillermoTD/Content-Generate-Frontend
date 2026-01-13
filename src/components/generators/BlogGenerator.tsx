import { useState } from "react";
import { Box, Card, Flex, Select, Text, TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
// import { Label } from "@radix-ui/themes";
// import { Input } from "@radix-ui/themes";

// import { Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
// import { Badge } from "@radix-ui/themes";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/themes";

export function BlogGenerator() {
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [generatedContent, setGeneratedContent] = useState({
    title: "",
    intro: "",
    body: "",
    conclusion: "",
    meta: "",
  });

  // const handleGenerate = async () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setGeneratedContent({
  //       title:
  //         "Cómo la Inteligencia Artificial Está Revolucionando el Marketing Digital",
  //       intro:
  //         "En los últimos años, la inteligencia artificial ha transformado radicalmente la forma en que las empresas abordan sus estrategias de marketing digital. Esta tecnología está permitiendo personalización sin precedentes y optimización de campañas en tiempo real.",
  //       body: `La IA está cambiando las reglas del juego en el marketing digital de múltiples maneras:\n\n1. **Personalización a Escala**: Los algoritmos de IA pueden analizar millones de puntos de datos para crear experiencias personalizadas para cada usuario.\n\n2. **Automatización Inteligente**: Desde chatbots hasta generación de contenido, la IA está automatizando tareas repetitivas permitiendo a los marketers enfocarse en estrategia.\n\n3. **Análisis Predictivo**: La capacidad de predecir tendencias y comportamientos del consumidor está dando a las empresas una ventaja competitiva significativa.\n\n4. **Optimización de Contenido**: Las herramientas de IA pueden analizar qué tipo de contenido resuena mejor con tu audiencia y optimizar automáticamente.`,
  //       conclusion:
  //         "La inteligencia artificial no es el futuro del marketing digital, es el presente. Las empresas que adopten estas tecnologías ahora estarán mejor posicionadas para competir en el mercado cada vez más digital de hoy.",
  //       meta: "Descubre cómo la IA está transformando el marketing digital con personalización, automatización y análisis predictivo. Aprende las mejores prácticas.",
  //     });
  //     setLoading(false);
  //   }, 2500);
  // };
  return (
    <div className="grid gap-6 lg:grid-cols-3 h-screen max-h-[35rem]">
      <Card className="lg:col-span-1 flex flex-col">
        <div className="h-full p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2 mb-4">
            <Text className="text-[1.3rem]" weight="bold">
              Configuración
            </Text>
            <Text className="text-[0.9rem] text-slate-600">
              Define el tema y estilo de tu blog
            </Text>
          </div>
          <Box>
            <Text as="p">Tema del blog</Text>
            <TextField.Root
              defaultValue=""
              placeholder="Ej: IA en marketing digital"
            />
          </Box>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Categoría
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Tono
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Longitud
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Box>
            <Text as="p" className="text-[0.9rem]">{`Keywords(opcional)`}</Text>
            <TextField.Root
              defaultValue=""
              placeholder="Ej: IA en marketing digital"
            />
          </Box>
        </div>

        {/* <div className="flex flex-col bg-red-500">
            <Text as="div">Tema del blog</Text>
            <TextField.Root
              defaultValue=""
              placeholder="Ej: IA en marketing digital"
            />
        </div> */}
      </Card>

      <Card className="lg:col-span-2">Contenido Generado</Card>
    </div>
  );
}
