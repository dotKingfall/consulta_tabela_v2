'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {Button} from "@nextui-org/button";
import { Sun, Moon} from 'lucide-react';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}