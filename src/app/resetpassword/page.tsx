'use client';
import { useMyContext } from '../context/MyContext';
import styles from '../Custom.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { post } from '@/webservices/webservices';

const ResetPassword = () => {
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();
    const { setLoader } = useMyContext();
    const [passwords, setPasswords] = useState({
        password :'',
        confirm_password :'',
    });

    const resetPassword = () => {
        if (passwords['password'] != passwords['confirm_password']) {
            console.log(passwords['password'] != passwords['confirm_password']);
            toast.warning('Password & confirm password should be same.')
        }
        setLoader(true);
        const email = sessionStorage.getItem('unverified_email')
        post('/reset-password', {
            email: email,
            password: passwords['password']
        }).then((response) => {
            setLoader(false);
            console.log('response', response);
            if (response.status_code == 400) {
                toast.error(response.message)
                return
            }
            toast.success(response.message)
            router.push('/login');
            sessionStorage.clear()
        }).catch((err) => {
            setLoader(false);
            toast.error(err)
        })
    };

    const handleOnChange = (e:any) => {
        e.preventDefault();
        setPasswords((data) => ({
            ...passwords,
            [e.target.name] : e.target.value
        }))
    }
    

    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh] m-auto">
            <div className={`w-full sm:w-5/12 md: w-11/12 lg: w-11/12 flex justify-center flex-col items-center p-4`}>
            <h3 className='antialiased font-bold'>Reset password</h3>
                <div className="relative rounded-md shadow-sm mt-2 w-full px-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="password"
                        name="password"
                        type="text"
                        className={styles.input}
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>
                <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm password
                    </label>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </span>
                    </div>
                    <input
                        disabled={authenticating}
                        id="confirm_password"
                        name="confirm_password"
                        type="password"
                        className={styles.input}
                        onChange={(e) => handleOnChange(e)}
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
                            onClick={resetPassword}
                            className="flex justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Reset
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

export default ResetPassword