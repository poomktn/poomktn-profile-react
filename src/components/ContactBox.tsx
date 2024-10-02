import { useState } from 'react'
import { Box } from './Box'
const TELEPHONE_NUMBER = '092-416-4261'
// const GITHUB_LINK = 'https://github.com/poomktn'

export function ContactBox() {
  const [tooltip, setTooltip] = useState(false)
  return (
    <Box color='orange'>
      <div className='mb-1'>
        <b>Tel: </b>
        <span>{TELEPHONE_NUMBER}</span>
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
          {tooltip && (
            <div className='tooltip pa-1 bg-black txt-white border-black'>
              <span>
                Email is difference from name because I try my name as email but got invalid, so I
                decide to change vowels of my name
              </span>
            </div>
          )}
        </div>
      </div>
      {/* <div>
        <b>Github:</b>
        <a href={GITHUB_LINK} target='_blank' rel='noreferrer'>
          {GITHUB_LINK}
        </a>
      </div> */}
    </Box>
  )
}
