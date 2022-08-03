import {AspectRatio} from '@mantine/core';
import {Link} from 'react-router-dom';

type CardProps = {
  heading: string;
  subheading: string;
  image: string;
  link: string;
};

export default function Card({heading, subheading, image, link}: CardProps) {
  return (
    <Link to={link}>
      <div className="shadow-gray-400 group relative mx-auto my-12 overflow-hidden shadow-md cursor-pointer">
        <AspectRatio ratio={4 / 3}>
          <img
            src={image}
            alt={heading}
            className="group-hover:blur-sm object-top transition-all"
          />
        </AspectRatio>

        <div className="left-1/2 group-hover:w-full group-hover:rounded-none md:bottom-1/4 md:translate-y-16 backdrop-blur-sm bg-opacity-70 md:py-3 bottom-3 absolute w-2/3 px-6 py-1 transition-all -translate-x-1/2 bg-gray-700 rounded-full">
          <h3 className="font-Mont md:text-xl text-md font-bold capitalize">{heading}</h3>
          <p className="md:group-hover:block md:text-md font-Mont -tracking-wider md:tracking-normal hidden text-sm">
            {subheading}
          </p>
        </div>
      </div>
    </Link>
  );
}
