'use client'

import { useTheme } from 'next-themes';
import './styling/valueShowcase.css'
import { Files } from 'lucide-react'
import { thisSession } from './page';

export default function ValueShowcase(){
  const { theme } = useTheme();

  function copyValuesText(){ //TODO
    alert('hi');
  }
  
  return(
    <div>
      <div className='titlecop'>COPARTICIPAÇÃO</div>
      <div className='w-full pt-3 px-5 flex'>

        <div className='w-full float-start valuefield'>
          <div id='title_cp'>
            PARCIAL
            <Files className='float-end mt-4 copyanim' color={`${theme === 'light' ? 'var(--light-highlight)' : 'var(--dark-highlight)'}`}></Files>
          </div>

          <div>
            <div className='innerTitle'>
              APARTAMENTO
              <div id='ap1' contentEditable></div>
            </div>
            <div className='innerTitle'>
              ENFERMARIA
              <div id='en1' contentEditable></div>
            </div>
            <div className='innerTitle'>
              AMBULATORIAL
              <div id='am1' contentEditable></div>
            </div>
          </div>
          
        </div>

        <span className='vdivider mx-2 my-3'></span>

        <div className='w-full valuefield'>
          <div id='title_ct'>
            TOTAL
            <Files className='float-end mt-4 copyanim' color={`${theme === 'light' ? 'var(--light-highlight)' : 'var(--dark-highlight)'}`}></Files>
          </div>

          <div>
            <div className='innerTitle'>
              APARTAMENTO
              <div id='ap2' contentEditable></div>
            </div>
            <div className='innerTitle'>
              ENFERMARIA
              <div id='en2' contentEditable></div>
            </div>
            <div className='innerTitle'>
              AMBULATORIAL
              <div id='am2' contentEditable></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}