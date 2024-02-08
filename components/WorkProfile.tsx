import React from 'react'

interface Props {
  name: string
  title: string
  location: string
  description?: string
  start: string
  end: string
  bullets: string[]
}

const WorkProfile: React.FC<Props> = ({
  name,
  title,
  location,
  description,
  start,
  end,
  bullets,
}) => {
  return (
    <div className='grid gap-3'>
      <div>
        <div className='text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl'>
          {name}
        </div>
        <div className='text-xl font-semibold tracking-tight text-zinc-600 sm:text-2xl'>
          {title}
        </div>
      </div>
      <div className='text-sm sm:text-base text-zinc-600'>
        <div>
          {start} &mdash; {end}
        </div>
        <div>{location}</div>
      </div>
      <div>
        {description && <p>{description}</p>}
        {bullets.length > 0 && (
          <ul role='list' className='list-disc pl-4 text-zinc-600'>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default WorkProfile
