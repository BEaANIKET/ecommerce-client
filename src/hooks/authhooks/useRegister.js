import { useState } from "react";
import axios from "axios";
import { useRequestApi } from "../useRequestApi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const register = async ({ first_name, last_name, email, password }) => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await useRequestApi('api/auth/register', 'POST', { name: `${first_name} ${last_name}`, email, password });
            setSuccess(true);
            toast.success("Successfully registered")
            router.replace('/login')

        } catch (err) {
            setError(err.response?.data?.message || "Failed to register.");
            toast.error(err.response?.data?.message || "Failed to register.")
        } finally {
            setIsLoading(false);
        }
    };

    return { register, isLoading, error, success };
};
