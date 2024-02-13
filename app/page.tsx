import { Container } from '@/components/Container'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import WorkProfile from '@/components/WorkProfile'
import workExperienceData from './workExperienceData.json'

export default function Home() {
  return (
    <>
      <Container>
        <Header>
          <Container>
            <h1 className='text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl'>
              Software Expertise, Startup Spirit: Crafting the Next Generation
              of Digital Solutions
            </h1>
          </Container>
        </Header>
      </Container>

      <Container>
        <div className='mt-10'>
          <Container>
            <div className='space-y-6'>
              <div className='text-zinc-600'>
                As a highly skilled software architect with over 15 years of
                experience, I specialize in software design, network
                architecture, and coding. I am deeply passionate about tackling
                complex challenges and crafting innovative solutions. Currently,
                I am actively seeking opportunities to collaborate with
                exceptional teams in the pursuit of cutting-edge product
                development.
              </div>
              <div className='text-zinc-600'>
                My mission is to consistently push the boundaries of technology
                while fostering a collaborative and innovative work culture.
                Beyond my professional pursuits, I excel in navigating
                containerized environments and treasure moments spent with my
                two little pups, Lola and Fluffy.
              </div>
            </div>
          </Container>
        </div>
      </Container>

      <Container>
        <div className='mt-20'>
          <Container>
            <div className='sm:flex justify-between items-end'>
              <div className='text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block'>
                Showreel of Software Solutions
              </div>
            </div>
          </Container>
        </div>
      </Container>

      {/* Showreel component goes here */}

      <Container>
        <div className='mt-20'>
          <Container>
            <div className='sm:flex justify-between items-end'>
              <div className='text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl block'>
                Experience
              </div>
              <div className='inline-block'>
                <Button variant='outline' asChild>
                  <Link href='#'>
                    <ArrowDownIcon className='mr-2 h-4 w-4' />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>
            <div className='grid gap-14 mt-6'>
              {workExperienceData.map((work, index) => (
                <WorkProfile key={index} {...work} />
              ))}
            </div>
          </Container>
        </div>
      </Container>
    </>
  )
}
