import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionIcon } from '@mantine/core'
import { useViewportSize, useWindowScroll } from '@mantine/hooks'
import NavItems from './NavItems.json'
import StyledNavLink from './StyledNavLink'
import StyledNavLogo from './StyledNavLogo'

export default function Navbar() {
  const [scroll, ,] = useWindowScroll()
  const { width } = useViewportSize()

  const laptopNavbar = (
    <nav
      className={`${
        scroll.y > 100 ? 'backdrop-blur-lg' : ''
      } fixed top-0 inset-x-0 z-40 flex items-center justify-center h-20 gap-3 px-6 py-3 mx-auto transition-all duration-500`}>
      <StyledNavLogo />

      <span className='flex-grow max-w-xl'></span>

      {NavItems.map(({ name, path }) => (
        <StyledNavLink to={path} key={name}>
          {name}
        </StyledNavLink>
      ))}
    </nav>
  )

  const mobileNavbar = (
    <nav className='backdrop-blur-lg fixed inset-x-0 top-0 z-40 flex items-center justify-center h-16 px-6 transition-all duration-500'>
      <StyledNavLogo />
      <span className='flex-grow max-w-xl'></span>
      <ActionIcon variant='outline'>
        <FontAwesomeIcon icon={faBars} />
      </ActionIcon>
    </nav>
  )

  return width > 1023 ? laptopNavbar : mobileNavbar
}
