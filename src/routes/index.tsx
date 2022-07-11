import {
  faChampagneGlasses,
  faHandshake,
  faMasksTheater,
  faPeopleGroup,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/Card'
import Hero from '../components/Hero'
import NewsItem from '../components/NewsItem'
import { Section } from '../components/Section'
import cabGroupJPG from '../images/cab-group.jpg'
import orchJPG from '../images/orch.jpg'

export default function Index() {
  const location = useLocation()
  const NewsRef = useRef<HTMLDivElement>(null)

  // dealing with scrolling to News when the corresponding NavLink is clicked
  useEffect(() => {
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
          heading='Orientation Day'
          subheading='before 15 August'
          icon={faChampagneGlasses}>
          Welcome to UST!
          <br />
          <br />
          Join our orientation day, get along with your like-minded peers and
          our members who are just as much of a music lover as you, and
          experience an engaging prelude to your university life!
          <br />
          <br />
          Sign up with the&nbsp;
          <a
            href='https://forms.gle/rUkiVUpE39YToSJk7'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            registration form
          </a>
          !
          <br />
          <br />
          Details:
          <br />
          Date: 20 Aug, 2022
          <br />
          Time: 11:00 - 18:00
          <br />
          Venue: LG5 Multi-function Room
          <br />
          <br />
          Deadline for registration: <b>15th August 2022</b>.
          <br />
          Please contact Ivan (61944458) or Summerloretta (98427158) for
          enquiries.
        </NewsItem>

        <NewsItem
          heading='Orientation Day Internal Recruitment'
          subheading='before 1 August'
          icon={faHandshake}>
          UPO O-day is coming soon. If you would like to join in the fun and
          help new freshmen enjoy the beginnings of their university life, be
          sure to sign up with the&nbsp;
          <a
            href='https://forms.gle/B78zWVFc4xSMeREZ9'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline'>
            registration form
          </a>
          !
          <br />
          <br />
          Details (for helpers):
          <br />
          Date: 20 Aug, 2022
          <br />
          Time: 10:00 - 18:30
          <br />
          Venue: LG5 Multi-function Room
          <br />
          <br />
          Deadline for registration: <b>1st August 2022</b>.
          <br />
          Please contact Ivan (61944458) or Summerloretta (98427158) for
          enquiries.
        </NewsItem>

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
          subheading='Send us an email'
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

      <div className='h-6'></div>
      <Section header=''>
        <Card
          heading='About Us'
          subheading='Know more about UPO and our Executive Committee'
          image={cabGroupJPG}
          link='/about'
        />

        <Card
          heading='Past Concerts'
          subheading='Know more about our past concerts'
          image={orchJPG}
          link='/concerts'
        />
      </Section>
    </>
  )
}
