
'use client'
import { useState } from 'react';
import styles from '../Custom.module.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Login() {
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();

    const handleCreateAccount = () => {
        setAuthenticating(true);
        setTimeout(() => {
            router.push('/');
            setAuthenticating(false);
        }, 800);
    };
    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh]">
            <div className="flex justify-center flex-col items-center md:p-4 sm:w-4/12 md: w-4/12 lg: w-11/12">
                <div className="relative rounded-md shadow-sm w-full px-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>

                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="email"
                        name="email"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="email"
                        name="email"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Mobile number
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="email"
                        name="email"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>

                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="password"
                        name="password"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>

                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="password"
                        name="password"
                        type="password"
                        className={styles.input}
                    />
                </div>

                <div className="w-8/12 mt-6 flex items-center mb-2 w-full px-2">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                </div>

                <div className="w-full mt-6 text-center px-2">
                    {authenticating ?
                        <button
                            type="submit"
                            disabled
                            className="flex cursor-wait justify-center items-center w-full rounded-md bg-gray-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Creating your account
                            <span className={styles.authenticating_loader} aria-hidden="true" />
                        </button> :
                        <button
                            type="submit"
                            onClick={handleCreateAccount}
                            className="flex justify-center items-center w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Create your account
                            <span className='ml-2' aria-hidden="true">&rarr;</span>
                        </button>}

                </div>
                <div className="w-full px-2 mt-6 text-center flex justify-between">
                    <p className="text-sm mt-4">Already have an account? <Link href='/login' className='underline underline-offset-2 mt-4 text-sm'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}
