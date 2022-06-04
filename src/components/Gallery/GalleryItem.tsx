import { AspectRatio, Image } from '@mantine/core'

type GalleryItemProps = {
  image: string
  heading: string
  subheading?: string | null
}

export function GalleryItem({ image, heading, subheading }: GalleryItemProps) {
  return (
    <div className='relative w-full md:w-[45%] lg:w-[30%] shadow-lg shadow-gray-400 '>
      <AspectRatio ratio={1 / 1}>
        <Image src={image} />
      </AspectRatio>

      <div className='left-1/2 bg-opacity-70 bottom-1/4 backdrop-blur-sm translate-y-2/3 absolute w-full px-6 py-6 text-center -translate-x-1/2 bg-gray-700'>
        <span className='text-lg font-bold'>{heading}</span>
        <br />
        <span className='text-sm'>{subheading}</span>
      </div>
    </div>
  )
}
