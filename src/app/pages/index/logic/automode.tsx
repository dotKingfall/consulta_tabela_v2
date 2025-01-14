import { odonto, lugar, pessoa } from "../navbar";
import { thisSession } from "../page";

export function autooMode(doc: Document){
  const txtField = doc.getElementById('c1') as HTMLInputElement;
  let thisOdonto = odonto;
  if(thisSession.pessoa === 1){thisOdonto = 's';}
  
  const docPath1 = `${thisOdonto}_t_${lugar}_${pessoa}`;
  const docPath2 = `${thisOdonto}_p_${lugar}_${pessoa}`;
}