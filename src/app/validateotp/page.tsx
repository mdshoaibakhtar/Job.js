'use client';
import Link from 'next/link';
import { useMyContext } from '../context/MyContext';
import styles from '../Custom.module.css';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { setCookie } from '../../utils/CookiesManagement'
import { Button, InputOtp, Form } from "@heroui/react";

const ValidateOtp = () => {
    const { setUserLoggedInDetails } = useMyContext();
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();
    const [otp, setOtp] = React.useState("");

    const handleLogin = () => {
        // setAuthenticating(true);
        // setUserLoggedInDetails({
        //     loggedIn: true,
        //     email: 'imdshoaibakhatr@gmail.com'
        // })
        // setCookie('useremail', 'imdshoaibakhatr@gmail.com', 10)
        router.push('/resetpassword');
    };

    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh] m-auto">
            <Form
                className=""
                validationBehavior="native"
                // onSubmit={(e) => {
                //     e.preventDefault();
                //     const formData = new FormData(e.currentTarget);
                //     const otp = formData.get("otp");
                //     setOtp(otp);
                // }}
            >
                <InputOtp
                    // isRequired
                    aria-label="OTP input field"
                    length={6}
                    name="otp"
                    placeholder="Enter code"
                    errorMessage="Invalid OTP"
                    // variant= "underlined"
                />
                <button
                    type="submit"
                    onClick={handleLogin}
                    className="flex justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                >
                    Validate
                    <span className='ml-2' aria-hidden="true">&rarr;</span>
                </button>
                {/* {otp && <div className="text-small text-default-500">OTP submitted: {otp}</div>} */}
            </Form>
        </div>
    );
}

export default ValidateOtp