import { Text, Tabs, Box } from "@radix-ui/themes";
import { FileText, Video, ImageIcon } from "lucide-react";
import Header from "../../components/Header";
import BlogHistory from "../../components/history-content/blogs/BlogHistory";
import ImagesHistory from "../../components/history-content/images/ImagesHistory";
import VideoScriptsHistory from "../../components/history-content/video-scripts/VideoScriptsHistory";
import { Blog } from "../../interfaces";
// import { DashboardShell } from "@radix-ui/themes";

const History = () => {
  return (
    <Box className="min-h-screen bg-slate-50/50 ">
      <Header />

      <Box className="pt-10 pb-12 px-6 mx-auto">
        {/* Encabezado del Dashboard usando Text de Radix */}
        <Box mb="1">
          <Text as="p" size="8" weight="bold" mb="2">
            Historial de Generación de Contenido
          </Text>
          <Text as="p" size="3" color="gray" className="max-w-2xl">
            Gestiona todos tus artículos y guiones generados con IA
          </Text>
        </Box>
      </Box>

      <Tabs.Root defaultValue="blog" className="w-full">
        <Tabs.List size="2" className="grid w-full px-6 grid-cols-3 h-auto">
          <Tabs.Trigger value="blog">
            <div className="w-full h-full flex items-center gap-2 py-3 flex-1">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Blogs</span>
            </div>
          </Tabs.Trigger>

          <Tabs.Trigger value="video">
            <div className="w-full h-full flex items-center gap-2 py-3 flex-1">
              <Video className="h-4 w-4" />
              <span className="hidden sm:inline">Guiones de video</span>
            </div>
          </Tabs.Trigger>

          <Tabs.Trigger
            value="image"
            className="flex items-center gap-2 py-3 w-full flex-1"
          >
            <div className="w-full h-full flex items-center gap-2 py-3 flex-1">
              <ImageIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Imagenes</span>
            </div>
          </Tabs.Trigger>
        </Tabs.List>

        <Box pt="4">
          <Tabs.Content value="blog" className="px-6">
            <BlogHistory blogs={blogItems} />
          </Tabs.Content>

          <Tabs.Content value="video" className="px-6">
            <VideoScriptsHistory videos={videoItems} />
          </Tabs.Content>

          <Tabs.Content value="image" className="px-6">
            <ImagesHistory images={imageItems} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
};

const blogItems: Blog[] = [
  {
    id: 1,
    title: "Cómo la IA está Revolucionando el Marketing Digital",
    preview:
      "En los últimos años, la inteligencia artificial ha transformado radicalmente...",
    date: "Hace 2 horas",
    category: "Marketing",
    status: "Generado",
    wordCount: 1200,
  },
  {
    id: 2,
    title: "Guía Completa de SEO para 2024",
    preview:
      "El SEO sigue evolucionando y es crucial mantenerse actualizado...",
    date: "Hace 1 día",
    category: "SEO",
    status: "Generado",
    wordCount: 1500,
  },
  {
    id: 3,
    title: "10 Estrategias de Content Marketing",
    preview:
      "El content marketing es fundamental para cualquier estrategia digital...",
    date: "Hace 3 días",
    category: "Marketing",
    status: "Borrador",
    wordCount: 900,
  },
];

const videoItems = [
  {
    id: 1,
    title: "5 Secretos de Marketing Digital que NADIE te Cuenta",
    thumbnail: "/youtube-thumbnail-marketing-secrets.jpg",
    date: "Hace 5 horas",
    platform: "YouTube",
    duration: "10:23",
    status: "Generado",
    scriptLength: "~2500 palabras",
  },
  {
    id: 2,
    title: "Tutorial Completo de YouTube para Principiantes",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "Hace 2 días",
    platform: "YouTube",
    duration: "15:45",
    status: "Generado",
    scriptLength: "~3200 palabras",
  },
  {
    id: 3,
    title: "Cómo Crear Contenido Viral en TikTok",
    thumbnail: "/placeholder.svg?height=180&width=320",
    date: "Hace 4 días",
    platform: "TikTok",
    duration: "0:45",
    status: "Borrador",
    scriptLength: "~150 palabras",
  },
];

const imageItems = [
  {
    id: 1,
    title: "Banner Hero para Landing de Marketing",
    thumbnail: "/ai-landscape.png",
    date: "Hace 1 hora",
    style: "Realista",
    resolution: "1920x1080",
    purpose: "Banner",
  },
  {
    id: 2,
    title: "Thumbnail YouTube - Secretos de Marketing",
    thumbnail: "/youtube-thumbnail-marketing-secrets.jpg",
    date: "Hace 3 horas",
    style: "Vibrante",
    resolution: "1280x720",
    purpose: "Thumbnail",
  },
  {
    id: 3,
    title: "Ilustración Abstract para Blog de IA",
    thumbnail: "/ai-abstract-art.png",
    date: "Hace 1 día",
    style: "Abstracto",
    resolution: "1200x630",
    purpose: "Blog",
  },
  {
    id: 4,
    title: "Post Instagram - Tips de Productividad",
    thumbnail: "/modern-startup-logo.png",
    date: "Hace 2 días",
    style: "Minimalista",
    resolution: "1080x1080",
    purpose: "Social Media",
  },
  {
    id: 5,
    title: "Paisaje Futurista para Video Intro",
    thumbnail: "/futuristic-landscape.png",
    date: "Hace 3 días",
    style: "Cinematográfico",
    resolution: "1920x1080",
    purpose: "Video",
  },
];

export default History;
