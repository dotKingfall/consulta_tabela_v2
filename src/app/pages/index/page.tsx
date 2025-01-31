import { IBM_Plex_Sans } from 'next/font/google'
import './styling/titlebar.css'
import TitleBar from './titlebar';
import NavBar from './navbar';
import NumInput from './numInput';
import { Session } from './sessionClasses';
import ValueShowcase from './valueShowcase';
import Footer from './footer';

//Goiania Ind and Emp
import opgoind from '../../../json/o_p_go_ind.json';
import otgoind from '../../../json/o_t_go_ind.json';
import spgoind from '../../../json/s_p_go_ind.json';
import stgoind from '../../../json/s_t_go_ind.json';
import spgoemp from '../../../json/s_p_go_emp.json';
import stgoemp from '../../../json/s_t_go_emp.json';

//Anapolis Ind and Emp
import opanind from '../../../json/o_p_an_ind.json';
import otanind from '../../../json/o_t_an_ind.json';
import spanind from '../../../json/s_p_an_ind.json';
import stanind from '../../../json/s_t_an_ind.json';
import spanemp from '../../../json/s_p_an_emp.json';
import stanemp from '../../../json/s_t_an_emp.json';

//Brasilia Ind and Emp
import opbrind from '../../../json/o_p_br_ind.json';
import otbrind from '../../../json/o_t_br_ind.json';
import spbrind from '../../../json/s_p_br_ind.json';
import stbrind from '../../../json/s_t_br_ind.json';
import spbremp from '../../../json/s_p_br_emp.json';
import stbremp from '../../../json/s_t_br_emp.json';

export {
    opgoind, otgoind, spgoind, stgoind, spgoemp, stgoemp,
    opanind, otanind, spanind, stanind, spanemp, stanemp,
    opbrind, otbrind, spbrind, stbrind, spbremp, stbremp
};

export const thisSession = new Session(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
                <ValueShowcase></ValueShowcase>
            </main>
            <Footer></Footer>
        </div>
    );
}