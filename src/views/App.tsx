import {
  Box,
  ContactBox,
  EducationBox,
  ExperienceBox,
  InterestBox,
  IntroduceBox,
  SkillBox,
} from 'components'
import 'assets/styles/App.scss'

export default function App() {
  return (
    <div className='App'>
      <div className='flex justify-center'>
        <img
          width='300'
          height='300'
          src={require('assets/images/profile.jpg')}
          className='profile-img'
          alt=''
        />
        <div className='ml-2'>
          <ContactBox />
          <Box color='black' className='my-2 text-center'>
            <h2>Mr. Kantanat Siripipatworakun</h2>
          </Box>
          <InterestBox />
        </div>
      </div>
      <IntroduceBox />
      <SkillBox />
      <ExperienceBox />
      <EducationBox />
      <div className='flex justify-center no-print mt-1'>
        <button onClick={() => window.print()}>print as PDF file</button>
      </div>
    </div>
  )
}
