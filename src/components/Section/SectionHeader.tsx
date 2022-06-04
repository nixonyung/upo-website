import React from 'react'

type SecitonHeaderProps = {
  children: React.ReactNode
}

export default function SectionHeader({ children }: SecitonHeaderProps) {
  return (
    <h2 className='font-Inter underline-offset-4 inline-block my-6 text-3xl underline uppercase'>
      {children}
    </h2>
  )
}
