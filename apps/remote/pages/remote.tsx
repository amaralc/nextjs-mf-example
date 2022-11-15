import dynamic from 'next/dynamic';

//@ts-ignore
const HeroSection = dynamic(() => import('shell/components/HeroSection'));

const Remote = () => {
  return (
    //@ts-ignore
    <HeroSection slug={'remote'} title={'Remote'} backgroundColor={'#33f'} />
  );
};

export default Remote;
