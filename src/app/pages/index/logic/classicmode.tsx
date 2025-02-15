import { thisSession } from "../page";
import { Pessoa } from "../sessionClasses";
import { 
  opgoind, otgoind, spgoind, stgoind, spgoemp, stgoemp,
  opanind, otanind, spanind, stanind, spanemp, stanemp,
  opbrind, otbrind, spbrind, stbrind, spbremp, stbremp,
  opgocol, otgocol, spgocol, stgocol, opancol, otancol,
  spancol, stancol
} from '../page';
import printResults from "./printResults";

export let pParcial: Pessoa[] = [];
export let pTotal: Pessoa[] = [];

// eslint-disable-next-line
let tmpp: any, tmpt: any;

export function classicMode(doc: Document){
  const txtField = doc.getElementById('c1') as HTMLInputElement;
  const idades = txtField.value.split(' ');
  pParcial = [];
  pTotal = [];

  const place = thisSession.place;
  const pessoa = thisSession.pessoa;
  const odonto = thisSession.odonto;

  if(place === 0){ //Goiânia
    if(pessoa === 0){
      if(odonto === 0){
        tmpp = opgoind;
        tmpt = otgoind;
      }
      else if(odonto === 1){
        tmpp = spgoind;
        tmpt = stgoind;
      }
    }
    else if(pessoa === 1){
      tmpp = spgoemp;
      tmpt = stgoemp;
    }
    else if(pessoa === 2){
      if(odonto === 0){
        tmpp = opgocol;
        tmpt = otgocol;
      }
      else if(odonto === 1){
        tmpp = spgocol;
        tmpt = stgocol;
      }
    }
  }
  else if(place === 1){ //Anapolis
    if(pessoa === 0){
      if(odonto === 0){
        tmpp = opanind;
        tmpt = otanind;
      }
      else if(odonto === 1){
        tmpp = spanind;
        tmpt = stanind;
      }
    }
    else if(pessoa === 1){
      tmpp = spanemp;
      tmpt = stanemp;
    }
    else if(pessoa === 2){
      if(odonto === 0){
        tmpp = opancol;
        tmpt = otancol;
      }
      else if(odonto === 1){
        tmpp = spancol;
        tmpt = stancol;
      }
    }
  }
  else if(place === 2){ //Brasilia
    if(pessoa === 0){
      if(odonto === 0){
        tmpp = opbrind;
        tmpt = otbrind;
      }
      else if(odonto === 1){
        tmpp = spbrind;
        tmpt = stbrind;
      }
    }
    else if(pessoa === 1){
      tmpp = spbremp;
      tmpt = stbremp;
    }
  }

  addPartial();
  addTotal();
  doc.getElementById('pCount')!.innerText = pParcial.length.toString();

  printResults(doc, pParcial, pTotal);

  function addPartial(){
    idades.forEach((item)=>{
      const nItem = parseInt(item);

      switch(true){
        case nItem >= 0 && nItem <= 18:
          pParcial.push(new Pessoa(nItem, tmpp[0]['am'], tmpp[0]['en'], tmpp[0]['ap']));
          break;
        case nItem >= 19 && nItem <= 23:
          pParcial.push(new Pessoa(nItem, tmpp[1]['am'], tmpp[1]['en'], tmpp[1]['ap']));
          break;
        case nItem >= 24 && nItem <= 28:
          pParcial.push(new Pessoa(nItem, tmpp[2]['am'], tmpp[2]['en'], tmpp[2]['ap']));
          break;
        case nItem >= 29 && nItem <= 33:
          pParcial.push(new Pessoa(nItem, tmpp[3]['am'], tmpp[3]['en'], tmpp[3]['ap']));
          break;
        case nItem >= 34 && nItem <= 38:
          pParcial.push(new Pessoa(nItem, tmpp[4]['am'], tmpp[4]['en'], tmpp[4]['ap']));
          break;
        case nItem >= 39 && nItem <= 43:
          pParcial.push(new Pessoa(nItem, tmpp[5]['am'], tmpp[5]['en'], tmpp[5]['ap']));
          break;
        case nItem >= 44 && nItem <= 48:
          pParcial.push(new Pessoa(nItem, tmpp[6]['am'], tmpp[6]['en'], tmpp[6]['ap']));
          break;
        case nItem >= 49 && nItem <= 53:
          pParcial.push(new Pessoa(nItem, tmpp[7]['am'], tmpp[7]['en'], tmpp[7]['ap']));
          break;
        case nItem >= 54 && nItem <= 58:
          pParcial.push(new Pessoa(nItem, tmpp[8]['am'], tmpp[8]['en'], tmpp[8]['ap']));
          break;
        case nItem >= 59:
          pParcial.push(new Pessoa(nItem, tmpp[9]['am'], tmpp[9]['en'], tmpp[9]['ap']));
          break;
      }

    });
  }

  function addTotal(){

    idades.forEach((item)=>{
      const nItem = parseInt(item);

      switch(true){
        case nItem >= 0 && nItem <= 18:
          pTotal.push(new Pessoa(nItem, tmpt[0]['am'], tmpt[0]['en'], tmpt[0]['ap']));
          break;
        case nItem >= 19 && nItem <= 23:
          pTotal.push(new Pessoa(nItem, tmpt[1]['am'], tmpt[1]['en'], tmpt[1]['ap']));
          break;
        case nItem >= 24 && nItem <= 28:
          pTotal.push(new Pessoa(nItem, tmpt[2]['am'], tmpt[2]['en'], tmpt[2]['ap']));
          break;
        case nItem >= 29 && nItem <= 33:
          pTotal.push(new Pessoa(nItem, tmpt[3]['am'], tmpt[3]['en'], tmpt[3]['ap']));
          break;
        case nItem >= 34 && nItem <= 38:
          pTotal.push(new Pessoa(nItem, tmpt[4]['am'], tmpt[4]['en'], tmpt[4]['ap']));
          break;
        case nItem >= 39 && nItem <= 43:
          pTotal.push(new Pessoa(nItem, tmpt[5]['am'], tmpt[5]['en'], tmpt[5]['ap']));
          break;
        case nItem >= 44 && nItem <= 48:
          pTotal.push(new Pessoa(nItem, tmpt[6]['am'], tmpt[6]['en'], tmpt[6]['ap']));
          break;
        case nItem >= 49 && nItem <= 53:
          pTotal.push(new Pessoa(nItem, tmpt[7]['am'], tmpt[7]['en'], tmpt[7]['ap']));
          break;
        case nItem >= 54 && nItem <= 58:
          pTotal.push(new Pessoa(nItem, tmpt[8]['am'], tmpt[8]['en'], tmpt[8]['ap']));
          break;
        case nItem >= 59:
          pTotal.push(new Pessoa(nItem, tmpt[9]['am'], tmpt[9]['en'], tmpt[9]['ap']));
          break;
      }

    });
    
  }
}