'use client';
import Link from 'next/link';
import { useMyContext } from '../context/MyContext';
import styles from '../Custom.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { setCookie } from '../../utils/CookiesManagement'

const ForgotPassword = () => {
    const { setUserLoggedInDetails } = useMyContext();
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        console.log('Calling')
        // setAuthenticating(true);
        // setUserLoggedInDetails({
        //     loggedIn: true,
        //     email: 'imdshoaibakhatr@gmail.com'
        // })
        // setCookie('useremail', 'imdshoaibakhatr@gmail.com', 10)
        router.push('/validateotp');
    };

    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh] m-auto">
            <div className={`w-full sm:w-5/12 md: w-11/12 lg: w-11/12 flex justify-center flex-col items-center p-4`}>
                <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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
                <div className="w-full sm:w-full px-2 md:w-full mt-6 text-center">
                    {authenticating ?
                        <button
                            type="submit"
                            disabled
                            className="flex cursor-wait justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Authenticating
                            <span className={styles.authenticating_loader} aria-hidden="true" />
                        </button> :
                        <button
                            type="submit"
                            onClick={handleLogin}
                            className="flex justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Send OTP
                            <span className='ml-2' aria-hidden="true">&rarr;</span>
                        </button>}
                </div>
                {/* <div className="w-full sm:w-full flex px-2 md:w-full mt-6 text-center sm:flex-row flex-col justify-between">
                    <Link href='/forgot' className='underline underline-offset-2 mt-4 text-sm'>Forgot password?</Link>
                    <p className="text-sm mt-4">Don't have an account? <Link href='/signup' className='underline underline-offset-2 mt-4 text-sm' target='_blank'>Create new account</Link></p>
                </div> */}
            </div>
        </div>
    );
}

export default ForgotPassword