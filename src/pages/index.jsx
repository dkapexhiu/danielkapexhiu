import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Work from '../views/Work'
import Education from '../views/Education'

import '../views/Work.css';

// Images
import me from '../images/me.webp';
import faas from '../images/faas.webp';
import hitweb from '../images/hitweb.webp';
import agsh from '../images/agsh.webp';
import albasolutions from '../images/albasolutions.webp';
import prodmanagement from '../images/product-management.webp';
import albrecovery from '../images/albrecovery.webp';
import hoteligjuetise from '../images/hoteligjuetise.webp';
import suko from '../images/suko.webp';
import kozo from '../images/kozo.webp';
import gsa from '../images/gsa.webp';
import yummi from '../images/yummi.webp';
import ica from '../images/ica.webp';

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw` w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`
const WorkDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const EducationDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={10}>
      
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Daniel Kapexhiu.
        </BigTitle>
        <Subtitle>I'm creating nice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>

      <Projects offset={2}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="HitWeb"
            link="https://hitweb.it"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            img={hitweb}
          >
          </ProjectCard>
          <ProjectCard
            title="Group Analysis Albania"
            link="https://groupanalysisalbania.org/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            img={agsh}
          >
          </ProjectCard>
          <ProjectCard
            title="FAAS"
            link="http://faasarchitects.al/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            img={faas}
          >
          </ProjectCard>
          <ProjectCard
            title="Products Management"
            link="https://pm.danielkapexhiu.com/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
            img={prodmanagement}
          >
          </ProjectCard>
          <ProjectCard
            title="AlbRecovery"
            link="https://albrecovery.al/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            img={albrecovery}
          >
          </ProjectCard>
          <ProjectCard
            title="AlbaSolutions"
            link="http://albasolutions.fr/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            img={albasolutions}
          >
          </ProjectCard>
          <ProjectCard
            title="Suko Organic"
            link="https://suko.al/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            img={suko}
          >
          </ProjectCard>
          <ProjectCard
            title="Hoteli Gjuetise"
            link="https://hoteligjuetise.al/"
            bg="linear-gradient(to right, #D580FF 0%, #E6D32B 100%)"
            img={hoteligjuetise}
          >
          </ProjectCard>
          <ProjectCard
            title="KOZO Ghana"
            link="http://kozogh.com/"
            bg="linear-gradient(to right, #D5000F 0%, #E6E00B 100%)"
            img={kozo}
          >
          </ProjectCard>
          <ProjectCard
            title="GSA"
            link="http://group-gsa.com/"
            bg="linear-gradient(to right, #A0102A 0%, #B3E01B 100%)"
            img={gsa}
          >
          </ProjectCard>
          <ProjectCard
            title="Yummi Pizza"
            link="http://yummiapp.netlify.app/"
            bg="linear-gradient(to right, #E010C0 0%, #D3D01D 100%)"
            img={yummi}
          >
          </ProjectCard>
          <ProjectCard
            title="ICA"
            link="http://icarch.al/"
            bg="linear-gradient(to right, #C010B0 0%, #E3D01C 100%)"
            img={ica}
          >
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>

      <About offset={5}>
        <Title>Resume</Title>
        <AboutHero>
          <Avatar src={me} alt="Daniel Kapexhiu" />
          <AboutSub>
            I am a Web Developer and Mobile Web Specialist from OpenClassrooms and Udacity. 
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I have followed and done the course Crescere in Digitale for supporting the process of digitalization of italian factories. 
          I have been certified as a Digital Marketer from Ecellenze in Digitale course. 
          I have completed the Google Partners program and certified in Google Adwords. 
          I have developed in HTML5, CSS3, Javascript, SQL, PHP, React.js, jQuery, Bootstrap, KnockoutJS, React Native, Vue.js, Laravel, Jigsaw, Node.js, .NET Core, C#.
        </AboutDesc>
      </About>

      <Work offset={6}>
        <Title>Work</Title>
