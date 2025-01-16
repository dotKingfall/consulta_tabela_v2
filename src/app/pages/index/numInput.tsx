'use client'

import ApplyDiscount from './logic/applyDiscount';
import { autoMode } from './logic/automode';
import { classicMode } from './logic/classicmode';
import { thisSession } from './page';
import { X } from 'lucide-react';
import './styling/numInput.css';
import { useTheme } from 'next-themes';

export default function NumInput() {
  const { theme } = useTheme();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '-' || event.key === 'e' || event.key === '+' || event.key === '.') {
      event.preventDefault(); // Prevent invalid characters
    }
  };

  const handleInputSpace = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9\s]/g, ''); // Allow numeric characters and spaces
  };

  const handleKeyDownSpace = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === '-' || event.key === 'e' || event.key === '+' || event.key === '.') {
      event.preventDefault(); // Prevent invalid characters
    }
  };

  return (
    <div>
      <div className="w-full px-5 flex txtfieldOuterShell">  
        <div className='w-full mr-14'>
          <label className='txtfieldLabel'>IDADES</label>
          <input
            type='text'
            onInput={handleInputSpace}
            onKeyDown={handleKeyDownSpace}
            id="c1"
            className="txtfield w-full" onChange={()=> thisSession.mode === 0 ? classicMode(document) : autoMode(document)}>
          </input>
          <span className='absolute' title='Limpar idades'>
            <X className='mt-3 ml-1 cursor-pointer' color={`${theme === 'light' ? 'var(--light-highlight)' : 'var(--dark-highlight)'}`} onClick={()=> clearIdades(document)}></X>
          </span>
          <label className="totallabel text-currentTextColor">TOTAL PESSOAS: <span id='pCount'>0</span></label>
        </div>
        <div className='txtfieldOuterShell'>
          <label className='txtfieldLabel'>DESCONTO (%)</label>
          <input 
            type='number'
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            disabled
            id="c2"
            className="txtfield w-full"
            onChange={()=> ApplyDiscount(document)} maxLength={3}></input>
          <label className="descontolabel text-currentTextColor">
            <div id='dlabel' onClick={()=> makeDiscountEditable(document)}>
              {thisSession.desconto === 0 ? 'APLICAR' : 'CANCELAR'}
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

function makeDiscountEditable(doc: Document){
  const dlabel = doc.getElementById('dlabel')!;
  const dfield = doc.getElementById('c2')!;

  if(thisSession.desconto === 0){

    dlabel.innerText = 'CANCELAR';
    dfield.removeAttribute('disabled');
    dfield.style.textDecoration = 'none';
    thisSession.desconto = 1;
  }
  else{
    dlabel.innerText = 'APLICAR';
    dfield.setAttribute('disabled', 'true');
    dfield.style.textDecoration = 'line-through';
    thisSession.desconto = 0;
  }
}
function clearIdades(doc: Document){
  const tmp = doc.getElementById('c1') as HTMLInputElement;
  tmp.value = '';

  doc.getElementById('pCount')!.innerText = '0';
}