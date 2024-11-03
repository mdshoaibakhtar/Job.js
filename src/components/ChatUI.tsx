import React from 'react';

const messages = [
    { id: 1, text: 'Hey there!', sender: 'me', time: '10:00 AM' },
    { id: 2, text: 'Hello! How are you?', sender: 'them', time: '10:01 AM' },
    { id: 3, text: 'I’m doing well, thanks!', sender: 'me', time: '10:02 AM' },
    { id: 4, text: 'What about you?', sender: 'them', time: '10:03 AM' },
    { id: 5, text: 'Can’t complain!', sender: 'me', time: '10:04 AM' },
];

const ChatUI = () => {
    return (
        <div className="text-gray-500 text-[14px]">
            <div className="flex justify-end mt-2">
                <p className='mr-2 bg-white rounded-xl py-2 px-2'>Hey there!</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='white' viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>
            <div className="flex mt-2">
                <svg className='w-[20px]' fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path><ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse><path d="M8 16h8v2H8z"></path></g></svg>
                <p className='ml-2 w-[70%] bg-white rounded-xl py-2 px-2'>Sorry for the inconvenience, but right now I'm unable to help you.</p>
            </div>
        </div>
    );
};

export default ChatUI;
