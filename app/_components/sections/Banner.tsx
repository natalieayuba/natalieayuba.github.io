import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

const Banner = forwardRef<HTMLElement>((props, ref) => (
  <section
    id='home'
    className='pt-24 md:h-[700px] gap-y-16 flex items-center relative flex-wrap'
    ref={ref}
  >
    {/* <Image
      src='/images/decals/banner-line.svg'
      alt='Curve'
      width={0}
      height={0}
      className='w-full max-w-2xl h-auto absolute top-80 left-48'
    /> */}
    <div className='flex-1'>
      <h1 className='font-semibold text-xl pl-1.5 mb-3'>
        Hi, I&#8217;m Natalie :)
      </h1>
      <p className='font-bold text-4xl sm:text-5xl mb-2 [&&]:leading-[120%]'>
        A Frontend Developer <br /> & UI/UX Designer.
      </p>
      <p className='text-2xl max-w-md mt-3 leading-snug'>
        I create fun, dynamic, and user-centred digital experiences.
      </p>
    </div>
    <div className='md:flex-1 md:max-w-md px-6 md:px-0 relative'>
      <Image
        src='/images/projects/headfirst/headfirst-preview.png'
        alt='Headirst Bristol sneak peak mockup'
        width={0}
        height={0}
        className='w-full relative md:left-6'
        priority
      />
      <div className='absolute -top-10 right-0 md:-right-8'>
        <Image
          src='/images/decals/big-sparkle.svg'
          alt='Big sparkle'
          width={0}
          height={0}
          className='w-10 h-auto'
        />
        <Image
          src='/images/decals/little-sparkle.svg'
          alt='Little sparkle'
          width={0}
          height={0}
          className='w-5 h-auto -mt-16 -ml-6'
        />
      </div>

      <div className='flex mt-3 items-start justify-center gap-6 md:absolute min-[1440px]:top-0 right-0'>
        <div
          title="A sneak peak of what I'm currently working on"
          className=' min-[1440px]:absolute -right-[250px]'
        >
          <Image
            src='/images/decals/sneak-peak.svg'
            alt="A sneak peak of what I'm currently working on"
            width={0}
            height={0}
            className='h-24 w-auto'
          />
        </div>
        <div className='mt-4 min-[1440px]:absolute top-24 -right-48'>
          <div title='Check out my other projects below'>
            <Image
              src='/images/decals/other-projects.svg'
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
              src='/images/decals/arrow.svg'
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
));

Banner.displayName = 'Banner';

export default Banner;
