'use client'

import { useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    ArrowDownOnSquareStackIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronUpIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useMyContext } from '@/app/context/MyContext'
import { clearCookie } from '@/utils/CookiesManagement'
import { useRouter } from 'next/navigation';
import { Badge, Divider } from '@heroui/react'

const products = [
    {
        "name": "Internships",
        "description": "Gain hands-on experience and kickstart your career",
        "href": "/jobs",
        "icon": CursorArrowRaysIcon
    },
    {
        "name": "Software Engineer",
        "description": "Develop and maintain cutting-edge software solutions",
        "href": "/jobs",
        "icon": ChartPieIcon
    },
    {
        "name": "AI/ML Engineer",
        "description": "Design and implement machine learning models and AI systems",
        "href": "/jobs",
        "icon": FingerPrintIcon
    },
    {
        "name": "Data Engineer",
        "description": "Build and optimize data pipelines and manage data architecture",
        "href": "/jobs",
        "icon": SquaresPlusIcon
    },
    {
        "name": "DevOps",
        "description": "Ensure seamless deployment and integration of software",
        "href": "/jobs",
        "icon": ArrowPathIcon
    },
    {
        "name": "Quality Assurance",
        "description": "Ensure the highest standards of software quality through rigorous testing",
        "href": "#",
        "icon": ArrowDownOnSquareStackIcon
    }

]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isOpenSideDrawer, setIsOpenSideDrawer] = useState(false)
    const { activeUser } = useMyContext();
    const router = useRouter();

    const handleLogout = () => {
        clearCookie('user')
        router.push('/login');
    };
    const handleClose = () => {
        setIsOpenSideDrawer(false)
    }

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-[95%] items-center justify-between p-6 px-2 lg:px-0">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="/jobdotjslogo.png" className="h-14 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                            style={{ outline: 'none' }}
                            onFocus={(e) => e.target.style.outline = 'none'}
                        >
                            Jobs
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-[#BB2649]" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link href="/playground" className="text-sm font-semibold leading-6 text-gray-900">
                        Playground
                    </Link>
                    <Link href="/learning" className="text-sm font-semibold leading-6 text-gray-900">
                        Learning
                    </Link>
                    <Link href="/reviews" className="text-sm font-semibold leading-6 text-gray-900">
                        Company Reviews
                    </Link>
                    <Link href="/hackathons" className="text-sm font-semibold leading-6 text-gray-900">
                        Hackathons
                    </Link>
                </PopoverGroup>
                {!(activeUser && activeUser['isLoggedIn']) ?
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <button onClick={() => console.log('Login page')} className="text-sm font-semibold leading-6 text-gray-900">
                            <Link href='/login' className='text-sm'>Log in</Link> <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div> :
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <SideDrawer
                            title='Notifications'
                            content={<>Hello</>}
                            isOpen={isOpenSideDrawer}
                            handleClose={handleClose}
                        /> */}
                        {/* <Badge content={2} color="danger" className='mr-1'>
                            <button
                                className="relative rounded-full p-1 text-gray-400 hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9ca3af" className="size-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                </svg>
                            </button>
                        </Badge>
                        <Badge content={8} color="danger" className='mr-2'>
                            <button
                                type="button"
                                onClick={() => setIsOpenSideDrawer(true)}
                                className="relative rounded-full p-1 text-gray-400 hover:text-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </Badge> */}

                        <Menu as="div" className="relative ml-3">
                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                    alt=""
                                    src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                    className="h-8 w-8 rounded-full"
                                />
                            </MenuButton>
                            <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                                <MenuItem>
                                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Your Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Settings
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="/appliedusers" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Applied users
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="/jobposting" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Job posting
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href="/jobposting" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Messages
                                    </Link>
                                </MenuItem>
                                <Divider />
                                <MenuItem>
                                    <p onClick={handleLogout} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                        Log Out
                                    </p>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>}
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="/jobdotjslogo.png"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Jobs
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link
                                    href="/playground"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Playground
                                </Link>
                                <Link
                                    href="/learning"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Learning
                                </Link>
                                <Link
                                    href="/reviews"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company Reviews
                                </Link>
                                <Link
                                    href="/hackathons"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Hackathons
                                </Link>
                            </div>
                            {!(activeUser && activeUser['isLoggedIn']) ? <div className="py-6">
                                <Link
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div> :
                                <div className="py-6">
                                    <Link
                                        href="/profile"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Your Profile
                                    </Link>
                                    <Link
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Settings
                                    </Link>
                                    <p onClick={handleLogout}
                                        className="cursor-pointer -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log Out
                                    </p>
                                </div>}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
