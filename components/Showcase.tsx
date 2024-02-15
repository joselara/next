'use client'

import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

interface Props {
  images: string[]
}

const Showcase: React.FC<Props> = ({ images }: { images: string[] }) => {
  const [rotations, setRotations] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([])

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const generateRotations = () => {
      if (duplicatedImages.length) {
        setRotations(
          Array.from({ length: duplicatedImages.length }, (_, index) =>
            index % 2 === 0 ? 'rotate(2deg)' : 'rotate(-2deg)'
          )
        )
      }
    }
    setDuplicatedImages([...images, ...images])
    generateRotations()
  }, [images, duplicatedImages.length])

  return (
    <div className='mt-10 sm:mt-16'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {duplicatedImages.map((image, imageIdx) => (
          <div
            key={imageIdx}
            className='relative cursor-pointer aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border drop-shadow-lg'
            style={{
              transform: `translateX(-${100 * currentIndex}%) ${
                rotations[imageIdx % rotations.length]
              }`,
            }}
          >
            <Image
              width={320}
              height={280}
              src={image}
              className='absolute inset-0 h-full w-full object-cover'
              alt='Showcase Image'
            />
          </div>
        ))}
      </div>

      <div className='sm:px-8 mt-10'>
        <div className='mx-auto max-w-7xl lg:px-8'>
          <div className='mx-auto flex items-center space-x-4 ml-auto'>
            <div className='mx-auto flex items-center space-x-4 select-none'>
              <ChevronLeftIcon
                onClick={prevImage}
                className='w-8 h-8 cursor-pointer text-zinc-700'
              />
              <ChevronRightIcon
                onClick={nextImage}
                className='w-8 h-8 cursor-pointer text-zinc-700'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
