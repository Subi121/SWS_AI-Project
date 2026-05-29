
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progressMap, setProgressMap] = useState({});
  const [notification, setNotification] = useState("");

  // FETCH FILES FROM BACKEND

  const fetchFiles = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8080/api/files"
      );

      setUploadedFiles(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchFiles();

  }, []);

  // HANDLE FILE SELECTION

  const handleFiles = (e) => {

    setSelectedFiles(
      Array.from(e.target.files)
    );
  };

  // UPLOAD FILES

  const uploadFiles = async () => {

    if (selectedFiles.length === 0) {

      alert("Please select files");
      return;
    }

    // BULK UPLOAD NOTIFICATION

    if (selectedFiles.length > 3) {

      setNotification(
        `Upload in progress — processing ${selectedFiles.length} files in background`
      );
    }

    try {

      for (let file of selectedFiles) {

        const formData = new FormData();

        formData.append("file", file);

        await axios.post(
          "http://localhost:8080/api/files/upload",
          formData,
          {
            onUploadProgress: (progressEvent) => {

              const percent = Math.round(
                (progressEvent.loaded * 100) /
                progressEvent.total
              );

              setProgressMap((prev) => ({
                ...prev,
                [file.name]: percent
              }));
            }
          }
        );
      }

      setNotification(
        `${selectedFiles.length} file(s) uploaded successfully`
      );

      fetchFiles();

    } catch (error) {

      console.log(error);

      setNotification(
        "Upload failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* HEADER */}

      <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <button className="text-gray-500">
            ← Back
          </button>

          <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
            📄
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            SWS AI Document Hub
          </h1>

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            LIVE DEMO
          </span>

        </div>

        {/* NOTIFICATION ICON */}

        <div className="relative">

          <button className="text-2xl">
            🔔
          </button>

          {
            uploadedFiles.length > 0 && (

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                {uploadedFiles.length}

              </span>
            )
          }

        </div>

      </header>

      {/* TABS */}

      <div className="bg-white border-b px-8">

        <div className="flex gap-8">

          <button className="py-4 border-b-2 border-blue-600 text-blue-600 font-semibold">
            ⬆️ Document Upload
          </button>

          <button className="py-4 text-gray-500">
            🤖 AI Assistant
          </button>

        </div>

      </div>

      {/* MAIN */}

      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* NOTIFICATION */}

        {
          notification && (

            <div className="bg-green-100 border border-green-300 text-green-700 px-5 py-4 rounded-2xl mb-6">

              {notification}

            </div>
          )
        }

        {/* INFO BOX */}

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">

          <p className="text-blue-700 font-medium">
            Upload single or multiple PDF/documents.
            Upload 4+ files to trigger background upload notification flow.
          </p>

        </div>

        {/* UPLOAD SECTION */}

        <div className="bg-white rounded-3xl border-2 border-dashed border-gray-300 p-16 text-center shadow-sm">

          <div className="text-6xl mb-6">
            📄
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

            <button
              onClick={uploadFiles}
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
            >
              Upload Files
            </button>

            <button className="bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-semibold">
              Try 4+ files
            </button>

          </div>

        </div>

        {/* SELECTED FILES + PROGRESS */}

        {
          selectedFiles.length > 0 && (

            <div className="mt-10">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Upload Progress
              </h2>

              <div className="space-y-4">

                {
                  selectedFiles.map((file, index) => (

                    <div
                      key={index}
                      className="bg-white border rounded-2xl p-5"
                    >

                      <div className="flex justify-between items-center mb-3">

                        <div>

                          <h3 className="font-bold text-lg">
                            {file.name}
                          </h3>

                          <p className="text-gray-500 text-sm">

                            {(file.size / 1024).toFixed(2)} KB

                          </p>

                        </div>

                        <div className="font-bold text-blue-600">

                          {progressMap[file.name] || 0}%

                        </div>

                      </div>

                      <div className="w-full bg-gray-200 h-3 rounded-full">

                        <div
                          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${progressMap[file.name] || 0}%`
                          }}
                        ></div>

                      </div>

                    </div>
                  ))
                }

              </div>

            </div>
          )
        }

        {/* DOCUMENT LIBRARY */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Document Library
          </h2>

          {
            uploadedFiles.length === 0 ? (

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
                  uploadedFiles.map((file) => (

                    <div
                      key={file.id}
                      className="bg-white border rounded-2xl p-5 flex justify-between items-center"
                    >

                      <div>

                        <h3 className="font-bold text-lg text-gray-800">
                          {file.fileName}
                        </h3>

                        <p className="text-gray-500">
                          {file.status}
                        </p>

                        <p className="text-gray-400 text-sm mt-1">

                          {(file.size / 1024).toFixed(2)} KB

                        </p>

                      </div>

                      <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
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