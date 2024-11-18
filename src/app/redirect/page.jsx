'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/features/userSlice';
import { useReuestApi } from '@/hooks/useRequestApi';

const Page = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        const makesRequest = async () => {
            try {
                const response = await useReuestApi('api/auth/getCurruser');
                console.log("Response: ", response);

                dispatch(
                    setUser({
                        name: response.name,
                        email: response.email,
                        role: response.role,
                    })
                );

                console.log("User set in Redux");
                router.replace('/');
            } catch (error) {
                console.error("Error fetching user:", error);
                router.replace('/login');
            }
        };

        if (token) {
            localStorage.setItem('token', token);
            makesRequest();
        } else {
            console.error('No token found, redirecting to login');
            router.replace('/login');
        }
    }, [dispatch, router]);

    return <div>Redirecting...</div>;
};

export default Page;
