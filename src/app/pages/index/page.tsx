import { IBM_Plex_Sans } from 'next/font/google'
import './styling/title.css'
import TitleBar from './titlebar';

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
            <TitleBar></TitleBar>
            <nav>TODO NAV</nav>
            <main>TODO MAIN</main>
            <footer>TODO FOOTER</footer>
        </div>
    );
}