import Image from 'next/image'

interface CardIconProps {
  icon: string
}

export default function CardIcon(props: CardIconProps) {
  return (
    <div className=" flex h-20 w-20 items-center justify-center rounded-md bg-gradient-to-tl from-black from-25% to-[#8F7000] to-100% drop-shadow-md">
      <Image src={props.icon} alt="tesoura" />
    </div>
  )
}
