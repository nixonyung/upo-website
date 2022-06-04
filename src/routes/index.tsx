import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'

export default function Index() {
  const location = useLocation()
  const NewsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.hash === '') window.scrollTo({ top: 0, behavior: 'smooth' })
    else if (location.hash === '#news' && NewsRef.current != null)
      window.scrollTo(
        0,
        window.pageYOffset + NewsRef.current.getBoundingClientRect().top - 80
      )
  }, [location])

  return (
    <>
      <Hero />

      <div className='h-screen'></div>
      <div ref={NewsRef} className='scroll-my-20 h-screen'>
        news
      </div>
      <div className='h-screen'></div>
    </>
  )
}
