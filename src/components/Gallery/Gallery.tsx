import { GalleryItem } from './GalleryItem'

type GalleryProps = {
  items: Array<{ image: string; heading: string; subheading: string }>
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div className='flex flex-wrap justify-around gap-6'>
      {items.map((item) => (
        <GalleryItem {...item} key={item.heading} />
      ))}
    </div>
  )
}
