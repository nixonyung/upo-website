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
    <NavLink {...props} className='font-Mont px-3 pt-3 pb-1 uppercase' smooth>
      {children}
    </NavLink>
  )
}
