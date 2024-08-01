import { Hero } from '@/components/hero'
import { ImageGalery } from '@/components/image-galery'
import { ImageTextBlock } from '@/components/image-text-block'
import { TwoColumnsText } from '@/components/two-columns-text'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4 md:px-6'>
        <div className='bg-primary-foreground'>
            <Hero />
            <TwoColumnsText />
            <ImageTextBlock />
            <TwoColumnsText />
            <ImageGalery />
        </div>
    </div>
  )
}

export default page