"use client";

import Image from "next/image";
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src?: string;
  alt: string;
  /** Text shown on the placeholder (e.g. project title) */
  label?: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Image that degrades gracefully: if the file is missing, it shows a branded placeholder.
 * In development (`npm run dev`) the placeholder also shows which file to save and where.
 */
export default function SmartImage({ src, alt, label, className, imgClassName, sizes, priority }: Props) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className={cn("relative overflow-hidden bg-[#201D18]", className)}>
      {!showPlaceholder ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
          priority={priority}
          onError={() => setFailed(true)}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-[radial-gradient(circle_at_30%_20%,rgba(232,115,74,0.18),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(95,168,160,0.14),transparent_55%)]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(245,241,234,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(245,241,234,0.4)_1px,transparent_1px)] [background-size:24px_24px]"
          />
          {process.env.NODE_ENV === "development" && src ? (
            <>
              <ImagePlus size={22} strokeWidth={1.5} className="relative text-[#E8734A]" />
              <p className="relative text-[11px] font-mono text-[#F5F1EA]">Save image as</p>
              <code className="relative text-[11px] font-mono text-[#E8734A] break-all">public{src}</code>
            </>
          ) : (
            <span className="sr-only">{label ?? alt}</span>
          )}
        </div>
      )}
    </div>
  );
}
