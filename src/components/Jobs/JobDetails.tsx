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
import { company_mock_data } from '../../mockdata/MockData'
import { useEffect } from 'react';
import JobDetailsSkeleton from './JobDetailsSkeleton';
import moment from 'moment';
import parse from 'html-react-parser';

interface JobDetailsInterface {
    _id: string;
    organisationLogo: string;
    opportunityName: string;
    organisationName: string;
    applyLink: string;
    opportunityMode: string;
    city: string;
    applicationStartTime: string;
    minRange: string;
    opportunityLocation: string;
    maxRange: string;
    salaryUnit: string;
    applicationEndTime: string;
    description: string;
    skillsRequired: [string];
}
interface Props {
    jobDetails: JobDetailsInterface;
}

export default function JobDetails({jobDetails}: Props) {
    const { loadSkeleton, setLoadSkeleton, activeJob } = useMyContext();
    // console.log('object', jobDetails);
    return (
        <div>
            {(loadSkeleton == 'details') ? <JobDetailsSkeleton /> :
                <div className="lg:flex flex-col lg:items-center lg:justify-between mb-4 border-2 rounded border-solid border-slate-50 px-8 py-6 cursor-pointer transform transition shadow-md duration-7000 hover:rounded hover:border-slate-200">
                    <div className="lg:flex w-full lg:justify-between">
                        <div className="lg:flex w-full">
                            <img className="inline-block h-10 w-10 rounded ring-2 ring-white" src={jobDetails.organisationLogo} alt="" />
                            <div className="flex flex-col ml-3">
                                <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                                    {jobDetails.opportunityName}
                                </h2>
                                <div className="mt-1 flex items-center text-sm text-gray-500">
                                    {jobDetails.organisationName}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:ml-4 lg:mt-0">
                            <span className="sm:ml-3">
                                <button
                                    onClick={() => window.open(jobDetails.applyLink, '_blank')}
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-[#BB2649] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BB2649]"
                                >
                                    <CursorArrowRaysIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
                                    Apply
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="mt-2 mb-2 flex flex-col sm:mt-2 sm:flex-row sm:flex-wrap sm:space-x-6 w-full justify-between">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                            {jobDetails.opportunityMode}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                            {jobDetails.opportunityLocation}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                            {jobDetails.minRange} - {jobDetails.maxRange} {jobDetails.salaryUnit}
                        </div>
                        <div className="mt-2 flex text-sm text-gray-500">
                            <ClockIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                            Last date - {moment(jobDetails.applicationEndTime).format('MMMM Do YYYY')}
                        </div>
                    </div>
                    <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                            </svg>
                            {
                                jobDetails.skillsRequired?.map((each_skills, index) => {
                                    return (
                                        <p key={index} className="ml-1 bg-gray-100 rounded p-1 text-xs">{each_skills}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="w-full mt-4 flex flex-col sm:mt-4 sm:flex-row sm:flex-wrap">
                        <p className="text-gray-500 ml-0 text-sm">{parse(String(jobDetails.description))}</p>
                    </div>
                </div>

            }
        </div>
    )
}
