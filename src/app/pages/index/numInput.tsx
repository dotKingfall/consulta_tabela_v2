'use client'

import {extendVariants, Input} from "@nextui-org/react";
import './styling/numInput.css';

const CustomInput = extendVariants(Input, {
  variants: { // <- modify/add variants
    color: {
      default:{

      }
    },
    size: {
      xs: {
        inputWrapper: "h-6 min-h-6 px-1",
        input: "text-tiny",
      },
      md: {
        inputWrapper: "h-10 min-h-10",
        input: "text-small",
      },
      xl: {
        inputWrapper: "h-14 min-h-14",
        input: "text-medium",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
    },
    removeLabel: {
      true: {
        label: "hidden",
      },
      false: {},
    },
  },
  defaultVariants: {
    color: "default",
    textSize: "base",
    removeLabel: false,
  },
});

export default function NumInput() {
  return (
    <div className="w-full pt-3 px-5 flex">
      <Input className="float-start mr-2" label="Insira as idades" placeholder="Digite as idades separadas por espaço"></Input>
      <CustomInput className="max-w-40" label="Desconto (%:)" placeholder="Insira o valor"></CustomInput>
    </div>
  );
}