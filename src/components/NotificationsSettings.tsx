"use client"
import * as LabelPrimitive from "@radix-ui/react-label"
import * as SwitchPrimitive from "@radix-ui/react-switch"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notificaciones de Generación</h3>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Generación Completada
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Notificar cuando el contenido termine de generarse</p>
          </div>
          <SwitchPrimitive.Root
            defaultChecked
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Errores de Generación
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Alertas cuando falle una generación</p>
          </div>
          <SwitchPrimitive.Root
            defaultChecked
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Límite de Tokens
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Avisar cuando estés cerca del límite mensual</p>
          </div>
          <SwitchPrimitive.Root
            defaultChecked
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 space-y-4">
        <h3 className="text-lg font-medium">Notificaciones por Email</h3>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Resumen Semanal
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Recibe un resumen de tu actividad de generación</p>
          </div>
          <SwitchPrimitive.Root
            defaultChecked
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Nuevos Modelos
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Cuando se agreguen nuevos modelos de IA</p>
          </div>
          <SwitchPrimitive.Root
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Tips y Mejores Prácticas
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Consejos para mejorar tus prompts y generaciones</p>
          </div>
          <SwitchPrimitive.Root
            defaultChecked
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 space-y-4">
        <h3 className="text-lg font-medium">Notificaciones Push</h3>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Generaciones Largas
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Notificar para generaciones que tarden más de 1 minuto</p>
          </div>
          <SwitchPrimitive.Root
            defaultChecked
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <LabelPrimitive.Root className="text-sm font-medium">
              Actualizaciones de Cuota
            </LabelPrimitive.Root>
            <p className="text-sm text-gray-500">Cuando se actualice tu límite de tokens</p>
          </div>
          <SwitchPrimitive.Root
            className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
          >
            <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
          </SwitchPrimitive.Root>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Guardar Preferencias
        </button>
      </div>
    </div>
  )
}