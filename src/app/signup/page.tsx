
'use client'
import { useState } from 'react';
import styles from '../Custom.module.css';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import SignupTab from './SignupTab';
import BackDropModal from '../../components/Generic/BackDropModal';
import { Button } from '@heroui/react';
import { FormDataType } from '@/interfaces/OnBoardingInterfaces';
import { useMyContext } from '../context/MyContext';
import { post } from '@/webservices/webservices';
import { toast } from 'react-toastify';


export default function SignUp() {
    const [authenticating, setAuthenticating] = useState(false);
    const { setLoader } = useMyContext();
    const [openModal, setOpenModal] = useState(false);
    const router = useRouter();
    const [consent, setConsent] = useState(false);
    const [formData, setFormData] = useState<FormDataType>({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        website: '',
        is_organization: false,
        is_verified: false,
    })

    const handleCreateAccount = () => {
        setLoader(true);
        post('/createuser', formData).then((response) => {
            setLoader(false);
            if (response.status_code == 400) {
                toast.error(response.message)
                return
            }
            toast.success(response.message)
            sessionStorage.setItem('unverified_email', formData.email)
            router.push('/verifyemail');
        }).catch((err) => {
            setLoader(false);
        })
    };
    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleClose = () => {
        setOpenModal(false);
    }
    const handleAgree = () => {
        setConsent(!consent);
        handleClose();
    }
    const content = <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
            quam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
            quam.
        </p>
        <p>
            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
            officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
            nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
            deserunt nostrud ad veniam.
        </p>
    </div>
    const footer = <div>
        <Button color="danger" variant="light" onPress={handleClose}>
            Close
        </Button>
        <Button color="primary" onPress={handleAgree}>
            {consent ? 'Disagree' : 'Agree'}
        </Button>
    </div>
    return (
        <div className="w-full flex justify-center flex-col items-center h-[100vh]">
            <div className="flex justify-center flex-col items-center md:p-4 sm:w-5/12 md: w-11/12 lg: w-11/12">
                <h3 className='mb-2 antialiased font-bold'>Create new account</h3>
                <SignupTab setFormData={setFormData} />
                <BackDropModal
                    openModal={openModal}
                    handleClose={handleClose}
                    title="Terms & Conditions"
                    content={content}
                    footer={footer}
                    size="md"
                />
                <div className="w-8/12 flex items-center w-full">
                    <input
                        id="default-checkbox"
                        type="checkbox"
                        onChange={() => setConsent(!consent)}
                        checked={consent}
                        className="cursor-pointer w-4 h-4 text-[#BB2649] bg-gray-100 border-gray-300 rounded focus:ring-[#BB2649] dark:focus:ring-[#BB2649] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <button onClick={handleOpen} className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</button>.</label>
                </div>

                <div className="w-full mt-4 text-center">
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
                            disabled={!consent}
                            style={{ backgroundColor: consent ? '#BB2649' : 'gray', cursor: consent ? 'pointer' : 'not-allowed' }}
                            onClick={handleCreateAccount}
                            className="flex justify-center items-center w-full rounded-md bg-[#BB2649] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#BB2649] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-820"
                        >
                            Create your account
                            <span className='ml-2' aria-hidden="true">&rarr;</span>
                        </button>}

                </div>
                <div className="w-full px-2 mt-2 text-center flex justify-between">
                    <p className="text-sm">Already have an account? <Link href='/login' className='underline underline-offset-2 mt-4 text-sm'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}
