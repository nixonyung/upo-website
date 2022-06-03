import { NavLink } from 'react-router-dom'

type StyledNavLinkProps = {
  children: React.ReactNode
  to: string
}

export default function StyledNavLink({
  children,
  ...props
}: StyledNavLinkProps) {
  return (
    <NavLink
      {...props}
      className='font-Mont px-3 pt-3 pb-1 uppercase'
      style={({ isActive }) =>
        isActive
          ? {
              borderBottom: '3px solid white',
            }
          : {}
      }>
      {children}
    </NavLink>
  )
}
