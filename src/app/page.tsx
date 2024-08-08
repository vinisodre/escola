
import { BlogBlock } from "@/components/Blog-block";
import { Hero } from "@/components/Hero";
import { ImageGalery } from "@/components/ImageGaleryBlock";
import { ImageTextBlock } from "@/components/ImageTextBlock";
import { TwoColumnsText } from "@/components/TwoColumnsText";
import AreaBlock from "@/components/ui/AreaBlock";
import Image from "next/image";

import { areas, imagesExamples, blogPosts } from '@/constants';


export default function Home() {
  return (
    <main className="">
      <Hero 
        title="Lorem ipsum dolor sit."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        hasButton
        link="/"
        linkText="Saiba mais"
      />
     <AreaBlock areas={areas} />
      
      <TwoColumnsText 
        title="Sobre nós" 
        column1="Nossa história e nossa missão."
        column2=" Nossos valores."
        hasButton
        />

      <ImageTextBlock 
        title="Nossos Serviços"
        description="Aqui mostraremos os nossos Serviços e os valores que nos foram dadas."
        hasTwoButtons
        linkButtonOne="/"
        linkButtonTwo="/"
        buttonTextOne="Saiba mais"
        buttonTextTwo="Saiba ainda mais"
        image= "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="teste"
        />

      <ImageGalery title="Título" description="um subtitulo para chamar a atenção" galery={imagesExamples} />
      
      <BlogBlock blockTitle="Artigos do nosso blog" posts={blogPosts} hasButton/>
    </main>
  );
}
