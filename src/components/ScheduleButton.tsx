import { mdiCalendarCheck } from '@mdi/js'
import Icon from '@mdi/react'

export default function ScheduleButton() {
  return (
    <>
      <button className="flex h-fit w-fit items-center gap-1 rounded-lg bg-yellow-400 p-1 text-black drop-shadow-md">
        <p className="text-xs font-semibold uppercase">Agendar</p>
        <Icon path={mdiCalendarCheck} size={1} />
      </button>
    </>
  )
}
