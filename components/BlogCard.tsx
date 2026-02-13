import Image from "next/image";
import Link from "next/link";
import { BlogCardType } from "@/types/blogcard";

export function BlogCard({ title, image, link }: BlogCardType) {
  return (
    <div className="relative w-92 h-92.5 rounded-xl overflow-hidden ">
      <Image src={image} alt={title} width={368} height={286} />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-silver rounded-xl p-6 text-center w-79.25 h-44 shadow-md">
        <h4 className="whitespace-pre-line font-semibold text-grey mb-3 font-sans">
          {title}
        </h4>

        <Link
          href={link}
          className="text-primary text-[20px] leading-7 font-semibold flex items-center justify-center hover:text-primary-shade-1 transition-all "
        >
          Readmore →
        </Link>
      </div>
    </div>
  );
}
