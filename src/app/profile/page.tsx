'use client'
import BackDropModal from '@/components/BackDropModal';
import EditableForm from '@/components/EditableForm'
import Navbar from '@/components/Navbar'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Button } from '@heroui/react';
import { useState } from 'react';
import { Tooltip } from "@heroui/react";
import { formJson } from '@/utils/Constant';
import JobDetailsDynamicField from '@/components/JobDetailsDynamicField';
import GenerateField from './generateField';
import ProjectDynamicField from '@/components/ProjectDynamicField.tsx';
import EducationDetailsDynamicField from '@/components/EducationDetailsDynamicField.tsx';

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState([])
  const [resumeFileName, setResumeFileName] = useState('')
  const [modalTitle, setModalTitle] = useState('Edit personal information')

  const openBackdropModal = (type:string) => {
    const arr: any = [];
    if (type === 'personal') {
      formJson.map((attribute, index) => {
        return (
          arr.push(<GenerateField
            dataType={attribute.type}
            fieldLabel={attribute.label}
            fieldPlaceholder={attribute.placeholder}
            selectOptions={attribute.options}
            key={index}
          />)
        )
      })
    } else if (type =='career') {
      setModalTitle('Edit your work experience')
      arr.push(<JobDetailsDynamicField key={0}/>)
    } else if (type == 'projects') {
      setModalTitle('Edit your projects')
      arr.push(<ProjectDynamicField key={0} />)
    } else if (type == 'education') {
      setModalTitle('Edit your educational qualification')
      arr.push(<EducationDetailsDynamicField key={0} />)
    }
    setContent(arr)
    setOpenModal(true);
  }
  const handleClose = () => {
    setOpenModal(false);
  }
  const handleFileUpload = (e: any) => {
    setResumeFileName(e.target.files[0]['name'])
  }
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
      <Navbar />
      <BackDropModal
        openModal={openModal}
        handleClose={handleClose}
        title={modalTitle}
        content={content}
        footer={footer}
        size="4xl"
      />
      <div className='px-5 py-8 md:px-60 lg:px-30 2xl:px-30 xl:px-30 3xl:px-30'>
        <div className="px-4 sm:px-0 flex justify-between">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h3>
          <Tooltip content="Edit personal information" showArrow={true}>
            <button onClick={() => openBackdropModal('personal')} className='flex items-center border rounded-sm border-slate-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg></button>
          </Tooltip>
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
              <dt className="text-sm font-medium leading-6 text-gray-900">Resume</dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" onChange={(e) => handleFileUpload(e)}/>
                    </label>
                  </div> 

                  {resumeFileName.length > 0 && <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      <div className="ml-4 flex min-w-0 flex-1 gap-2">
                        <span className="truncate font-medium">{resumeFileName}</span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
        <div className='px-4 md:px-0 lg:px-0'>
          <div className="mt-6 flex justify-between">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Employment</h3>
            <Tooltip content="Edit..." showArrow={true}>
              <button onClick={() => openBackdropModal('career')} className='flex items-center border rounded-sm border-slate-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg></button>
            </Tooltip>
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
          <div className="mt-6 flex justify-between">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Projects</h3>
            <Tooltip content="Edit..." showArrow={true}>
              <button onClick={() => openBackdropModal('projects')} className='flex items-center border rounded-sm border-slate-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg></button>
            </Tooltip>
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
          <div className="mt-6 flex justify-between">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Education</h3>
            <Tooltip content="Edit..." showArrow={true}>
              <button onClick={() => openBackdropModal('education')} className='flex items-center border rounded-sm border-slate-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg></button>
            </Tooltip>
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
