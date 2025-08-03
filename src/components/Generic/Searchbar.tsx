import { useMyContext } from "@/app/context/MyContext";
import styles from '../../app/Custom.module.css'

interface ChildComponentProps {
    setSearchString: (value: string) => void; // Define the type for the prop
}
const SearchBar: React.FC<ChildComponentProps> = ({ setSearchString }) => {
    const { setLoadSkeleton } = useMyContext();
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log('ALerrt')
            setLoadSkeleton('all')
        }
    };
    return (
        <div className="max-w-full flex justify-end px-4 sm:px-10">
            <div className="relative rounded-md shadow-sm w-1/4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm mt-0">
                        <svg className="w-4 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinejoin="round"></path> </g></svg>
                    </span>
                </div>
                <input
                    id="text"
                    name="text"
                    type="text"
                    className={styles.input}
                    placeholder='Search job'
                />
            </div>
            <div className="height-[100%] flex justify-center items-center pl-2 cursor-pointer">
            <svg className="w-8 h-6 text-gray-500 dark:text-gray-400" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="50.69" y1="32" x2="56.32" y2="32"></line><line x1="7.68" y1="32" x2="38.69" y2="32"></line><line x1="26.54" y1="15.97" x2="56.32" y2="15.97"></line><line x1="7.68" y1="15.97" x2="14.56" y2="15.97"></line><line x1="35" y1="48.03" x2="56.32" y2="48.03"></line><line x1="7.68" y1="48.03" x2="23" y2="48.03"></line><circle cx="20.55" cy="15.66" r="6"></circle><circle cx="44.69" cy="32" r="6"></circle><circle cx="29" cy="48.03" r="6"></circle></g></svg>
        </div>
        </div>

    )
}

export default SearchBar;