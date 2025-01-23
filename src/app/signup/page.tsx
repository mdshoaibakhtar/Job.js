
'use client'
import { useState } from 'react';
import styles from '../Custom.module.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import SelectorInput from '@/components/SelectorInput';
import SignupTab from './SignupTab';
import BackDropModal from '@/components/BackDropModal';

export default function SignUp() {
    const [authenticating, setAuthenticating] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();

    const handleCreateAccount = () => {
        setAuthenticating(true);
        setTimeout(() => {
            router.push('/login');
            setAuthenticating(false);
        }, 800);
    };
    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => {
        setOpenModal(false);
    }
    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh]">
            <div className="flex justify-center flex-col items-center md:p-4 sm:w-5/12 md: w-11/12 lg: w-11/12">
                <SignupTab />
                <BackDropModal
                    openModal={openModal}
                    handleClose={handleClose}
                />
                <div className="w-8/12 mt-6 flex items-center mb-2 w-full px-2">
                    <input id="default-checkbox" type="checkbox" value="" className="cursor-pointer w-4 h-4 text-[#BB2649] bg-gray-100 border-gray-300 rounded focus:ring-[#BB2649] dark:focus:ring-[#BB2649] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" onClick={handleOpen} className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                </div>

                <div className="w-full mt-6 text-center px-2">
                    {authenticating ?
                        <button
                            type="submit"
                            disabled
                            className="flex cursor-wait justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Creating your account
                            <span className={styles.authenticating_loader} aria-hidden="true" />
                        </button> :
                        <button
                            type="submit"
                            onClick={handleCreateAccount}
                            className="flex justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
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
