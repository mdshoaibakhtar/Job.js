'use client'
import React, { useState } from "react";
import { Alert, Button } from "@heroui/react";

type AlertColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
interface AlertPopUp{
    title: string;
    description: string
    isVisible: boolean
    alertColor: AlertColor
    setIsVisible: (visibility: boolean) => void;
}

export default function AlertPopUp({ title, description, isVisible, setIsVisible, alertColor }: AlertPopUp) {
    return (
        <div className="flex flex-col gap-4 absolute w-full">
            {isVisible && (
                <Alert
                    color={alertColor}
                    description={description}
                    isVisible={isVisible}
                    title={title}
                    variant="faded"
                    onClose={() => setIsVisible(false)}
                />
            )}
        </div>
    );
}

