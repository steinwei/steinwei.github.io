import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'pageUp',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'pageDown',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})