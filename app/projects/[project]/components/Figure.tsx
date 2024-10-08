'use client';
import { appendClassName } from '@/utils/formatting';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export interface FigureProps {
  caption: string;
  children: React.ReactNode;
}

interface FigureImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface FigureVideoProps {
  src: string;
  poster?: string;
}

export const FigureImage = ({ src, alt, className }: FigureImageProps) => (
  <Image
    key={src}
    src={src}
    alt={alt}
    width={0}
    height={0}
    sizes='100vw'
    className={`rounded-3xl flex-1 h-auto${appendClassName(className)}`}
  />
);

export const MockupVideo = ({ src, poster }: FigureVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      const observer = new IntersectionObserver(([entry]) =>
        setVisible(entry.isIntersecting)
      );
      observer.observe(video);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (video) {
      visible ? video.play() : video.pause();
    }
  }, [visible, ref]);

  return (
    <>
      <div className='absolute z-0 w-[80%] aspect-[4/3] overflow-hidden'>
        <video
          loop
          playsInline
          muted
          ref={ref}
          poster={poster}
          className='scale-125 absolute top-[11%]'
        >
          <source src={src} />
        </video>
      </div>
      <FigureImage
        src='/projects/desktop-mockup.png'
        alt='Desktop mockup'
        className='z-0'
      />
    </>
  );
};

MockupVideo.displayName = 'MockupVideo';

const Figure = ({ caption, children }: FigureProps) => {
  const [figureIndex, setFigureIndex] = useState(0);

  useEffect(() => {
    const captions = document.getElementsByTagName('figcaption');
    setFigureIndex(
      Array.from(captions).findIndex(({ innerText }) =>
        innerText.includes(caption)
      ) + 1
    );
  }, [caption]);

  return (
    <figure className='mt-12 mb-4 w-full [&&]:max-w-none relative'>
      <div className='flex justify-center gap-[2.5vw] w-full flex-wrap'>
        {children}
      </div>
      <figcaption className='secondary-text my-8 text-center mx-auto max-w-xl'>
        {figureIndex && `1.${figureIndex}. `}
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
