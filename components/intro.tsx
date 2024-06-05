import React from 'react'
import Image from 'next/image'
import portrait from '@/public/images/portrait.jpeg'


export default function Intro() {
    return (
        <section>
            <div className='flex items-center justify-center'>
                {/* relative to anchor emoji in absolute */}
                <div className='relative'>
                    <Image 
                    src={portrait}
                    alt='portrait'
                    // set file import size then set display size with styling
                    width='192'
                    height='192' 
                    quality='95'
                    priority={true}
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-violet-700 shadow-xl'
                    />
                    <span className='absolute bottom-0 right-0 text-4xl'>
                    👋
                    </span>
                </div>
            </div>
        </section>
    )
}
