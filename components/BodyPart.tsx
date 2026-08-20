import { BodyPartType } from "@/types/bodypart";
import Image from "next/image";
import { Button } from "@/components/Button";

export function BodyPart({ img, title, maintext }: BodyPartType) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 py-12 lg:py-16 px-4 md:px-20 lg:px-36">
      <div className="relative w-full max-w-110.5 h-75 md:h-100 lg:h-108.25 shrink-0">
        <Image src={img} alt={title} fill className="object-contain" priority />
      </div>

      <div className="flex flex-col gap-6 w-full max-w-150 min-w-0 text-center lg:text-left">
        <h2 className="text-dark font-sans text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          {title}
        </h2>

        <p className="text-grey text-sm md:text-base font-sans font-normal leading-relaxed">
          {maintext}
        </p>

        <div className="flex justify-center lg:justify-start">
          <Button className="px-8 py-3">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
