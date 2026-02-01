import { BlogHistoryProps } from "../../../interfaces";
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { FileText, Video, MoreVertical, Trash2, Eye, Edit, Copy, ImageIcon, Download } from "lucide-react"
import { Box } from "@radix-ui/themes";

const BlogHistory = (props: BlogHistoryProps) => {
  const { blogs } = props;
  return (
    <div className="w-full flex flex-col gap-2 h-full">
      <Box  className="space-y-4">
        {blogs.map((item) => (
          <div key={item.id} className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.preview}</p>
                    </div>
                    <DropdownMenuPrimitive.Root>
                      <DropdownMenuPrimitive.Trigger asChild>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </DropdownMenuPrimitive.Trigger>
                      <DropdownMenuPrimitive.Portal>
                        <DropdownMenuPrimitive.Content
                          align="end"
                          className="min-w-[220px] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md"
                        >
                          <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            <Eye className="mr-2 h-4 w-4" />
                            Ver Completo
                          </DropdownMenuPrimitive.Item>
                          <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            <Copy className="mr-2 h-4 w-4" />
                            Copiar Contenido
                          </DropdownMenuPrimitive.Item>
                          <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuPrimitive.Item>
                          <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Eliminar
                          </DropdownMenuPrimitive.Item>
                        </DropdownMenuPrimitive.Content>
                      </DropdownMenuPrimitive.Portal>
                    </DropdownMenuPrimitive.Root>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.status === "Generado" 
                        ? "bg-blue-500 text-white" 
                        : "bg-gray-100 text-gray-900"
                    }`}>
                      {item.status}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                    <span className="text-xs text-gray-500">{item.wordCount} palabras</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </div>
  )
}

export default BlogHistory