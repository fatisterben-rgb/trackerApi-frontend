import React, { useState } from "react";
import "./ManageOrg.css";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import GroupIcon from "@mui/icons-material/Group";
import { NavLink } from "react-router-dom";

const ManageOrganizations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [newOrg, setNewOrg] = useState({
    name: "",
    description: "",
    type: "business",
    members: [],
  });

  // Sample organizations data
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "Tech Solutions Inc",
      description: "Software Development Company",
      type: "business",
      members: 150,
      projects: 12,
      created: "2024-01-15",
    },
    {
      id: 2,
      name: "Digital Innovators",
      description: "Digital Marketing Agency",
      type: "agency",
      members: 75,
      projects: 8,
      created: "2024-02-01",
    },
    // Add more organizations
  ]);

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    const newOrgWithId = {
      ...newOrg,
      id: organizations.length + 1,
      created: new Date().toISOString().split("T")[0],
      members: 0,
      projects: 0,
    };
    setOrganizations([...organizations, newOrgWithId]);
    setShowCreateModal(false);
    setNewOrg({ name: "", description: "", type: "business", members: [] });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setOrganizations(
      organizations.map((org) =>
        org.id === selectedOrg.id ? { ...org, ...selectedOrg } : org
      )
    );
    setShowEditModal(false);
  };

  const handleDelete = () => {
    setOrganizations(organizations.filter((org) => org.id !== selectedOrg.id));
    setShowDeleteModal(false);
  };

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

      <div className="manage-container">
        <div className="manage-header">
          <div className="header-left">
            <h1>
              <SettingsIcon className="header-icon" /> Manage Organizations
            </h1>
            <div className="search-bar">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="Search organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button
            className="create-org-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <AddIcon /> Create Organization
          </button>
        </div>

        <div className="manage-stats">
          <div className="stat-card">
            <h3>Total Organizations</h3>
            <p className="stat-value">{organizations.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Members</h3>
            <p className="stat-value">
              {organizations.reduce((acc, org) => acc + org.members, 0)}
            </p>
          </div>
          <div className="stat-card">
            <h3>Active Projects</h3>
            <p className="stat-value">
              {organizations.reduce((acc, org) => acc + org.projects, 0)}
            </p>
          </div>
        </div>

        <div className="organizations-grid">
          {organizations
            .filter((org) =>
              org.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((org) => (
              <div key={org.id} className="organization-card">
                <div className="org-header">
                  <GroupIcon className="org-icon" />
                  <h2>{org.name}</h2>
                </div>
                <p className="org-description">{org.description}</p>
                <div className="org-details">
                  <div className="detail-item">
                    <strong>Type:</strong> {org.type}
                  </div>
                  <div className="detail-item">
                    <strong>Members:</strong> {org.members}
                  </div>
                  <div className="detail-item">
                    <strong>Projects:</strong> {org.projects}
                  </div>
                  <div className="detail-item">
                    <strong>Created:</strong>{" "}
                    {new Date(org.created).toLocaleDateString()}
                  </div>
                </div>
                <div className="org-actions">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setSelectedOrg(org);
                      setShowEditModal(true);
                    }}
                  >
                    <EditIcon /> Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      setSelectedOrg(org);
                      setShowDeleteModal(true);
                    }}
                  >
                    <DeleteIcon /> Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Create Organization Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Create Organization</h2>
              <CloseIcon
                className="close-icon"
                onClick={() => setShowCreateModal(false)}
              />
            </div>
            <form onSubmit={handleCreateSubmit}>
              <div className="form-group">
                <label>Organization Name</label>
                <input
                  type="text"
                  required
                  value={newOrg.name}
                  onChange={(e) =>
                    setNewOrg({ ...newOrg, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  required
                  value={newOrg.description}
                  onChange={(e) =>
                    setNewOrg({ ...newOrg, description: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <select
                  value={newOrg.type}
                  onChange={(e) =>
                    setNewOrg({ ...newOrg, type: e.target.value })
                  }
                >
                  <option value="business">Business</option>
                  <option value="agency">Agency</option>
                  <option value="nonprofit">Non-Profit</option>
                </select>
              </div>
              <button type="submit" className="submit-btn">
                Create Organization
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedOrg && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Edit Organization</h2>
              <CloseIcon
                className="close-icon"
                onClick={() => setShowEditModal(false)}
              />
            </div>
            <form onSubmit={handleEditSubmit}>
              {/* Similar form fields as create modal */}
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedOrg && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Delete Organization</h2>
              <CloseIcon
                className="close-icon"
                onClick={() => setShowDeleteModal(false)}
              />
            </div>
            <div className="delete-confirmation">
              <p>
                Are you sure you want to delete{" "}
                <strong>{selectedOrg.name}</strong>? This action cannot be
                undone.
              </p>
              <div className="delete-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </button>
                <button className="confirm-delete-btn" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageOrganizations;
