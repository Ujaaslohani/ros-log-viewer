# ROS Log Viewer

## Overview
The ROS Log Viewer is a web-based application designed to display and analyze log files generated by robots running the Robot Operating System (ROS). The application provides tools for parsing, filtering, and searching log entries, enhancing the debugging and monitoring experience for robotic developers.

The application is deployed and can be accessed at the following link: [Live Demo](https://ros-log-viewer.netlify.app/)

## Features
- **File Upload**: Upload ROS log files (`.log` or `.txt` format) for analysis.
- **Log Parsing**: Extract key information such as timestamps, severity levels, node names, and messages.
- **Severity Filtering**: Filter logs by severity levels (DEBUG, INFO, WARN, ERROR, FATAL).
- **Search Functionality**: Search logs by keywords to quickly locate relevant entries.
- **Error Highlighting**: Highlight logs with WARN or ERROR levels for better visibility.

## Technologies Used
### Backend
- **Framework**: FastAPI (Python)
- **Parsing**: Regular expressions for extracting log details
- **Endpoints**:
  - `POST /upload`: Upload and parse log files.
  - `GET /logs`: Retrieve parsed logs with optional severity filtering.
  - `GET /search`: Search logs by keyword.

### Frontend
- **Framework**: React.js
- **State Management**: React Hooks (`useState`)
- **API Integration**: Axios for interacting with the backend
- **UI Components**: Modern table and form components

## Installation

### Prerequisites
- Python 3.8+
- Node.js (with npm or Yarn)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ujaaslohani/ros-log-viewer-api.git
   cd ros-log-viewer/backend
   ```
2. Install dependencies:
   ```bash
   pip install fastapi uvicorn python-multipart
   ```
3. Run the server:
   ```bash
   uvicorn api:app --reload
   ```
4. The server will run at `http://localhost:8000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The frontend will run at `http://localhost:3000`.

## Usage
1. Open the application in your browser: `http://localhost:3000`.
2. Upload a ROS log file using the upload button.
3. View parsed logs in a table format.
4. Use filters and the search bar to refine the displayed logs.

## API Documentation
### POST `/upload`
Uploads a log file for parsing.
- **Parameters**: `file` (form-data)
- **Response**:
  ```json
  {
      "message": "File uploaded and parsed successfully.",
      "total_logs": 100
  }
  ```

### GET `/logs`
Retrieves all parsed logs with optional filtering by severity.
- **Query Parameters**: `severity` (e.g., INFO, WARN, ERROR)
- **Response**:
  ```json
  [
      {
          "timestamp": "2023-12-10 12:00:00",
          "severity": "ERROR",
          "node": "example_node",
          "message": "Example error message"
      }
  ]
  ```

### GET `/search`
Searches logs by a keyword.
- **Query Parameters**: `keyword`
- **Response**:
  ```json
  [
      {
          "timestamp": "2023-12-10 12:00:00",
          "severity": "INFO",
          "node": "example_node",
          "message": "Example message containing keyword"
      }
  ]
  ```

## File Structure
```
ros-log-viewer/
├── backend/
│   ├── api.py             # FastAPI backend implementation
│   └── requirements.txt   # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   └── App.js         # Main React application
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

## Example Log Format
```
[2023-12-10 12:00:00] [INFO] [example_node] Example informational message
[2023-12-10 12:01:00] [ERROR] [example_node] Example error message
[2023-12-10 12:02:00] [WARN] [example_node] Example warning message
```

## Future Enhancements
- **Pagination**: Implement pagination for large log files.
- **Advanced Filtering**: Add support for multiple criteria filtering (e.g., by node name).
- **Export Logs**: Allow users to export filtered logs as a file.
- **Real-Time Monitoring**: Stream logs directly from a ROS system.



