'use client'

import {extendVariants, Input} from "@nextui-org/react";
import './styling/numInput.css';
import { useTheme } from "next-themes";

export default function NumInput() {
  const { theme } = useTheme();

  const CustomInput = extendVariants(Input, {
    variants: {
      color: {
        default:{
          inputWrapper: theme === 'dark' ? darktheme : lighttheme,
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

  return (
    <div>
      <div className="w-full pt-3 px-5 flex">
        <CustomInput className="float-start mr-2" label="Insira as idades" type="number" placeholder="Digite as idades separadas por espaço" id='c1'></CustomInput>
        <CustomInput className="max-w-40" label="Desconto (%:)" type="number" placeholder="Insira o valor" id="c2"></CustomInput>
      </div>
    </div>
  );
}

const darktheme = [
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
];
const lighttheme = [
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
];