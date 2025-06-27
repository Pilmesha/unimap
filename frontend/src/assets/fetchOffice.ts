
export async function fetchOffice(name: string): Promise<string | null> {
  try {
    const response = await fetch(`https://unimap-5vf6.onrender.com/staff-room?staffFullName=${name}`)
    if (response.status === 404){
      return null;
    }
    if(!response.ok) {
      throw new Error(`http error, status: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error occured fetching office:', error);
    throw error;
  }
}