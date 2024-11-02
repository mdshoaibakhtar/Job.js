const SearchBar = () => {
    return (
        <div className="max-w-full flex justify-end px-10">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative w-1/4 transition-all duration-700">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 transition rounded-lg bg-gray-50 focus:ring-[#cecece] focus:border-[#cecece] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#cecece] dark:focus:border-[#cecece]" placeholder="Search Jobs..." required />
                {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#BB2649] hover:bg-[#BB2141] focus:ring-1 focus:outline-none focus:ring-[#cecece] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#BB2649] dark:hover:bg-[#BB2649] dark:focus:ring-[#cecece]">Search</button> */}
            </div>
        </div> 

    )
}

export default SearchBar;