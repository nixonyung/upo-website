import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionIcon, Drawer } from '@mantine/core'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavItems from './NavItems.json'
import StyledNavLink from './StyledNavLink'
import StyledNavLogo from './StyledNavLogo'

export default function Navbar() {
  const [scroll, ,] = useWindowScroll()
  const lg = useMediaQuery('(min-width: 1024px)')
  const [MobileNavOpened, setMobileNavOpened] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav
      className={`${
        pathname === '/' && scroll.y < (lg ? 120 : 40)
          ? ''
          : 'backdrop-blur-lg bg-black bg-opacity-40'
      } fixed inset-x-0 top-0 z-40 px-6 transition-all duration-300 ease-linear`}>
      <div className='flex items-center justify-center h-16 max-w-5xl gap-3 mx-auto'>
        <StyledNavLogo />

        <span className='flex-grow'></span>

        {lg ? (
          <>
            {NavItems.map(({ name, path }) => (
              <StyledNavLink to={path} key={name}>
                {name}
              </StyledNavLink>
            ))}
          </>
        ) : (
          <ActionIcon
            variant='outline'
            radius='xl'
            color='gray'
            onClick={() => setMobileNavOpened(true)}
            className='z-100'>
            <FontAwesomeIcon icon={faBars} />
          </ActionIcon>
        )}
      </div>

      {!lg && (
        <Drawer
          opened={MobileNavOpened}
          onClick={() => {
            setMobileNavOpened(false)
          }}
          onClose={() => setMobileNavOpened(false)}
          overlayBlur={3}
          position='right'
          size='xs'
          withCloseButton={false}
          classNames={{
            drawer: 'bg-transparent mt-20 mr-3',
          }}>
          <div className='flex flex-col items-end gap-6'>
            {NavItems.map(({ name, path }) => (
              <StyledNavLink to={path} key={name}>
                {name}
              </StyledNavLink>
            ))}
          </div>
        </Drawer>
      )}
    </nav>
  )
}
