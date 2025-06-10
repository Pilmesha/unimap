// // src/components/MapUI.tsx
// import { useState } from "react";
// import { roomCoordinates } from "../data/roomCoordinates";

// export default function MapUI() {
//   const [startRoom, setStartRoom] = useState("");
//   const [endRoom, setEndRoom] = useState("");
//   const [path, setPath] = useState<string[]>([]);

//   const handleRoomClick = (roomId: string) => {
//     if (!startRoom) setStartRoom(roomId);
//     else if (!endRoom && roomId !== startRoom) setEndRoom(roomId);
//   };

//   const fetchPath = async () => {
//     if (startRoom && endRoom) {
//       const res = await fetch(
//         `/api/shortest-path?start=${startRoom}&end=${endRoom}`
//       );
//       const data = await res.text();
//       setPath(data.split("->"));
//     }
//   };

//   return (
//     <div className="relative w-full h-full">
//       <img
//         src="/100-ianebi.png"
//         alt="Map"
//         className="w-full h-auto"
//       />

//       {/* Room dots */}
//       {Object.entries(roomCoordinates).map(([roomId, { x, y }]) => (
//         <div
//           key={roomId}
//           className="absolute bg-blue-600 rounded-full cursor-pointer"
//           style={{
//             left: `${x}%`,
//             top: `${y}%`,
//             width: "12px",
//             height: "12px",
//             transform: "translate(-50%, -50%)",
//           }}
//           title={roomId}
//           onClick={() => handleRoomClick(roomId)}
//         ></div>
//       ))}

//       {/* Path lines */}
//       <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         {path.length > 1 &&
//           path.map((roomId, idx) => {
//             const nextRoomId = path[idx + 1];
//             if (!nextRoomId) return null;
//             const from = roomCoordinates[roomId];
//             const to = roomCoordinates[nextRoomId];
//             return (
//               <line
//                 key={`${roomId}-${nextRoomId}`}
//                 x1={`${from.x}%`}
//                 y1={`${from.y}%`}
//                 x2={`${to.x}%`}
//                 y2={`${to.y}%`}
//                 stroke="red"
//                 strokeWidth="2"
//               />
//             );
//           })}
//       </svg>

//       {/* Inputs */}
//       <div className="absolute top-4 left-4 bg-white p-4 rounded shadow">
//         <div>
//           <label>Start Room: </label>
//           <input
//             type="text"
//             value={startRoom}
//             onChange={(e) => setStartRoom(e.target.value)}
//             className="border px-2 py-1 rounded"
//           />
//         </div>
//         <div className="mt-2">
//           <label>End Room: </label>
//           <input
//             type="text"
//             value={endRoom}
//             onChange={(e) => setEndRoom(e.target.value)}
//             className="border px-2 py-1 rounded"
//           />
//         </div>
//         <button
//           onClick={fetchPath}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Find Path
//         </button>
//       </div>
//     </div>
//   );
// }
