import { useState } from "react";
import { Box, Card, Flex, Select, Text, TextField } from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { Sparkles } from "lucide-react";
// import { Label } from "@radix-ui/themes";
// import { Input } from "@radix-ui/themes";

// import { Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
// import { Badge } from "@radix-ui/themes";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/themes";

export function VideoGenerator() {
  const [loading, setLoading] = useState(false);
  const [topic, setTopic] = useState("");
  const [generatedContent, setGeneratedContent] = useState({
    title: "",
    intro: "",
    body: "",
    conclusion: "",
    meta: "",
  });

  const EmptyStateComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Sparkles size={58} className="mb-4" />
        <p className="text-6">Contenido del Video</p>
        <p className="text-[0.8rem]">Guion, hook y thumbnail generados</p>
      </div>
    );
  };

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
            <Text as="p" className="text-[0.9rem]">
              Tema del Video
            </Text>
            <TextField.Root
              defaultValue=""
              placeholder="Ej: IA en marketing en redes sociales"
            />
          </Box>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Plataforma
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Youtube</Select.Item>
                <Select.Item value="orange">Tiktok</Select.Item>
                <Select.Item value="orange">Instagram</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Estilo
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Educativo</Select.Item>
                <Select.Item value="orange">Entretenimiento</Select.Item>
                <Select.Item value="orange">Tutorial</Select.Item>
                <Select.Item value="orange">Vlog</Select.Item>
                <Select.Item value="orange">Review/Analisis</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Duración
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Medio (30-60 seg)</Select.Item>
                <Select.Item value="orange">Medio (5-10 min)</Select.Item>
                <Select.Item value="orange">Largo (15-20+ min)</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Audiencia
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Niños</Select.Item>
                <Select.Item value="orange">Adolescentes</Select.Item>
                <Select.Item value="orange">Adultos</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </div>

        {/* <div className="flex flex-col bg-red-500">
            <Text as="div">Tema del blog</Text>
            <TextField.Root
              defaultValue=""
              placeholder="Ej: IA en marketing digital"
            />
        </div> */}
      </Card>

      <Card className="lg:col-span-2 flex flex-col">
        <div className="h-full p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2 mb-4">
            <Text className="text-[1.3rem]" weight="bold">
              Tu guion de video aparecerá aquí
            </Text>
            <Text className="text-[0.9rem] text-slate-600">
              Ingresa un tema y configura las opciones para comenzar
            </Text>
          </div>

          <div className="w-full h-full ">
            <EmptyStateComponent />
          </div>
        </div>
      </Card>
    </div>
  );
}
