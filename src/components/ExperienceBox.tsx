import { Box } from './Box'

type ExperienceProps = {
  li: string
  txt: string
  detail?: string[]
}
const exp1: ExperienceProps[] = [
  {
    li: 'Magic Box Solutions Co., Ltd. / Feb 2023 - July 2024',
    txt: 'Working as a front-end developer, Mainly using React Hook, TypeScript as front-end frameworks for products and projects',
    detail: [
      "Foreign tailor: fix bug in 'suit selection' feature and i18n word",
      'Car Insurance: integrate Microsoft Login, manage user role and CRUD table',
      'Meeting Room: call REST api to get, post and render info about catering',
      'KYC: call REST api to get and render info of user',
    ],
  },
  {
    li: 'EdVISORY Co., Ltd. / Jan 2021 - Feb 2023',
    txt: 'Working as a front-end developer, Mainly using Nuxt, Vue (2&3) as front-end frameworks for products and projects',
    detail: [
      'ERP: use handlebars.js to export excel from html template in backend',
      'University Website: create SSO Login and disable unused hosting via firebase',
      'Housing Estate: use socket.io to create real time chat with emoji',
    ],
  },
]
const exp2: ExperienceProps[] = [
  {
    li: 'Senior Project (Video Repetition Analysis) / Feb - May 2020',
    txt: 'The group project using Python language, ffmpeg program and OpenCV library to create analysis video from repeating actions of archery sport to see a little different from each action',
  },
  {
    li: 'Game Programming Final Project (Dungeon master) / Apr - May 2020',
    txt: 'The group project using Unity program to create multi-levels puzzle game. In each level, player must solve puzzles and defeat boss in last level',
  },
  {
    li: 'Game Programming Project (Chicken puzzle) / Feb - Mar 2020',
    txt: 'The group project using Unity program to create puzzle game. Player plays as a chicken, solves puzzles in designed room and escapes from predator',
  },
  {
    li: 'Realtime CG Project (Gem Simulator) / Nov - Dec 2019',
    txt: 'The paired project using Unity program to create Gem Simulator, a program that shows many colors of gems. User can select each one of them to flip and rotate to see its reflection and refraction of light',
  },
  {
    li: 'Internship/ June - July 2019',
    txt: 'Working as web developer at Bangkok Innovation House co. ltd. Making authenticated back-office website using Vue.js and Vuetify.js as UI framework and google firebase for database',
  },
  {
    li: "Software Engineering Project (Get 'em Out Website) / Jan - April 2019",
    txt: 'The group project creating matchmaking website between pest control companies and customers, using React.js and React-bootstrap as UI framework and MySQL as database',
  },
  {
    li: 'Computer Fabrication Project (Man Run) / Nov - Dec 2018',
    txt: 'The project using OpenSCAD program to create a simple man model and some functions to move his body parts',
  },
  {
    li: 'System Analysis Project (CUSC++ project)/ Aug - Dec 2018',
    txt: 'The group project mocking up reservation and member management system for Chula Shooting Club',
  },
  {
    li: 'Oracle Academy Program/ 1-2 Sep 2018',
    txt: 'The Oracle database workshop using SQL workbench program for database developers',
  },
  {
    li: 'Java Song Game Project (LAPLAP) / Nov - Dec 2017',
    txt: 'The paired project using Java to create and develop simple game like ‘guitar hero’. The game has 3 buttons to tapping key passing their line during song is played',
  },
  {
    li: 'Part-time academician at LIC-Ignite / Jun - Aug 2017',
    txt: 'A part-time career making explanation from high school level exercises of Physics and Mathematics',
  },
]

export function ExperienceBox() {
  return (
    <Box color='orange' className='mt-2' title='Experiences'>
      <div id='experience'>
        {exp1.map(({ li, txt, detail }) => (
          <div key={li}>
            <li className='txt-orange'>{li}</li>
            <div className='py-1 ml-5'>
              <span>{txt}.</span>
              {detail?.map(elem => (
                <div className='mt-1' key={elem}>
                  <span>
                    <b>-</b> {elem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className='flex justify-center'>
          #####&nbsp;<h5>University Period</h5>&nbsp;#####
        </div>
        {exp2.map(({ li, txt }) => (
          <div key={li}>
            <li className='txt-orange'>{li}</li>
            <div className='py-1 ml-5'>
              <span>{txt}.</span>
            </div>
          </div>
        ))}
      </div>
    </Box>
  )
}
