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

// Images
import me from '../images/me.webp';
import faas from '../images/faas.webp';
import hitweb from '../images/hitweb.webp';
import agsh from '../images/agsh.webp';
import albasolutions from '../images/albasolutions.webp';
import prodmanagement from '../images/product-management.webp';
import restaurant from '../images/restaurant.webp';
import hoteligjuetise from '../images/hoteligjuetise.webp';
import suko from '../images/suko.webp';


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

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Daniel Kapexhiu.
        </BigTitle>
        <Subtitle>I'm creating nice web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
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
            title="Restaurant Reviews"
            link="https://restaurant.danielkapexhiu.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
            img={restaurant}
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
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
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
          I have developed in HTML5, CSS3, Javascript, SQL, PHP, React.js, jQuery, Bootstrap, KnockoutJS, React Native, Vue.js, Laravel and Jigsaw.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:daniel.kapexhiu@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://github.com/dkapexhiu/">GitHub</a> ,{' '}
            <a href="https://linkedin.com/in/danielkapexhiu">LinkedIn</a> &{' '}
            <a href="https://blog.danielkapexhiu.com">Blog</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Daniel Kapexhiu
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
