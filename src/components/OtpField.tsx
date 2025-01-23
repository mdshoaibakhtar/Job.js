import React from "react";
import { Button, InputOtp, Form } from "@heroui/react";

export default function OtpField() {
    const [otp, setOtp] = React.useState("");

    return (
        <Form
            className="flex w-full flex-col items-start gap-4"
            validationBehavior="native"
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const otp = formData.get("otp");
                setOtp(otp);
            }}
        >
            <InputOtp
                isRequired
                aria-label="OTP input field"
                length={6}
                name="otp"
                placeholder="Enter code"
                validationBehavior="native"
            />
            <Button size="sm" type="submit" variant="bordered">
                Submit
            </Button>
            {otp && <div className="text-small text-default-500">OTP submitted: {otp}</div>}
        </Form>
    );
}

