
'use client'
import Jobcard from '../../components/Jobs/Jobcard';
import JobDetails from '../../components/Jobs/JobDetails';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Generic/Navbar';
import JobCardSkelton from '../../components/Jobs/JobCardSkelton';
import JobDetailsSkeleton from '../../components/Jobs/JobDetailsSkeleton';
import { useMyContext } from '../context/MyContext';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/Generic/Searchbar';
import { get } from '@/webservices/webservices';
import { FetchJobDetailsInterface, JobDetailsInterface } from '@/interfaces/JobPageIntercaes';


export default function jobs() {
    const { loadSkeleton, setLoadSkeleton } = useMyContext();
    const [searchString, setSearchString] = useState<string>('')
    const [jobList, setJobList] = useState<JobDetailsInterface[]>([]);
    const [jobDetails, setJobDetails] = useState<JobDetailsInterface>({
        _id: 'string',
        organisationLogo: 'string',
        opportunityName: 'string',
        organisationName: '',
        applyLink: '',
        opportunityMode: '',
        city: '',
        applicationStartTime: '',
        minRange: '',
        opportunityLocation: '',
        maxRange: '',
        salaryUnit: '',
        applicationEndTime: '',
        description: '',
        skillsRequired: ['']
    });
    const fetchJob = () => {
        setLoadSkeleton('all') 
        get('/fetch-job-api').then(response => {
            if (response.status_code == 200) {
                setJobList(response.data)
                setJobDetails(response.data[0])
                setLoadSkeleton('none') 
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const fetchJobDetails: FetchJobDetailsInterface = (job_id: string) => {
        setLoadSkeleton('details') 
        get('/fetch-job-api?job_id=' + job_id).then(response => {
            if (response.status_code == 200) {
                setJobDetails(response.data)
                setLoadSkeleton('none') 
            }
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        fetchJob()
    }, [])
    return (
        <div className="max-h-[85vh]">
            <Navbar />
            <SearchBar setSearchString={setSearchString} />
            <div className="w-full grid md:flex-row p-4 sm:p-8 md:px-16 lg:p-10 md:grid-cols-[38%_minmax(50%,_1fr)] lg:grid-cols-[38%_minmax(50%,_1fr)] xl:grid-cols-[38%_minmax(50%,_1fr)] gap-8">
                <div className="max-h-[85vh] overflow-scroll no-scrollbar">
                    {jobList.length == 0 ? 
                    <JobCardSkelton /> : <Jobcard jobList={jobList} fetchJobDetails={fetchJobDetails} />}
                </div>
                <div className="max-h-[85vh] hidden overflow-scroll no-scrollbar sm:hidden md:hidden lg:block xl:block">
                    {(loadSkeleton == 'all') ? <JobDetailsSkeleton /> : <JobDetails jobDetails={jobDetails} />}    
                </div>
            </div>
            <Footer />
        </div>
    )
}