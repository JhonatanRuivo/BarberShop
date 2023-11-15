import Image from 'next/image'
import bgHeader from '../../public/images/bg_header.png'

import LogoBarberShop from './LogoBarberShop'
import MenuMobile from './MenuMobile'

export default function BgHeader() {
  return (
    <div className="relative flex h-32 w-screen items-center justify-center">
      <div className="absolute z-10 flex h-[100%] w-[100%] items-center justify-center bg-gradient-to-t from-black " />
      <Image
        className="z-0 opacity-25"
        src={bgHeader}
        alt="foto de barbearia"
      />
      <div className="absolute z-20 flex w-screen items-center pl-5 ">
        <MenuMobile />
        <div className="flex w-5/6 items-center justify-center ">
          <LogoBarberShop />
        </div>
      </div>
    </div>
  )
}
