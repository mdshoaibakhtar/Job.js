'use client';
import Link from 'next/link';
import { useMyContext } from '../context/MyContext';
import styles from '../Custom.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { setCookie } from '../../utils/CookiesManagement'
import { Button, InputOtp, Form } from "@heroui/react";
import ResetPassword from '../resetpassword/page';
import { Alert, AlertTitle } from '@mui/material';
import { post } from '@/webservices/webservices';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const { setActiveUser } = useMyContext();
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();
    const [otp, setOtp] = React.useState(0);
    const { setLoader } = useMyContext();

    const verifyEmail = () => {
        setLoader(true);
        const email = sessionStorage.getItem('unverified_email')
        post('/verify-otp', {
            email: email,
            otp: Number(otp)
        }).then((response) => {
            setLoader(false);
            if (response.status_code == 400) {
                toast.error(response.message)
                return
            }
            toast.success(response.message)
            router.push('/resetpassword')
        }).catch((err) => {
            setLoader(false);
        })
    };

    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh] m-auto">
            <div className='sm:w-1/4 md: w-full lg: w-5/12 flex justify-center flex-col items-center p-4'>
                <Alert severity="info" sx={{width:'100%'}}>
                    <AlertTitle>Email sent</AlertTitle>
                    Please check your email for OTP.
                </Alert>
                <div className="relative rounded-md mt-2 w-full flex justify-center">
                    <InputOtp
                        aria-label="OTP input field"
                        length={6}
                        name="otp"
                        placeholder="Enter code"
                        errorMessage="Invalid OTP"
                        variant='underlined'
                        size='lg'
                        onChange={(e:any) => setOtp(e.target.value)}
                    />
                </div>
                <div className="w-9/12 sm:w-full md:w-full mt-6 text-center">
                    <button
                        type="submit"
                        onClick={verifyEmail}
                        className="flex justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                    >
                        Verify OTP
                        <span className='ml-2' aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default VerifyEmail