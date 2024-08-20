
export default function JobDetailsSkeleton() {
    return (
        <>
            <div className="border-2 rounded border-solid border-slate-50 shadow px-8 py-6 w-full mb-4">
                <div className="animate-pulse flex space-x-4 justify-between">
                    <div className="flex">
                        <div className="rounded bg-slate-200 h-12 w-12" />
                        <div className="py-1 w-96 ml-4">
                            <div className="h-5 bg-slate-200 rounded w-10/12" />
                            <div className="h-3 bg-slate-200 rounded mt-2 w-9/12" />
                        </div>
                    </div>
                    <div className="w-48">
                        <div className="h-10 bg-slate-200 rounded" />
                    </div>
                </div>
                <div className="animate-pulse mt-4 space-y-4">
                    <div className="flex justify-between w-full">
                        <div className="h-4 w-28 bg-slate-200 rounded" />
                        <div className="h-4 w-28 bg-slate-200 rounded" />
                        <div className="h-4 w-28 bg-slate-200 rounded" />
                    </div>
                    <div className="flex justify-between w-full">
                        <div className="h-4 w-28 bg-slate-200 rounded" />
                    </div>
                    <div className="flex space-x-2 w-full">
                        <div className="h-6 w-14 bg-slate-200 rounded" />
                        <div className="h-6 w-14 bg-slate-200 rounded" />
                        <div className="h-6 w-14 bg-slate-200 rounded" />
                        <div className="h-6 w-14 bg-slate-200 rounded" />
                        <div className="h-6 w-14 bg-slate-200 rounded" />
                    </div>
                </div>
                <div className="animate-pulse mt-4 space-y-4 pt-4">
                    <div className="w-full space-y-2">
                        <div className="h-5 w-28 bg-slate-200 rounded" />
                        <div className="h-4 w-full bg-slate-200 rounded" />
                        <div className="h-4 w-full bg-slate-200 rounded" />
                        <div className="h-4 w-full bg-slate-200 rounded" />
                    </div>
                    <div className="w-full space-y-2 pt-4">
                        <div className="h-5 w-28 bg-slate-200 rounded" />
                        <div className="h-4 w-full bg-slate-200 rounded" />
                        <div className="h-4 w-full bg-slate-200 rounded" />
                        <div className="h-4 w-full bg-slate-200 rounded" />
                    </div>
                    <div className="w-full space-y-2 pt-6">
                        <div className="h-5 w-28 bg-slate-200 rounded" />
                        <div className="w-full space-y-2 ml-8 pr-8">
                            <div className="h-4 w-full bg-slate-200 rounded" />
                            <div className="h-4 w-full bg-slate-200 rounded" />
                            <div className="h-4 w-full bg-slate-200 rounded" />
                        </div>
                    </div>
                    <div className="w-full space-y-2 pt-6">
                        <div className="h-5 w-28 bg-slate-200 rounded" />
                        <div className="w-full space-y-2 ml-8 pr-8">
                            <div className="h-4 w-full bg-slate-200 rounded" />
                            <div className="h-4 w-full bg-slate-200 rounded" />
                            <div className="h-4 w-full bg-slate-200 rounded" />
                        </div>
                    </div>
                    <div className="w-full space-y-2 pt-6">
                        <div className="h-5 w-28 bg-slate-200 rounded" />
                        <div className="w-full space-y-2 ml-8 pr-8">
                            <div className="h-4 w-full bg-slate-200 rounded" />
                            <div className="h-4 w-full bg-slate-200 rounded" />
                            <div className="h-4 w-full bg-slate-200 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}