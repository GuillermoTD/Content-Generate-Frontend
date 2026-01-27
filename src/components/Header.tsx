import { Flex, TextField, Box, IconButton, Theme } from '@radix-ui/themes';
import { Search, Bell } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useSidebarStore } from '../store/useSidebarStore';
const Header = () => {
  const toggle = useSidebarStore((state: any) => state.toggle);
  return (
    <header className="w-full h-[3.05rem] border-b border-slate-200 bg-background/80 flex items-center px-6 sticky top-0 z-50">
      <Flex justify="between" align="center" width="100%">
        
        {/* Lado Izquierdo: Buscador Redondeado */}
        <Box width="450px" >
          <div className='flex items-center w-full h-full gap-4'>
            <Menu className='cursor-pointer'onClick={()=>{toggle();}}/>
            <TextField.Root 
              placeholder="Buscar..." 
              size="2" 
              variant="surface"
              radius="large"
            >
              <TextField.Slot>
                <Search size={18} className="text-slate-400" />
              </TextField.Slot>
            </TextField.Root>
          </div>
         
        </Box>

        {/* Lado Derecho: Icono de Campana con Indicador */}
        <Box position="relative" className="flex items-center">
          <IconButton 
            variant="ghost" 
            color="gray" 
            highContrast 
            size="3" 
            radius="full"
            className="cursor-pointer"
          >
            <Bell size={22} strokeWidth={1.5} />
          </IconButton>
          
          {/* Punto rojo de notificación */}
          <span 
            className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-600 border-2 border-white rounded-full" 
            aria-hidden="true" 
          />
        </Box>

      </Flex>
    </header>
  );
};

export default Header;