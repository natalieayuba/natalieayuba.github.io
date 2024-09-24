import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  let animationDelay = 700;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id='home'
      className='container pt-28 md:h-[800px] gap-x-4 gap-y-16 mb-24 flex items-center flex-wrap animate-glide relative'
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div
        className='hidden min-[1440px]:block absolute w-full pl-20 overflow-hidden top-[500px]'
        style={{
          height: `${scrollY}px`,
          WebkitMaskImage:
            'linear-gradient(to bottom,black 90%,transparent 100%)',
          maskImage: 'linear-gradient(to bottom,black 90%,transparent 100%)',
        }}
      >
        <svg
          width='755'
          height='501'
          viewBox='0 0 755 501'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M750 2C746.5 19 776.867 133.799 698.5 195C593.5 277 59 288.5 1.5 499'
            stroke='#976393'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            vectorEffect='non-scaling-stroke'
            strokeDasharray='6 6'
          />
        </svg>
      </div>

      <div className='flex-1'>
        <h1 className='font-semibold text-lg pl-1.5 mb-3'>
          Hi, I&#8217;m Natalie :)
        </h1>
        <p className='heading-lg'>A Frontend Developer & UI/UX Designer</p>
        <p className='text-xl max-w-lg mt-3 leading-snug'>
          I create fun, dynamic, and user-centred digital experiences.
        </p>
      </div>
      <div className='md:flex-1 md:max-w-[465px] px-6 md:px-0 relative'>
        <Image
          src='/projects/headfirst/headfirst-preview-image.png'
          alt='Headirst Bristol sneak peak mockup'
          width={0}
          height={0}
          className='w-full relative md:left-6 animate-pop'
          style={{
            animationDuration: '500ms',
            animationDelay: `${(animationDelay += 500)}ms`,
          }}
          priority
        />
        <div className='absolute -top-10 right-0 md:-right-8'>
          <Image
            src='/decals/big-sparkle.svg'
            alt='Big sparkle'
            width={0}
            height={0}
            className='w-10 h-auto animate-pop'
            style={{
              animationDelay: `${(animationDelay += 700)}ms`,
              animationDuration: '200ms',
            }}
          />
          <Image
            src='/decals/little-sparkle.svg'
            alt='Little sparkle'
            width={0}
            height={0}
            className='w-5 h-auto -mt-16 -ml-6 animate-pop'
            style={{
              animationDelay: `${(animationDelay += 200)}ms`,
              animationDuration: '200ms',
            }}
          />
        </div>
        <div className='flex mt-3 items-start justify-center gap-6 md:absolute min-[1440px]:top-0 right-0'>
          <div
            title="A sneak peak of what I'm currently working on"
            className=' min-[1440px]:absolute -right-[250px] animate-pop'
            style={{
              animationDelay: `${(animationDelay += 400)}ms`,
              animationDuration: '300ms',
            }}
          >
            <Image
              src='/decals/sneak-peak.svg'
              alt="A sneak peak of what I'm currently working on"
              width={0}
              height={0}
              className='h-24 w-auto'
              priority
            />
          </div>
          <div
            className='mt-4 min-[1440px]:absolute top-24 -right-48 animate-pop'
            style={{
              animationDelay: `${(animationDelay += 400)}ms`,
              animationDuration: '300ms',
            }}
          >
            <div title='Check out my other projects below'>
              <Image
                src='/decals/other-projects.svg'
                alt='Check out my other projects below'
                width={0}
                height={0}
                className='h-20 w-auto'
              />
            </div>
            <Link
              href='#projects'
              title='Click to scroll to projects'
              className='w-full flex hover:mt-1 '
            >
              <Image
                src='/decals/arrow.svg'
                alt='Down arrow'
                width={0}
                height={0}
                className='ml-auto w-auto'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;