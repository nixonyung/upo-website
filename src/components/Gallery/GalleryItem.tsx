import { Image } from '@mantine/core'

type GalleryItemProps = {
  image: string
  heading: string
  subheading: string
}

export function GalleryItem({ image, heading, subheading }: GalleryItemProps) {
  return (
    <div className='relative w-full md:w-[45%] lg:w-[30%]'>
      <Image src={image} />
      <div className='left-1/2 bg-opacity-70 bottom-1/4 backdrop-blur-sm absolute w-full px-6 py-2 text-center -translate-x-1/2 translate-y-1/2 bg-gray-700'>
        <span className='text-lg font-bold'>{heading}</span>
        <br />
        <span className='text-sm'>{subheading}</span>
      </div>
    </div>
  )
}
