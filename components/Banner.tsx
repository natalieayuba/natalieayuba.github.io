import { headerHeight } from '@/config';

const Banner = () => {
  return (
    <div
      className='flex items-center'
      style={{ height: `calc(100vh - ${headerHeight})` }}
      id='#home'
    >
      <div className='-mt-20'>
        <div className='max-w-[600px]'>
          <h1 className='text-5xl md:text-8xl flex flex-col font-bold'>
            <span className='text-lg md:text-4xl font-semibold'>Hi there, </span>
            I&#8217;m Natalie.
          </h1>
          <p className='text-[22px] md:text-[44px] font-bold mb-3'>
            A developer and designer.
          </p>
          <p className='text-base md:text-2xl'>
            I&#8217;m all about creating engaging and user-friendly web and
            mobile experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
