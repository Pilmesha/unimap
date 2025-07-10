import React from 'react'; 
import MapDisplay from '../../components/filtering/MapDisplay';
const floors = [
  { id: 1, name: 'I' },
  { id: 2, name: 'II' },
  { id: 3, name: 'III' },
  { id: 4, name: 'IV' },
  { id: 5, name: 'V' },
  { id: 6, name: 'VI' },
];

const Page = () => {
  return (
    <main className="flex h-auto flex-col items-center justify-between p-4">
      <MapDisplay floors={floors} />
    </main>
  );
};

export default Page;
