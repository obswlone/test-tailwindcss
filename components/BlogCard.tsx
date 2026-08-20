import Image from "next/image";
import Link from "next/link";
import { BlogCardType } from "@/types/blogcard";

export function BlogCard({ title, image, link }: BlogCardType) {
  return (
    <article className="relative flex h-full w-full max-w-92 mx-auto lg:max-w-none flex-col">
      <div className="relative w-full aspect-[368/286] overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="relative z-10 mx-auto -mt-16 flex w-[90%] flex-1 flex-col rounded-xl bg-silver p-4 sm:p-6 text-center shadow-md min-h-44">
        <h4 className="flex-1 whitespace-pre-line font-semibold text-grey mb-3 font-sans">
          {title}
        </h4>

        <Link
          href={link}
          className="mt-auto text-primary text-[20px] leading-7 font-semibold flex items-center justify-center hover:text-primary-shade-1 transition-all"
        >
          Readmore →
        </Link>
      </div>
    </article>
  );
}
