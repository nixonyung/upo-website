import {Image} from '@mantine/core';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.png';

export default function StyledNavLogo() {
  return (
    <Link to="/#">
      <div className="flex items-center select-none">
        <Image src={Logo} height={40} width={40} />
        <span className="font-Mont ml-2 text-lg">UST</span>
        <span className="font-Mont tracking-widerrr ml-3 text-lg font-bold">UPO</span>
      </div>
    </Link>
  );
}
