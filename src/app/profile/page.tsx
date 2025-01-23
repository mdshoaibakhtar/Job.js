import EditableForm from '@/components/EditableForm'
import Navbar from '@/components/Navbar'
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className='px-5 py-8 md:px-60 lg:px-30 2xl:px-30 xl:px-30 3xl:px-30'>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h3>
        </div>
        
        <div className="mt-6">
          <dl className="divide-y divide-gray-100">
            <EditableForm
              title="Full name"
              defaultValue="Md Shoaib Akhtar"
              resize={false}
              rows={1}
            />
            <EditableForm
              title="About"
              defaultValue="Hi I'm Md Shoaib Akhtar ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. Hi I'm Md Shoaib Akhtar ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."
              resize={true}
              rows={8} 
            />
            <EditableForm
              title="Email address"
              defaultValue="mdshoaibakhtar@example.com"
              resize={false}
              rows={1} 
            />
            <EditableForm
              title="Date of birth"
              defaultValue="08 Feb 2002"
              resize={false}
              rows={1}
            />
            <EditableForm
              title="Contact number"
              defaultValue="+91 9905109322"
              resize={false}
              rows={1}
            />
            <EditableForm
              title="Permanent address"
              defaultValue="Thana road, Sultanganj, Bihar - 813213"
              resize={false}
              rows={1}
            />
            <EditableForm
              title="Current address"
              defaultValue="Elite tower, Sector V, Kolkata - 710009"
              resize={false}
              rows={1}
            />
          </dl>
        </div>
        <div className="px-4 sm:px-0 mt-6">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Your Career Preferences</h3>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Preferred location</dt>
              <div className='flex'>

                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Kolkata
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Hyderabd
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Pune
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Chennai
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Noida
                </dd>
              </div>
              {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">, Chennai, Noida, Bengalore, Pune & Hyderabad</dd> */}
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Preferred role</dt>
              <div className='flex max-w-full'>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Fullstack developer
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Frontend developer
                </dd>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                  Backend developer
                </dd>
              </div>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Preferred salary</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rs 14,00,000</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Preferred shift</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Flexible</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Job type</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Permanent
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Employment type</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Full time
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                        <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 sm:px-0 mt-6">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Basic details</h3>
        </div>
        <div className="mt-6">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Current location</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Kolkata, West bengal</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Years of experience</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">2 Years 1 Month</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Current salary</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Rs 7,00,000</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Notice period</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">30 days (Negotiable)</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Skills</dt>
              <div className='flex flex-col sm:flex-row'>
                <div className='flex'>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    Javascript
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    Reactjs
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    Nextjs
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    AWS
                  </dd>
                </div>
                <div className='flex mt-2 sm:mt-0'>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    Java
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    Python
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    SQL
                  </dd>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                    Tailwind
                  </dd>
                </div>
              </div>
            </div>
          </dl>
        </div>
        <div className='px-4 md:px-0 lg:px-0'>
          <div className="mt-6">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Employment</h3>
          </div>
          <div className="mt-6">
            {/* Text Editor */}
            <div className="py-1 flex sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900"><img
                                    alt=""
                                    src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                                    className="h-8 w-8"
                                /></dt>
              <dd className="mt-1 ml-2 text-md font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Software engineer</dd>
            </div>
            <div className='w-full'>
              <dd className="mt-1 text-[13px] leading-6 font-semibold text-gray-700 sm:col-span-2 sm:mt-0">Cloudkaptan cosultancy services</dd>
              <dd className="mt-1 text-[11px] leading-3 text-gray-700 sm:col-span-2 sm:mt-0">Full time From Sep 2022 - Present</dd>
              <dd className="mt-4 w-full text-sm leading-4 text-gray-700 sm:col-span-2 sm:mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere, nam non quia delectus amet, odit quam perferendis placeat? Iusto molestias, voluptas eveniet inventore adipisci vero. Animi.</dd>
              <dd className="w-full text-sm leading-4 text-gray-700 sm:col-span-2 sm:mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere, nam non quia delectus amet, odit quam perferendis placeat? Iusto molestias, voluptas eveniet inventore adipisci vero. Animi.</dd>
            </div>
          </div>
        </div>
        <div className='px-4 md:px-0 lg:px-0'>
          <div className="mt-6">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Projects</h3>
          </div>
          <div className="mt-6">
            {/* Text Editor */}
            <div className="py-0 flex sm:px-0">
              <dd className="mt-1 text-md font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Jobdotjs - Job portal</dd>
            </div>
            <div className='w-full'>
              <dd className="mt-1 text-[11px] leading-3 text-gray-700 sm:col-span-2 sm:mt-0">Personal project</dd>
              <dd className="mt-4 w-full text-sm leading-4 text-gray-700 sm:col-span-2 sm:mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere, nam non quia delectus amet, odit quam perferendis placeat? Iusto molestias, voluptas eveniet inventore adipisci vero. Animi.</dd>
              <dd className="w-full text-sm leading-4 text-gray-700 sm:col-span-2 sm:mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere, nam non quia delectus amet, odit quam perferendis placeat? Iusto molestias, voluptas eveniet inventore adipisci vero. Animi.</dd>
            </div>
          </div>
        </div>
        <div className='px-4 md:px-0 lg:px-0'>
          <div className="mt-6">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Education</h3>
          </div>
          <div className="mt-6">
            <div className="py-0 flex sm:px-0">
              <dd className="mt-1 text-md font-semibold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Bachelor of technology</dd>
            </div>
            <div className='w-full'>
              <dd className="mt-1 text-[11px] leading-3 text-gray-700 sm:col-span-2 sm:mt-0">Siliguri institute of technology, Siliguri</dd>
              <dd className="mt-1 text-[11px] leading-4 text-gray-700 sm:col-span-2 sm:mt-0">2019-2023</dd>
              <dd className="mt-4 w-full text-sm leading-4 text-gray-700 sm:col-span-2 sm:mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere, nam non quia delectus amet, odit quam perferendis placeat? Iusto molestias, voluptas eveniet inventore adipisci vero. Animi.</dd>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
