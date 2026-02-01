"use client"

import * as LabelPrimitive from "@radix-ui/react-label"
import { Copy, Eye, EyeOff, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export function SecuritySettings() {
  const [showKey, setShowKey] = useState(false)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Claves de API</h3>
        <p className="text-sm text-gray-500">
          Gestiona tus claves de API para acceder a los servicios de generación de contenido
        </p>

        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <LabelPrimitive.Root className="font-semibold text-sm">
                      Clave Principal
                    </LabelPrimitive.Root>
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-semibold">
                      Activa
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {showKey ? "sk_live_abcdef123456789..." : "••••••••••••••••••••"}
                    </code>
                    <button
                      type="button"
                      onClick={() => setShowKey(!showKey)}
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Creada el 15 de enero, 2025</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 text-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <LabelPrimitive.Root className="font-semibold text-sm">
                      Clave de Desarrollo
                    </LabelPrimitive.Root>
                    <span className="inline-flex items-center rounded-full border border-gray-300 bg-transparent px-2.5 py-0.5 text-xs font-semibold">
                      Test
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                      sk_test_xyz987654321...
                    </code>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Creada el 10 de enero, 2025</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-100 text-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          <Plus className="mr-2 h-4 w-4" />
          Crear Nueva Clave de API
        </button>
      </div>

      <div className="border-t border-gray-200 pt-6 space-y-4">
        <h3 className="text-lg font-medium">Límites de Uso</h3>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <LabelPrimitive.Root className="text-sm font-medium">
                Tokens Mensuales
              </LabelPrimitive.Root>
              <span className="text-sm font-medium">25,000 / 100,000</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-blue-500 rounded-full" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Se reinicia el 1 de febrero</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <LabelPrimitive.Root className="text-sm font-medium">
                Imágenes Mensuales
              </LabelPrimitive.Root>
              <span className="text-sm font-medium">42 / 200</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/5 bg-purple-500 rounded-full" />
            </div>
            <p className="text-xs text-gray-500 mt-1">Se reinicia el 1 de febrero</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 space-y-4">
        <h3 className="text-lg font-medium">Cambiar Contraseña</h3>
        <div className="space-y-2">
          <LabelPrimitive.Root htmlFor="current" className="text-sm font-medium">
            Contraseña actual
          </LabelPrimitive.Root>
          <input
            id="current"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <LabelPrimitive.Root htmlFor="new" className="text-sm font-medium">
            Nueva contraseña
          </LabelPrimitive.Root>
          <input
            id="new"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="space-y-2">
          <LabelPrimitive.Root htmlFor="confirm" className="text-sm font-medium">
            Confirmar nueva contraseña
          </LabelPrimitive.Root>
          <input
            id="confirm"
            type="password"
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Actualizar Contraseña
        </button>
      </div>
    </div>
  )
}