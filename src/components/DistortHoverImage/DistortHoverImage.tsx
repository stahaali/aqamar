"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import styles from "./DistortHoverImage.module.css";

type DistortHoverImageProps = {
  src: string;
  alt: string;
  displacementSrc?: string;
  className?: string;
};

type HoverEffectCtor = new (opts: Record<string, unknown>) => unknown;

declare global {
  interface Window {
    THREE?: typeof THREE;
    gsap?: typeof gsap;
    hoverEffect?: HoverEffectCtor;
  }
}

export default function DistortHoverImage({
  src,
  alt,
  displacementSrc = "/assets/images/webgl/1.jpg",
  className,
}: DistortHoverImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    const measure = measureRef.current;
    if (!wrapper || !canvas || !measure) return;

    let disposed = false;

    const loadScript = (srcPath: string) =>
      new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
          `script[data-hover-effect="true"]`,
        );
        if (existing && window.hoverEffect) {
          resolve();
          return;
        }
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener(
            "error",
            () => reject(new Error("hover-effect load failed")),
            { once: true },
          );
          return;
        }
        const script = document.createElement("script");
        script.src = srcPath;
        script.async = true;
        script.dataset.hoverEffect = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("hover-effect load failed"));
        document.body.appendChild(script);
      });

    const init = async () => {
      await new Promise<void>((resolve) => {
        if (measure.complete && measure.naturalWidth > 0) resolve();
        else {
          measure.onload = () => resolve();
          measure.onerror = () => resolve();
        }
      });
      if (disposed) return;

      const natW = measure.naturalWidth;
      const natH = measure.naturalHeight;
      if (!natW || !natH) return;

      wrapper.style.aspectRatio = `${natW} / ${natH}`;

      await new Promise<void>((r) =>
        requestAnimationFrame(() => requestAnimationFrame(() => r())),
      );
      if (disposed) return;

      const width = wrapper.clientWidth;
      const height = wrapper.clientHeight;
      if (width < 40 || height < 40) return;

      window.THREE = THREE;
      window.gsap = gsap;
      await loadScript("/assets/js/hover-effect.umd.js");
      if (disposed || !window.hoverEffect) return;

      canvas.replaceChildren();

      // Absolute same-origin URLs avoid CORS issues with TextureLoader
      const toAbs = (path: string) =>
        path.startsWith("http")
          ? path
          : new URL(path, window.location.origin).href;

      new window.hoverEffect({
        parent: canvas,
        intensity: 3,
        speedIn: 2,
        speedOut: 2,
        angle: Math.PI / 3,
        angle2: -Math.PI / 3,
        image1: toAbs(src),
        image2: toAbs(src),
        displacementImage: toAbs(displacementSrc),
        imagesRatio: height / width,
      });

      // Give textures a moment to upload, then reveal canvas
      await new Promise((r) => setTimeout(r, 120));
      if (!disposed) setReady(true);
    };

    init().catch(() => {
      if (!disposed) setReady(false);
    });

    return () => {
      disposed = true;
      setReady(false);
      canvas.replaceChildren();
    };
  }, [src, displacementSrc]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${ready ? styles.ready : ""} ${className ?? ""}`}
    >
      <div ref={canvasRef} className={styles.canvas} aria-hidden={!ready} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={measureRef}
        className={`${styles.img} ${styles.front}`}
        src={src}
        alt={alt}
      />
    </div>
  );
}
