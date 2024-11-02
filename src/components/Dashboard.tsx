import { RssIcon, LockOpenIcon, FilmIcon } from '@heroicons/react/20/solid'
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
import Chart from './Chart';
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
                                <h2 className="text-base font-semibold leading-7 text-[#BB2649]">Find your dream job</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Journey to Success Starts Here</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Your ultimate destination for discovering the perfect job that aligns with your passions and career aspirations. In today's fast-paced world, finding a job that not only pays the bills but also brings fulfillment and joy can be a challenging journey.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-[#BB2649]" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className='flex w-full'>
                            <div className="relative h-full group cursor-pointer">
                                <Image
                                    alt="Product screenshot"
                                    src={img}
                                    width={2432}
                                    height={1442}
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] lg:-ml-0"
                                />
                                <div className="absolute rounded-xl inset-0 bg-black bg-opacity-0 transition duration-500 min-w-full group-hover:bg-opacity-30" />
                                <div className="absolute top-[500px] w-10/12 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className='flex flex-row justify-evenly sm:h-full'>
                                        <a href='https://jobscript-portal.vercel.app' target='_blank'><button className='text-gray-100 rounded-xl cursor-pointer hover-effect py-2 px-12'>Login <span className='ml-2' aria-hidden="true">&rarr;</span></button></a>
                                        <a href='https://github.com/mdshoaibakhtar/myapp' target='_blank'><button className='text-gray-100 rounded-xl cursor-pointer hover-effect py-2 px-12 flex'>Apply Jobs
                                            <svg className='w-[22px] mt-[4px] ml-[8px]' fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 925 925" stroke="#ffffff"><g id="SVGRepo_bgCarrier" clipRule="0"></g><g id="SVGRepo_tracerCarrier" clipRule="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M352.9,53.4H441.6c33.601,0,61.601,24,68,55.7H560.2C553.4,49.7,502.8,3.4,441.6,3.4H352.9 c-61.2,0-111.8,46.3-118.601,105.7H284.9C291.3,77.3,319.3,53.4,352.9,53.4z"></path> <path d="M127.2,322.4c71.8,46.4,167.7,72,270.1,72c102.4,0,198.2-25.6,270.101-72C732,280.7,769.5,226.8,774.1,169.7 C756.8,148,730.2,134.1,700.2,134.1H561h-50H283.6h-50H94.4c-29.9,0-56.6,13.9-73.9,35.6C25.1,226.8,62.6,280.6,127.2,322.4z"></path> <path d="M363.1,461.1c0,15.601,12.7,28.3,28.301,28.3H403.1c15.601,0,28.301-12.699,28.301-28.3v-22.6H363.1V461.1L363.1,461.1z"></path> <path d="M94.4,617.201h419.5V553.5c0-7.699,3.1-15,8.6-20.4L618.2,439c5.399-5.3,12.6-8.2,20.1-8.2h156.2V243 c-4.2,8.6-9,17.1-14.5,25.5c-21.5,32.9-52.2,62.3-91,87.4c-60.3,39-135.8,64.4-217.6,74.1v8.399V461 c0,37.701-30.601,68.3-68.301,68.3H391.4c-37.7,0-68.301-30.6-68.301-68.3V438.4V430c-81.8-9.601-157.3-35.101-217.6-74.1 c-38.8-25.1-69.5-54.5-91-87.4C9,260.1,4.2,251.6,0,243v279.8C0,574.9,42.3,617.201,94.4,617.201z"></path> <g> <path d="M659.6,453.6c-13.399,0-26.5,5.5-36,15l-69.1,69.602c-9.5,9.6-14.7,22.199-14.7,35.699v43.301v12.5v12.5V870.9 c0,2.4,0.2,4.801,0.5,7.1c3.4,24.6,24.601,43.6,50.2,43.6h283.8c27.9,0,50.7-22.699,50.7-50.699V504.201 c0-24.5-17.4-44.901-40.5-49.601c-3.3-0.7-6.7-1-10.1-1h-54.9H807h-12.5H659.6L659.6,453.6z M819.5,503.6h54.8 c0.4,0,0.7,0.301,0.7,0.701V871c0,0.1,0,0.1,0,0.201c-0.1,0.299-0.3,0.5-0.6,0.5c0,0,0,0-0.101,0H590.5 c-0.4,0-0.7-0.301-0.7-0.701V642.201v-12.5v-12.5v-33h36.7c22.9,0,41.5-18.602,41.5-41.5V503.6h126.5H807H819.5L819.5,503.6z"></path> <path d="M750,617.301H641.1c-9.199,0-17.199,5-21.6,12.4c-2.2,3.699-3.4,7.898-3.4,12.5v0.1c0,13.799,11.2,25,25,25h182.7 c13.8,0,25-11.201,25-25c0-13.801-11.2-25-25-25h-50.7H750z"></path> <path d="M823.8,774.801H641.1c-13.8,0-25,11.199-25,25c0,13.799,11.2,25,25,25h182.7c13.8,0,25-11.201,25-25 C848.8,786,837.6,774.801,823.8,774.801z"></path> <path d="M823.8,696.1H641.1c-13.8,0-25,11.201-25,25c0,13.801,11.2,25,25,25h182.7c13.8,0,25-11.199,25-25 C848.8,707.301,837.6,696.1,823.8,696.1z"></path> </g> </g> </g> </g></svg>
                                        </button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Image
                            alt="Product screenshot"
                            src={img}
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        /> */}
                    </div>
                </div>
            </div>
            <Chart />
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
