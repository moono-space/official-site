import * as React from 'react'
import { Metadata } from 'next'
import {
  defaultOpenGraphMetadata,
  defaultTwitterMetadata,
} from '~/shared-metadata'
import { HeroSection } from './hero'

export const metadata: Metadata = {
  title: 'Moono',
  description: 'The house for better software, products and apps',
  openGraph: {
    ...defaultOpenGraphMetadata,
    title: 'Moono',
    description: 'The house for better software, products and apps',
  },
  twitter: {
    ...defaultTwitterMetadata,
    title: 'Moono',
    description: 'The house for better software, products and apps',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <HeroSection />
    </div>
  )
}
