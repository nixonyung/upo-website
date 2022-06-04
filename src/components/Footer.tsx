import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionIcon } from '@mantine/core'

export default function Footer() {
  return (
    <footer className='bg-gray-900'>
      <div className='flex flex-col items-center gap-6 py-6'>
        <div className='flex gap-6'>
          <a
            href='https://www.facebook.com/HkustsuUniversityPhilharmonicOrchestra?ref=profile'
            target='_blank'
            rel='noreferrer'>
            <ActionIcon
              size='xl'
              radius='xl'
              variant='outline'
              className='hover:text-white'>
              <FontAwesomeIcon icon={faFacebookF} size='lg' />
            </ActionIcon>
          </a>
          <a
            href='https://www.instagram.com/upo_hkustsu/'
            target='_blank'
            rel='noreferrer'>
            <ActionIcon
              size='xl'
              radius='xl'
              variant='outline'
              className='hover:text-white'>
              <FontAwesomeIcon icon={faInstagram} size='lg' />
            </ActionIcon>
          </a>
          <a
            href='https://www.youtube.com/channel/UCmG0rAQrVdod_Aal_aaovCQ'
            target='_blank'
            rel='noreferrer'>
            <ActionIcon
              size='xl'
              radius='xl'
              variant='outline'
              className='hover:text-white'>
              <FontAwesomeIcon icon={faYoutube} size='lg' />
            </ActionIcon>
          </a>
          <a
            href='mailto:su_upo@connect.ust.hk'
            target='_blank'
            rel='noreferrer'>
            <ActionIcon
              size='xl'
              radius='xl'
              variant='outline'
              className='hover:text-white'>
              <FontAwesomeIcon icon={faEnvelope} size='lg' />
            </ActionIcon>
          </a>
        </div>
        <span className='text-footer font-light tracking-widest text-center text-gray-500'>
          Mailbox #61, LG5, Student Center,
          <br />
          Hong Kong University of Science and Technology,
          <br />
          Clear Water Bay, Kowloon, Hong Kong
        </span>
        <span className='text-footer font-light tracking-widest text-center text-gray-500'>
          ©2022 University Philharmonic Orchestra, HKUSTSU
        </span>
      </div>
    </footer>
  )
}
