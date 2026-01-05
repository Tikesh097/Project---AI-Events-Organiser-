import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
          <nav className='fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl z-20'>
                <div className='max-w-8xl mx-auto px-6 py-4 flex items-center justify-between'>
                    {/* Logo */}
                    <Link href={"/"} className='flex items-center'>
                        <Image
                            src="/EventIQ.png"
                            alt='Spott logo'
                            width={500}
                            height={500}
                            className='w-auto h-12'
                            priority
                        />

                        {/* Pro badge */}
                    </Link>

                    {/* Search & Location - Desktop Only */}

                    {/* Right Side Actiions */}
                </div>

                {/* Mobile Search & Location  - Below Header */}
            </nav>

            {/* Modals */}
        </>
    )
}

export default Header
