/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Mzj0g3nF9Ic
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/Button";

export type AreasProps = {
  title?: string;
  description?: string;
  hasButton: boolean;
  link?: string;
  buttonText: string;
  imageHref: string;
};

export function Areas({
  title,
  description,
  imageHref,
  hasButton = false,
  link,
  buttonText,
}: AreasProps) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 text-center shadow-sm  h-72 "
        style={{ backgroundImage: `url(${imageHref})` }}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {hasButton && <Button className="mt-4">{buttonText}</Button>}
      </div>
    </>
  );
}
