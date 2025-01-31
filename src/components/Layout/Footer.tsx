import Image from 'next/image'
import React from 'react'
import FooterLogo from '../../../public/assets/footerLogo.png'
import Logo from '../../../public/assets/Logo.png'

const Footer: React.FC = () => {
    return (
        <div className='w-[100%] bg-base-300 h-[628px] bg-gra flex  items-center flex-row'>
            <div className='flex-1 flex justify-center'>
                <div className='flex flex-col gap-10'>
                    <div>
                        <p className='text-sm text-neutral-500 font-semibold'>INFO</p>
                        <ul className='mt-4 text-lg text-neutral-600 font-semibold'>
                            <li>Pricing  <span className='font-extralight'>/</span></li>
                            <li>About  <span className='font-extralight'>/</span></li>
                            <li>Contacts  <span className='font-extralight'>/</span></li>
                        </ul>
                    </div>

                    <div>
                        <p className='text-sm text-neutral-500 font-semibold'>LANGUAGES</p>
                        <ul className='mt-4 text-lg text-neutral-600 font-semibold'>
                            <li>English  <span className='font-extralight'>/</span></li>
                            <li>Bengali  <span className='font-extralight'>/</span></li>
                            <li>Espanish  <span className='font-extralight'>/</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex justify-start'>
                <div className='flex flex-col gap-10'>
                    <p>Technologies</p>
                    <div className='relative w-[345px] h-[198px]'>
                        <Image src={FooterLogo} alt='Footer Logo' fill />
                        <div className='relative h-[47px] w-[47px] top-0'>
                            <Image src={Logo} alt='Footer Logo' fill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
