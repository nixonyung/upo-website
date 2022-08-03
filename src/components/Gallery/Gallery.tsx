import {GalleryItem} from './GalleryItem';

type GalleryProps = {
  items: Array<{heading: string; subheading?: string | null; image: string}>;
  squareModal?: boolean;
  firstAtCenter?: boolean;
};

export default function Gallery({items, squareModal, firstAtCenter}: GalleryProps) {
  return (
    <div className="lg:left-1/2 lg:-ml-[calc(50vw-15px)] relative flex flex-wrap lg:justify-around md:justify-between lg:w-[calc(100vw-30px)] gap-x-3 gap-y-20 my-12">
      {firstAtCenter ?? false
        ? items.map((item, idx) => (
            <GalleryItem
              {...item}
              squareModal={squareModal}
              firstAtCenter={idx === 1}
              key={item.heading}
            />
          ))
        : items.map((item, idx) => (
            <GalleryItem {...item} squareModal={squareModal} key={item.heading} />
          ))}
    </div>
  );
}
