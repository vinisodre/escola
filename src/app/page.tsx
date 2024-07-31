import { Areas } from "@/components/areas";
import { BlogBlock } from "@/components/blog-block";
import { Hero } from "@/components/hero";
import { ImageGalery } from "@/components/image-galery";
import { ImageTextBlock } from "@/components/image-text-block";
import { TwoColumnsText } from "@/components/two-columns-text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Areas />
      <TwoColumnsText />
      <ImageTextBlock />
      <ImageGalery />
      <BlogBlock />
    </main>
  );
}
