'use client'
import Image from 'next/image'
import { useState } from "react";
import ChatUI from "./ChatUI";
import logo from '../../public/semicolon.png'


const Webchat = () => {
    const [openChat, setOpenChat] = useState<boolean>(false)
    return (
        <div className="fixed z-50">
            {openChat ?
                <div className="fixed sm:bottom-8 sm:right-8 bg-[#BB2649] w-screen h-screen sm:w-[24rem] sm:h-[30rem] px-4 py-4 sm:rounded-xl flex justify-between flex-col">
                    <div>
                        <div className="flex text-white justify-between pb-2 mb-2 border-b-2 border-gray-200">
                            <div className='flex'>
                                <Image alt="" src={logo} className="h-8 w-auto" />
                                <h3 className='mt-1'>Chat with us</h3>
                            </div>
                            <svg onClick={() => setOpenChat(!openChat)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <ChatUI />
                    </div>
                    <div className="max-w-full flex justify-end">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative w-full transition-all duration-700">
                            <input type="search" id="default-search" className="block w-full p-4 ps-4 pr-8 text-sm text-gray-900 border border-gray-300 transition rounded-lg bg-gray-50 focus:ring-[#cecece] focus:border-[#cecece] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#cecece] dark:focus:border-[#cecece]" placeholder="Type your message..." required />
                            <svg width="50px" height="40px" className="absolute bottom-1 end-1 top-2 cursor-pointer" viewBox="-5.52 -5.52 35.04 35.04" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><path transform="translate(-5.52, -5.52), scale(1.095)" d="M16,27.2649447110792C19.18342023718651,27.026586657547554,22.340508628759714,26.806104343894756,24.905124525842723,24.905124525842723C27.940614897137625,22.655116662955287,31.210186947939462,19.77843588758935,31.197560758640368,16C31.184950663832836,12.22638045113932,27.50907925391884,9.827644778318314,24.845807223348125,7.154192776651879C22.174224082795657,4.472397896991108,19.77861427707256,0.5175131492509117,16.000000000000004,0.7443487693866082C12.267157615126264,0.9684366373596393,10.563953098001292,5.294881501899654,8.156099787650833,8.156099787650831C6.081298472856231,10.621557062673476,3.600829165625669,12.80776147032025,3.1616330357889346,15.999999999999998C2.6589871202317363,19.653414840026755,2.8813908406271636,23.91430605466727,5.653406319300526,26.34659368069947C8.358965157848582,28.720569343942124,12.410629494104422,27.533698222536838,16,27.2649447110792" fill="#BB2649" strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                    </div>
                </div> :
                <div className="fixed bottom-2 right-2 sm:bottom-8 sm:right-8 z-50">
                    <svg onClick={() => setOpenChat(!openChat)} className="cursor-pointer w-[90px]" viewBox="-9.12 -9.12 42.24 42.24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#aa2727"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><path transform="translate(-9.12, -9.12), scale(1.32)" d="M16,31.597167126834393C18.481367295111664,32.04145296443412,18.73823069138449,27.364894562301863,20.727237080711404,25.816208944767375C22.196265676468915,24.67238986494711,24.325080502476567,24.89102705005223,25.896075992657213,23.89185725850215C27.800648982252202,22.680528639865113,29.90072689624434,21.440292778257376,30.83681959989766,19.386407254380515C31.792612034797123,17.289298454995993,31.979351249801905,14.675887490056054,31.059498117446136,12.562767827102173C30.141431585612402,10.453752407054205,27.470649111812314,9.787885339822811,25.919273391528193,8.089643433206955C24.486631079246497,6.521375230928889,24.281532237630522,3.6723094673017425,22.28230719659016,2.9546546864401613C20.224605874407057,2.216008880622602,18.181179502456782,4.379999257415574,16,4.528956754133105C14.00321025204882,4.665321873093291,11.77731842145127,2.666638512487114,10.117757816529,3.785398246202087C8.355509333472313,4.973382968059508,8.988603635787696,7.808175040560328,8.205071923385383,9.78375229064754C7.649384138774005,11.184849563486345,6.342741668991252,12.258335595396598,6.163747989623014,13.754939666174458C5.988231032418924,15.222474126437605,7.376676527424219,16.533648041600173,7.221988156281245,18.003523921448252C6.970472834040807,20.3934663769916,3.541329201425309,22.862250812019443,5.004695019442158,24.768463124641034C6.451221998474535,26.652740797402068,10.00528766656539,23.004495125701492,12.023265944861436,24.257773353973096C14.41701547891223,25.74442670759311,13.226278288305961,31.100535581647094,16,31.597167126834393" fill="#BB2649" strokeWidth="0"></path></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.528"></g><g id="SVGRepo_iconCarrier"> <path d="M8 10.5H16" stroke="#ffffff" strokeWidth="1.344" strokeLinecap="round"></path> <path d="M8 14H13.5" stroke="#ffffff" strokeWidth="1.344" strokeLinecap="round"></path> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#ffffff" strokeWidth="1.344" strokeLinecap="round"></path> </g></svg>
                </div>
            }
        </div>
    )
}

export default Webchat;