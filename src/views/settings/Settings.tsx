"use client"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { GeneralSettings } from "../../components/GeneralSettings"
import { SecuritySettings } from "../../components/SecuritySettings"
import { NotificationSettings } from "../../components/NotificationsSettings"
import { Box } from "@radix-ui/themes"
import Header from "../../components/Header"

export default function Settings() {
  return (
    <Box className="min-h-screen bg-slate-50/50">
      <Header />

      <Box className="pt-10 pb-12 px-6 mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configuración de IA</h1>
          <p className="text-gray-500">Personaliza tu experiencia de generación de contenido con IA</p>
        </div>
        
        <TabsPrimitive.Root defaultValue="general" className="space-y-4">
          <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500">
            <TabsPrimitive.Trigger 
              value="general"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
            >
              Preferencias
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger 
              value="security"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
            >
              API y Tokens
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger 
              value="notifications"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm"
            >
              Notificaciones
            </TabsPrimitive.Trigger>
          </TabsPrimitive.List>

          <TabsPrimitive.Content value="general">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Preferencias de Generación
                </h3>
                <p className="text-sm text-gray-500">
                  Configura tus modelos y parámetros predeterminados
                </p>
              </div>
              <div className="p-6 pt-0">
                <GeneralSettings />
              </div>
            </div>
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="security">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  API Keys y Gestión de Tokens
                </h3>
                <p className="text-sm text-gray-500">
                  Administra tus claves de API y límites de tokens
                </p>
              </div>
              <div className="p-6 pt-0">
                <SecuritySettings />
              </div>
            </div>
          </TabsPrimitive.Content>

          <TabsPrimitive.Content value="notifications">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Preferencias de Notificaciones
                </h3>
                <p className="text-sm text-gray-500">
                  Configura cómo y cuándo recibir notificaciones de generaciones
                </p>
              </div>
              <div className="p-6 pt-0">
                <NotificationSettings />
              </div>
            </div>
          </TabsPrimitive.Content>
        </TabsPrimitive.Root>
      </Box>
    </Box>
  )
}