'use client'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import { useEffect, useState } from "react";
import './styling/navbar.css';
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { thisSession } from "./page";
import { classicMode } from "./logic/classicmode";

export default function NavBar(){
  const { theme } = useTheme();
  const [selectedPlace, setSelectedPlace] = useState("Goiânia");
  const [selectedPessoa, setSelectedPessoa] = useState("Física");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function lugarChangeHandler(place: string, key: string, doc: Document){
    setSelectedPlace(place);

    thisSession.place = parseInt(key);
    if(thisSession.place === 2 && thisSession.pessoa === 2){
      thisSession.pessoa = 0;
      setSelectedPessoa("Física");
    }
    classicMode(doc);
  }

  function pessoaChangeHandler(pessoa: string, key: string, doc: Document){
    const o = doc.getElementById("odonto")!;
    const ol = doc.getElementById("odontolabel")!;

    setSelectedPessoa(pessoa);
    thisSession.pessoa = parseInt(key);

    if(thisSession.pessoa === 1){
      o.style.transform = "translateX(-90px)";
      o.style.opacity = '0';
      o.style.visibility = 'hidden';

      ol.style.transform = "translateX(-90px)";
      ol.style.opacity = '0';
      ol.style.visibility = 'hidden';

      setTimeout(() => {
        o.style.display = 'none';
        ol.style.display = 'none';
      }, 250);

      classicMode(doc);
    }
    else{
      o.style.display = 'flex';
      ol.style.display = 'flex';

      setTimeout(() => {
        o.style.transform = "translateX(0)";
        o.style.opacity = '1';
        o.style.visibility = 'visible';

        ol.style.transform = "translate(0px, -22px)";
        ol.style.opacity = '1';
        ol.style.visibility = 'visible';
      }, 100);

      classicMode(doc);
    }
  }

  function odontoChangeHandler(doc: Document){
    const p = doc.getElementById("odonto")!;

    //Replay animation
    p.style.animationName = "none";
    p.offsetHeight; // eslint-disable-line @typescript-eslint/no-unused-expressions
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

    classicMode(doc);
  }

  function modeChangeHandler(doc: Document){
    const p = doc.getElementById("mode")!;

    //Replay animation
    p.style.animationName = "none";
    p.offsetHeight; // eslint-disable-line @typescript-eslint/no-unused-expressions
    p.style.animationName = "";
    p.style.animationName = "flipCard";
    p.style.animationPlayState = "paused";
    
    if(p.style.animationPlayState !== "running"){
      p.style.animationPlayState = "running";

      if(thisSession.mode === 0){
        p.textContent = "Auto";
        thisSession.mode = 1;
      }
      else{
        p.textContent = "Padrão";
        thisSession.mode = 0;
      }
    }
  }

  useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800);
      };
  
      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return(
        <nav className='mt-6'>
            <li>
              <label className="label ms-6">Cidade:</label>
              <Dropdown key={'cidades'} className={`${theme === 'light' ? 'bg-[#c7e1c7]' : 'bg-[#000d0d]'}`}>
                  <DropdownTrigger>
                      <Button className="text-xl ms-3 gap-1" variant="light" color="primary" endContent={<ChevronDown className="mt-1.5" size={15} />}>{selectedPlace}</Button>
                  </DropdownTrigger>
                  <DropdownMenu items={places} itemClasses={{
                    base: ["data-[hover=true]:text-insideTextColor"],
                  }}>
                      <DropdownSection>
                          {places.map((place) => (
                              <DropdownItem key={place.key} color="secondary" onPress={() => lugarChangeHandler(place.label, place.key, document)}>{place.label}</DropdownItem>
                          ))}
                      </DropdownSection>
                  </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <label className="label ms-4">Pessoa:</label>
              <Dropdown key={'pessoa'} className={`${theme === 'light' ? 'bg-[#c7e1c7]' : 'bg-[#000d0d]'}`}>
                <DropdownTrigger className="ml-0">
                  <Button className="text-xl ms-3 gap-1" variant="light" color="primary" endContent={<ChevronDown className="mt-1.5" size={15} />}>{selectedPessoa}</Button>
                </DropdownTrigger>
                <DropdownMenu items={pessoas} itemClasses={{
                    base: ["data-[hover=true]:text-insideTextColor"],
                  }}>
                  <DropdownSection>
                    {pessoas.map((pessoa) => (
                      thisSession.place === 2 && pessoa.key === '2' ? null : <DropdownItem key={pessoa.key} color="secondary" onPress={() => {pessoaChangeHandler(pessoa.label, pessoa.key, document)}}>{pessoa.label}</DropdownItem>
                    ))}
                  </DropdownSection>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li>
              <label id="odontolabel" className="label">Odonto:</label>
              <div>
                <Button id="odonto" size={isSmallScreen ? 'sm' : 'md'} color="secondary" className="text-lg text-insideTextColor" onPress={()=> odontoChangeHandler(document)}>Sim</Button>
              </div>
            </li>
            <li>
              <label id="modelabel" className="label">Modo:</label>
              <div>
                <Button id="mode" size={isSmallScreen ? 'sm' : 'md'} color="secondary" className="text-lg w-px text-insideTextColor" onPress={()=> modeChangeHandler(document)}>Padrão</Button>
              </div>
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

const pessoas = [
  {
    key: '0',
    label: 'Física'
  },
  {
    key: '1',
    label: 'Jurídica'
  },
  {
    key: '2',
    label: 'Coletivo'
  },
]