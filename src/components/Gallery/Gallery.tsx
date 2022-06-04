import { GalleryItem } from './GalleryItem'

type GalleryProps = {
  items: Array<{ image: string; heading: string; subheading?: string | null }>
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className='lg:left-1/2 lg:-ml-[calc(50vw-15px)] relative flex flex-wrap lg:justify-around md:justify-between lg:w-[calc(100vw-30px)] gap-x-3 gap-y-20'>
      {items.map((item) => (
        <GalleryItem {...item} key={item.heading} />
      ))}
    </div>
  )
}
