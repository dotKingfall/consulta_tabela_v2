import { thisSession } from "../page";
import { pParcial, pTotal } from "./classicmode";
import printResults from "./printResults";

export default function ApplyDiscount(doc: Document){
  const dfield = doc.getElementById('c2') as HTMLInputElement;

  if(parseInt(dfield.value) > 100){dfield.value = '100';}
  else if(parseInt(dfield.value) < 0){dfield.value = '0';}

  if(isNaN(parseInt(dfield.value))){
    thisSession.descontoValue = 0;
  }
  else{
    thisSession.descontoValue = parseInt(dfield.value);
  }

  printResults(doc, pParcial, pTotal);
}

export function changeDiscountOption(doc: Document){

  if(thisSession.descontoOption === 0){thisSession.descontoOption = 1}
  else{thisSession.descontoOption = 0}

  doc.getElementById('descontooption')!.innerText = `OPT ${thisSession.descontoOption + 1}`
  printResults(doc, pParcial, pTotal);
}