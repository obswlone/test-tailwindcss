import HeroSlider from "@/components/HeroSlider";
import { CARDS } from "@/data/cards";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { BODYPARTS } from "@/data/bodyparts";
import { BodyPart } from "@/components/BodyPart";
import { BLOG_CARDS } from "@/data/blogcards";
import { BlogCard } from "@/components/BlogCard";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const firstPart = BODYPARTS.find((item) => item.id === "1");
  const secondPart = BODYPARTS.find((item) => item.id === "2");
  return (
    <>
      
        <Navbar />
        <HeroSlider />
     
      <Container>
        <div className="flex flex-col items-center justify-center py-10">
          <div className="text-center px-4 mb-8">
            <h2 className="text-dark font-semibold mb-2">Our Clients</h2>
            <p className="text-grey body-2 font-regular max-w-2xl mx-auto">
              We have been working with some Fortune 500+ clients
            </p>
          </div>

          <div className="w-full px-4 md:px-20 lg:px-36">
            <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 lg:gap-20">
              <Image src="/logo2.svg" alt="Client 1" width={48} height={48} />
              <Image src="/logo1.svg" alt="Client 2" width={48} height={48} />
              <Image src="/logo3.svg" alt="Client 3" width={48} height={48} />
              <Image src="/logo4.svg" alt="Client 4" width={48} height={48} />
              <Image src="/logo5.svg" alt="Client 5" width={48} height={48} />
              <Image src="/logo6.svg" alt="Client 6" width={48} height={48} />
              <Image src="/logo7.svg" alt="Client 7" width={48} height={48} />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-dark">
            Manage your entire community <br /> in a single system
          </h2>
          <p className="text-grey font-regular body-2">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12 px-4 md:px-20 lg:flex-row lg:justify-between lg:px-36">
          {CARDS.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Container>
      {firstPart && (
        <Container>
          <BodyPart {...firstPart} />
        </Container>
      )}

      {secondPart && (
        <Container>
          <BodyPart {...secondPart} />
        </Container>
      )}
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-dark ">Caring is the new marketing</h2>
          <p className="text-grey body-2 font-regular max-w-2xl">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See whos joining the
            community, read about how our community are increasing their
            membership income and lots more.
          </p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-y-28 py-20 px-4 md:px-20 lg:px-36">
          {BLOG_CARDS.map((card) => (
            <BlogCard key={card.id} {...card} />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
}
