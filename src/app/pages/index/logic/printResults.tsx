import { thisSession } from "../page";
import { Pessoa } from "../sessionClasses";

const real = new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'});
export default function printResults(doc: Document, p1: Pessoa[], p2: Pessoa[]){
  let ap1S = '', en1S = '', am1S = '', ap2S = '', en2S = '', am2S = '';

  const ap1 = doc.getElementById('ap1')!;
  const en1 = doc.getElementById('en1')!;
  const am1 = doc.getElementById('am1')!;

  const ap2 = doc.getElementById('ap2')!;
  const en2 = doc.getElementById('en2')!;
  const am2 = doc.getElementById('am2')!;

  const descontoMultiplier = Number(thisSession.descontoValue) / 100;
  const desconto = (1 - descontoMultiplier).toPrecision(3);

  p1.forEach((pessoa)=> {

  });

  p2.forEach((pessoa)=> {

  });
}