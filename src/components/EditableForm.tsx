interface EditableFormProps {
    title: string;
    defaultValue: string;
    resize: boolean;
    rows: number
}

const EditableForm: React.FC<EditableFormProps> = ({ title, defaultValue, resize, rows }) => {
    return (
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 mt-2">{title}</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                    <div className="mt-1 relative">
                        <p>{defaultValue}</p>
                    </div>
                </form>
            </dd>
            
        </div>

    )
 }

export default EditableForm