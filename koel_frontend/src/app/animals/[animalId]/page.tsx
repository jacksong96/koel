import Link from "next/link";
import { Animal } from "@/app/lib/definitions";
// koel -> localhost:3000/koel

export default function AnimalCard({ animal } : {animal: Animal}) {
  return (
    <Link
      href={animal.species_name}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors m-3 hover:border-gray-300 hover:bg-gray-100 hover:dark"
      key={animal.species_name + "Card"}
    >
      <h2 className={`text-2xl font-semibold`}>
        {animal.species_name}
      </h2>
    </Link>
  );
}
