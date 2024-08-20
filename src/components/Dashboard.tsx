import { RssIcon, LockOpenIcon, ServerIcon } from '@heroicons/react/20/solid'
import Promotion from './Promotion'
import Pricing from './Pricing'
import Statistics from './Statistics'
import Newsletter from './Newsletter';
import Jobcard from './Jobcard';
import Collab from './Collab';
import Banner from './Banner';
import Form from './Form';
import Team from './Team';
import Image from "next/image";
import Testimonials from './Testimonials';
import Navbar from './Navbar';
import Footer from './Footer';
import img from "../../dashboard_image_1.jpg"
import Device from './Device';
const features = [
    {
        name: 'Your Next Career Opportunity Awaits: ',
        description:
            'Imagine waking up every day excited to go to work, knowing that you are making a meaningful impact and growing both professionally and personally.',
        icon: RssIcon,
    },
    {
        name: 'Unlock Your Potential: ',
        description: 'We understand that job searching can be overwhelming. That’s why we offer personalized recommendations based on your profile, interests, and experience.',
        icon: LockOpenIcon,
    },
    // {
    //     name: 'Empowering Your Career Growth.',
    //     description: 'We are more than just a job portal. We are your partner in career growth. Our platform provides a wealth of resources to help you succeed.',
    //     icon: ServerIcon,
    // },
]

export default function Dashboard() {
    return (
        <div>
            {/* <Banner /> */}
            <Navbar />
            <div className="overflow-hidden bg-white py-16 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-1">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Find your dream job</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Journey to Success Starts Here</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Your ultimate destination for discovering the perfect job that aligns with your passions and career aspirations. In today's fast-paced world, finding a job that not only pays the bills but also brings fulfillment and joy can be a challenging journey.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image
                            alt="Product screenshot"
                            src={img}
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
            <Promotion />
            {/* <Pricing /> */}
            {/* <Jobcard /> */}
            {/* <Form /> */}
            <Team />
            <Testimonials />
            {/* <Newsletter /> */}
            <Statistics />
            <Collab />
            {/* <Footer /> */}
        </div>

    )
}
