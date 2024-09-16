
'use client'
import Jobcard from '../../components/Jobcard';
import JobDetails from '../../components/JobDetails';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import styles from '../Custom.module.css';
import JobCardSkelton from '@/components/JobCardSkelton';
import JobDetailsSkeleton from '@/components/JobDetailsSkeleton';
import Toast from '@/components/Toast';
import { useMyContext } from '../context/MyContext';
import { useEffect } from 'react';
import CustomizedSnackbars from '@/components/SnackBar';

export default function jobs() {
    const { loadSkeleton, setLoadSkeleton, setShowToast } = useMyContext();
    useEffect(() => {
        setTimeout(() => {
            setLoadSkeleton('none');
            // setShowToast(true)
        }, 500)
    }, [loadSkeleton])
    return (
        <div className="max-h-[85vh]">
            <Navbar />
            <CustomizedSnackbars/>
            {/* <div className="relative mt-2 w-full flex justify-end"/>*/}
            <div className="w-full grid md:flex-row p-4 sm:p-8 md:px-16 lg:p-10 md:grid-cols-[38%_minmax(50%,_1fr)] lg:grid-cols-[38%_minmax(50%,_1fr)] xl:grid-cols-[38%_minmax(50%,_1fr)] gap-8">
                <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                    {loadSkeleton === 'all' ? 
                    <JobCardSkelton />
                     : <Jobcard />}
                </div>
                <div className="max-h-[85vh] hidden overflow-scroll no-scrollbar sm:hidden md:hidden lg:block xl:block">
                    {loadSkeleton === 'all' ? <JobDetailsSkeleton /> : <JobDetails />}    
                </div>
            </div>
            <Footer />
        </div>
    )
}