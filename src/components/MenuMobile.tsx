import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'

export default function MenuMobile() {
  return (
    <button>
      <Icon title="Menu" path={mdiMenu} size={1} className="text-white" />
    </button>
  )
}
