import { CardType } from "@/types/card";
import Image from "next/image";

export function Card({ img, title, maintext }: CardType) {
  return (
    <div className="
      w-full max-w-74.75 h-65
      p-6 rounded-xl bg-white shadow-md
      flex flex-col justify-between
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
    ">
      <div className="flex flex-col items-center text-center">
        <Image
          src={img}
          alt={title}
          width={65}
          height={56}
          className="mb-4"
        />

        <h3 className="font-bold text-dark whitespace-pre-line">
          {title}
        </h3>
      </div>

      <p className="text-grey body-3 text-center font-regular">
        {maintext}
      </p>
    </div>
  );
}
