import { Box } from './Box'
const skill: string[] = [
  'Programming languages: TypeScript, JavaScript, Python, Ruby, C++, Java',
  'Front-end frameworks: React Hook, Vue 2&3, ViteJS, NuxtJS, NextJS',
  'Back-end frameworks: NestJS, TypeORM',
  'State Management: Redux & Zustand (React Hook), Vuex (Vue 2), Pinia (Vue 3)',
  'Page Routing: React Router (React Hook), Vue Router (Vue 2&3)',
  'Code Editor and Extension: Visual Studio Code, ESLint, Prettier',
  'Git tools: GitHub, GitLab, Fork, Sourcetree',
  'Web hosting: Firebase',
  'Database Tools: SQL, DBeaver',
  'Python basic data science tools: Pandas, ScikitLearn',
  'Moderate English writing and communication skills',
]
export function SkillBox() {
  return (
    <Box color='blue' className='mt-2' title='Main Skills'>
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
