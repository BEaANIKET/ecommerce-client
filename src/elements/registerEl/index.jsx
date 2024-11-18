'use client'

import Link from "next/link";
import Input from "../InputEl/InputEl";
import { useState } from "react";
import { useRegister } from "@/hooks/authhooks/useRegister";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

const RegisterEl = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });
    const { register, isLoading, error, success } = useRegister();
    const router = useRouter();

    const handleInputChange = (name, value) => {
        setFormData(
            (prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            }
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        await register(formData)
        if (success) {
            router.replace('/login')
        }
    }

    const handleClick = async () => {
        try {
            window.location.href = 'http://localhost:4000/api/auth/google';
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="px-4 py-12 flex justify-center items-center bg-[#f2f2f2]">
            <div className="flex flex-col gap-4 justify-center bg-white shadow-lg p-8 rounded-xl">
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-black text-center">Create an Account</h2>
                    <p className="text-base text-[#71717a] text-center">
                        Enter your detail below to create new account
                    </p>
                </div>

                <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                    <div className="flex gap-2 md:flex-row flex-col ">
                        <Input type='text' name='first_name' ph='First Name' data={formData.first_name} onChange={(e) => { handleInputChange('first_name', e.currentTarget.value) }} />
                        <Input type='text' name='last_name' ph='Last Name' data={formData.last_name} onChange={(e) => { handleInputChange('last_name', e.currentTarget.value) }} />
                    </div>
                    <Input type='email' name='email' ph='Email' data={formData.email} onChange={(e) => { handleInputChange('email', e.currentTarget.value) }} />
                    <Input type='password' name='password' ph='Password' data={formData.password} onChange={(e) => { handleInputChange('password', e.currentTarget.value) }} />
                    <button
                        type="submit"
                        className={`p-2 rounded-md bg-slate-900 text-white font-semibold active:scale-95`
                        }
                        disabled={isLoading}
                    >
                        {isLoading ? <Spin /> : 'sign-up'}
                    </button>
                </form>

                <div className="flex items-center justify-center gap-2">
                    <div className="w-[30%] h-px bg-[#71717ab9]"></div>
                    <span className="text-xs text-[#71717a] capitalize">or continue with socials</span>
                    <div className="w-[30%] h-px bg-[#71717a]"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <button
                        type="button"
                        className="p-1 rounded-md active:scale-95 border shadow-sm font-semibold"
                        onClick={handleClick}
                    >
                        Google
                    </button>

                    <button
                        className="p-1 rounded-md active:scale-95 border shadow-sm font-semibold"
                        type="button"
                    >
                        Facebook
                    </button>
                    <p className="text-sm self-center">
                        Already have an account?
                        <Link href={'/login'} className="text-blue-600 cursor-pointer">log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterEl;