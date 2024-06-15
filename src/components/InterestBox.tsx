import { Box } from './Box'

export function InterestBox() {
  return (
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
  )
}
