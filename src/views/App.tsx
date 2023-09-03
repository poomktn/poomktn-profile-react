import { useRecoilState } from 'recoil'
import { nameState, countState } from 'stores'
import Box from 'components/Box'
import 'assets/styles/App.scss'
import { useState } from 'react'

export default function App() {
  const [countStx, setCount] = useRecoilState(countState)
  const [nameStx, setName] = useRecoilState(nameState)
  const [mailTooltip, setTooltip] = useState(false)
  const skill = [
    'Programming languages: JavaScript, TypeScript, Python',
    'Moderate English writing and communication skills',
    'JavaScript Front-end frameworks: Vue(2&3) , Vuetify, Quasar, Nuxt, React',
    'UML design tools: Draw.io, Visual Paradigm',
    'Interface design tool: Figma, Zeplin',
    'Web hosting: Firebase',
    'Screen drawing tool: Epic Pen',
    'Python basic data science tools: Pandas, ScikitLearn'
  ]
  const exp = [
    {
      li: 'EdVISORY co., ltd. / Jan 2021 - Present',
      txt: 'Working as a front-end developer, Mainly using Nuxt, Vue (2&3) as front-end frameworks for many products and projects'
    },
    {
      li: 'Senior Project (Video Repetition Analysis) / Feb - May 2020',
      txt: 'The group project using Python language, ffmpeg program and OpenCV library to create analysis video from repeating actions of archery sport to see a little different from each action'
    },
    {
      li: 'Game Programming Final Project (Dungeon master) / Apr - May 2020',
      txt: 'The group project using Unity program to create multi-levels puzzle game. In each level, player must solve puzzles and defeat boss in last level'
    },
    {
      li: 'Game Programming Project (Chicken puzzle) / Feb - Mar 2020',
      txt: 'The group project using Unity program to create puzzle game. Player plays as a chicken, solves puzzles in designed room and escapes from predator'
    },
    {
      li: 'Realtime CG Project (Gem Simulator) / Nov - Dec 2019',
      txt: 'The paired project using Unity program to create Gem Simulator, a program that shows many colors of gems. User can select each one of them to flip and rotate to see its reflection and refraction of light'
    },
    {
      li: 'Internship/ June - July 2019',
      txt: 'Working as web developer at Bangkok Innovation House co. ltd. Making authenticated back-office website using Vue.js and Vuetify.js as UI framework and google firebase for database'
    },
    {
      li: "Software Engineering Project (Get 'em Out Website) / Jan - April 2019",
      txt: 'The group project creating matchmaking website between pest control companies and customers, using React.js and React-bootstrap as UI framework and MySQL as database'
    },
    {
      li: 'Computer Fabrication Project (Man Run) / Nov - Dec 2018',
      txt: 'The project using OpenSCAD program to create a simple man model and some functions to move his body parts'
    },
    {
      li: 'System Analysis Project (CUSC++ project)/ Aug - Dec 2018',
      txt: 'The group project mocking up reservation and member management system for Chula Shooting Club'
    },
    {
      li: 'Oracle Academy Program/ 1-2 Sep 2018',
      txt: 'The Oracle database workshop using SQL workbench program for database developers'
    },
    {
      li: 'Java Song Game Project (LAPLAP) / Nov - Dec 2017',
      txt: 'The paired project using Eclipse IDE with JavaFX to create and develop simple game like ‘guitar hero’. The game has 3 buttons to tapping key passing their line during song is played'
    },
    {
      li: 'Part-time academician at LIC-Ignite / Jun - Aug 2017',
      txt: 'A part-time career making explanation from high school level exercises of Physics and Mathematics'
    }
  ]
  return (
    <div className='App'>
      <div className='flex justify-center'>
        <img width='300' height='300' src={require('assets/images/Edvisory.png')} alt='' />
        <div className='ml-2'>
          <Box color='orange'>
            <div className='mb-1'>
              <b>Tel:</b> 063-161-6212
            </div>
            <div className='flex'>
              <b>Email:</b>&nbsp;kuntanut.s@gmail.com&nbsp;
              <div className='relative no-print cursor-default'>
                <div
                  className='bg-black txt-white border-black text-center'
                  style={{ width: '20px' }}
                  onMouseEnter={() => setTooltip(true)}
                  onMouseLeave={() => setTooltip(false)}>
                  ?
                </div>
                {mailTooltip && (
                  <div className='tooltip pa-1 bg-black txt-white border-black'>
                    Email are difference from name because I try my name as email but got invalid, so I decide
                    to change vowels of my name
                  </div>
                )}
              </div>
            </div>
            <div>
              <b>Github:</b> <a href='https://github.com/poomktn'>https://github.com/poomktn</a>
            </div>
          </Box>
          <Box color='black' className='my-2 text-center'>
            <h2>Mr. Kantanat Siripipatworakun</h2>
          </Box>
          <Box color='blue' title='Interest'>
            <div id='interest' className='flex'>
              <div>
                <li>Front-end Development</li>
                <li>Astrology</li>
                <li>Airsoft</li>
              </div>
              <div>
                <li>Tarot card</li>
                <li>Gaming</li>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <Box color='gold' className='mt-2' title='Introduce Myself'>
        <div className='pa-2'>
          A front-end developer who seeks motivation from objective, experience and knowledge.
        </div>
      </Box>
      <Box color='green' className='mt-2' title='Main Skills'>
        <div id='skill'>
          <div>
            {skill.map(txt => (
              <li key={txt} className='mb-1'>
                {txt}
              </li>
            ))}
          </div>
        </div>
      </Box>
      <Box color='orange' className='mt-2' title='Experiences'>
        <div id='experience'>
          {exp.map(({ li, txt }) => (
            <div key={li}>
              <li className='txt-orange'>{li}</li>
              <div className='py-1 ml-5'>{txt}.</div>
            </div>
          ))}
        </div>
      </Box>
      <Box color='violet' className='mt-2' title='Education'>
        <p className='text-center'>
          Chulalongkorn University, Bangkok, Thailand
          <br />
          Between 2016 – 2020
          <br />
          Bachelor Engineer in Computer Engineering
        </p>
      </Box>
      <div className='flex justify-center no-print mt-1'>
        <button onClick={() => window.print()}>print as PDF file</button>
      </div>
    </div>
  )
}
