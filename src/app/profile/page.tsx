'use client'
import BackDropModal from '@/components/BackDropModal';
import EditableForm from '@/components/EditableForm'
import Navbar from '@/components/Navbar'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Button, Checkbox, DatePicker, DateValue, Input, Textarea } from '@heroui/react';
import { useEffect, useState } from 'react';
import { Tooltip } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState([])
  const handleClose = () => {
    setOpenModal(false);
  }
  const formJson = [
    {
      label: "Name",
      "placeholder": "Enter your name",
      "defaultValue": "John Doe",
      "type": "name",
      options:[]
    }, {
      label: "Email",
      "placeholder": "Enter your email",
      "defaultValue": "johndoe@gmail.com",
      "type": "name",
      options: []
    }, {
      label: "Date of birth",
      "placeholder": "Select your date of birth",
      "defaultValue": "08/02/2002",
      "type": "date",
      options: []
    }, {
      label: "Contact number",
      "placeholder": "Enter your contact number",
      "defaultValue": "+919905109322",
      "type": "name",
      options: []
    }, {
      label: "Permanent address",
      "placeholder": "Enter your permanent address",
      "defaultValue": "Thana road, Sultanganj, Bihar - 813213",
      "type": "name",
      options: []
    }, {
      label: "Same as permanent address",
      "placeholder": "",
      "defaultValue": "false",
      "type": "checkbox",
      options: []
    }, {
      label: "Current address",
      "placeholder": "Enter your current address",
      "defaultValue": "Thana road, Sultanganj, Bihar - 813213",
      "type": "name",
      options: []
    },
    {
      label: "About",
      "placeholder": "Tell us about yourself",
      "defaultValue": "Hi, I am Md Shoaib Akhtar",
      "type": "textarea",
      options: []
    },
    {
      label: "Current location",
      "placeholder": "Your current location",
      "defaultValue": "Kolkata, West bengal",
      "type": "name",
      options: []
    },
    {
      label: "Years of experience",
      "placeholder": "Years of experience",
      "defaultValue": "2 Years 1 Month",
      "type": "select",
      "options": [
        {
          key: '0years',
          label: "Fresher"
        },
        {
          key: '0to1',
          label: "0 to 1 Years"
        },
        {
          key: '1to2',
          label: "1 to 2 Years"
        },
        {
          key: '2to3',
          label: "2 to 3 Years"
        },
        {
          key: 'plus4',
          label: "+4 Years"
        }
      ]
    },
    {
      label: "Current salary (In Lacs)",
      "placeholder": "Your current salary",
      "defaultValue": "700000",
      "type": "price",
      options: []
    },
    {
      label: "Expected salary (In Lacs)",
      "placeholder": "Your expected salary",
      "defaultValue": "1000000",
      "type": "price",
      options: []
    },
    {
      label: "Notice period (In days)",
      "placeholder": "Notice period",
      "defaultValue": "30",
      "type": "select",
      "options": [
        {
          key: 'immediatejoin',
          label: "Immediate join"
        },
        {
          key: '30days',
          label: "30 Days"
        },
        {
          key: '60days',
          label: "60 Days"
        },
        {
          key: '90days',
          label: "90 Days"
        },
        {
          key: 'plus90days',
          label: "+90 Days"
        }
      ]
    },{
      label: "Preferred shift",
      "placeholder": "Your preferred shift",
      "defaultValue": "Flexible",
      "type": "multiple",
      "options": [
        {
          key: 'flexible',
          label: "Flexible"
        },
        {
          key: 'night',
          label: "Night"
        },
        {
          key: 'morning',
          label: "Morning"
        }
      ]
    },{
      label: "Job type",
      "placeholder": "Job type you want",
      "defaultValue": "Permanent",
      "type": "multiple",
      "options": [
        {
          key: 'fulltime',
          label: "Fulltime"
        },
        {
          key: 'parttime',
          label: "Parttime"
        },
        {
          key: 'contractual',
          label: "Contractual"
        }
      ]
    },{
      label: "Skills",
      "placeholder": "Your skills",
      "defaultValue": "",
      "type": "multiple",
      "options": [
        {
          key: "java",
          label: "Java"
        },
        {
          key: "python",
          label: "Python"
        },
        {
          key: "javascript",
          label: "JavaScript"
        },
        {
          key: "react",
          label: "React"
        },
        {
          key: "nextjs",
          label: "Next.js"
        },
        {
          key: "angular",
          label: "Angular"
        },
        {
          key: "vuejs",
          label: "Vue.js"
        },
        {
          key: "nodejs",
          label: "Node.js"
        },
        {
          key: "expressjs",
          label: "Express.js"
        },
        {
          key: "django",
          label: "Django"
        },
        {
          key: "flask",
          label: "Flask"
        },
        {
          key: "ruby",
          label: "Ruby"
        },
        {
          key: "rails",
          label: "Ruby on Rails"
        },
        {
          key: "php",
          label: "PHP"
        },
        {
          key: "go",
          label: "Go (Golang)"
        },
        {
          key: "swift",
          label: "Swift"
        },
        {
          key: "kotlin",
          label: "Kotlin"
        },
        {
          key: "typescript",
          label: "TypeScript"
        },
        {
          key: "html",
          label: "HTML"
        },
        {
          key: "css",
          label: "CSS"
        },
        {
          key: "sass",
          label: "Sass (CSS Preprocessing)"
        },
        {
          key: "tailwindcss",
          label: "Tailwind CSS"
        },
        {
          key: "bootstrap",
          label: "Bootstrap"
        },
        {
          key: "materialui",
          label: "Material UI"
        },
        {
          key: "graphql",
          label: "GraphQL"
        },
        {
          key: "restapi",
          label: "REST API"
        },
        {
          key: "docker",
          label: "Docker"
        },
        {
          key: "kubernetes",
          label: "Kubernetes"
        },
        {
          key: "aws",
          label: "Amazon Web Services (AWS)"
        },
        {
          key: "azure",
          label: "Microsoft Azure"
        },
        {
          key: "gcp",
          label: "Google Cloud Platform (GCP)"
        },
        {
          key: "mysql",
          label: "MySQL"
        },
        {
          key: "postgresql",
          label: "PostgreSQL"
        },
        {
          key: "mongodb",
          label: "MongoDB"
        },
        {
          key: "redis",
          label: "Redis"
        },
        {
          key: "firebase",
          label: "Firebase"
        },
        {
          key: "sqlite",
          label: "SQLite"
        },
        {
          key: "jenkins",
          label: "Jenkins"
        },
        {
          key: "git",
          label: "Git"
        },
        {
          key: "github",
          label: "GitHub"
        },
        {
          key: "gitlab",
          label: "GitLab"
        },
        {
          key: "bitbucket",
          label: "Bitbucket"
        },
        {
          key: "webpack",
          label: "Webpack"
        },
        {
          key: "babel",
          label: "Babel"
        },
        {
          key: "npm",
          label: "npm (Node Package Manager)"
        },
        {
          key: "yarn",
          label: "Yarn"
        },
        {
          key: "redis",
          label: "Redis"
        },
        {
          key: "cassandra",
          label: "Cassandra"
        },
        {
          key: "elasticsearch",
          label: "Elasticsearch"
        },
        {
          key: "rabbitmq",
          label: "RabbitMQ"
        },
        {
          key: "celery",
          label: "Celery"
        },
        {
          key: "ansible",
          label: "Ansible"
        },
        {
          key: "terraform",
          label: "Terraform"
        },
        {
          key: "vagrant",
          label: "Vagrant"
        },
        {
          key: "nginx",
          label: "Nginx"
        },
        {
          key: "apache",
          label: "Apache HTTP Server"
        },
        {
          key: "expressjs",
          label: "Express.js"
        },
        {
          key: "laravel",
          label: "Laravel"
        },
        {
          key: "symfony",
          label: "Symfony"
        },
        {
          key: "vuejs",
          label: "Vue.js"
        },
        {
          key: "nextjs",
          label: "Next.js"
        },
        {
          key: "reactnative",
          label: "React Native"
        },
        {
          key: "flutter",
          label: "Flutter"
        },
        {
          key: "xamarin",
          label: "Xamarin"
        },
        {
          key: "android",
          label: "Android Development"
        },
        {
          key: "ios",
          label: "iOS Development"
        },
        {
          key: "redux",
          label: "Redux"
        },
        {
          key: "vuex",
          label: "Vuex"
        },
        {
          key: "rxjs",
          label: "RxJS"
        }
      ]

    }, {
      label: "Preferred location",
      "placeholder": "Job location you want",
      "defaultValue": "",
      "type": "multiple",
      "options": [
        {
          key: "bangalore",
          label: "Bangalore"
        },
        {
          key: "hyderabad",
          label: "Hyderabad"
        },
        {
          key: "chennai",
          label: "Chennai"
        },
        {
          key: "pune",
          label: "Pune"
        },
        {
          key: "gurgaon",
          label: "Gurgaon"
        },
        {
          key: "noida",
          label: "Noida"
        },
        {
          key: "mumbai",
          label: "Mumbai"
        },
        {
          key: "kolkata",
          label: "Kolkata"
        },
        {
          key: "kochi",
          label: "Kochi"
        },
        {
          key: "chandigarh",
          label: "Chandigarh"
        }
      ]

    }, {
      label: "Preferred role",
      "placeholder": "Role you are looking",
      "defaultValue": "",
      "type": "multiple",
      "options": [
        {
          key: "frontend_developer",
          label: "Frontend Developer"
        },
        {
          key: "backend_developer",
          label: "Backend Developer"
        },
        {
          key: "software_developer",
          label: "Software Developer"
        },
        {
          key: "qa_engineer",
          label: "QA Engineer"
        },
        {
          key: "test_engineer",
          label: "Test Engineer"
        },
        {
          key: "aws_developer",
          label: "AWS Developer"
        },
        {
          key: "devops_engineer",
          label: "DevOps Engineer"
        },
        {
          key: "mobile_developer",
          label: "Mobile Developer"
        },
        {
          key: "data_scientist",
          label: "Data Scientist"
        },
        {
          key: "ux_ui_designer",
          label: "UX/UI Designer"
        }
      ]

    },
  ]
  const checkFutureDate = (date: any) => {
    const givenDate = new Date(date);
    const today = new Date();
    if (givenDate >= today) {
      return true
    } else if (givenDate < today) {
      return false
    }
  }
  const generateField = () => {
    const arr: any = [];
    formJson.forEach((attr, index) => {
      return (
        arr.push(
          <div key={index} className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
              {attr.type === 'checkbox' ? '' : attr.label}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                <div className="relative">
                  {attr.type === 'textarea' ? (
                    <Textarea
                      type="textarea"
                      style={{
                        outline: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        overflow: 'hidden',   // Hides the scrollbar, but still allows scroll
                        scrollbarWidth: 'none', // For Firefox, hides scrollbar
                      }}
                      placeholder={attr.placeholder}
                    />
                  ) : attr.type === 'date' ? (
                    <DatePicker
                      fullWidth
                      className="pb-0"
                      isDateUnavailable={(date: DateValue) => checkFutureDate(date) ?? false}
                    />
                  ) : attr.type === 'checkbox' ? (
                    <Checkbox defaultSelected>{attr.label}</Checkbox>
                      ) :
                      (attr.type === "select" || attr.type === "multiple") ? 
                          <Select className="max-w-full" placeholder={attr.placeholder} selectionMode={attr.type === "multiple" ? 'multiple' : 'single'}>
                            {attr.options.map((animal) => (
                              <SelectItem key={animal.key}>{animal.label}</SelectItem>
                            ))}
                          </Select>
                          :
                          attr.type === 'price' ?
                            <Input
                              labelPlacement="outside"
                              placeholder={attr.placeholder}
                              defaultValue={attr.defaultValue}
                              style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                              }}
                              startContent={
                                <div className="pointer-events-none flex items-center">
                                  <span className="text-default-400 text-small">Rs</span>
                                </div>
                              }
                              type="number"
                            />:
                          (
                      <Input
                      type={attr.type}
                      radius="sm"
                      placeholder={attr.placeholder}
                      defaultValue={attr.defaultValue}
                    />
                  )}
                </div>
              </form>
            </dd>
          </div>
        )
      )
    })
    setContent(arr)
  }
  useEffect(() => {
    generateField()
  }, [])
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
        title="Edit personal information"
        content={content}
        footer={footer}
        size="full"
      />
      <div className='px-5 py-8 md:px-60 lg:px-30 2xl:px-30 xl:px-30 3xl:px-30'>
        <div className="px-4 sm:px-0 flex justify-between">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h3>
          <Tooltip content="Edit personal information" showArrow={true}>
            <button onClick={() => setOpenModal(true)} className='flex items-center border rounded-sm border-slate-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 ml-4">
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
