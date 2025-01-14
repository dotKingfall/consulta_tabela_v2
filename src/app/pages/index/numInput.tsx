'use client'

import { autooMode } from './logic/automode';
import { classicMode } from './logic/classicmode';
import { thisSession } from './page';
import './styling/numInput.css';
import { useTheme } from "next-themes";

export default function NumInput() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="w-full px-5 flex txtfieldOuterShell">  
        <div className='w-full mr-2 '>
          <label className='txtfieldLabel'>IDADES</label>
          <input id="c1" className="txtfield w-full" onChange={()=> thisSession.mode === 0 ? classicMode(document) : autooMode(document)}></input>
          <label className="totallabel text-currentTextColor">TOTAL PESSOAS: 0</label>
        </div>
        <div className='txtfieldOuterShell'>
          <label className='txtfieldLabel'>DESCONTO</label>
          <input id="c2"className="txtfield w-full"></input>
          <label id='dlabel' onClick={()=> makeDiscountEditable(document)} className="descontolabel text-currentTextColor">{thisSession.desconto === 0 ? 'APLICAR' : 'CANCELAR'}</label>
        </div>
      </div>
    </div>
  );
}

function makeDiscountEditable(doc: Document){
  const dlabel = doc.getElementById('dlabel')!;
  const dbutton = doc.getElementById('c2')!;

  if(thisSession.desconto === 0){

    dlabel.innerText = 'CANCELAR';
    thisSession.desconto = 1;
  }
  else{

    dlabel.innerText = 'APLICAR';
    thisSession.desconto = 0;
  }
}