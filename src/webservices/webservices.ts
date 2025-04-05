import { api_url } from "@/variables/constant"

export async function get(endpoint: string) {
    try {
        const res = await fetch(api_url + endpoint)
        return res.json()
    } catch (error) {
        console.error('Something went wrong:', error)
    }
}

export async function post(endpoint: string, payload:any){
    try {
        const res = await fetch(api_url + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        return data
    } catch (error) {
        console.error('Error:', error);
    }
};

