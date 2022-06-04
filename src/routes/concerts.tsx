import { Gallery } from '../components/Gallery'
import { Section } from '../components/Section'
import concertInfo from '../concertInfo'

export default function Concerts() {
  return (
    <div>
      <Section header='Past Concerts'>
        <Gallery items={concertInfo} />
      </Section>
    </div>
  )
}
