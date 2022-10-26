import {
  faChampagneGlasses,
  faPeopleGroup,
  faPlayCircle,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import {Image} from '@mantine/core';
import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import Card from '../components/Card';
import Hero from '../components/Hero';
import NewsItem from '../components/NewsItem';
import Section from '../components/Section';
import cabGroupWebp from '../images/cab-group.webp';
import miniConcertPng from '../images/news-MiniConcert.png';
import mvpPng from '../images/news-MVP.png';
import subcomPng from '../images/news-Subcom.png';
import orchWebp from '../images/orch.webp';

export default function Index() {
  const location = useLocation();
  const NewsRef = useRef<HTMLDivElement>(null);

  // dealing with scrolling to News when the corresponding NavLink is clicked
  useEffect(() => {
    if (location.hash === '') window.scrollTo({top: 0, behavior: 'smooth'});
    else if (location.hash === '#news' && NewsRef.current != null)
      window.scrollTo({
        left: 0,
        top: window.pageYOffset + NewsRef.current.getBoundingClientRect().top - 80,
        behavior: 'smooth',
      });
  }, [location]);

  return (
    <>
      <Hero />
      <Section innerRef={NewsRef} header="News">
        <NewsItem
          heading="Mini Concert"
          subheading={<p>Register on or before 9 November</p>}
          icon={faChampagneGlasses}
        >
          <Image src={miniConcertPng} width={350} />
          <br />
          Have you watched our Mini Concert in Oct? Wish you could be the one in the spotlight? No
          problem! The 2nd Mini Concert will be held in Feb, don&apos;t hesitate and grab the
          opportunity to showcase your musical talents.
          <br />
          <br />
          Details:
          <ul className="list-inside list-disc">
            <li>Concert Date: Early February</li>
            <li>Time: TBC (likely 7-8 pm / 8-9 pm)</li>
            <li>Venue: HKUST Shaw Auditorium</li>
            <li>Preferred Repertoire: 1. Ensembles 2. Solos</li>
          </ul>
          <br />
          Application Deadline: Nov 9, 2022
          <br />
          Click&nbsp;
          <a
            href="https://forms.gle/afZ36pGoaQA2rGrG7"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            here
          </a>
          &nbsp;for application.
          <br />
          <br />
          Should you have any enquiries, please feel free to contact Summerloretta on 98427158.
        </NewsItem>

        <NewsItem
          heading="Subcommittee Function"
          subheading={<p>Apply before 23 October</p>}
          icon={faChampagneGlasses}
        >
          <Image src={subcomPng} width={350} />
          <br />
          We are now recruiting subcommittee members of the UPO! If you&apos;re interested in
          organizing and hosting activities for your fellow UPO members, then don&apos;t hesitate to
          reach out and sign up for the first subcommittee meeting!
          <br />
          <br />
          Target Participants: Year 1 or 2 new members
          <br />
          <br />
          Details of the 1st Subcommittee Meeting:
          <ul className="list-inside list-disc">
            <li>Date: 25th October, 2022 (Tue)</li>
            <li>Time: 19:00 - 21:00</li>
            <li>Venue: LG5 Conference Room</li>
          </ul>
          <br />
          Application deadline: 23rd October, 2022
          <br />
          Click&nbsp;
          <a
            href="https://docs.google.com/forms/d/1_DOksAmpaCYd4Rj1IcNNrHkiQ9ZLjF_SzdnE_j1hozQ"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            here
          </a>
          &nbsp;for application.
          <br />
          <br />
          If you have any enquiry, feel free to contact Harrison on 56111950 (WhatsApp). We hope to
          see you there!
        </NewsItem>

        <NewsItem
          heading="Music Video Project"
          subheading="Registration opens until 28 Feb 2023"
          icon={faVideo}
        >
          <Image src={mvpPng} width={400} />
          <br />
          Music video project perform in an ensemble, solo, or even a one-man ensemble for those who
          play multiple instruments.
          <br />
          <br />
          <ul className="list-inside list-disc">
            <li>
              Format: Pre-recorded videos of your performance will be edited and uploaded to social
              media.
            </li>
            <li>
              Target participants: All UPO members including
              <ul className="list-decimal list-inside pl-6">
                <li>String players</li>
                <li>Woodwind &amp; Brass players</li>
                <li>Percussionists</li>
                <li>Pianists</li>
              </ul>
            </li>
            <li>Formations: Solo, ensemble up to 4 players, one-man ensemble</li>
            <li>Pieces to perform: YOUR CHOICE!</li>
          </ul>
          <br />
          Application period: Starting from NOW until 28th Feb, 2023
          <br />
          Click&nbsp;
          <a
            href="https://forms.gle/WG2VF8jvFjsFsquh6"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            here
          </a>
          &nbsp;to register.
          <br />
          <br />
          We are looking forward to seeing your wonderful performance on the web!
        </NewsItem>

        <NewsItem
          heading="Member Recruitment"
          subheading="Fill in the application form"
          icon={faPeopleGroup}
        >
          If you love participating in orchestra, and you want to share your enjoyment of playing
          music with others, just join us!
          <br />
          <br />
          Players who have experiences in orchestras, concert bands and string orchestras will be
          more preferred.
          <br />
          <br />
          Please fill in the&nbsp;
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJmcrx1TqK_OO6XynO0pW6rmA5uAhjNTNxdD8or8o65QcAuw/viewform"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            application form
          </a>
          . Audition will be arranged upon submission of the form.
          <br />
          <br />
          For enquiries, feel free to&nbsp;
          <a
            href="mailto:su_upo@connect.ust.hk"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            send us an email
          </a>
          .
        </NewsItem>

        <NewsItem
          heading="2021 Concert Review"
          subheading="Ready on our YouTube channel!"
          icon={faPlayCircle}
        >
          Don&apos;t worry if you have missed the performance back in 2021!
          <br />
          You can watch the videos on our YouTube channel!
          <br />
          <br />
          <span className="select-none">&#x2022;&nbsp;</span>
          <a
            href="https://youtu.be/KGeXNU7TdZ0"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            Freshmen Concert 2021
          </a>
          <br />
          <span className="select-none">&#x2022;&nbsp;</span>
          <a
            href="https://youtu.be/0kUfX_-RtXE"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            Promenade Concert
          </a>
        </NewsItem>
      </Section>

      <div className="h-6" />
      <Section header="">
        <Card
          heading="About Us"
          subheading="Know more about UPO and our Executive Committee"
          image={cabGroupWebp}
          link="/about"
        />

        <Card
          heading="Past Concerts"
          subheading="Know more about our past concerts"
          image={orchWebp}
          link="/concerts"
        />
      </Section>
    </>
  );
}
