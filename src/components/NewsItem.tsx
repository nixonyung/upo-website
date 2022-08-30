import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BackgroundImage, Modal} from '@mantine/core';
import {useState} from 'react';
import gradientSVG from '../images/gradient.svg';

type NewsItemProps = {
  heading: string;
  subheading: React.ReactNode;
  icon: IconProp;
  children: React.ReactNode;
};

export default function NewsItem({heading, subheading, icon, children}: NewsItemProps) {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className=" rounded-3xl my-9 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setModalOpened(true)}
        onKeyPress={e => {
          if (e.key === 'Enter') setModalOpened(true);
        }}
      >
        <BackgroundImage src={gradientSVG} radius="lg">
          <div className="md:px-9 px-5 py-4 text-left">
            <div className="w-11/12 tracking-tighter">
              <h3 className="font-Mont drop-shadow-md md:text-3xl md:tracking-wide text-2xl text-white capitalize">
                {heading}
              </h3>
            </div>
            <div className="w-2/3 mt-6">
              <div className="font-Mont md:text-lg text-opacity-70 text-md font-lighter text-white">
                {subheading}
              </div>
            </div>
          </div>

          <FontAwesomeIcon
            icon={faAngleRight}
            className="bottom-3 right-1 md:right-4 opacity-30 md:opacity-80 absolute"
            color="white"
            size="2x"
            fixedWidth
          />

          {/* icon as overlay */}
          <FontAwesomeIcon
            icon={icon}
            className="right-1/4 translate-x-2/3 rotate-12 opacity-10 absolute top-0"
            color="white"
            size="9x"
            fixedWidth
          />
        </BackgroundImage>
      </div>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title={heading}
        classNames={{
          modal: 'bg-slate-800 text-white pt-3 rounded-xl',
          close: 'text-gray-400 hover:bg-gray-800 rounded-lg',
          title: 'font-Inter text-lg font-bold tracking-wider capitalize',
          body: 'font-Inter',
        }}
        centered
        overflow="inside"
        overlayBlur={2}
        size="lg"
        transition="slide-up"
        transitionDuration={300}
      >
        {children}
      </Modal>
    </>
  );
}
