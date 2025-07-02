import { ITableData } from "app/context/UseProvider";

export async function fetchTable(username: string, password: string): Promise<ITableData | {error:string} | null> {
     try {
        const response = await fetch('https://unimap-5vf6.onrender.com/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
     })

     if (response.status === 401) {
      return { error: 'user not found or unauthorized (401)' };
    }
    if (response.status === 404) {
      return { error: 'incorrect id or password (404)' };
    }
    if (!response.ok) {
      return { error: `unexpected error: ${response.status} ${response.statusText}` };
    }else {
        const data = await response.json();
        return data;
    }

     } catch (error) {
        console.error('error occured fetching tables', error);
        throw error
     }
}