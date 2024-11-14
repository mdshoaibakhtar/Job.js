import React, { forwardRef } from 'react';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    subtitle?: string;
    width?: string; // Use Tailwind width classes like 'sm:max-w-lg'
    height?: string; // Use Tailwind height classes like 'h-full'
    children?: React.ReactNode;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ open, setOpen, title, subtitle, width = 'sm:max-w-lg', height = 'h-auto', children }, ref) => {
    return (
        <Transition appear show={open} as={React.Fragment}>
            <Dialog as="div" onClose={() => setOpen(false)} className="relative z-10">
                <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />
                <Transition.Child
                    as={React.Fragment}
                    enter="transition ease-out duration-300"
                    enterFrom="opacity-0 translate-y-[-100%]"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-[-100%]"
                >
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                ref={ref}
                                className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-auto ${width} ${height}`}
                            >
                                <div className="flex justify-between items-center p-4">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        {title}
                                    </DialogTitle>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                                    >
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                {subtitle && (
                                    <div className="px-4 pb-4">
                                        <p className="text-sm text-gray-500">{subtitle}</p>
                                    </div>
                                )}
                                <div className="sm:px-4 sm:pb-4 sm:p-6 sm:pb-4 border-t-2 border-inherit">
                                    {children}
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
});

export default Modal;
