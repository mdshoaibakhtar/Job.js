'use client';

import Link from 'next/link';
import { useMyContext } from '../../app/context/MyContext';
import styles from '../../app/Custom.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface LoginProps {
    dialog: boolean;
    setOpen: (value: boolean) => void
}

// Correctly type the functional component with props
const LoginComponent: React.FC<LoginProps> = ({ dialog, setOpen }) => {
    const { setLoader, setLoadSkeleton } = useMyContext();
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        setAuthenticating(true);
        if (!dialog) {
            setTimeout(() => {
                router.push('/');
                setAuthenticating(false);
            }, 800);
        } else {
            setTimeout(() => {
                setOpen(false)
                setLoadSkeleton('all')
            }, 800);
        }
    };

    return (
        <div className={`w-full flex justify-center flex-col items-center h-${dialog ? '0' : '[90vh]'}`}>
            <div className={`w-full sm:${dialog ? 'w-full' : 'w-5/12'} md: w-11/12 lg: w-11/12 flex justify-center flex-col items-center p-4`}>
                <div className="relative rounded-md shadow-sm w-full px-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                        type="password"
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
                            Log in
                            <span className='ml-2' aria-hidden="true">&rarr;</span>
                        </button>}
                </div>
                <div className={`w-full sm:w-full flex px-2 md:w-full mt-6 text-center flex-col sm:${dialog ? 'flex-row' : 'flex-row'} justify-between`}>
                    <Link href='/forgotpassword' className='underline underline-offset-2 mt-4 text-sm'>Forgot password?</Link>
                    <p className="text-sm mt-4">Don't have an account? <Link href='/signup' className='underline underline-offset-2 mt-4 text-sm' target='_blank'>Create new account</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent