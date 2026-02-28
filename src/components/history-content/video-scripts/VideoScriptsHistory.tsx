import { MoreVertical, Trash2, Eye, Edit, Copy } from "lucide-react"
import { Box } from "@radix-ui/themes"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { VideoHistoryProps } from "../../../interfaces";


const VideoScriptsHistory = (props: VideoHistoryProps) => {
  const { videos } = props;
  return (
    <Box className="space-y-4">
      {videos.map((item) => (
        <div key={item.id} className="rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="relative w-40 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                  {item.duration}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.platform}</p>
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
                          Ver Guion
                        </DropdownMenuPrimitive.Item>
                        <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                          <Copy className="mr-2 h-4 w-4" />
                          Copiar Script
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
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <span className="text-xs text-gray-500">{item.scriptLength}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Box>
  )
}

export default VideoScriptsHistory