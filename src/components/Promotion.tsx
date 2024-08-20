import { ArrowDownOnSquareStackIcon, StarIcon,Bars2Icon, RocketLaunchIcon } from '@heroicons/react/24/outline'
// import { ArrowDownOnSquareStackIcon } from '@heroicons/react/24/solid'

const features = [
    {
        name: 'Believe in the Journey',
        description:[
            'Every journey begins with a single step, and each step brings you closer to your goal.',
            'Embrace the process and trust that your efforts will pay off.',
            'Each experience, whether a success or a setback, is a valuable lesson on your path.'
        ],
        icon: StarIcon,
    },
    {
        name: 'Overcome Obstacles with Confidence',
        description:[
            'Challenges are opportunities in disguise; face them with courage.',
            'Every rejection is a redirection towards a better opportunity.',
            'Stay resilient and persistent; your dream job is worth the effort.'
        ],
        icon:Bars2Icon,
    },
    {
        name: 'Acknowledge Your Progress',
        description:[
            'Celebrate every milestone, no matter how small. Each achievement is a step closer to your dream.',
            'Each application submitted, interview attended, and connection made is progress.',
            'Recognize and reward yourself for your hard work and dedication.'
        ],
        icon: ArrowDownOnSquareStackIcon,
    },
    {
        name: 'Be Open to Growth and Change',
        description:[
            'Embrace the evolving nature of the job market with flexibility and adaptability.',
            'Actively seek feedback and use it to refine your skills and improve your approach.',
            'Commit to ongoing learning and upskilling to stay relevant and competitive.'
        ],
        icon: RocketLaunchIcon,
    },
]

export default function Promotion() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-5xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">You're Closer Than You Think</h2>
                    {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to deploy your app
                    </p> */}
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Remember, you are closer than you think. With the right mindset, tools, and support, you can navigate the job market with confidence and find the career that brings you fulfillment and success. We are committed to being your partner in this journey, guiding you towards your dream job and a brighter future. So, take that next step with assurance, knowing that each effort you make is bringing you one step closer to your ultimate career destination.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    <ul className="list-disc pl-5">
                                        {feature.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        ))}

                    </dl>
                </div>
            </div>
        </div>
    )
}
