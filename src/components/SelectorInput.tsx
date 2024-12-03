'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const people = [
    {
        id: 1,
        name: 'Individual',
        avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Organization',
        avatar: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D',
    },
]

export default function SelectorInput() {
    const [selected, setSelected] = useState(people[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <Label className="block text-sm font-medium text-gray-900">User type</Label>
            <div className="relative mt-1 cursor-pointer">
                <ListboxButton className="relative w-full cursor-pointer rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 sm:text-sm/6">
                    <span className="flex items-center">
                        <img alt="" src={selected.avatar} className="size-5 shrink-0 rounded-full" />
                        <span className="ml-3 block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                    </span>
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {people.map((person) => (
                        <ListboxOption
                            key={person.id}
                            value={person}
                            className="group cursor-pointer relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-gray-800 data-[focus]:text-white"
                        >
                            <div className="flex items-center">
                                <img alt="" src={person.avatar} className="size-5 shrink-0 rounded-full" />
                                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {person.name}
                                </span>
                            </div>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                <CheckIcon aria-hidden="true" className="size-5" />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
