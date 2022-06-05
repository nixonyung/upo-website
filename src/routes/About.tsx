import {
  faDrum,
  faGraduationCap,
  faGuitar,
  faMicrophoneAlt,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cabinetInfo from '../cabinetInfo'
import { Gallery } from '../components/Gallery'
import { Section } from '../components/Section'
// import constitutionPDF from '../static/constitution.pdf'

export default function About() {
  return (
    <>
      <div className='h-12'></div>

      <Section header='About UPO'>
        <p className='font-Inter md:text-lg md:leading-10 text-sm leading-9 text-left'>
          UPO is a student-run orchestra under the Student Union of Hong Kong
          University of Science and Technology (HKUSTSU).
          <br />
          <br />
          The orchestra was previously known as the HKUSTSU Wind Ensemble, which
          merged with the Strings Ensemble in 2005. The orchestra consists of
          musicians from different backgrounds, including local, international,
          exchange students, postgraduate researchers, alumni and friends of
          HKUST.
          <br />
          <br />
          UPO aims to provide a platform for music-loving HKUST members to
          create and enjoy music. We also hope to nourish our musicians&apos;
          musicality and skills through playing orchestral music.
          <br />
          <br />
          In the past, we had been invited to perform in functions, such as the
          Outreach Day in HKUST, independent clubs&apos; orientation camps and
          inauguration ceremonies. Most recently, UPO has given a concert at
          Xiqu Centre jointly with the HKUSUPO and HKPUSUO, and Christmas
          Concert at the newly established Shaw Auditorium at HKUST.
        </p>
      </Section>

      <Section header='Cabinet Members'>
        <Gallery items={cabinetInfo} squareModal />
      </Section>

      <Section header='Useful Links'>
        <div className='w-fit flex flex-col items-start gap-3 mx-auto'>
          <a
            href={process.env.PUBLIC_URL + '/constitution.pdf'}
            className='md:text-lg text-blue-400 underline'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              icon={faStickyNote}
              fixedWidth
              size='lg'
              className='mr-2'
            />
            Consitution of UPO
          </a>
          <a
            href='http://su.ust.hk/'
            className='md:text-lg text-blue-400 underline'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              icon={faGraduationCap}
              fixedWidth
              size='lg'
              className='mr-2'
            />
            HKUST Student Union
          </a>
          <a
            href='https://choir.su.ust.hk/'
            className='md:text-lg text-blue-400 underline'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              icon={faMicrophoneAlt}
              fixedWidth
              size='lg'
              className='mr-2'
            />
            The University Choir
          </a>
          <a
            href='https://www.instagram.com/hkustsu_bandsoc/'
            className='md:text-lg text-blue-400 underline'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              icon={faGuitar}
              fixedWidth
              size='lg'
              className='mr-2'
            />
            Band Society
          </a>
          <a
            href='https://www.instagram.com/corch_hkustsu/'
            className='md:text-lg text-blue-400 underline'
            target='_blank'
            rel='noreferrer'>
            <FontAwesomeIcon
              icon={faDrum}
              fixedWidth
              size='lg'
              className='mr-2'
            />
            Chinese Orchestra
          </a>
        </div>
      </Section>
    </>
  )
}
