import React, { useState } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";
import LogsTable from "./components/LogsTable";

function App() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.message);
      fetchLogs();
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLogs = async (severity = null) => {
    try {
      const response = await axios.get("http://localhost:8000/logs", {
        params: severity ? { severity } : {},
      });
      setLogs(response.data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">ROS Log Viewer</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {loading ? (
        <p className="mt-8 text-lg animate-pulse">Loading...</p>
      ) : (
        <div className="mt-8 w-full max-w-5xl">
          {logs.length === 0 ? (
            <p className="text-center text-gray-400">No logs found. Please upload a file.</p>
          ) : (
            <LogsTable logs={logs} fetchLogs={fetchLogs} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
