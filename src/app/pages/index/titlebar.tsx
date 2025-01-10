'use client'
import {Button} from "@nextui-org/button";
import { Sun, Moon} from 'lucide-react';
import { useTheme } from 'next-themes';

function changeThemeSwitchContent(doc: Document, theme: string, setTheme: (theme: string) => void){
  setTheme(theme);
}

export default function TitleBar(){
  const { theme, setTheme } = useTheme();
  const t1 = 'light';
  const t2 = 'dark';

  return(
    <header>
      <Button className='themeSwitch' id="themeSwitch" color='primary' variant='bordered' startContent={theme === t1 ? <Moon /> : <Sun />} onPress={() =>{changeThemeSwitchContent(document, theme === t1 ? t2 : t1, setTheme)}}>
        {theme === t1 ? 'Escuro' : 'Claro'}
      </Button>

      <div className='title'>VALORES</div>
      <div className="subtitle">Atualizado por último: 02/01/2025 às 15h</div>
      <hr className="divider-light"></hr>
    </header>
  );
}