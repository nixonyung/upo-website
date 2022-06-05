import { faMasksTheater } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Notification from '../components/Notification'
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
        <Notification
          heading='Concert'
          subheading='before 12th'
          icon={faMasksTheater}>
          haha can you see me
        </Notification>
      </Section>
    </>
  )
}
