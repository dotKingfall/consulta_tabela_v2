'use client'

import {extendVariants, Input} from "@nextui-org/react";
import './styling/numInput.css';

//TODO DARKINPUT
//TODO LIGHTINPUT

export default function NumInput() {
  return (
    <div>
      <div id="darkInput" className="w-full pt-3 px-5 flex">
        <DarkInput className="float-start mr-2" label="Insira as idades" type="number" placeholder="Digite as idades separadas por espaço"></DarkInput>
        <DarkInput className="max-w-40" label="Desconto (%:)" type="number" placeholder="Insira o valor" id="d1"></DarkInput>
      </div>
      <div id="lightInput" className="w-full pt-3 px-5 flex">
        <LightInput className="float-start mr-2" label="Insira as idades" type="number" placeholder="Digite as idades separadas por espaço"></LightInput>
        <LightInput className="max-w-40" label="Desconto (%:)" type="number" placeholder="Insira o valor" id="d2"></LightInput>
      </div>
    </div>
  );
}

const DarkInput = extendVariants(Input, {
  variants: {
    color: {
      default:{
        inputWrapper:[
          //global
          "border",
          "transition-colors",
          "dark:bg-darkergreen",

          //outer shell dark mode
          'dark:border-darkergreen',
          'dark:data-[hover=true]:border-lightergreen',
          'dark:data-[hover=true]:bg-darkergreen',

          'dark:group-data-[focus=true]:border-lightergreen',
          'dark:group-data-[focus=true]:bg-darkergreen',
        ],
        input:[
          "inputColor",
        ],
      }
    },
  },
  defaultVariants: {
    color: "default",
    textSize: "base",
    removeLabel: false,
  },
});

const LightInput = extendVariants(Input, {
  variants: {
    color: {
      default:{
        inputWrapper:[
          //global
          "border",
          "transition-colors",
          "bg-lightgreen",

          //outer shell dark mode
          'border-lightgreen',
          'data-[hover=true]:border-maingreen',
          'data-[hover=true]:bg-lightgreen',

          'group-data-[focus=true]:border-maingreen',
          'group-data-[focus=true]:bg-lightgreen',
        ],
        input:[
          "inputColor",
        ],
      }
    },
  },
  defaultVariants: {
    color: "default",
    textSize: "base",
    removeLabel: false,
  },
});