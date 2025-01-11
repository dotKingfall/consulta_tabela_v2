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
import { thisSession } from "./page";

export default function NavBar(){
  const { theme } = useTheme();
  const [selectedPlace, setSelectedPlace] = React.useState("Goiânia");

  function lugarChangeHandler(place: string){
    setSelectedPlace(place); //TODO MORE
  }

  function pessoaChangeHandler(doc: Document){
    const p = doc.getElementById("pessoa")!;
    const o = doc.getElementById("odonto")!;

    //Replay animation
    p.style.animationName = "none";
    p.offsetHeight;
    p.style.animationName = "";
    p.style.animationName = "flipCard";
    p.style.animationPlayState = "paused";
    
    if(p.style.animationPlayState !== "running"){
      p.style.animationPlayState = "running";

      if(thisSession.pessoa === 0){
        p.textContent = "Jurídica";
        o.style.transform = "translateX(-90px)";
        o.style.opacity = '0';
        o.style.visibility = 'hidden';
        thisSession.pessoa = 1;
      }
      else{
        p.textContent = "Física";
        o.style.transform = "translateX(0)";
        o.style.opacity = '1';
        o.style.visibility = 'visible';
        thisSession.pessoa = 0;
      }
    }
  }

  function odontoChangeHandler(doc: Document){
    const p = doc.getElementById("odonto")!;

    //Replay animation
    p.style.animationName = "none";
    p.offsetHeight;
    p.style.animationName = "";
    p.style.animationName = "flipCard";
    p.style.animationPlayState = "paused";
    
    if(p.style.animationPlayState !== "running"){
      p.style.animationPlayState = "running";

      if(thisSession.odonto === 0){
        p.textContent = "Não";
        thisSession.odonto = 1;
      }
      else{
        p.textContent = "Sim";
        thisSession.odonto = 0;
      }
    }
  }

    return(
        <nav className='mt-6'>
            <li>
              <label className="label ms-3">Cidade:</label>
              <Dropdown key={'cidades'} className={`${theme === 'light' ? 'bg-[#c7e1c7]' : 'bg-[#000d0d]'}`}>
                  <DropdownTrigger>
                      <Button className="text-xl ms-3 gap-1" variant="light" color="primary" endContent={<ChevronDown className="mt-1.5" size={15} />}>{selectedPlace}</Button>
                  </DropdownTrigger>
                  <DropdownMenu items={places}>
                      <DropdownSection>
                          {places.map((place) => (
                              <DropdownItem key={place.key} color="secondary" onPress={() => lugarChangeHandler(place.label)}>{place.label}</DropdownItem>
                          ))}
                      </DropdownSection>
                  </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <label className="label">Pessoa:</label>
              <Button id="pessoa" color="secondary" className="text-lg w-px" onPress={()=> pessoaChangeHandler(document)}>Física</Button>
            </li>
            <li>
              <label className="label">Odonto:</label>
              <Button id="odonto" color="secondary" className="text-lg" onPress={()=> odontoChangeHandler(document)}>Sim</Button>
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