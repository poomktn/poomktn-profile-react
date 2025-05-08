import {
  Box,
  ContactBox,
  EducationBox,
  ExperienceBox,
  SkillBox,
  SystemBox,
} from 'components'
import 'assets/styles/App.scss'

export default function App() {
  return (
    <div className='App'>
      <div className='flex justify-center'>
        <img
          width='200px'
          height='200px'
          src={require('assets/images/profile.jpg')}
          className='profile-img'
          alt=''
        />
        <div className='ml-2'>
          <ContactBox />
          <Box color="black" className="my-3 text-left">
            <h2>Eng: Kantanat Siripipatworakun</h2>
            <h2>TH: &nbsp;กันตณัฐ สิริพิพัฒน์วรคุณ</h2>
          </Box>
        </div>
      </div>
      <SkillBox />
      <SystemBox />
      <ExperienceBox />
      <EducationBox />
      <div className='flex justify-center no-print mt-1'>
        <button onClick={() => window.print()}>print as PDF file</button>
      </div>
    </div>
  )
}
