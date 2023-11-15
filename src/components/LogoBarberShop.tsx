import Image from 'next/image'
import logo from '../../public/LOGO.svg'

export default function LogoBarberShop() {
  return <Image src={logo} alt="logo da barbearia" />
}
