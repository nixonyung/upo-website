import { Link } from 'react-router-dom'
import StyledNavLink from './StyledNavLink'
import StyledNavLogo from './StyledNavLogo'

export default function Navbar() {
  return (
    <div className='max-w-7xl fixed top-0 left-0 right-0 z-40 flex items-center h-20 gap-1 px-6 py-3 mx-auto'>
      <Link to='/'>
        <StyledNavLogo />
      </Link>
      <span className='flex-grow'></span>
      <StyledNavLink to='/#news'>News</StyledNavLink>
      <StyledNavLink to='/#join'>Join Us</StyledNavLink>
      <StyledNavLink to='/#about'>About</StyledNavLink>
      <StyledNavLink to='concerts'>Concerts</StyledNavLink>
      <StyledNavLink to='cabinet'>Cabinet</StyledNavLink>
      <StyledNavLink to='/#contact'>Contact</StyledNavLink>
      <StyledNavLink to='/#links'>Links</StyledNavLink>
    </div>
  )
}
