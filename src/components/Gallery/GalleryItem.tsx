import {AspectRatio, Image, Modal} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import {useState} from 'react';

type GalleryItemProps = {
  image: string;
  heading: string;
  subheading?: string | null;
  squareModal?: boolean;
  firstAtCenter?: boolean;
};

export default function GalleryItem({
  image,
  heading,
  subheading = null,
  squareModal = false,
  firstAtCenter = false,
}: GalleryItemProps) {
  const [modalOpened, setModalOpened] = useState(false);

  const md = useMediaQuery('(min-width: 768px)');
  const lg = useMediaQuery('(min-width: 1024px)');

  let modalSize;
  if (lg) modalSize = squareModal ? '30%' : '50%';
  else if (md) modalSize = squareModal ? '60%' : '70%';
  else modalSize = '90%';

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={`${
          firstAtCenter ? 'lg:order-first' : ''
        } relative w-full md:w-[45%] lg:w-[30%] shadow-md shadow-gray-400 cursor-pointer hover:shadow-lg hover:shadow-gray-400`}
        onClick={() => setModalOpened(true)}
        onKeyDown={e => {
          if (e.key === 'Enter') setModalOpened(true);
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <img src={image} alt={heading} />
        </AspectRatio>

        <div className="left-1/2 bg-opacity-70 bottom-1/4 backdrop-blur-sm absolute w-full px-6 py-3 text-center -translate-x-1/2 translate-y-16 bg-gray-700">
          <span className="text-lg font-bold">{heading}</span>
          <br />
          <span className="text-sm">{subheading}</span>
        </div>
      </div>

      <Modal
        opened={modalOpened}
        onClick={() => setModalOpened(false)}
        onClose={() => setModalOpened(false)}
        size={modalSize}
        centered
        withCloseButton={false}
        classNames={{modal: 'p-0 bg-transparent'}}
      >
        <Image src={image} />
      </Modal>
    </>
  );
}
