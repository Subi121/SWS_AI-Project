// import { useState } from "react";

// export default function App() {

//   const [files, setFiles] = useState([]);

//   const handleFiles = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f7fb]">

//       {/* HEADER */}

//       <div className="bg-white border-b border-gray-200 px-10 py-5 flex items-center justify-between">

//         <div className="flex items-center gap-3">

//           <div className="bg-blue-600 text-white p-2 rounded-lg text-xl">
//             📄
//           </div>

//           <h1 className="text-3xl font-bold text-gray-800">
//             SWS AI Document Hub
//           </h1>

//           <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
//             LIVE DEMO
//           </span>

//         </div>

//         <div className="text-2xl">
//           🔔
//         </div>

//       </div>

//       {/* CONTENT */}

//       <div className="max-w-6xl mx-auto p-8">

//         {/* TOP INFO */}

//         <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">

//           <p className="text-blue-700 font-medium">
//             Simulated demo — Upload 1–3 files to see individual progress.
//             Upload 4+ files to trigger bulk notifications.
//           </p>

//         </div>

//         {/* UPLOAD BOX */}

//         <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-16 text-center shadow-sm">

//           <div className="text-6xl mb-6">
//             ⬆️
//           </div>

//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Drop files here or click to browse
//           </h2>

//           <p className="text-gray-500 text-lg mb-8">
//             Any file type • Up to 20 MB per file
//           </p>

//           <input
//             type="file"
//             multiple
//             onChange={handleFiles}
//             className="mb-6"
//           />

//           <div className="flex justify-center gap-4">

//             <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
//               Single File
//             </button>

//             <button className="bg-gray-200 px-6 py-3 rounded-xl font-semibold">
//               Bulk Upload
//             </button>

//             <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-semibold">
//               Try 4+ Files
//             </button>

//           </div>

//         </div>

//         {/* FILES */}

//         <div className="mt-10">

//           <h2 className="text-2xl font-bold text-gray-800 mb-5">
//             Document Library
//           </h2>

//           {
//             files.length === 0 ? (

//               <div className="bg-white rounded-2xl p-20 text-center text-gray-400 border">

//                 <div className="text-5xl mb-4">
//                   📁
//                 </div>

//                 <p className="text-xl">
//                   No documents yet
//                 </p>

//               </div>

//             ) : (

//               <div className="grid gap-4">

//                 {
//                   files.map((file, index) => (

//                     <div
//                       key={index}
//                       className="bg-white p-5 rounded-2xl border flex justify-between items-center"
//                     >

//                       <div>

//                         <h3 className="font-bold text-lg">
//                           {file.name}
//                         </h3>

//                         <p className="text-gray-500">
//                           {(file.size / 1024).toFixed(2)} KB
//                         </p>

//                       </div>

//                       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
//                         Uploaded
//                       </button>

//                     </div>

//                   ))
//                 }

//               </div>

//             )
//           }

//         </div>

//       </div>

//     </div>
//   );
// }

import { useState } from "react";

export default function App() {

  const [files, setFiles] = useState([]);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HEADER */}

      <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
            📄
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            SWS AI Document Hub
          </h1>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            LIVE DEMO
          </span>

        </div>

        <button className="text-2xl">
          🔔
        </button>

      </header>

      {/* MAIN */}

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* INFO */}

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">

          <p className="text-blue-700 font-medium">
            Simulated demo — Upload 1–3 files to see individual progress bars.
            Upload 4+ files to trigger bulk notifications.
          </p>

        </div>

        {/* UPLOAD SECTION */}

        <div className="bg-white rounded-3xl border-2 border-dashed border-gray-300 p-16 text-center shadow-sm">

          <div className="text-6xl mb-6">
            ⬆️
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Drop files here or click to browse
          </h2>

          <p className="text-gray-500 text-lg mb-8">
            Any file type • Up to 20 MB per file
          </p>

          <input
            type="file"
            multiple
            onChange={handleFiles}
            className="mb-8"
          />

          <div className="flex justify-center gap-4 flex-wrap">

            <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
              Single File
            </button>

            <button className="bg-gray-200 px-6 py-3 rounded-xl font-semibold">
              Bulk Upload
            </button>

            <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-semibold">
              Try 4+ Files
            </button>

          </div>

        </div>

        {/* DOCUMENTS */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Document Library
          </h2>

          {
            files.length === 0 ? (

              <div className="bg-white border rounded-2xl p-20 text-center">

                <div className="text-5xl mb-4">
                  📁
                </div>

                <p className="text-gray-400 text-xl">
                  No documents yet
                </p>

              </div>

            ) : (

              <div className="space-y-4">

                {
                  files.map((file, index) => (

                    <div
                      key={index}
                      className="bg-white border rounded-2xl p-5 flex justify-between items-center"
                    >

                      <div>

                        <h3 className="font-bold text-lg text-gray-800">
                          {file.name}
                        </h3>

                        <p className="text-gray-500">
                          {(file.size / 1024).toFixed(2)} KB
                        </p>

                      </div>

                      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
                        Uploaded
                      </button>

                    </div>

                  ))
                }

              </div>

            )
          }

        </div>

      </main>

    </div>
  );
}