import CardIcon from './CardIcon'

import ScheduleButton from './ScheduleButton'

interface ServiceSectionProps {
  title: string
  price: number
  time: number
  iconCard: string
}

export default function ServiceSection(props: ServiceSectionProps) {
  return (
    <div className="flex w-full gap-5 p-5 text-white">
      <CardIcon icon={props.iconCard} />

      <div className="flex w-3/4 items-end justify-between">
        <div className="flex h-full flex-col justify-between ">
          <h2 className="text-base drop-shadow-md">{props.title}</h2>
          <p className="font-sans text-xs drop-shadow-md">{`R$${props.price} - ${props.time}min`}</p>
        </div>
        <ScheduleButton />
      </div>
    </div>
  )
}
