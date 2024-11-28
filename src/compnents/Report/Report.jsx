import React from "react";
import "./Report.css";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import DownloadIcon from "@mui/icons-material/Download";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Reports = () => {
  // Sample data for charts
  const monthlyData = [
    { name: "Jan", hours: 45 },
    { name: "Feb", hours: 55 },
    { name: "Mar", hours: 40 },
    { name: "Apr", hours: 65 },
    { name: "May", hours: 50 },
    { name: "Jun", hours: 75 },
  ];

  const organizationData = [
    { name: "Org A", value: 30 },
    { name: "Org B", value: 25 },
    { name: "Org C", value: 20 },
    { name: "Org D", value: 15 },
    { name: "Others", value: 10 },
  ];

  const COLORS = ["#432E54", "#4B4376", "#635985", "#7B6F9E", "#918BB7"];

  // Sample data for the table
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "organization", headerName: "Organization", width: 180 },
    { field: "project", headerName: "Project", width: 180 },
    { field: "hours", headerName: "Hours", width: 100 },
    { field: "status", headerName: "Status", width: 120 },
  ];

  const rows = [
    {
      id: 1,
      date: "2024-03-01",
      organization: "Org A",
      project: "Project X",
      hours: 8,
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-03-02",
      organization: "Org B",
      project: "Project Y",
      hours: 6,
      status: "In Progress",
    },
    // Add more rows as needed
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="auth-buttons">
          <NavLink className="no-links" to="/login">
            <button className="login1-btn">Login</button>
          </NavLink>
          <NavLink className="no-links" to="/signup">
            <button className="signup1-btn">Signup</button>
          </NavLink>
        </div>
      </nav>

      <div className="reports-container">
        <div className="reports-header">
          <h1>Time Tracking Reports</h1>
          <div className="reports-actions">
            <button className="action-btn">
              <DateRangeIcon /> Date Range
            </button>
            <button className="action-btn">
              <FilterListIcon /> Filter
            </button>
            <button className="action-btn">
              <DownloadIcon /> Export
            </button>
          </div>
        </div>

        <div className="reports-grid">
          <div className="chart-card">
            <h2>Monthly Hours Tracked</h2>
            <BarChart width={500} height={300} data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#432E54" />
            </BarChart>
          </div>

          <div className="chart-card">
            <h2>Organization Distribution</h2>
            <PieChart width={400} height={300}>
              <Pie
                data={organizationData}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {organizationData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          <div className="chart-card full-width">
            <h2>Detailed Time Entries</h2>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
          </div>
        </div>

        <div className="summary-cards">
          <div className="summary-card">
            <h3>Total Hours</h3>
            <p className="summary-value">330</p>
            <p className="summary-change positive">+15% vs last month</p>
          </div>
          <div className="summary-card">
            <h3>Active Projects</h3>
            <p className="summary-value">12</p>
            <p className="summary-change">No change</p>
          </div>
          <div className="summary-card">
            <h3>Average Daily Hours</h3>
            <p className="summary-value">6.5</p>
            <p className="summary-change negative">-2% vs last month</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
