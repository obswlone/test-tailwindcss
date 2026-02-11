import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white mt-4">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <Image
            src="/footer_nexcent.svg"
            alt="Nexcent"
            width={191}
            height={30}
          />

          <p className="text-sm text-white">
            Copyright © 2020 Landify UI Kit.
            <br />
            All rights reserved
          </p>

          <ul className="flex gap-4">
            <li>
              <Link href="#">
                <Image
                  src="/insta.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src="/ball.svg" alt="Dribbble" width={32} height={32} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/twitter.svg"
                  alt="Twitter"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-sm text-white">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contact us</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Testimonials</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Support</p>
          <ul className="flex flex-col gap-2 text-sm text-white">
            <li>
              <Link href="#">Help center</Link>
            </li>
            <li>
              <Link href="#">Terms of service</Link>
            </li>
            <li>
              <Link href="#">Legal</Link>
            </li>
            <li>
              <Link href="#">Privacy policy</Link>
            </li>
            <li>
              <Link href="#">Status</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 max-w-xs">
          <label className="font-semibold">Stay up to date</label>
          <input
            type="email"
            placeholder="Your email address"
            className="bg-grey/20 px-4 py-2 rounded-md text-sm placeholder:text-grey focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </footer>
  );
}
