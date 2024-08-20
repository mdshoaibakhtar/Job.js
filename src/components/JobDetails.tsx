import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    CursorArrowRaysIcon,
    MapPinIcon,
    ClockIcon,
} from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useMyContext } from '@/app/context/MyContext';
import { company_mock_data } from '../mockdata/MockData'
import { useEffect } from 'react';
import JobDetailsSkeleton from './JobDetailsSkeleton';

export default function JobDetails() {
    const { loadSkeleton, setLoadSkeleton, activeJob } = useMyContext();
    useEffect(() => {
        setTimeout(() => {
                setLoadSkeleton('none');
            }, 500)
    }, [loadSkeleton])
    return (
        <div>
            {loadSkeleton === 'details' ? <JobDetailsSkeleton/> : 
            company_mock_data.map((each_company_data, index) => {
                return (
                    each_company_data.job_id === activeJob &&
                        <div key={index} className="lg:flex flex-col lg:items-center lg:justify-between mb-4 border-2 rounded border-solid border-slate-50 px-8 py-6 cursor-pointer transform transition shadow-md duration-7000 hover:rounded hover:border-slate-200">
                            <div className="lg:flex w-full lg:justify-between">
                                <div className="lg:flex w-full">
                                    <img className="inline-block h-10 w-10 rounded ring-2 ring-white" src={each_company_data.logo} alt="" />
                                    <div className="flex flex-col ml-3">
                                        <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                            {each_company_data.job_role}
                                        </h2>
                                        <div className="mt-1 flex items-center text-sm text-gray-500">
                                            {each_company_data.company_name}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                                    <span className="sm:ml-3">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            <CursorArrowRaysIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
                                            Apply
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2 flex flex-col sm:mt-2 sm:flex-row sm:flex-wrap sm:space-x-6 w-full justify-between">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                                    {each_company_data.job_type}
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                                    {each_company_data.location}
                                </div>
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                                    {each_company_data.job_offer}
                                </div>
                            </div>
                            <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex text-sm text-gray-500">
                                    <ClockIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                                    {each_company_data.days_left} days left
                                </div>
                            </div>
                            <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                    </svg>
                                    {
                                        each_company_data.skills.map((each_skills, index) => {
                                            return (
                                                <p key={index} className="ml-1 bg-gray-100 rounded p-1 text-xs">{each_skills}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="w-full mt-4 flex flex-col sm:mt-4 sm:flex-row sm:flex-wrap">
                                <h2 className="font-bold text-gray-600">About Us</h2>
                                <p className="text-gray-500 ml-0 text-sm">At Letsfindit, we are dedicated to creating innovative software solutions that make a difference. As a rapidly growing company, we pride ourselves on our collaborative environment and our commitment to excellence. We are currently seeking a passionate Fullstack Developer to join our dynamic team.</p>
                            </div>
                            <div className="w-full mt-4 flex flex-col sm:mt-4 sm:flex-row sm:flex-wrap">
                                <h2 className="font-bold text-gray-600">Job Description</h2>
                                <p className="text-gray-500 ml-0 text-sm">We are seeking motivated experienced to join our team. In this role, you will have the opportunity to work on developing applications on both the Salesforce and AWS platforms. Additionally, you will be engaged in various aspects of software development including quality engineering (Automation Testing), Data warehousing, Business Intelligence and TenAI. Also, there will be an opportunity to be engaged in Letsfindit Center of Excellence (LoE) Team.</p>
                            </div>
                            <div className="w-full mt-4 text-gray-600 flex flex-col sm:mt-4 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <h4 className='font-medium'>Skills And Qualification</h4>
                                <div>
                                    <ul className="list-disc pl-5">
                                        <li className="text-gray-500 ml-0 text-sm">Should have high-quality problem-solving skills with a fundamental understanding of ReactJs, Javascript, Amazon web services, System design, navigation compose, MVVM & gRPC</li>
                                        <li className="text-gray-500 ml-0 text-sm">Should have a bachelor degree in computer science</li>
                                        <li className="text-gray-500 ml-0 text-sm">Should have an ownership mentality where you are responsible for the end-to-end delivery of your task that is not just limited to executing your part but also collaborating with team members to ensure the timely delivery of the requirement</li>
                                        <li className="text-gray-500 ml-0 text-sm">At least 2 years of professional experience in Mobile App Development or related field</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full mt-4 text-gray-600 flex flex-col sm:mt-4 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <h4 className='font-medium'>Responsibilities</h4>
                                <div>
                                    <ul className="list-disc pl-5">
                                        <li className="text-gray-500 ml-0 text-sm">Design, code, debug, and unit test Android mobile applications</li>
                                        <li className="text-gray-500 ml-0 text-sm">Connecting with the product team to understand the features/business requirements for Android app development</li>
                                        <li className="text-gray-500 ml-0 text-sm">Integrate third-party services, such as REST APIs and Firebase</li>
                                        <li className="text-gray-500 ml-0 text-sm">Able to Work on Live Data and Good at Layout Design</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full mt-4 text-gray-600 flex flex-col sm:mt-4 sm:flex-col sm:flex-wrap sm:space-x-6">
                                <h4 className='font-medium'>Hiring Process</h4>
                                <div>
                                    <ol className="list-decimal pl-5">
                                        <li className="text-gray-500 ml-0 text-sm">Aptitude Test (Online)</li>
                                        <li className="text-gray-500 ml-0 text-sm">Technical Test (Online)</li>
                                        <li className="text-gray-500 ml-0 text-sm">Technical & HR Interviews (Online)</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}
