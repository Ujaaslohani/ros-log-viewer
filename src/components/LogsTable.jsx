import React, { useState, useEffect } from "react";

const LogsTable = ({ logs, fetchLogs }) => {
  const [severityFilter, setSeverityFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLogs, setFilteredLogs] = useState([]);

  useEffect(() => {
    
    let filtered = logs;

    if (severityFilter) {
      filtered = filtered.filter(
        (log) => log.severity.toUpperCase() === severityFilter.toUpperCase()
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((log) =>
        log.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredLogs(filtered);
  }, [logs, severityFilter, searchQuery]);

  const handleFilterChange = (event) => {
    const severity = event.target.value;
    setSeverityFilter(severity);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="table-container">
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <select value={severityFilter} onChange={handleFilterChange} style={{ marginRight: "10px" }}>
          <option value="">All</option>
          <option value="DEBUG">DEBUG</option>
          <option value="INFO">INFO</option>
          <option value="WARN">WARN</option>
          <option value="ERROR">ERROR</option>
          <option value="FATAL">FATAL</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search logs..."
          style={{ padding: "5px" }}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Severity</th>
            <th>Node</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.length > 0 ? (
            filteredLogs.map((log, index) => (
              <tr
                key={index}
                style={{
                  color:
                    log.severity === "ERROR" || log.severity === "WARN"
                      ? "red"
                      : "black",
                }}
              >
                <td>{log.timestamp}</td>
                <td>{log.severity}</td>
                <td>{log.node}</td>
                <td>{log.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-logs-message">
                No logs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTable;
