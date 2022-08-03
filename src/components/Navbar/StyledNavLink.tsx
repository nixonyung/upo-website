import {NavLink} from 'react-router-dom';

type StyledNavLinkProps = {
  children: React.ReactNode;
  to: Partial<Location> | string;
};

export default function StyledNavLink({children, to}: StyledNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({isActive}) =>
        `${
          isActive ? 'border-b-2' : ''
        } font-MontAlt hover:not-italic px-3 pt-3 pb-1 italic uppercase transition-all border-gray-200 border-solid text-white`
      }
    >
      {children}
    </NavLink>
  );
}
