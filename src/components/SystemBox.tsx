import { Box } from './Box'
const system: string[] = [
  'Login with email, password and SSO',
  'Initializing project template (fonts, colors)',
  'Forget and Reset password',
  'CRUD and Change relations of Tables',
  'State Management',
  'Device Permission Request',
]
export function SystemBox() {
  return (
    <Box color='green' className='mt-2' title='Web Systems Participation'>
      <div id='system' className='flex flex-wrap'>
        {system.map(txt => (
          <li key={txt} className='mb-1 half'>
            {txt}
          </li>
        ))}
      </div>
    </Box>
  )
}