<div class="history flex flex-col relative pt-6 pb-6">
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">UBA Bank</h4>
        <h5 class="text-sm font-normal mb-1">Web Specialist</h5>
        <span class="text-sm font-medium opacity-50">July 2021 - Present</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">Stema Digital</h4>
        <h5 class="text-sm font-normal mb-1">Mobile Web Specialist</h5>
        <span class="text-sm font-medium opacity-50">December 2019 - June 2021</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">Soft &amp; Solution</h4>
        <h5 class="text-sm font-normal mb-1">Webmaster</h5>
        <span class="text-sm font-medium opacity-50">June 2019 - December 2019</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">UniAdmissions</h4>
        <h5 class="text-sm font-normal mb-1">Web Developer</h5>
        <span class="text-sm font-medium opacity-50">June 2019 - June 2019</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">HitWeb</h4>
        <h5 class="text-sm font-normal mb-1">Web Developer</h5>
        <span class="text-sm font-medium opacity-50">June 2018 - June 2019</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">MyFastWay</h4>
        <h5 class="text-sm font-normal mb-1">Digital Marketing Technician</h5>
        <span class="text-sm font-medium opacity-50">February 2017 - September 2017</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">Your Trainers Group</h4>
        <h5 class="text-sm font-normal mb-1">Collaborator</h5>
        <span class="text-sm font-medium opacity-50">June 2016 - July 2016</span>
    </div>
</div>
      </Work>

      <Education offset={8}>
        <Title>Education</Title>
<div class="history flex flex-col relative pt-6 pb-6">
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">Udacity</h4>
        <h5 class="text-sm font-normal mb-1">Mobile Web Specialist</h5>
        <span class="text-sm font-medium opacity-50">2017 - 2018</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">OpenClassrooms</h4>
        <h5 class="text-sm font-normal mb-1">Web Developer</h5>
        <span class="text-sm font-medium opacity-50">2017 - 2018</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">University of Pisa</h4>
        <h5 class="text-sm font-normal mb-1">Engineering</h5>
        <span class="text-sm font-medium opacity-50">2011 - 2017</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">Your Trainers Group</h4>
        <h5 class="text-sm font-normal mb-1">Academy of Excellence</h5>
        <span class="text-sm font-medium opacity-50">2016 - 2016</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">CodeAcademy</h4>
        <h5 class="text-sm font-normal mb-1">HTML&amp;CSS, JavaScript, jQuery, SQL, PHP</h5>
        <span class="text-sm font-medium opacity-50">2014 - 2014</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">LinkedIn Learning</h4>
        <h5 class="text-sm font-normal mb-1">Creating a Business Plan</h5>
        <span class="text-sm font-medium opacity-50">2017 - 2017</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">LinkedIn Learning</h4>
        <h5 class="text-sm font-normal mb-1">Learning Cloud Computing</h5>
        <span class="text-sm font-medium opacity-50">2017 - 2017</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">LinkedIn Learning</h4>
        <h5 class="text-sm font-normal mb-1">Photoshop CC for Web Designers</h5>
        <span class="text-sm font-medium opacity-50">2017 - 2017</span>
    </div>
    <div class="history-entry relative w-1/2 py-4">
        <span class="dot-bg w-14 h-14 transform absolute bg-line inline-flex rounded-full items-center justify-center"><span class="dot w-5 h-5 bg-back-light rounded-full"></span></span>
        <h4 class="subpixel-antialiased">Cecchini Cuore Onlus</h4>
        <h5 class="text-sm font-normal mb-1">Corso di BLS-D</h5>
        <span class="text-sm font-medium opacity-50">2016 - 2016</span>
    </div>
</div>
      </Education>

      <Contact offset={9}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:daniel.kapexhiu@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/dkapexhiu/">GitHub</a> ,{' '}
            <a href="https://linkedin.com/in/danielkapexhiu">LinkedIn</a> ,{' '}
            <a href="https://blog.danielkapexhiu.com">Blog</a> &{' '}
            <a href="https://portfolio.danielkapexhiu.com">Portfolio</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2022 by Daniel Kapexhiu
        </Footer>
      </Contact>

    </Parallax>
  </>
)

export default Index
