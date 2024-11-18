import axios from "axios"

export const useReuestApi = async (
    endpoint,
    method = 'GET',
    body
) => {
    const token = localStorage.getItem('token');
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`)
    try {

        const response = await axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`,
            method: method,
            data: body || undefined,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error;
    }

}
