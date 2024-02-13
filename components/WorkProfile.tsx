import React from 'react'

interface Props {
  company: string
  position: string
  location: string
  description?: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

const WorkProfile: React.FC<Props> = ({
  company,
  position,
  location,
  description,
  startDate,
  endDate,
  responsibilities,
}) => {
  return (
    <div className='grid gap-3'>
      <div>
        <div className='text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl'>
          {company}
        </div>
        <div className='text-xl font-semibold tracking-tight text-zinc-600 sm:text-2xl'>
          {position}
        </div>
      </div>
      <div className='text-sm sm:text-base text-zinc-600'>
        <div>
          {startDate} &mdash; {endDate}
        </div>
        <div>{location}</div>
      </div>
      <div>
        {description && <p>{description}</p>}
        {responsibilities.length > 0 && (
          <ul role='list' className='list-disc pl-4 text-zinc-600'>
            {responsibilities.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default WorkProfile
