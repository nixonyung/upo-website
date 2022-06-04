import { BackgroundImage } from '@mantine/core'
import HeroImg from '../images/hero.jpg'

export default function Hero() {
  const LineDecoration = () => (
    <span className='lg:w-64 md:w-44 inline-block w-20 border-b-2 border-white border-opacity-50 border-solid'></span>
  )

  return (
    <section className='overflow-hidden'>
      <BackgroundImage src={HeroImg} className='h-fit'>
        <div className='h-96 place-items-center sm:gap-9 relative grid content-center gap-12'>
          <h1 className='font-Mont lg:text-5xl relative text-3xl tracking-wider text-center text-white'>
            University Philharmonic Orchestra
          </h1>
          <div className='flex items-center gap-3'>
            <LineDecoration />
            <span className='font-Mont text-opacity-80 lg:text-xl text-lg text-white'>
              HKUSTSU
            </span>
            <LineDecoration />
          </div>

          {/* musical clef overlay */}
          <span className='lg:text-99xl text-9xl font-Mont -rotate-12 text-opacity-20 left-1/20 top-1/2 absolute text-white -translate-y-1/2 select-none'>
            &#x1d11e;
          </span>

          {/* gradient overlay */}
          <div className='bg-gradient-to-b from-transparent to-black absolute bottom-0 w-full h-24'></div>
        </div>
      </BackgroundImage>
    </section>
  )
}
