'use client'
import React, { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import styles from '../Custom.module.css';
import { useRouter } from 'next/navigation';

export default function SignupTab() {
    const [selected, setSelected] = useState("employee");
    const [authenticating, setAuthenticating] = useState(false);
    const router = useRouter();

    const handleCreateAccount = () => {
        setAuthenticating(true);
        setTimeout(() => {
            router.push('/login');
            setAuthenticating(false);
        }, 800);
    };
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" className="w-full block" selectedKey={selected} onSelectionChange={(tab) => setSelected(tab.toLocaleString())}>
                <Tab key="employee" title="Individual/Employee">
                    <div className="relative rounded-md shadow-sm w-full px-2">
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                        </div>
                        <input
                            disabled={authenticating}
                            id="first_name"
                            name="first_name"
                            type="text"
                            className={styles.input}
                        />
                    </div>
                    <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                        </div>
                        <input
                            disabled={authenticating}
                            id="last_name"
                            name="last_name"
                            type="text"
                            className={styles.input}
                        />
                    </div>
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
                    <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                        <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                            Mobile number
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                            </span>
                        </div>
                        <input
                            disabled={authenticating}
                            id="phone_number"
                            name="phone_number"
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
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
                    <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                        <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
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
                        />
                    </div>
                </Tab>
                <Tab key="company" title="Company">
                    <div className="relative rounded-md shadow-sm w-full px-2">
                        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Company name
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                        </div>
                        <input
                            disabled={authenticating}
                            id="first_name"
                            name="first_name"
                            type="text"
                            className={styles.input}
                        />
                    </div>
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
                    <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                        <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                            Mobile number
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                            </span>
                        </div>
                        <input
                            disabled={authenticating}
                            id="phone_number"
                            name="phone_number"
                            type="text"
                            className={styles.input}
                        />
                    </div>
                    <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                        <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                            Website
                        </label>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                </svg>

                            </span>
                        </div>
                        <input
                            disabled={authenticating}
                            id="website"
                            name="website"
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
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
                    <div className="relative rounded-md shadow-sm mt-4 w-full px-2">
                        <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">
                            Confirm Password
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
                        />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

