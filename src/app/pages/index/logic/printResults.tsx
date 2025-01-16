import { thisSession } from "../page";
import { Pessoa } from "../sessionClasses";
import { pParcial, pTotal } from "./classicmode";

const real = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'});
export default function printResults(doc: Document, p1: Pessoa[], p2: Pessoa[]){
  let ap1S = '', en1S = '', am1S = '', ap2S = '', en2S = '', am2S = '';

  const ap1 = doc.getElementById('ap1')!;
  const en1 = doc.getElementById('en1')!;
  const am1 = doc.getElementById('am1')!;

  const ap2 = doc.getElementById('ap2')!;
  const en2 = doc.getElementById('en2')!;
  const am2 = doc.getElementById('am2')!;

  const titles = doc.getElementsByClassName('innerTitle');

  if(pParcial.length <= 0 || pTotal.length <= 0){
    for (let i = 0; i < titles.length; i++) {
      const title = titles[i] as HTMLElement;
      title.style.display = 'none';
    }
  }
  else{
    for (let i = 0; i < titles.length; i++) {
      const title = titles[i] as HTMLElement;
      title.style.display = 'initial';
    }
  }

  const descontoMultiplier = Number(thisSession.descontoValue) / 100;
  let desconto = (1 - descontoMultiplier).toPrecision(3);

  if(thisSession.desconto === 0){desconto = '1';}

  thisSession.totalAp1 = 0;
  thisSession.totalEn1 = 0;
  thisSession.totalAm1 = 0;

  thisSession.totalAp2 = 0;
  thisSession.totalEn2 = 0;
  thisSession.totalAm2 = 0;

  p1.forEach((pessoa)=> {
    const tmp1 = pessoa.apartamento * Number(desconto);
    const tmp2 = pessoa.enfermaria * Number(desconto);
    const tmp3 = pessoa.ambulatorial * Number(desconto);
    const idade = pessoa.idade.toString().padStart(2, '0');

    ap1S += `${idade} anos: ${real.format(tmp1)}\r\n`;
    en1S += `${idade} anos: ${real.format(tmp2)}\r\n`;

    if(thisSession.pessoa == 0 || thisSession.place == 2){
      am1S += `${idade} anos: ${real.format(tmp3)}\r\n`;
    }

    thisSession.totalAp1 += tmp1;
    thisSession.totalEn1 += tmp2;
    thisSession.totalAm1 += tmp3;
  });

  p2.forEach((pessoa)=> {
    const tmp1 = pessoa.apartamento * Number(desconto);
    const tmp2 = pessoa.enfermaria * Number(desconto);
    const tmp3 = pessoa.ambulatorial * Number(desconto);
    const idade = pessoa.idade.toString().padStart(2, '0');

    ap2S += `${idade} anos: ${real.format(tmp1)}\r\n`;
    en2S += `${idade} anos: ${real.format(tmp2)}\r\n`;

    if(thisSession.pessoa == 0 || thisSession.place == 2){
      am2S += `${idade} anos: ${real.format(tmp3)}\r\n`;
    }

    thisSession.totalAp2 += tmp1;
    thisSession.totalEn2 += tmp2;
    thisSession.totalAm2 += tmp3;
  });

  if(thisSession.place === 2 || thisSession.pessoa === 0){
    if(p1.length > 1 && p2.length > 1){
      ap1.innerText = `${ap1S}\r\nTotal: ${real.format(thisSession.totalAp1)}`;
      en1.innerText = `${en1S}\r\nTotal: ${real.format(thisSession.totalEn1)}`;
      am1.innerText = `${am1S}\r\nTotal: ${real.format(thisSession.totalAm1)}`;
  
      ap2.innerText = `${ap2S}\r\nTotal: ${real.format(thisSession.totalAp2)}`;
      en2.innerText = `${en2S}\r\nTotal: ${real.format(thisSession.totalEn2)}`;
      am2.innerText = `${am2S}\r\nTotal: ${real.format(thisSession.totalAm2)}`;
    }
    else{
      ap1.innerText = `${ap1S}`;
      en1.innerText = `${en1S}`;
      am1.innerText = `${am1S}`;
  
      ap2.innerText = `${ap2S}`;
      en2.innerText = `${en2S}`;
      am2.innerText = `${am2S}`;
    }
  }
  else if(thisSession.place !== 2 && thisSession.pessoa === 1){
    doc.getElementById('md1')!.style.display = 'none';
    doc.getElementById('md2')!.style.display = 'none';

    if(p1.length > 1 && p2.length > 1){
      ap1.innerText = `${ap1S}\r\nTotal: ${real.format(thisSession.totalAp1)}`;
      en1.innerText = `${en1S}\r\nTotal: ${real.format(thisSession.totalEn1)}`;
  
      ap2.innerText = `${ap2S}\r\nTotal: ${real.format(thisSession.totalAp2)}`;
      en2.innerText = `${en2S}\r\nTotal: ${real.format(thisSession.totalEn2)}`;
    }
    else{
      ap1.innerText = `${ap1S}`;
      en1.innerText = `${en1S}`;
  
      ap2.innerText = `${ap2S}`;
      en2.innerText = `${en2S}`;
    }
  }
}