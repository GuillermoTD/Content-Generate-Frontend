import Header from "../../components/Header";
import {
  BarChart3,
  Megaphone,
  Image as ImageIcon,
  TrendingUp,
} from "lucide-react";
// Importamos los componentes necesarios de Radix
import { Box, Card, Text, Grid, Flex, Badge } from "@radix-ui/themes";
import { OverviewChart } from "../../components/overview-charts/OverviewChart";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

// Componente de Tarjeta adaptado a Radix UI Themes
const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => (
  <Box maxWidth="100%">
    <Card variant="surface" size="3">
      <Flex direction="column" justify="between" minHeight="120px">
        {/* Parte superior: Título e Icono */}
        <Flex justify="between" align="start">
          <Box>
            <Text as="div" size="2" color="gray" weight="medium" mb="1">
              {title}
            </Text>
            <Text as="div" size="7" weight="bold">
              {value}
            </Text>
          </Box>
          <Box p="2" className="bg-slate-50 rounded-full text-slate-400">
            {icon}
          </Box>
        </Flex>

        {/* Parte inferior: Porcentaje y Texto descriptivo */}
        <Flex gap="2" align="center" mt="4">
          <Badge color="green" variant="soft" radius="medium" size="2">
            <Flex align="center" gap="1">
              <TrendingUp size={14} />
              {change}
            </Flex>
          </Badge>
          <Text size="1" color="gray">
            vs último mes
          </Text>
        </Flex>
      </Flex>
    </Card>
  </Box>
);

const DashboardView = () => {
  const stats = [
    {
      title: "Artículos Publicados",
      value: "145",
      change: "+18.5%",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "Alcance Total",
      value: "550K",
      change: "+32.1%",
      icon: <Megaphone className="w-5 h-5" />,
    },
    {
      title: "Interacciones",
      value: "8.2K",
      change: "+12.7%",
      icon: <ImageIcon className="w-5 h-5" />,
    },
  ];

  return (
    <Box className="min-h-screen bg-slate-50/50 min-h-[100vh]">
      <Header />

      {/* Contenedor principal con Grid de Radix */}
      <Box className="pt-10 pb-12 px-6 max-w-7xl mx-auto">
        
        {/* Encabezado del Dashboard usando Text de Radix */}
        <Box mb="6">
          <Text as="div" size="8" weight="bold" mb="2">
            Panel AI Generation
          </Text>
          <Text as="p" size="3" color="gray" className="max-w-2xl">
            Estadísticas clave sobre tu generación de contenido y el rendimiento
            de la IA en el último periodo.
          </Text>
        </Box>

        {/* Grid de Radix: Responsive (1 col inicial, 3 en md) */}
        <Grid columns={{ initial: "1", md: "3" }} gap="2">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
            />
          ))}
        </Grid>
      </Box>

        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-7 pt-10 pb-12 px-6 max-w-7xl mx-auto">
          <Card className="lg:col-span-4">
            <div>
              <span>Uso de IA por Tipo de Contenido</span>
              <p>Distribución de generaciones en los últimos 30 días</p>
            </div>
            <div className="pl-2">
              <OverviewChart />
            </div>
          </Card>
          <Card className="lg:col-span-3">
            <div>
              <span>Generaciones Recientes</span>
              <p>Últimos contenidos creados con IA</p>
            </div>
            {/* <div>
              <RecentActivity />
            </div> */}
          </Card>
        </div>

    </Box>
  );
};

export default DashboardView;