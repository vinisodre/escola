/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Rop01GTOmNu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these fonts, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";
import { professores } from "@/constants";
import { useState } from "react";
import { Button } from "./ui/button";

export function MyTeam() {
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const handleProfessorClick = (professor) => {
    setSelectedProfessor(professor);
  };

  const handleCloseModal = () => {
    setSelectedProfessor(null);
  };

  return (
    <section className="container mx-auto py-12 px-4 md:px-6 lg:py-16">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our talented team of experts is dedicated to delivering exceptional
            results for our clients.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
        {professores.map((professor, index) => (
          <div
            className="flex flex-col items-center justify-center space-y-4"
            key={index}
            onClick={() => handleProfessorClick(professor)}
          >
            <img
              src="https://images.unsplash.com/photo-1692827728176-955e9588dede?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              width={100}
              height={100}
              className="rounded-full w-32 h-32"
            />
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-semibold">{professor.name}</h3>
              <p className="text-sm text-muted-foreground">
                {professor.disciplina}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedProfessor && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-background">
          <div className="flex flex-col justify-center items-center bg-primary-foreground p-6 rounded-lg relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-4 muted">X</button>
          <img
              src="https://images.unsplash.com/photo-1692827728176-955e9588dede?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              width={100}
              height={100}
              className="rounded-full w-32 h-32 my-4  "
            />
            <h2 className="text-xl font-semibold">{selectedProfessor.name}</h2>
              <p>{selectedProfessor.disciplina}</p>
            <p className="text-sm text-muted-foreground my-4">
              <div>
                <div className="text-wrap">{selectedProfessor.bio}</div>
              </div>

            </p>
            <Button className="my-4 w-32">Ver página</Button>
          </div>
        </div>
      )}
    </section>
  );
}
