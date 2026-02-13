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
    <Container>
      <Navbar />
      <HeroSlider />
</Container>
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-dark">Our Clients</h2>
          <p className="text-grey body-2 font-regular max-w-2xl">
            We have been working with some Fortune 500+ clients
          </p>
          <div className="flex flex-wrap justify-center gap-20 mt-8">

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
        <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-dark">
            Manage your entire community <br /> in a single system
          </h2>
          <p className="text-grey font-regular body-2">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="grid gap-8 justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12">
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
        <h2 className="text-dark ">
          Caring is the new marketing
        </h2>
        <p className="text-grey body-2 font-regular max-w-2xl">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See whos joining the community, read about
          how our community are increasing their membership income and lots
          more.​
        </p>
      </div>
      <div className="flex justify-center gap-8 py-20 flex-wrap">
        {BLOG_CARDS.map((card) => (
          <BlogCard key={card.id} {...card} />
        ))}
      </div>
      </Container>
      
      <Footer />
    </>
  );
}
