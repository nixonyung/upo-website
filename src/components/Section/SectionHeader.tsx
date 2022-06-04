import React from 'react'

type SecitonHeaderProps = {
  children: React.ReactNode
}

export default function SectionHeader({ children }: SecitonHeaderProps) {
  return (
    <h2 className='font-Inter underline-offset-4 lg:text-4xl mt-6 mb-12 text-3xl underline uppercase'>
      {children}
    </h2>
  )
}
