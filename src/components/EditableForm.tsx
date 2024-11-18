interface EditableFormProps {
    title: string;
    defaultValue: string;
    resize: boolean;
    rows: number
}

const EditableForm: React.FC<EditableFormProps> = ({ title, defaultValue, resize, rows }) => {
    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mt-2">{title}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                    <div className="mt-1 relative">
                        <textarea rows={rows} name="comment" id="editable-text-area-with-value" className={`block overflow-y-scroll no-scrollbar w-full pr-10 p-1 -ml-1 rounded resize-${resize?'block':'none'} border-transparent bg-transparent cursor-pointer hover:bg-gray-100 focus:bg-transparent focus:outline-none focus:ring focus:ring-gray-100/50 focus:border-gray-100 group-focus-within:border-gray-100" placeholder="Enter your full name`} defaultValue={defaultValue} />
                        <div className="absolute top-1.5 right-0 pr-3 flex items-center pointer-events-none text-gray-400 group-hover:text-gray-500 group-focus-within:hidden">
                            <svg className="h-5 w-5 text-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </form>
            </dd>
            
        </div>

    )
 }

export default EditableForm