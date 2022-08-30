import {
  faMasksTheater,
  faMusic,
  faPeopleGroup,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import {Image} from '@mantine/core';
import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import Card from '../components/Card';
import Hero from '../components/Hero';
import NewsItem from '../components/NewsItem';
import Section from '../components/Section';
import cabGroupJPG from '../images/cab-group.webp';
import jointUConcertJpg from '../images/news-JointUConcert.jpg';
import miniConcertPng from '../images/news-MiniConcert.png';
import orchJPG from '../images/orch.webp';

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
          heading="Joint University Performance 2022"
          subheading={<p>Show on 6, 7 September</p>}
          icon={faMusic}
        >
          <Image src={jointUConcertJpg} width={300} />
          <br />
          To mark the beginning of the new academic year, UPO of HKU, HKUSTSU and PolyU SAOPhil
          proudly present Joint University Performance 2022. This concert will present various forms
          of ensembles and a wide range of music, from classical to video game pieces. It does not
          matter if you are a musician or if you have not listened to orchestral music before, you
          are cordially invited to join this musical journey!
          <br />
          <br />
          Details of the Joint University Performance 2022 are as follows:
          <br />
          Date: &nbsp;&nbsp;&nbsp;6/9/2022, 7/9/2022
          <br />
          Time: &nbsp;&nbsp;&nbsp;20:00-22:00 (for both days)
          <br />
          Venue: &nbsp;Y-Theatre, LG-1, Youth Square
          <br />
          Price: &nbsp;&nbsp;&nbsp;Free of charge, free seating
          <br />
          <br />
          To reserve tickets, please fill in this Google form:&nbsp;
          <a
            href="https://forms.gle/WZv76bmnikDtYfQV6"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            https://forms.gle/WZv76bmnikDtYfQV6
          </a>
          <br />
          <br />
          Guest and Student Conductors:
          <ul className="list-disc list-inside">
            <li>Mr Dicky Cheng</li>
            <li>Mr Kelvin Wan</li>
            <li>Mr Kevin Wong</li>
            <li>Mr Winson Wong</li>
          </ul>
          <br />
          Day 1 (6/9/2022) Programme Highlights:
          <ul className="list-disc list-inside">
            <li>Prokofiev Symphony No. 1 (1st Movement)</li>
            <li>Britten Aria Italiana</li>
            <li>A Song for Japan (Trumpet Quintet)</li>
          </ul>
          <br />
          Day 2 (7/9/2022) Programme Highlights:
          <ul className="list-disc list-inside">
            <li>Seventh Night of July</li>
            <li>Mahler Symphony No. 10 (1st Movement)</li>
            <li>Mozart Divertimento in D (String Quartet)</li>
          </ul>
          <br />
          For enquiries, please feel free to contact Jervis at 54075314. Email enquiries are also
          available at&nbsp;
          <a
            href="mailto:jointuniorchestra@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            jointuniorchestra@gmail.com
          </a>
          .
        </NewsItem>

        <NewsItem
          heading="Mini Concert - Player Recruitment"
          subheading="CLOSED"
          icon={faMasksTheater}
        >
          <Image src={miniConcertPng} width={300} />
          <br />
          Our brand new activity featuring solos, duets, and ensembles.
          <br />
          Pianists and non-members are also welcome!
          <br />
          <br />
          <u>Details:</u>
          <br />
          Date:&nbsp;&nbsp;&nbsp;&nbsp;TBC (between late September and early October)
          <br />
          Time:&nbsp;&nbsp;&nbsp;&nbsp;7:00 - 8:00 pm (TBC)
          <br />
          Venue:&nbsp;&nbsp;CMA Lecture Theatre (LT-L)
          <br />
          <br />
          Deadline for registration: <del>12th June 2022</del> <b>CLOSED</b>.
          <br />
          Please contact Summerloretta (98427158) for any questions.
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
            Promenade Concert
          </a>
          <br />
          <span className="select-none">&#x2022;&nbsp;</span>
          <a
            href="https://youtu.be/0kUfX_-RtXE"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline"
          >
            Freshmen Concert 2021
          </a>
        </NewsItem>
      </Section>

      <div className="h-6" />
      <Section header="">
        <Card
          heading="About Us"
          subheading="Know more about UPO and our Executive Committee"
          image={cabGroupJPG}
          link="/about"
        />

        <Card
          heading="Past Concerts"
          subheading="Know more about our past concerts"
          image={orchJPG}
          link="/concerts"
        />
      </Section>
    </>
  );
}