import { Checkbox, DatePicker, DateValue, Input, Select, SelectItem, Textarea, Tooltip } from "@heroui/react";
import React from "react"

interface generateFieldProps {
    key: number;
    dataType: string;
    fieldLabel: string;
    fieldPlaceholder: string;
    selectOptions: any;
}
const GenerateField = ({key, dataType, fieldLabel, fieldPlaceholder, selectOptions }: generateFieldProps) => {
    const checkFutureDate = (date: any) => {
        const givenDate = new Date(date);
        const today = new Date();
        if (givenDate >= today) {
            return true
        } else if (givenDate < today) {
            return false
        }
    }
    return (
        <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={key}>
            <dt className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                {dataType === 'checkbox' ? '' : fieldLabel}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <form className="group relative" action="#" autoComplete="off" method="get" noValidate>
                    <div className="relative">
                        {dataType === 'textarea' ? (
                            <Textarea
                                type="textarea"
                                style={{
                                    outline: 'none',
                                    border: 'none',
                                    boxShadow: 'none',
                                    overflow: 'hidden',   // Hides the scrollbar, but still allows scroll
                                    scrollbarWidth: 'none', // For Firefox, hides scrollbar
                                }}
                                placeholder={fieldPlaceholder}
                            />
                        ) : dataType === 'date' ? (
                            <DatePicker
                                fullWidth
                                className="pb-0"
                                isDateUnavailable={(date: DateValue) => checkFutureDate(date) ?? false}
                            />
                        ) : dataType === 'checkbox' ? (
                            <Checkbox defaultSelected>{fieldLabel}</Checkbox>
                        ) :
                            (dataType === "select" || dataType === "multiple") ?
                                <Select className="max-w-full" placeholder={fieldPlaceholder} selectionMode={dataType === "multiple" ? 'multiple' : 'single'}>
                                    {selectOptions.map((field:any) => (
                                        <SelectItem key={field.key}>{field.label}</SelectItem>
                                    ))}
                                </Select>
                                :
                                dataType === 'price' ?
                                    <Input
                                        labelPlacement="outside"
                                        placeholder={fieldPlaceholder}
                                        // defaultValue={attr.defaultValue}
                                        style={{
                                            outline: 'none',
                                            border: 'none',
                                            boxShadow: 'none',
                                        }}
                                        startContent={
                                            <div className="pointer-events-none flex items-center">
                                                <span className="text-default-400 text-small">Rs</span>
                                            </div>
                                        }
                                        type="number"
                                    /> :
                                    dataType === 'dynamic_field_renderrer' ?
                                        <div className="">
                                            <div className="w-full flex justify-between">
                                                <div className="text-sm font-medium leading-6 text-gray-900 items-center pt-2">
                                                    {fieldPlaceholder}
                                                </div>
                                                <div className="text-sm font-medium leading-6 text-gray-900 items-center pt-2 cursor-pointer">
                                                    <Tooltip content="Add job experience">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                        </svg>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="py-2">
                                                    <Textarea
                                                        type="textarea"
                                                        minRows={2}
                                                        style={{
                                                            outline: 'none',
                                                            border: 'none',
                                                            boxShadow: 'none',
                                                            overflow: 'hidden',   // Hides the scrollbar, but still allows scroll
                                                            scrollbarWidth: 'none', // For Firefox, hides scrollbar
                                                        }}
                                                        placeholder='Please enter company name'
                                                    />
                                                </div>
                                                <div className="py-2">
                                                    <Textarea
                                                        type="textarea"
                                                        minRows={1}
                                                        style={{
                                                            outline: 'none',
                                                            border: 'none',
                                                            boxShadow: 'none',
                                                            overflow: 'hidden',   // Hides the scrollbar, but still allows scroll
                                                            scrollbarWidth: 'none', // For Firefox, hides scrollbar
                                                        }}
                                                        placeholder='Please enter company name'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        : (
                                            <Input
                                                type={dataType}
                                                radius="sm"
                                                placeholder={fieldPlaceholder}
                                                // defaultValue={attr.defaultValue}
                                            />
                                        )}
                    </div>
                </form>
            </dd>
        </div>
    )
}

export default GenerateField