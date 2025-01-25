'use client'
import BackDropModal from '@/components/BackDropModal';
import EditableForm from '@/components/EditableForm'
import Navbar from '@/components/Navbar'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Button, Checkbox, DatePicker, DateValue, Input, Textarea } from '@heroui/react';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState([])
  const handleClose = () => {
    setOpenModal(false);
  }
  const formJson = [
    {
      "label": "Name",
      "placeholder": "Enter your name",
      "defaultValue": "John Doe",
      "type": "name"
    },{
      "label": "Email",
      "placeholder": "Enter your email",
      "defaultValue": "johndoe@gmail.com",
      "type": "name"
    },{
      "label": "Date of birth",
      "placeholder": "Select your date of birth",
      "defaultValue": "08/02/2002",
      "type": "date"
    },{
      "label": "Contact number",
      "placeholder": "Enter your contact number",
      "defaultValue": "+919905109322",
      "type": "name"
    },{
      "label": "Permanent address",
      "placeholder": "Enter your permanent address",
      "defaultValue": "Thana road, Sultanganj, Bihar - 813213",
      "type": "name"
    },{
      "label": "Same as permanent address",
      "placeholder": "",
      "defaultValue": "false",
      "type": "checkbox"
    },{
      "label": "Current address",
      "placeholder": "Enter your current address",
      "defaultValue": "Thana road, Sultanganj, Bihar - 813213",
      "type": "name"
    },
    // {
    //   "label": "About",
    //   "placeholder": "Tell us about yourself",
    //   "defaultValue": "Hi, I am Md Shoaib Akhtar",
    //   "type": "textarea"
    // },
  ]
  const checkFutureDate = (date:any) => {
    const givenDate = new Date(date); // month is 0-indexed (0 = January, 1 = February)
    // Create the current date (today's date)
    const today = new Date();

    // Compare the two dates
    if (givenDate >= today) {
      return true
    } else if (givenDate < today) {
      return false
    }
  }
  const generateField = () => {
    const arr:any = [];
    formJson.forEach((attr, index) => {
      return (
        arr.push(<div key={index} className="px-4 py-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">{attr.type === 'checkbox' ? '': attr.label}</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
              <div className="relative">
                {attr.type === 'name' ?
                  <Input type={attr.type} radius='sm' placeholder={attr.placeholder} defaultValue={attr.defaultValue} />:
                  (attr.type === 'date' ? <DatePicker fullWidth className="pb-0" isDateUnavailable={(date: DateValue) => checkFutureDate(date) ?? false} /> :
                    (attr.type == 'checkbox' ? <Checkbox defaultSelected>{attr.label}</Checkbox> : <Textarea type='textarea' className="" placeholder={attr.placeholder} />)
                  )
                }
              </div>
            </form>
          </dd>
        </div>)
      )
    })
    setContent(arr)
  }
  useEffect(() => {
    generateField()
  }, [])
  // const content =
    // <div>
    //   <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
    //     <dt className="text-sm font-medium leading-6 text-gray-900 mt-2">Name</dt>
    //     <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
    //       <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
    //         <div className="mt-1 relative">
    //           <Input type="name" radius='sm'/>
    //         </div>
    //       </form>
    //     </dd>
    //   </div>
    // </div>
  const footer = <div>
    <Button color="danger" variant="light" onPress={handleClose}>
      Close
    </Button>
    <Button color="primary" onPress={handleClose}>
      Save changes
    </Button>
  </div>
  return (
    <>
      <BackDropModal
        openModal={openModal}
        handleClose={handleClose}
        title="Edit personal information"
        content={content}
        footer={footer}
        size="5xl"
      />
      <Navbar />
      <div className='px-5 py-8 md:px-60 lg:px-30 2xl:px-30 xl:px-30 3xl:px-30'>
        <div className="px-4 sm:px-0 flex justify-between">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h3>
          <button onClick={() => setOpenModal(true)} className='flex items-center border rounded-sm border-slate-50'>Edit <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg></button>
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
            <EditableForm
              title="About"
              defaultValue="Hi I'm Md Shoaib Akhtar ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu. Hi I'm Md Shoaib Akhtar ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."
              resize={true}
              rows={8}
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
