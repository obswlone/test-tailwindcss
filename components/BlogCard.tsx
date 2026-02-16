import Image from "next/image";
import Link from "next/link";
import { BlogCardType } from "@/types/blogcard";

export function BlogCard({ title, image, link }: BlogCardType) {
  return (
    <div className="relative w-full max-w-92 h-71.5 mb-24 lg:mb-0">
      <Image
        src={image}
        alt={title}
        width={368}
        height={286}
        className="rounded-xl object-cover w-full h-full"
      />

      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-silver rounded-xl p-6 text-center w-[90%] sm:w-79.25 min-h-44 shadow-md flex flex-col justify-center">
        <h4 className="whitespace-pre-line font-semibold text-grey mb-3 font-sans">
          {title}
        </h4>

        <Link
          href={link}
          className="text-primary text-[20px] leading-7 font-semibold flex items-center justify-center hover:text-primary-shade-1 transition-all"
        >
          Readmore →
        </Link>
      </div>
    </div>
  );
}
