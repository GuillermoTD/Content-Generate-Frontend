import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Eye, Download, Copy, Trash2, MoreVertical } from "lucide-react";
import { ImagesHistoryProps } from "../../../interfaces";
import { Box } from "@radix-ui/themes";

const ImagesHistory = (props: ImagesHistoryProps) => {
  const { images } = props;
  return (
    <Box className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="relative aspect-video bg-gray-100">
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <DropdownMenuPrimitive.Root>
                  <DropdownMenuPrimitive.Trigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </DropdownMenuPrimitive.Trigger>
                  <DropdownMenuPrimitive.Portal>
                    <DropdownMenuPrimitive.Content
                      align="end"
                      className="min-w-[220px] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md z-50"
                    >
                      <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Imagen
                      </DropdownMenuPrimitive.Item>
                      <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </DropdownMenuPrimitive.Item>
                      <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                        <Copy className="mr-2 h-4 w-4" />
                        Copiar URL
                      </DropdownMenuPrimitive.Item>
                      <DropdownMenuPrimitive.Item className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Eliminar
                      </DropdownMenuPrimitive.Item>
                    </DropdownMenuPrimitive.Content>
                  </DropdownMenuPrimitive.Portal>
                </DropdownMenuPrimitive.Root>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold">
                  {item.style}
                </span>
                <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-semibold">
                  {item.purpose}
                </span>
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <span>{item.resolution}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ImagesHistory;
