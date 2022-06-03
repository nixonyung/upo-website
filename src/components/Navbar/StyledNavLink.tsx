import { NavHashLink as NavLink } from 'react-router-hash-link'

type StyledNavLinkProps = {
  children: React.ReactNode
  to: Partial<Location> | string
}

export default function StyledNavLink({
  children,
  ...props
}: StyledNavLinkProps) {
  return (
    <NavLink
      {...props}
      className='font-MontAlt hover:not-italic hover:border-b-2 px-3 pt-3 pb-1 italic uppercase transition-all border-gray-200 border-solid'
      smooth>
      {children}
    </NavLink>
  )
}
