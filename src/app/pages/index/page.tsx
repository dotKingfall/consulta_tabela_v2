import { IBM_Plex_Sans } from 'next/font/google'
import './styling/titlebar.css'
import TitleBar from './titlebar';
import NavBar from './navbar';
import NumInput from './numInput';
import { Session } from './sessionClasses';
import NumLabels  from './numLabels';
import ValueShowcase from './valueShowcase';

export var thisSession = new Session(0, 0, 0, 0, 0, 0, 0);

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
            <NavBar></NavBar>
            <main>
                <NumInput></NumInput>
                <NumLabels></NumLabels>
                <ValueShowcase></ValueShowcase>
            </main>
            <footer>TODO FOOTER</footer>
        </div>
    );
}