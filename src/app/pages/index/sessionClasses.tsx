
export class Session{
  place: number; //0: Goiânia, 1: Anápolis, 2: Brasília
  mode: number; //0: classic, 1: auto

  pessoa: number; //0: Física, 1: Jurídica
  odonto: number; //0: Sim, 1: Não

  desconto: number; //0: Não, 1: Sim
  descontoValue: number;
  total: number;

  constructor(
    place: number,
    mode: number,
    pessoa: number,
    odonto: number,
    desconto: number,
    descontoValue: number,
    total: number
  ){
    this.place = place;
    this.mode = mode;

    this.pessoa = pessoa;
    this.odonto = odonto;

    this.desconto = desconto;
    this.descontoValue = descontoValue;
    this.total = total;
  }
}

export class Pessoa{
  idade: number;

  ambulatorial: number;
  enfermaria: number;
  apartamento: number;

  constructor(
    idade: number,
    ambulatorial: number,
    enfermaria: number,
    apartamento: number
  ){
    this.idade = idade;

    this.ambulatorial = ambulatorial;
    this.enfermaria = enfermaria;
    this.apartamento = apartamento;
  }
}