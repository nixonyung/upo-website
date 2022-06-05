import {
  faMasksTheater,
  faPeopleGroup,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import NewsItem from '../components/NewsItem'
import { Section } from '../components/Section'

export default function Index() {
  const location = useLocation()
  const NewsRef = useRef<HTMLDivElement>(null)

  // dealing with scrolling to News when the corresponding NavLink is clicked
  useEffect(() => {
    console.log(NewsRef.current)
    if (location.hash === '') window.scrollTo({ top: 0, behavior: 'smooth' })
    else if (location.hash === '#news' && NewsRef.current != null)
      window.scrollTo({
        left: 0,
        top:
          window.pageYOffset + NewsRef.current.getBoundingClientRect().top - 80,
        behavior: 'smooth',
      })
  }, [location])

  return (
    <>
      <Hero />

      <Section innerRef={NewsRef} header='News'>
        <NewsItem
          heading='Mini Concert - Player Recruitment'
          subheading='before 12 June'
          icon={faMasksTheater}>
          Our brand new activity featuring solos, duets, and ensembles.
          <br />
          Pianists and non-members are also welcome!
          <br />
          <br />
          Details:
          <br />
          Date: TBC (between late September and early October)
          <br />
          Time: 7:00 - 8:00 pm (TBC)
          <br />
          Venue: CMA Lecture Theatre (LT-L)
          <br />
          <br />
          Quickly fill in the&nbsp;
          <a
            href='https://forms.gle/ukmCsLwnKHdxoUoU9'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            registration form
          </a>
          !
          <br />
          <br />
          Deadline for registration: <b>12th June 2022</b>.
          <br />
          Please contact Summerloretta (98427158) for any questions.
        </NewsItem>

        <NewsItem
          heading='Member Recruitment'
          subheading=''
          icon={faPeopleGroup}>
          If you love participating in orchestra, and you want to share your
          enjoyment of playing music with others, just join us!
          <br />
          <br />
          Players who have experiences in orchestras, concert bands and string
          orchestras will be more preferred.
          <br />
          <br />
          Please fill in the&nbsp;
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeJmcrx1TqK_OO6XynO0pW6rmA5uAhjNTNxdD8or8o65QcAuw/viewform'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            application form
          </a>
          . Audition will be arranged upon submission of the form.
          <br />
          <br />
          For enquiries, feel free to&nbsp;
          <a
            href='mailto:su_upo@connect.ust.hk'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            send us an email
          </a>
          .
        </NewsItem>

        <NewsItem
          heading='2021 Concert Review'
          subheading='Ready on our YouTube channel!'
          icon={faPlayCircle}>
          Don&apos;t worry if you have missed the performance back in 2021!
          <br />
          You can watch the videos on our YouTube channel!
          <br />
          <br />
          <span className='select-none'>&#x2022;&nbsp;</span>
          <a
            href='https://youtu.be/KGeXNU7TdZ0'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            Promenade Concert
          </a>
          <br />
          <span className='select-none'>&#x2022;&nbsp;</span>
          <a
            href='https://youtu.be/0kUfX_-RtXE'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            Freshmen Concert 2021
          </a>
        </NewsItem>
      </Section>
    </>
  )
}
