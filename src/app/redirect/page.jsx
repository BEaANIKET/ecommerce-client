'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useReuestApi } from '@/hooks/useRequestApi';

const Page = () => {
    const route = useRouter();

    useEffect(() => {

        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        const makesRequest = async() => {
            try{
                const response = await useReuestApi('api/auth/getCurruser')
                console.log(response);
            }catch(error) {
                console.log(error);
            }
        }

        if (token) {
            localStorage.setItem('token', token);
            makesRequest()
            route.replace('/');
        } else {
            console.error('No token found, redirecting to login');
            route.replace('/login');
        }
    }, []);

    return <div>Redirecting...</div>;
};

export default Page;
