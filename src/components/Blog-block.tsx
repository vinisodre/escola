/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nEs0DYVe64E
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link";
import { Button } from "./ui/Button";
import ArrowRightIcon from "./ui/ArrowRightIcon";
import BlogCard, { BlogCardProps } from "./ui/BlogCard"; // Importando BlogCardProps

type BlogBlockProps = {
  blockTitle?: string;
  hasButton: boolean;
  posts: BlogCardProps[];
};

export function BlogBlock({ blockTitle, posts, hasButton=false }: BlogBlockProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {blockTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              description={item.description}
              link={item.link}
              buttonText={item.buttonText}
              imageHref={item.imageHref}
              alt={item.alt}
            />
          ))}
        </div>
        {hasButton && (
          <div className="flex justify-end mt-12">
          <Link href="/blog"> 
            <Button variant="link" className="">
              Ver mais artigos <ArrowRightIcon className="ml-1 w-4 h-4" />
            </Button>
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
