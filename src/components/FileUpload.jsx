import React, { useState } from "react";

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    onFileUpload(uploadedFile);
  };

  return (
    <div className="flex flex-col items-center">
      <label>
        Upload Log File
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleChange}
        className="hidden"
        accept=".txt, .log"
      />
      {file && <p className="mt-2 text-sm text-gray-400">{file.name}</p>}
    </div>
  );
};

export default FileUpload;
