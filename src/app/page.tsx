import { Hero } from "@/components/sections/hero";
import { Company } from "@/components/sections/company";
import { About } from "@/components/sections/about";
import { Advantages } from "@/components/sections/advantages";
import { Flavors } from "@/components/sections/flavors";
import { Branding } from "@/components/sections/branding";
import { Partnership } from "@/components/sections/partnership";
import { Pricing } from "@/components/sections/pricing";
import { Geography } from "@/components/sections/geography";
import { Documents } from "@/components/sections/documents";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";


export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <About />
      <Flavors />
      <Branding />
      <Geography />
      <Advantages />
      <Partnership />
      <Pricing />
      <Documents />
      <FAQ />
      <Contact />
    </>
  );
}
