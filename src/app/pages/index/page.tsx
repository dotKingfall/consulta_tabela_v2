import { IBM_Plex_Sans } from 'next/font/google'
import {Button} from "@nextui-org/button";
import { Sun, MoonStar} from 'lucide-react';
import './styling/title.css'

const titleFont = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: '300',
    display: 'swap',
    variable: '--font-tfont',
});

export default function Index(){
    return (
        <div>
            <style>{`
            header{
                font-family: ${titleFont.style.fontFamily}
            }
                `}</style>
            <header>
                <Button className='themeSwitch' color='primary' variant='bordered'  startContent={<Sun></Sun>}>Claro</Button>
                <div className='title'>VALORES</div>
                <div className="subtitle">Atualizado por último: 02/01/2025 às 15h</div>
            </header>
            <nav>TODO NAV</nav>
            <main>TODO MAIN</main>
            <footer>TODO FOOTER</footer>
        </div>
    );
}