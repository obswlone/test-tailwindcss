import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-360 mx-auto px-6 lg:px-36 py-14 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <Image
            src="/footer_nexcent.svg"
            alt="Nexcent"
            width={191}
            height={30}
          />
          <p className="text-sm text-white/80">
            Copyright © 2020 Landify UI Kit.
            <br />
            All rights reserved
          </p>
          <ul className="flex gap-4">
            {["insta", "ball", "twitter", "youtube"].map((social) => (
              <li key={social}>
                <Link href="#">
                  <Image
                    src={`/${social}.svg`}
                    alt={social}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-7.5 w-full md:w-auto">
          <div className="min-w-40">
            <h4 className="mb-4 ">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-40">
            <h4 className="mb-4">Support</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 max-w-xs w-full">
            <label className="text-[20px] leading-7 font-semibold">
              Stay up to date
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 px-4 py-2.5 rounded-md text-sm placeholder:text-grey/60 focus:outline-none focus:ring-1 focus:ring-primary pr-10"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
