import GalleryItem from './GalleryItem';

type GalleryProps = {
  items: Array<{heading: string; subheading?: string | null; image: string}>;
  squareModal?: boolean;
  firstAtCenter?: boolean;
};

export default function Gallery({items, squareModal = false, firstAtCenter = false}: GalleryProps) {
  return (
    <div className="lg:left-1/2 lg:-ml-[calc(50vw-15px)] relative flex flex-wrap lg:justify-around md:justify-between lg:w-[calc(100vw-30px)] gap-x-3 gap-y-20 my-12">
      {items.map((item, idx) => (
        <GalleryItem
          heading={item.heading}
          subheading={item.subheading}
          image={item.image}
          squareModal={squareModal}
          firstAtCenter={firstAtCenter && idx === 1}
          key={item.heading}
        />
      ))}
    </div>
  );
}
