'use client'
import React from "react"
import { Accordion, AccordionItem, Checkbox, DatePicker, Input, Select, SelectItem, Textarea, Tooltip } from "@heroui/react"
import { employementTypeOptions, notice_period } from "@/utils/Constant"

const ProjectDynamicField = () => {
    const dynamicFieldJson = [{
        id: 'gej3873he7gg37d',
        title: 'Jobdotjs - Job portal',
        link: 'Personal project',
        github: 'https://mdshoaibakhtar.github.io',
        short_description: 'This is my short description of my project',
        explanation: ''
    }
    ]
    const addNewJobExperience = () => {
        let jobList = [...dynamicFieldJson];
        jobList.push({
            id: 'gej3873he7gg37d',
            title: 'Jobdotjs - Job portal',
            link: 'Personal project',
            github: 'https://mdshoaibakhtar.github.io',
            short_description: 'This is my short description of my project',
            explanation: ''
        }
        )
    }
    return (
        <div>
            <div className="w-full flex justify-between mb-4">
                <div className="text-md font-medium leading-6 text-gray-900 items-center pt-2">
                    Add your projects
                </div>
                <div className="text-sm font-medium leading-6 text-gray-900 items-center pt-2 cursor-pointer" onClick={() => addNewJobExperience()}>
                    <Tooltip content="Add job experience">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </Tooltip>
                </div>
            </div>
            <Accordion className="px-[-1.6rem]" defaultExpandedKeys={["0"]}>
                {
                    dynamicFieldJson.map((data, index) => {
                        return (
                            <AccordionItem key={index} title={data.title.length != 0 ? data.title : 'Project title'} subtitle={data.short_description.length != 0 ? data.short_description : 'Project type'}>
                                <div key={index} className="border-2 rounded-md px-6 py-2 mb-2 bg-[#d6d6d6]">
                                    <div className="flex justify-end w-full items-end cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Project title
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <Input
                                                        type='name'
                                                        radius="sm"
                                                        placeholder='Please enter your project name'
                                                        defaultValue={data.title}
                                                    />
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Project description
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <Input
                                                        type='name'
                                                        radius="sm"
                                                        placeholder='Project description'
                                                        defaultValue={data.short_description}
                                                    />
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            More about project
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <div className="py-2">
                                                        <Textarea
                                                            type="textarea"
                                                            minRows={4}
                                                            style={{
                                                                outline: 'none',
                                                                border: 'none',
                                                                boxShadow: 'none',
                                                                overflow: 'hidden',
                                                                scrollbarWidth: 'none',
                                                            }}
                                                            placeholder='Tell us about your project (In comma separated points)'
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Link
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <Input
                                                        type='name'
                                                        radius="sm"
                                                        placeholder='Paste your live project link'
                                                        defaultValue={data.link}
                                                    />
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Github
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <Input
                                                        type='name'
                                                        radius="sm"
                                                        placeholder='Paste your project github repository link'
                                                        defaultValue={data.github}
                                                    />
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                </div>
                            </AccordionItem>
                        )

                    })
                }
            </Accordion>
        </div>
    )
}

export default ProjectDynamicField