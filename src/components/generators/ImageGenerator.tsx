import { useState } from "react";
import {
  Box,
  Card,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Button } from "@radix-ui/themes";
import { Image, Sparkles } from "lucide-react";
// import { Label } from "@radix-ui/themes";
// import { Input } from "@radix-ui/themes";

// import { Sparkles, Copy, RefreshCw, Wand2 } from "lucide-react";
// import { Badge } from "@radix-ui/themes";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/themes";

export function ImageGenerator() {
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
        <Image size={58} className="mb-4" />
        <p className="text-6">Tus imagenes generadas apareceran aqui</p>
        <p className="text-[0.8rem]">
          Describe la imagen que deseas crear en el campo de prompt y configura
          las opciones para comenzar
        </p>
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
              Prompt de imagen
            </Text>
            <TextArea placeholder="Reply to comment…" />
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Estilo de imagen
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Realista</Select.Item>
                <Select.Item value="orange">Artistico</Select.Item>
                <Select.Item value="orange">Caricatura</Select.Item>
                <Select.Item value="orange">Minimalista</Select.Item>
                <Select.Item value="orange">Render 3D</Select.Item>
                <Select.Item value="orange">Acuarela</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Proposito
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Blog Post</Select.Item>
                <Select.Item value="orange">Miniatura de video</Select.Item>
                <Select.Item value="orange">Redes sociales</Select.Item>
                <Select.Item value="orange">Banner Web</Select.Item>
                <Select.Item value="orange">Infografia</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Relacion de aspecto
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">1:1 (Cuadrado)</Select.Item>
                <Select.Item value="orange">16:9 (Horizontal)</Select.Item>
                <Select.Item value="orange">9:16 (Vertical)</Select.Item>
                <Select.Item value="orange">4:3 (Estandar)</Select.Item>
                <Select.Item value="orange">3:2 (Estandar)</Select.Item>
                <Select.Item value="orange">2:3 (Estandar)</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Calidad
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">Ultra HD</Select.Item>
                <Select.Item value="orange">Alta</Select.Item>
                <Select.Item value="orange">Estandar</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Flex
            className="w-full border-[0.002rem] border-slate-100 rounded-lg"
            direction="column"
            maxWidth="100%"
          >
            <Text as="p" className="text-[0.9rem]">
              Variaciones
            </Text>
            <Select.Root defaultValue="apple">
              <Select.Trigger radius="none" />
              <Select.Content>
                <Select.Item value="apple">1 Imagen</Select.Item>
                <Select.Item value="orange">2 Imagenes</Select.Item>
                <Select.Item value="orange">4 Imagenes</Select.Item>
                <Select.Item value="orange">8 Imagenes</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        </div>
      </Card>

      <Card className="lg:col-span-2 flex flex-col">
        <div className="h-full p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2 mb-4">
            <Text className="text-[1.3rem]" weight="bold">
              Imágenes Generadas
            </Text>
            <Text className="text-[0.9rem] text-slate-600">
              Tus imágenes aparecerán aquí
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
