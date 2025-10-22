"use client";

import React, { useEffect, useState } from "react";
import NextImage from "next/image";

type PhoneImageProps = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export default function PhoneImage({
  src,
  width = 240,
  height = 480,
  alt = "Mockup de celular",
  className,
  priority = false,
}: PhoneImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const threshold = 245; // remove quase-branco
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        // Se for branco/quase branco, tornar transparente
        if (r >= threshold && g >= threshold && b >= threshold) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      const url = canvas.toDataURL("image/png");
      setProcessedSrc(url);
    };
  }, [src]);

  return (
    <NextImage
      src={processedSrc || src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}