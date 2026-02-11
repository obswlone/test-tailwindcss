import HeroSlider from "@/components/HeroSlider";
import { CARDS } from "@/data/cards";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <nav className="flex bg-silver h-20 items-center justify-between px-8 lg:px-24">
        <Image src="/nexcent.svg" alt="Nexcent Logo" width={155} height={24} />

        <ul className="flex items-center gap-12 font-medium">
          <li>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              Feature
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <button className="text-primary px-5 py-2 hover:bg-black/5 rounded-md transition-all">
            Login
          </button>
          <button className="bg-primary text-white px-5 py-2 rounded-md hover:bg-primary-shade-1 transition-all">
            Sign up
          </button>
        </div>
      </nav>

      <HeroSlider />

      <Container>
        <div className="flex flex-col items-center justify-between">
          <h2 className="font-semibold text-dark-grey">Our Clients</h2>
          <h4 className="text-grey/50 font-regular">
            We have been working with some Fortune 500+ clients
          </h4>
          <div className="flex gap-40 mt-3.5 ">
            <Image src="/logo2.svg" alt="" width={48} height={48} />
            <Image src="/logo1.svg" alt="" width={48} height={48} />
            <Image src="/logo3.svg" alt="" width={48} height={48} />
            <Image src="/logo4.svg" alt="" width={48} height={48} />
            <Image src="/logo5.svg" alt="" width={48} height={48} />
            <Image src="/logo6.svg" alt="" width={48} height={48} />
            <Image src="/logo7.svg" alt="" width={48} height={48} />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center justify-between ">
          <h2 className="font-semibold text-center text-dark-grey">
            Manage your entire community <br /> in a single system
          </h2>
          <h4 className="text-grey/50 font-regular">
            Who is Nextcent suitable for?
          </h4>
        </div>

        <div className="flex gap-6 justify-center">
          {CARDS.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
}
