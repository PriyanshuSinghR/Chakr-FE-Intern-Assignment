import Link from 'next/link'
import {
  BellPlus,
  Building2,
  Calculator,
  Calendar,
  CreditCard,
  Gem,
  Settings,
  Smile,
  User,
  UserRoundCog,
  UsersRound,
} from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function MenuCommand() {
  const menuList = [
    {
      group: 'Utilities',
      items: [
        {
          link: '/people',
          icon: <UsersRound className='mr-2 h-4 w-4' />,
          text: 'People',
          shortKey: 'P',
        },
        {
          link: '/companies',
          icon: <Building2 className='mr-2 h-4 w-4' />,
          text: 'Companies',
          shortKey: 'C',
        },
        {
          link: '/prospects',
          icon: <Gem className='mr-2 h-4 w-4' />,
          text: 'Prospects',
          shortKey: 'G',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/profile',
          icon: <UserRoundCog className='mr-2 h-4 w-4' />,
          text: 'Profile',
          shortKey: 'U',
        },
        {
          link: '/settings',
          icon: <Settings className='mr-2 h-4 w-4' />,
          text: 'General Settings',
          shortKey: 'S',
        },
      ],
    },
    {
      group: 'Others',
      items: [
        {
          link: '/notifications',
          icon: <BellPlus className='mr-2 h-4 w-4' />,
          text: 'Notifications',
          shortKey: 'N',
        },

        {
          link: '/calendar',
          icon: <UserRoundCog className='mr-2 h-4 w-4' />,
          text: 'Calendar',
          shortKey: 'D',
        },
      ],
    },
  ]

  return (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {menuList.map((menu, index) => (
          <CommandGroup heading={menu.group} key={index}>
            {menu.items.map((item, subIndex) => (
              <Link href={item?.link} key={subIndex}>
                <CommandItem className='cursor-pointer'>
                  {item?.icon}
                  <span>{item?.text}</span>
                  <CommandShortcut>⌘{item?.shortKey}</CommandShortcut>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </Command>
  )
}
export default MenuCommand
