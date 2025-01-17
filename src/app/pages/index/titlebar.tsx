'use client'
import {Button} from "@nextui-org/button";
import { Sun, Moon} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";

function changeThemeSwitchContent(doc: Document, theme: string, setTheme: (theme: string) => void){
  setTheme(theme);
}

export default function TitleBar(){
  const { theme, setTheme } = useTheme();
  const t1 = 'light';
  const t2 = 'dark';
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <header>
      <Button size={isSmallScreen ? 'sm' : 'md'} className='themeSwitch' id="themeSwitch" color='primary' variant='bordered' startContent={theme === t1 ? <Moon /> : <Sun />} onPress={() =>{changeThemeSwitchContent(document, theme === t1 ? t2 : t1, setTheme)}}>
        <span id="themeName">
          {theme === t1 ? 'Escuro' : 'Claro'}
        </span>
      </Button>

      <div className='title'>VALORES</div>
      <div className="subtitle">Atualizado por último: 13/01/2025 às 23h</div>
      <hr className="divider-light"></hr>
    </header>
  );
}