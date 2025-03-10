'use client'
import { createContext, useState, useContext, ReactNode } from 'react';
import { getCookie } from '@/utils/CookiesManagement';
// Define the type for your context (optional, if you're using TypeScript)
interface MyContextType {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    loader: boolean;
    setLoader: React.Dispatch<React.SetStateAction<boolean>>;
    activeJob: string,
    setActiveJob: React.Dispatch<React.SetStateAction<string>>;
    loadSkeleton: string;
    setLoadSkeleton: React.Dispatch<React.SetStateAction<string>>;
    userLoggedInDetails: {
        loggedIn: boolean,
        email:string
    };
    setUserLoggedInDetails: React.Dispatch<React.SetStateAction<{
    loggedIn: boolean,
    email:string
}>>;
    showToast: boolean;
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
    alert: boolean;
    setAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

// Provide a default value (could be null or a default object)
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export function MyProvider({ children }: { children: ReactNode }) {
    // console.log('First', getCookie('username'))
    const [state, setState] = useState(false);
    const [loader, setLoader] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [alert, setAlert] = useState(false);
    const [activeJob, setActiveJob] = useState('iu3ju0hdiz');
    const [loadSkeleton, setLoadSkeleton] = useState('all');
    const [userLoggedInDetails, setUserLoggedInDetails] = useState({
        loggedIn: true != null ? true : false,
        email: ''
    });

    return (
        <MyContext.Provider value={{ 
            state,
            setState, 
            activeJob, 
            setActiveJob, 
            loadSkeleton, 
            setLoadSkeleton, 
            loader, 
            setLoader, 
            userLoggedInDetails, 
            setUserLoggedInDetails,
            showToast,
            setShowToast,
            alert,
            setAlert
            }}>
            {children}
        </MyContext.Provider>
    );
}

// Custom hook to use the context
export function useMyContext() {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
}
