import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import { Section } from '../components/Section'

export default function Index() {
  const location = useLocation()
  const NewsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(NewsRef.current)
    if (location.hash === '') window.scrollTo({ top: 0, behavior: 'smooth' })
    else if (location.hash === '#news' && NewsRef.current != null)
      window.scrollTo(
        0,
        window.pageYOffset + NewsRef.current.getBoundingClientRect().top - 80
      )
  }, [location])

  return (
    <div className='mb-12'>
      <Hero />

      <Section innerRef={NewsRef} header='haha'>
        <p>hahahaha</p>
      </Section>
      <div className='h-screen'></div>
    </div>
  )
}
