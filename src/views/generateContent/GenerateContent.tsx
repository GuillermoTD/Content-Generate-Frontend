import {
  Card,
  Text,
  Heading,
  Flex,
  Tabs,
  Box,
  Section,
} from "@radix-ui/themes";
import { FileText, Video, ImageIcon } from "lucide-react";
import Header from "../../components/Header";
import { BlogGenerator } from "../../components/generators/BlogGenerator";
import {VideoGenerator} from "../../components/generators/VideoGenerator";
import { ImageGenerator } from "../../components/generators/ImageGenerator";
// import { DashboardShell } from "@radix-ui/themes";

const GenerateContent = () => {
  return (
    <Box className="min-h-screen bg-slate-50/50 ">
      <Header />

      <Box className="pt-10 pb-12 px-6 mx-auto">
        {/* Encabezado del Dashboard usando Text de Radix */}
        <Box mb="1">
          <Text as="p" size="8" weight="bold" mb="2">
            Generate Content
          </Text>
          <Text as="p" size="3" color="gray" className="max-w-2xl">
            Crea blogs, guiones de video e imágenes con inteligencia artificial
          </Text>
        </Box>
      </Box>

     
      <Tabs.Root defaultValue="blog" className="w-full">
        <Tabs.List size="2" className="grid w-full px-6 grid-cols-3 h-auto">
          <Tabs.Trigger value="blog" className="flex items-center gap-2 py-3 flex-1 w-full">
            <FileText className="h-4 w-8" />
            <span className="hidden sm:inline">Blog</span>
          </Tabs.Trigger>

          <Tabs.Trigger value="video" className="flex items-center gap-2 py-3 w-full flex-1">
            <Video className="h-4 w-4" />
            <span className="hidden sm:inline">Video Script</span>
          </Tabs.Trigger>

          <Tabs.Trigger value="image" className="flex items-center gap-2 py-3 w-full flex-1">
            <ImageIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Images</span>
          </Tabs.Trigger>
        </Tabs.List>

        <Box pt="4">
          <Tabs.Content value="blog" className="px-6">
            <BlogGenerator />
          </Tabs.Content>

          <Tabs.Content value="video" className="px-6">
            <VideoGenerator />
          </Tabs.Content>

          <Tabs.Content value="image" className="px-6">
            <ImageGenerator />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Box>
  );
};
export default GenerateContent;
