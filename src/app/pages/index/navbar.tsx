'use client'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import React from "react";
import './styling/navbar.css';
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function NavBar(){
  const { theme } = useTheme();
  const [selectedPlace, setSelectedPlace] = React.useState("Goiânia");

  function lugarChangeHandler(place: string){
    setSelectedPlace(place); //TODO MORE
  }

  function pessoaChangeHandler(doc: Document, choice: Number){
    if(choice === 1){
      doc.getElementById("pf")!.style.display = 'none';
      doc.getElementById("pj")!.style.display = "inline";
    }else{
      doc.getElementById("pj")!.style.display = "none";
      doc.getElementById("pf")!.style.display = "inline";
    }
  }

    return(
        <nav className='mt-2'>
            <li>
              <Dropdown key={'cidades'} className={`${theme === 'light' ? 'bg-[#c7e1c7]' : 'bg-[#000d0d]'}`}>
                  <DropdownTrigger>
                      <Button className="text-xl ms-3 gap-1" variant="light" color="primary" endContent={<ChevronDown className="mt-1.5" size={15} />}>{selectedPlace}</Button>
                  </DropdownTrigger>
                  <DropdownMenu items={places}>
                      <DropdownSection title='Cidades'>
                          {places.map((place) => (
                              <DropdownItem key={place.key} color="secondary" onPress={() => lugarChangeHandler(place.label)}>{place.label}</DropdownItem>
                          ))}
                      </DropdownSection>
                  </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <Button id="pf" color="secondary" className="text-lg" onPress={()=> pessoaChangeHandler(document, 1)}>Física</Button>
              <Button id="pj" color="secondary" className="text-lg" onPress={()=> pessoaChangeHandler(document, 0)}>Jurídica</Button>
            </li>
        </nav>
    );
}

const places = [
  {
    key: '0',
    label: 'Goiânia'
  },
  {
    key: '1',
    label: 'Anápolis'
  },
  {
    key: '2',
    label: 'Brasília'
  },
];