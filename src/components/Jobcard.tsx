import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/20/solid'
import { company_mock_data } from '../mockdata/MockData'
import { useMyContext } from '@/app/context/MyContext';
import { useEffect, useState } from 'react';

export default function Jobcard() {
  const { setActiveJob, setLoadSkeleton } = useMyContext();
  const [apply, setApply] = useState('');
  useEffect(() => {
    setTimeout(() => {
      if (apply !== '') {
        setApply('');
        setLoadSkeleton('all')
      }
    }, 500);
  }, [apply])
  return (
    <>
      {
        company_mock_data.map((each_company, index) => {
          return (
            <div key={index} className="lg:flex flex-col lg:items-center lg:justify-between mb-4 border-2 rounded border-solid border-slate-50 px-8 py-6 cursor-pointer transform transition shadow-md duration-7000 hover:rounded hover:border-slate-200">
              <div className="lg:flex w-full lg:justify-between">
                <div className="lg:flex w-full" onClick={() => { setActiveJob(each_company.job_id), setLoadSkeleton('details') }}>
                  <img className="inline-block h-10 w-10 rounded ring-2 ring-white" src={each_company.logo} alt="" />
                  <div className="flex flex-col ml-3">
                    <h2 className="text-lg font-semibold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
                      {each_company.job_role}
                    </h2>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      {each_company.company_name}
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                  <span className="sm:ml-3">
                    <button
                      onClick={() => { setApply(each_company.job_id) }}
                      type="button"
                      disabled={apply === each_company.job_id}
                      className={apply === each_company.job_id ? "inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm" : "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                    >
                      <CursorArrowRaysIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
                      Apply
                      {apply === each_company.job_id && <svg aria-hidden="true" role="status" className="ml-4 inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="gray" />
                      </svg>}
                    </button>
                  </span>
                </div>
              </div>
              <div onClick={() => { setActiveJob(each_company.job_id), setLoadSkeleton('details') }} className="w-full justify-between">
                <div className="mt-2 flex flex-col sm:mt-2 sm:flex-row sm:flex-wrap sm:space-x-6 w-full justify-between">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <BriefcaseIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    {each_company.job_type}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 capitalize">
                    <MapPinIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    {each_company.work_mode}
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <CurrencyDollarIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    {each_company.job_offer}
                  </div>
                </div>
                <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex text-sm text-gray-500">
                    <ClockIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    {each_company.days_left} days left
                  </div>
                </div>
                <div className="w-full mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                  <div className="mt-2 flex text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                    {
                      each_company.skills.map((each_skills, index) => {
                        return (
                          <p key={index} className="ml-1 bg-gray-100 rounded p-1 text-xs">{each_skills}</p>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}
