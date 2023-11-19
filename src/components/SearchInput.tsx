import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'

export default function SearchInput() {
  return (
    <search className="mx-5 flex gap-1 rounded-full bg-yellow-50 px-1 text-gray-400">
      <Icon className="text-gray-400" path={mdiMagnify} size={1} />
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-[100%] bg-transparent text-sm font-medium text-black focus:outline-none"
      />
    </search>
  )
}
