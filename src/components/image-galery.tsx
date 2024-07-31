/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ZNu2CD71Q0K
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function ImageGalery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 mx-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Mosaic Gallery</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover a captivating collection of diverse images in our mosaic gallery.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={400}
              height={600}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={400}
              height={600}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={400}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Gallery Image"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-all group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
