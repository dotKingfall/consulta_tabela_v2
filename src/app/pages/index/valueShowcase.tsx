'use client'

import { useTheme } from 'next-themes';
import './styling/valueShowcase.css'
import { Files } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { useEffect, useRef } from 'react';

export default function ValueShowcase(){
  const { theme } = useTheme();
  const valueField1Ref = useRef<HTMLDivElement>(null);
  const valueField2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const valueField1 = valueField1Ref.current;
    const valueField2 = valueField2Ref.current;

    if (valueField1 && valueField2) {
      const syncScroll = (source: HTMLElement, target: HTMLElement) => {
        target.scrollTop = source.scrollTop;
        target.scrollLeft = source.scrollLeft;
      };

      const handleScroll1 = () => syncScroll(valueField1, valueField2);
      const handleScroll2 = () => syncScroll(valueField2, valueField1);

      valueField1.addEventListener('scroll', handleScroll1);
      valueField2.addEventListener('scroll', handleScroll2);

      return () => {
        valueField1.removeEventListener('scroll', handleScroll1);
        valueField2.removeEventListener('scroll', handleScroll2);
      };
    }
  }, []);

  function copyValuesText(doc: Document, name: string){ //TODO
    const txt = doc.getElementById(name)!.innerText;
    navigator.clipboard.writeText(txt);
  }
  
  return(
    <div>
      <div className='titlecop'>COPARTICIPAÇÃO</div>
      <div className='w-full pt-3 px-5 flex'>

        <div ref={valueField1Ref} className='w-full float-start valuefield'>
          <div id='title_cp'>
            PARCIAL
            <Popover color='secondary' placement='top'>
              <PopoverTrigger>
                <Files onClick={()=> copyValuesText(document, 'mainfield1')} className='float-end mt-3 copyanim' color={`${theme === 'light' ? 'var(--light-highlight)' : 'var(--dark-highlight)'}`}></Files>
              </PopoverTrigger>
              <PopoverContent>
                <div className='copiedText'>Parcial copiado!</div>
              </PopoverContent>
            </Popover>
          </div>

          <div id='mainfield1'>
          <div className='innerTitle' id='md1'>
              AMBULATORIAL
              <div id='am1' contentEditable></div>
            </div>
            <div className='innerTitle'>
              ENFERMARIA
              <div id='en1' contentEditable></div>
            </div>
            <div className='innerTitle'>
              APARTAMENTO
              <div id='ap1' contentEditable></div>
            </div>
          </div>
          
        </div>

        <span className='vdivider mx-2 my-3'></span>

        <div ref={valueField2Ref} className='w-full valuefield'>
          <div id='title_ct'>
            TOTAL
            <Popover color='secondary' placement='top'>
              <PopoverTrigger>
                <Files onClick={()=> copyValuesText(document, 'mainfield2')} className='float-end mt-3 copyanim' color={`${theme === 'light' ? 'var(--light-highlight)' : 'var(--dark-highlight)'}`}></Files>
              </PopoverTrigger>
              <PopoverContent>
                <div className='copiedText'>Total copiado!</div>
              </PopoverContent>
            </Popover>
          </div>

          <div id='mainfield2'>
          <div className='innerTitle' id='md2'>
              AMBULATORIAL
              <div id='am2' contentEditable></div>
            </div>
            <div className='innerTitle'>
              ENFERMARIA
              <div id='en2' contentEditable></div>
            </div>
            <div className='innerTitle'>
              APARTAMENTO
              <div id='ap2' contentEditable></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}