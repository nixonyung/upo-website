import { HashLink as Link } from 'react-router-hash-link'
import StyledNavLink from './StyledNavLink'
import StyledNavLogo from './StyledNavLogo'

export default function Navbar() {
  return (
    <nav className='max-w-7xl fixed top-0 left-0 right-0 z-40 flex items-center h-20 gap-1 px-6 py-3 mx-auto'>
      <Link to='/#top' smooth>
        <StyledNavLogo />
      </Link>
      <span className='flex-grow'></span>
      <StyledNavLink to='/#news'>News</StyledNavLink>
      <StyledNavLink to={{ pathname: '/', hash: '#join' }}>
        Join Us
      </StyledNavLink>
      <StyledNavLink to={{ pathname: '/', hash: '#about' }}>
        About
      </StyledNavLink>
      <StyledNavLink to='concerts'>Concerts</StyledNavLink>
      <StyledNavLink to='cabinet'>Cabinet</StyledNavLink>
      <StyledNavLink to='/#contact'>Contact</StyledNavLink>
      <StyledNavLink to='/#links'>Links</StyledNavLink>
    </nav>
  )
}
