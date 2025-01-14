import { odonto, lugar, pessoa } from "../navbar";
import { thisSession } from "../page";
import { Pessoa } from "../sessionClasses";
import JsonToTarifa from "./jsonToClass";

const pParcial: Pessoa[] = [];
const pTotal: Pessoa[] = [];

export function classicMode(doc: Document){
  const txtField = doc.getElementById('c1') as HTMLInputElement;
  let thisOdonto = odonto;
  if(thisSession.pessoa === 1){thisOdonto = 's';}

  const docPath1 = `${thisOdonto}_t_${lugar}_${pessoa}.json`;
  const docPath2 = `${thisOdonto}_p_${lugar}_${pessoa}.json`;

  alert(pParcial);
  alert(pTotal);
  //JsonToTarifa(docPath1, docPath2);
}