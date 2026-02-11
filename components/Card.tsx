import { CardType } from "@/types/card";
import Image from "next/image";


export function Card({ img, title, maintext }: CardType) {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white">
      <div className="flex flex-col items-center text-center">
        <Image src={img} alt={title} className="mb-4" width={65} height={56}/>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <div className="mt-4 text-sm text-grey">
        {maintext}
      </div>
    </div>
  );
}
