import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BackgroundImage, Modal } from '@mantine/core'
import { useState } from 'react'
import gradientSVG from '../images/gradient.svg'

type NotificationProps = {
  heading: string
  subheading: string
  icon: IconProp
  children: React.ReactNode
}

export default function Notification({
  heading,
  subheading,
  icon,
  children,
}: NotificationProps) {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <div
        className='shadow-gray-400 rounded-3xl hover:shadow-lg hover:shadow-gray-400 overflow-clip md:mx-9 relative my-6 shadow-md cursor-pointer'
        onClick={() => setModalOpened(true)}>
        <BackgroundImage src={gradientSVG} radius='lg'>
          <div className='md:px-9 px-6 py-4 text-left'>
            <div className='md:h-16 h-12 tracking-tighter'>
              <h3 className='font-Mont drop-shadow-md md:text-3xl text-2xl tracking-wide text-white capitalize'>
                {heading}
              </h3>
            </div>
            <div className=''>
              <span className='font-Inter font-extralight text-md md:text-lg text-opacity-40 text-white'>
                {subheading}
              </span>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faAngleRight}
            className='bottom-3 right-4 absolute'
            color='white'
            size='2x'
            fixedWidth
          />

          {/* icon as overlay */}
          <FontAwesomeIcon
            icon={icon}
            className='right-1/4 translate-x-2/3 rotate-12 opacity-30 absolute top-0'
            color='white'
            size='9x'
            fixedWidth
          />
        </BackgroundImage>
      </div>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title={heading}
        classNames={{
          modal: 'bg-slate-700 text-white pt-3 rounded-xl',
          close: 'text-gray-400 hover:bg-gray-800 rounded-lg',
          title: 'font-Inter text-lg font-bold tracking-wider',
        }}
        centered
        overlayBlur={1}
        size='lg'
        transition='slide-up'
        transitionDuration={300}>
        {children}
      </Modal>
    </>
  )
}
