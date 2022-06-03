import { BackgroundImage } from '@mantine/core'
import HeroImg from '../images/hero.png'

export default function Hero() {
  return (
    <section className='overflow-hidden'>
      <BackgroundImage src={HeroImg} className='min-h-fit'>
        <div className='h-96 justify-items-center gap-9 relative grid content-center'>
          <h1 className='font-Mont lg:text-5xl relative text-3xl tracking-wider text-white'>
            University Philharmonic Orchestra
          </h1>
          <span className='font-cursive border-y-2 text-opacity-80 w-72 border-opacity-20 tracking-widerrr lg:text-3xl lg:leading-6 text-xl leading-4 text-center text-white border-white border-solid'>
            HKUSTSU
          </span>

          {/* musical clef overlay */}
          <span className='text-99xl font-Mont -rotate-12 text-opacity-20 left-1/20 absolute text-white -translate-y-20 select-none'>
            &#x1d11e;
          </span>
          {/* gradient overlay */}
          <div className='bg-gradient-to-b from-transparent to-black absolute bottom-0 w-full h-24'></div>
        </div>
      </BackgroundImage>
    </section>
  )
}
