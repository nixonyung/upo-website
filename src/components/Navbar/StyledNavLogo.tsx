import {Image} from '@mantine/core';
import {Link} from 'react-router-dom';
import Logo from '../../images/logo.svg';

export default function StyledNavLogo() {
  return (
    <Link to="/#">
      <div className="select-none">
        <Image src={Logo} alt="UPO logo" width="auto" height={40} />
      </div>
    </Link>
  );
}
