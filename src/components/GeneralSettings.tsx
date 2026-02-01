"use client"
import * as LabelPrimitive from "@radix-ui/react-label"
import * as SelectPrimitive from "@radix-ui/react-select"
import * as SliderPrimitive from "@radix-ui/react-slider"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { ChevronDown } from "lucide-react"

export function GeneralSettings() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <LabelPrimitive.Root htmlFor="name" className="text-sm font-medium">
          Nombre de Usuario
        </LabelPrimitive.Root>
        <input 
          id="name" 
          type="text"
          placeholder="Tu nombre" 
          defaultValue="Usuario Demo"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <LabelPrimitive.Root htmlFor="email" className="text-sm font-medium">
          Email
        </LabelPrimitive.Root>
        <input 
          id="email" 
          type="email" 
          placeholder="tu@email.com" 
          defaultValue="user@example.com"
          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="space-y-2">
        <LabelPrimitive.Root htmlFor="default-model" className="text-sm font-medium">
          Modelo de IA Predeterminado
        </LabelPrimitive.Root>
        <SelectPrimitive.Root defaultValue="gpt4">
          <SelectPrimitive.Trigger 
            id="default-model"
            className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <SelectPrimitive.Value />
            <SelectPrimitive.Icon>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
              <SelectPrimitive.Viewport className="p-1">
                <SelectPrimitive.Item value="gpt4" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>GPT-4 Turbo</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item value="gpt35" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>GPT-3.5</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item value="claude" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>Claude 3</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item value="gemini" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>Gemini Pro</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>

      <div className="space-y-2">
        <LabelPrimitive.Root htmlFor="image-model" className="text-sm font-medium">
          Modelo de Imagen Predeterminado
        </LabelPrimitive.Root>
        <SelectPrimitive.Root defaultValue="dalle3">
          <SelectPrimitive.Trigger 
            id="image-model"
            className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <SelectPrimitive.Value />
            <SelectPrimitive.Icon>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
              <SelectPrimitive.Viewport className="p-1">
                <SelectPrimitive.Item value="dalle3" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>DALL-E 3</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item value="dalle2" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>DALL-E 2</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item value="midjourney" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>Midjourney</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
                <SelectPrimitive.Item value="stable" className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                  <SelectPrimitive.ItemText>Stable Diffusion</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </div>

      <div className="space-y-3">
        <LabelPrimitive.Root className="text-sm font-medium">
          Creatividad (Temperature)
        </LabelPrimitive.Root>
        <SliderPrimitive.Root 
          defaultValue={[70]} 
          max={100} 
          step={1} 
          className="relative flex w-full touch-none select-none items-center"
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
            <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-blue-500 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
        <p className="text-xs text-gray-500">Valores más altos generan contenido más creativo y variado</p>
      </div>

      <div className="space-y-3">
        <LabelPrimitive.Root className="text-sm font-medium">
          Longitud Máxima de Respuesta
        </LabelPrimitive.Root>
        <SliderPrimitive.Root 
          defaultValue={[2000]} 
          max={4000} 
          step={100} 
          className="relative flex w-full touch-none select-none items-center"
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
            <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-blue-500 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
        <p className="text-xs text-gray-500">Tokens máximos por generación</p>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
        <div className="space-y-0.5">
          <LabelPrimitive.Root htmlFor="auto-save" className="text-sm font-medium">
            Guardar Automáticamente
          </LabelPrimitive.Root>
          <p className="text-sm text-gray-500">Guarda tus generaciones automáticamente en el historial</p>
        </div>
        <SwitchPrimitive.Root 
          id="auto-save" 
          defaultChecked
          className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
        >
          <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
        </SwitchPrimitive.Root>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
        <div className="space-y-0.5">
          <LabelPrimitive.Root htmlFor="show-tokens" className="text-sm font-medium">
            Mostrar Uso de Tokens
          </LabelPrimitive.Root>
          <p className="text-sm text-gray-500">Muestra el contador de tokens en tiempo real</p>
        </div>
        <SwitchPrimitive.Root 
          id="show-tokens" 
          defaultChecked
          className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
        >
          <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
        </SwitchPrimitive.Root>
      </div>

      <div className="flex gap-4">
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Guardar Cambios
        </button>
        <button 
          type="button"
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Restaurar Defaults
        </button>
      </div>
    </form>
  )
}