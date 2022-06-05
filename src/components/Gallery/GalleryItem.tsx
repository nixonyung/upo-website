import { AspectRatio, Image, Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'

type GalleryItemProps = {
  image: string
  heading: string
  subheading?: string | null
  squareModal?: boolean | null
}

export function GalleryItem({
  image,
  heading,
  subheading,
  squareModal,
}: GalleryItemProps) {
  const [modalOpened, setModalOpened] = useState(false)

  const md = useMediaQuery('(min-width: 768px)')
  const lg = useMediaQuery('(min-width: 1024px)')

  const modalSize =
    squareModal ?? false
      ? lg
        ? '50%'
        : md
        ? '70%'
        : '90%'
      : lg
      ? '30%'
      : md
      ? '60%'
      : '90%'

  return (
    <>
      <div
        className='relative w-full md:w-[45%] lg:w-[30%] shadow-md shadow-gray-400 cursor-pointer hover:shadow-lg hover:shadow-gray-400'
        onClick={() => setModalOpened(true)}>
        <AspectRatio ratio={1 / 1}>
          <img src={image} />
        </AspectRatio>

        <div className='left-1/2 bg-opacity-70 bottom-1/4 backdrop-blur-sm translate-y-2/3 absolute w-full px-6 py-6 text-center -translate-x-1/2 bg-gray-700'>
          <span className='text-lg font-bold'>{heading}</span>
          <br />
          <span className='text-sm'>{subheading}</span>
        </div>
      </div>

      <Modal
        opened={modalOpened}
        onClick={() => setModalOpened(false)}
        onClose={() => setModalOpened(false)}
        size={modalSize}
        centered
        withCloseButton={false}
        classNames={{ modal: 'p-0 bg-transparent' }}>
        <Image src={image} />
      </Modal>
    </>
  )
}
