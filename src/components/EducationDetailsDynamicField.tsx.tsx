'use client'
import React from "react"
import { Accordion, AccordionItem, Checkbox, DatePicker, Input, Tooltip } from "@heroui/react"

const EducationDetailsDynamicField = () => {
    const dynamicFieldJson = [{
        id: 'gej3873he7gg37d',
        degree_name: 'Bachelor of technology',
        institute_name: 'Siliguri institute of technology, Siliguri',
        start_date: '2019',
        is_pursuing: true,
        end_date: '2023'
    }
    ]
    const addNewJobExperience = () => {
        let jobList = [...dynamicFieldJson];
        jobList.push({
            id: 'gej3873he7gg37d',
            degree_name: 'Cloudkaptan cosultancy services',
            institute_name: 'Software engineer',
            start_date: 'Sep 2022',
            is_pursuing: true,
            end_date: 'Sep 2022'
        }
        )
    }
    return (
        <div>
            <div className="w-full flex justify-between mb-4">
                <div className="text-md font-medium leading-6 text-gray-900 items-center pt-2">
                    Add your educational qualification
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
                            <AccordionItem key={index} aria-label={data.degree_name} title={data.degree_name.length != 0 ? data.degree_name : 'Degree name'} subtitle={data.institute_name.length != 0 ? data.institute_name : 'Institute name'}>
                                <div key={index} className="border-2 rounded-md px-6 py-2 mb-2 bg-[#d6d6d6]">
                                    <div className="flex justify-end w-full items-end cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Degree
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <Input
                                                        type='name'
                                                        radius="sm"
                                                        placeholder='Please enter your course/degree name'
                                                        defaultValue={data.degree_name}
                                                    />
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Institute name
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <Input
                                                        type='name'
                                                        radius="sm"
                                                        placeholder='Your institute name'
                                                        defaultValue={data.institute_name}
                                                    />
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            Start date
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative flex">
                                                    <DatePicker className="max-w-[50%] mr-1" showMonthAndYearPickers />
                                                    <Checkbox className="max-w-[50%] ml-1" defaultSelected={data.is_pursuing}>Pursuing</Checkbox>
                                                </div>
                                            </form>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                            End date
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                                <div className="relative">
                                                    <DatePicker className="max-w-[50%]" showMonthAndYearPickers />
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

export default EducationDetailsDynamicField