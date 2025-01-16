import { thisSession } from "../page";

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
}