'use client'
import React from "react"
import { Accordion, AccordionItem, Checkbox, DatePicker, Input, Select, SelectItem, Textarea, Tooltip } from "@heroui/react"
import { employementTypeOptions, notice_period } from "@/utils/Constant"

const JobDetailsDynamicField = () => {
    const dynamicFieldJson = [{
            company_id: 'gej3873he7gg37d',
            company_name: 'Cloudkaptan cosultancy services',
            job_title: 'Software engineer',
            employment_type: 'fulltime',
            start_date: 'Sep 2022',
            is_this_your_current_company: true,
            end_date: 'Sep 2022',
            current_annual_salary: '70000',
            notice_period: '15days',
            work_experience: ''
        }
    ]
    const addNewJobExperience = () => {
        let jobList = [...dynamicFieldJson];
        jobList.push({
                company_id: '',
                company_name: '',
                job_title: '',
                employment_type: '',
                start_date: '',
                is_this_your_current_company: false,
                end_date: '',
                current_annual_salary: '',
                notice_period: '',
                work_experience: ''
            }
        )
    }
    return (
        <div>
            <div className="w-full flex justify-between mb-4">
                <div className="text-md font-medium leading-6 text-gray-900 items-center pt-2">
                    Add your work experience
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
                            <AccordionItem key={index} aria-label={data.company_name} title={data.company_name.length != 0 ? data.company_name : 'Company name'} subtitle={data.job_title.length != 0 ? data.job_title : 'Job profile'}>
                        <div key={index} className="border-2 rounded-md px-6 py-2 mb-2 bg-[#d6d6d6]">
                            <div className="flex justify-end w-full items-end cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                    Company name
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                        <div className="relative">
                                            <Input
                                                type='name'
                                                radius="sm"
                                                placeholder='Please enter company name'
                                                defaultValue={data.company_name}
                                            />
                                        </div>
                                    </form>
                                </dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                    Job title
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                        <div className="relative">
                                            <Input
                                                type='name'
                                                radius="sm"
                                                placeholder='Please enter company name'
                                                defaultValue={data.job_title}
                                            />
                                        </div>
                                    </form>
                                </dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                    Employment type
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                        <div className="relative">
                                            <Select className="max-w-full" selectedKeys={data.employment_type} placeholder="Select employmnet type" selectionMode='single'>
                                                {employementTypeOptions.map((animal) => (
                                                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                                                ))}
                                            </Select>
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
                                            <Checkbox className="max-w-[50%] ml-1" defaultSelected={data.is_this_your_current_company}>Is this your curent company</Checkbox>
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
                                            <DatePicker className="max-w-full" showMonthAndYearPickers />
                                        </div>
                                    </form>
                                </dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                    Current annual salary (In Lacs)
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                        <div className="relative">
                                            <Input
                                                type='name'
                                                radius="sm"
                                                placeholder='Please enter company name'
                                                defaultValue={data.current_annual_salary}
                                            />
                                        </div>
                                    </form>
                                </dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                    Notice period
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                                        <div className="relative">
                                            <Select className="max-w-full" selectedKeys={data.notice_period} placeholder="Notice period" selectionMode='single'>
                                                {notice_period.map((animal) => (
                                                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </form>
                                </dd>
                            </div>
                            <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                    Work experience
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
                                                    placeholder='Tell us about your work experience (In comma separated points)'
                                                />
                                            </div>
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

export default JobDetailsDynamicField