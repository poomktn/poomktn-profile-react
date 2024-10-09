import { Box } from './Box'
const skill: string[] = [
  'Programming languages: JavaScript, TypeScript, Python, Ruby, C++, Java',
  'Moderate English writing and communication skills',
  'Front-end frameworks: React Hook, Vue 2&3, ViteJS, Vuetify, Quasar, Nuxt, React-Native(Android)',
  'State Management: Redux & Zustand (React Hook), Vuex (Vue 2), Pinia (Vue 3)',
  'Page Routing: React Router (React Hook), Vue Router (Vue 2&3)',
  'Code Editor and Extension: Visual Studio Code, ESLint, Prettier',
  'Git tools: GitHub, GitLab, Fork, Sourcetree',
  'Web hosting: Firebase',
  'Database: SQL (in University)',
  'Python basic data science tools: Pandas, ScikitLearn',
]
export function SkillBox() {
  return (
    <Box color='green' className='mt-2' title='Main Skills'>
      <div id='skill'>
        {skill.map(txt => (
          <li key={txt} className='mb-1'>
            {txt}
          </li>
        ))}
      </div>
    </Box>
  )
}
