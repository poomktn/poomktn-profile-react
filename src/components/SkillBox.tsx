import { Box } from './Box'
const skill: string[] = [
  'Programming languages: JavaScript, TypeScript, Python',
  'Moderate English writing and communication skills',
  'Front-end frameworks: React Hook, Vue 2&3, Vuetify, Quasar, Nuxt, React-Native(Android)',
  'UML design tools: Draw.io',
  'Interface design tool: Figma',
  'Web hosting: Firebase',
  'Screen drawing tool: Epic Pen',
  'Python basic data science tools: Pandas, ScikitLearn',
]
export function SkillBox() {
  return (
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
  )
}

;<style scoped lang='scss'></style>
