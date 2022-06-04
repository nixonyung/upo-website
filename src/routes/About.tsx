import cabinetInfo from '../cabinetInfo'
import { Gallery } from '../components/Gallery'
import { Section } from '../components/Section'
// import constitutionPDF from '../static/constitution.pdf'

export default function About() {
  return (
    <div className='mt-20 mb-12'>
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
        <Gallery items={cabinetInfo} />
      </Section>

      <Section header='Useful Links'>
        <button>
          <a href={process.env.PUBLIC_URL + '/constitution.pdf'}>
            Consitution of UPO
          </a>
          {/* <a href={constitutionPDF}>Consitution of UPO</a> */}
        </button>
      </Section>
    </div>
  )
}
