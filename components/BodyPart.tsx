import { BodyPartType } from "@/types/bodypart";
import Image from "next/image";
import { Button } from "@/components/Button";

export function BodyPart({ img, title, maintext }: BodyPartType) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-12 lg:py-16">
      <div className="relative w-full max-w-sm h-72 sm:h-80 lg:w-110.5 lg:h-108.25">
        <Image src={img} alt={title} fill className="object-contain" />
      </div>

      <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left px-4 lg:px-0">
        <h2 className="text-dark font-sans md:text-3xl">{title}</h2>

        <p className="text-grey body-3 font-sans font-regular md:text-base">
          {maintext}
        </p>

        <div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
