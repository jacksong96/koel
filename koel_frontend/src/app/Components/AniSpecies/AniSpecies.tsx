import React, { useState } from 'react';
import './AniSpecies.css';
import koelPic from "@/app/Icons/Asian_koel.jpg";
import Image from 'next/image';

// Define the type for animalspec
type Animalspec = {
  [key: string]: {
    [key: number]: number;
  };
};

interface AniSpeciesProps {
  animalspec: Animalspec;
  setJumpTime: (time: number) => void;
}

const AniSpecies: React.FC<AniSpeciesProps> = ({ animalspec, setJumpTime }) => {
  const species = Object.keys(animalspec);
  const [isBoxPressed, setIsBoxPressed] = useState<{ [key: string]: boolean }>({});

  const handleJump = (time: number) => {
    setJumpTime(time);
    console.log(time);
  };

  // Function to toggle the state
  const handleBoxPress = (speciesName: string) => {
    setIsBoxPressed(prevState => ({
      ...prevState,
      [speciesName]: !prevState[speciesName]
    }));
  };

  const getTimeInterval = (index: number) => {
    const start = index * 3;
    const end = start + 2;
    return `${start}-${end} seconds`;
  };

  return (
    <div className="containerMain flex">
      <div>
        <div className="header">Animal Detected</div>
        <ul className="scrollable-list">
          {species.map((speciesName, index) => (
            <li  className="container" key={index}>
              <div className='flex'>
                <Image src={koelPic} className="h-16 w-12 rounded" alt="KoelIcon" />
                <div className='ml-6 text-left'>
                  <div onClick={() => handleBoxPress(speciesName)}>{speciesName}</div>
                  <ul className="text-xl mt-4">
                    {Object.entries(animalspec[speciesName]).map(([key, value], subIndex) => (
                      value === 1 && isBoxPressed[speciesName] && (
                        <li key={subIndex}>
                          <div onClick={() => handleJump(Number(key)*3)}>
                            Time Interval: {getTimeInterval(Number(key))} (Detected)
                          </div>
                        </li>
                      )
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AniSpecies;