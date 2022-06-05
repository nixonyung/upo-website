import React from 'react'
import SectionHeader from './SectionHeader'

type SectionProps = {
  children?: React.ReactNode | null
  innerRef?: React.Ref<HTMLDivElement> | null
  header: string
}

export default function Section({ innerRef, header, children }: SectionProps) {
  return (
    <section
      ref={innerRef}
      className='md:my-20 max-w-3xl px-6 mx-auto my-16 text-center'>
      <SectionHeader>{header}</SectionHeader>
      {children}
    </section>
  )
}
