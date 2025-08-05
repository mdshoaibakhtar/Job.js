import React from 'react'

interface SkillsInterface{
    skills : string[]
}
export default function DynamicLists({ skills }: SkillsInterface) {
  return (
      <div className='flex'>
          {skills?.map((eachSkills, index) => {
              return (
                  <dd key={index} className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border border-gray-300 rounded mr-4 px-2 py-1">
                      {eachSkills}
                  </dd>  
              )
          })}
      </div>
  )
}
