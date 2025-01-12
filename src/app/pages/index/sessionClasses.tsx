
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

export class Tarifa{
  limite: number;

  ambulatorial_parcial_odonto: number;
  ambulatorial_parcial: number;
  ambulatorial_total_odonto: number;
  ambulatorial_total: number;

  enfermaria_parcial_odonto: number;
  enfermaria_parcial: number;
  enfermaria_total_odonto: number;
  enfermaria_total: number;

  apartamento_parcial_odonto: number;
  apartamento_parcial: number;
  apartamento_total_odonto: number;
  apartamento_total: number;

  constructor(
    limite: number,
    ambulatorial_parcial_odonto: number,
    ambulatorial_parcial: number,
    ambulatorial_total_odonto: number,
    ambulatorial_total: number,
    enfermaria_parcial_odonto: number,
    enfermaria_parcial: number,
    enfermaria_total_odonto: number,
    enfermaria_total: number,
    apartamento_parcial_odonto: number,
    apartamento_parcial: number,
    apartamento_total_odonto: number,
    apartamento_total: number
  ){
    this.limite = limite;

    this.ambulatorial_parcial_odonto = ambulatorial_parcial_odonto;
    this.ambulatorial_parcial = ambulatorial_parcial;
    this.ambulatorial_total_odonto = ambulatorial_total_odonto;
    this.ambulatorial_total = ambulatorial_total;

    this.enfermaria_parcial_odonto = enfermaria_parcial_odonto;
    this.enfermaria_parcial = enfermaria_parcial;
    this.enfermaria_total_odonto = enfermaria_total_odonto;
    this.enfermaria_total = enfermaria_total;

    this.apartamento_parcial_odonto = apartamento_parcial_odonto;
    this.apartamento_parcial = apartamento_parcial;
    this.apartamento_total_odonto = apartamento_total_odonto;
    this.apartamento_total = apartamento_total;
  }
}