import {Input} from "@nextui-org/input";
import './styling/numInput.css';

export default function NumInput() {
  return (
    <div className="w-max">
      <Input className="w-3/5" label="Insira as idades" placeholder="Digite as idades separadas por espaço"></Input>
      <Input className="w-1/5 " label="Desconto (%:)" placeholder="Insira o valor"></Input>
    </div>
  );
}