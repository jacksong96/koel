"use client";

import Link from "next/link";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Animal } from "@/app/lib/definitions";
import AnimalCard from "./[animalId]/page";

// <AnimalGrid animalList={data}/>

interface AnimalGridProps {
  animalList: any;
}

export default function AnimalGrid({ animalList }: AnimalGridProps) {
  const [searchText, setSearchText] = useState("");

  // filter text
  const searchFilter = (animalList:any) =>{
    return animalList.filter(
      (animal:any) => animal.species_name.toLowerCase().includes(searchText.toLowerCase())
    )
  }
  // save filtered array of objects
 
  // show the filtered array to user 

  return (
    <>
    <div>
      <h3 className = "text-2xl py-6 text-center">Search for animal</h3>
      <div className = "grid w-full max-w-sm items-center gap-1.5">
        <TextField id="outlined-search" label="Search field" type="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
      </div>
      <h3 className="text-3xl pt-12 pb-6 text-center">Animal Collection</h3>
    </div>

    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      <ul>
        {animalList.map((animal:Animal) => (
          <li key={animal.id}>
            <AnimalCard animal={animal}/>
          </li>
        ))}
      </ul>
    </div>
      
    </>
  );
}
