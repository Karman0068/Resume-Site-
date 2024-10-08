import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link,NavLink, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

import default_DP from '../../../Pictures/default images/DP.jpg'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'New People', href: '#', current: false },
  { name: 'My Projects', href: '#', current: false },
  { name: 'Messages', href: '#', current: false },
]

function classNames(...classes) {

  const location = useLocation();

  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-slate-800 sticky top-0 z-50">
      <div className="mx-0  px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            <div className="hidden lg:ml-6 lg:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-yellow-100',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



            {location.pathname === '/Projects' && (
              <SearchBar />
            )}

            <div className='flex gap-2'>
              <button
                type="button"
                className="relative rounded-full bg-gray-800  text-gray-400 hover:text-white active:outline-none active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <button
                type="button"
                className="relative rounded-full bg-gray-800  text-gray-400 hover:text-white active:outline-none active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-gray-800 text-2xl rotate-[29deg]"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                &#9789;
              </button>

              <button
                type="button"
                className="relative rounded-full bg-gray-800  text-gray-400 hover:text-white active:outline-none active:ring-2 active:ring-white active:ring-offset-2 active:ring-offset-gray-800 text-2xl"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                &#9965;
              </button>
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src={default_DP}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <NavLink to='/profile' className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
