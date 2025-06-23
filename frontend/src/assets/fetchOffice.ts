
export async function fetchOffice(name: string): Promise<string | null> {
  try {
    const response = await fetch(`https://unimap-5vf6.onrender.com/staff-room?staffFullName=${name}`)
    if(!response.ok) {
        if (response.status === 404){
          return null;
        }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('rrror fetching office:', error);
    throw error;
  }
}