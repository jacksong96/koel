import { fetchAnimals, fetchUsers } from '@/app/lib/dataFetching';
import AnimalGrid from './animals/page';

// Load in data
// Pass data to a client component

// Text input: filter the animal cards under it:
// Text input -> "use client" we need access to useState to handle the input
// When text is inputted -> filter through our current animal database.
// Component would be called AnimalGrid ("use client")-> (Text input, showing all the cards that are the result of the search)

// Need to fetch data for the X animals from a server component

// Pass data to AnimalGrid

// 1. Create AnimalGrid (and more components)
// 2. Load in data from Animal API
// 3. Pass in data to AnimalGrid, show all the animal from API call

export default async function Home() {
  // Load in data
  const animalList = await fetchAnimals();
// Pass data to a client component

// Text input: filter the animal cards under it:
// Text input -> "use client" we need access to useState to handle the input
// When text is inputted -> filter through our current animal database.
// Component would be called AnimalGrid ("use client")-> (Text input, showing all the cards that are the result of the search)

// Need to fetch data for the X animals from a server component

// Pass data to AnimalGrid

// 1. Create AnimalGrid (and more components)
// 2. Load in data from Animal API
// 3. Pass in data to AnimalGrid, show all the animal from API call


  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <AnimalGrid animalList={animalList}/>
    </div>
  );
};
