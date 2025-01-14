'use client'

import { thisSession } from './page';
import './styling/numLabels.css'

export default function NumLabels(){
  return(
    <div className="pt-1 px-5 flex">
      <div className="totallabel w-full text-end pr-4 text-currentTextColor">TOTAL PESSOAS: 0</div>
      <div onClick={()=> makeDiscountEditable(document)} className="descontolabel text-end text-currentTextColor" id='dlabel'>{thisSession.desconto === 0 ? 'APLICAR' : 'CANCELAR'}</div>
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