/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ZZtesqhpE3X
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
import { footerMenu } from "@/constants"

export function Footer() {
  return (
    <footer className="bg-muted w-full pt-6">
      <div className="bg-accent md:py-12 lg:py-16 flex flex-col justify-center items-center mx-auto">
        <div className="container px-4 md:px-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <Link href="#" className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6" />
              <span className="font-medium">Acme Inc</span>
            </Link>
            <p className="text-muted-foreground">
              Beautifully designed components that you can copy and paste into your apps.
            </p>
          </div>
          {footerMenu.map((item, index) => (
            <div key={index} className="grid gap-1">
              <h3 className="font-semibold">{item.title}</h3>
              {item.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="container px-4 md:px-6 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; 2024.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:underline">
              Feito com carinho por Vinicius Sodré
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


