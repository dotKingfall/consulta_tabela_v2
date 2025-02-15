
export class Session{
  place: number = 0; //0: Goiânia, 1: Anápolis, 2: Brasília
  mode: number = 0; //0: classic, 1: auto

  pessoa: number = 0; //0: Física, 1: Jurídica, 2: Coletivo por adesão
  odonto: number = 0; //0: Sim, 1: Não

  desconto: number = 0; //0: Não, 1: Sim
  descontoOption: number  = 0; //0: Não, 1: Sim
  descontoValue: number = 0;

  totalAm1: number = 0;
  totalEn1: number = 0;
  totalAp1: number = 0;

  totalAm2: number = 0;
  totalEn2: number = 0;
  totalAp2: number = 0;

  constructor(
    place: number,
    mode: number,
    pessoa: number,
    odonto: number,
    desconto: number,
    descontoOption: number,
    descontoValue: number,
    totalAm1: number,
    totalEn1: number,
    totalAp1: number,
    totalAm2: number,
    totalEn2: number,
    totalAp2: number,
  ){
    this.place = place;
    this.mode = mode;

    this.pessoa = pessoa;
    this.odonto = odonto;

    this.desconto = desconto;
    this.descontoOption = descontoOption;
    this.descontoValue = descontoValue;

    this.totalAm1 = totalAm1;
    this.totalEn1 = totalEn1;
    this.totalAp1 = totalAp1;

    this.totalAm2 = totalAm2;
    this.totalEn2 = totalEn2;
    this.totalAp2 = totalAp2;
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