'use client'

import { thisSession } from './page';
import './styling/numLabels.css'

export default function NumLabels(){
  return(
    <div className="w-full pt-1 px-5 flex">
      <div className="totallabel w-full text-end pr-4 text-currentTextColor">TOTAL PESSOAS: 0</div>
      <div onClick={()=> makeDiscountEditable(document)} className="descontolabel min-w-40 text-end text-currentTextColor" id='dlabel'>ALTERAR VALOR</div>
    </div>
  );
}

function makeDiscountEditable(doc: Document){
  const d1 = doc.getElementById('d1')!;
  const d2 = doc.getElementById('d2')!;
  const dlabel = doc.getElementById('dlabel');

  if(thisSession.desconto === 0){
    dlabel!.textContent = 'SALVAR VALOR';
    d1.removeAttribute('disabled'); 
    d2.removeAttribute('disabled');

    thisSession.desconto = 1;
  }
  else{
    dlabel!.textContent = 'ALTERAR VALOR';
    d1.setAttribute('disabled', 'true');
    d2.setAttribute('disabled', 'true');

    thisSession.desconto = 0;
  }
}