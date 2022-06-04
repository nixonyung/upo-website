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
      className='max-w-3xl px-6 mx-auto my-20 text-left text-center'>
      <SectionHeader>{header}</SectionHeader>
      {children}
    </section>
  )
}
