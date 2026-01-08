import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = [
  { name: "Ene", texto: 120, imagen: 45, codigo: 30 },
  { name: "Feb", texto: 190, imagen: 68, codigo: 42 },
  { name: "Mar", texto: 150, imagen: 52, codigo: 38 },
  { name: "Abr", texto: 240, imagen: 89, codigo: 61 },
  { name: "May", texto: 210, imagen: 72, codigo: 55 },
  { name: "Jun", texto: 280, imagen: 95, codigo: 78 },
  { name: "Jul", texto: 320, imagen: 110, codigo: 85 },
]

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="var(--primary-color)" />
        <XAxis dataKey="name" stroke="var(--primary-color)" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="var(--primary-color)"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--tooltip-bg)",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
         
          }}
        />
        <Legend />
        <Bar dataKey="texto" fill="hsl(var(--primary-color-hsl), 0.7)" name="Texto" radius={[4, 4, 0, 0]} />
        <Bar dataKey="imagen" fill="var(--second-color-hsl)" name="Imagen" radius={[4, 4, 0, 0]} />
        {/* <Bar dataKey="codigo" fill="hsl(var(--primary-color))" name="Código" radius={[4, 4, 0, 0]} /> */}
      </BarChart>
    </ResponsiveContainer>
  )
}
