import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Severity, SortOrder } from "../types/incident";
import { Statistics } from "./Statistics";
import "./IncidentDashboard.css";

export const IncidentDashboard = () => {
  const incidents = useQuery(api.incidents.get) ?? [];
  const addIncident = useMutation(api.incidents.add);
  const removeIncident = useMutation(api.incidents.remove);

  const [selectedSeverity, setSelectedSeverity] = useState<Severity | "All">(
    "All",
  );
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [expandedIncidentId, setExpandedIncidentId] = useState<string | null>(
    null,
  );
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null); // ← added

  const [newIncident, setNewIncident] = useState<{
    title: string;
    description: string;
    severity: Severity;
  }>({
    title: "",
    description: "",
    severity: "Low",
  });

  const filteredIncidents = incidents
    .filter((incident) => {
      const matchesSeverity =
        selectedSeverity === "All" || incident.severity === selectedSeverity;
      const matchesSearch =
        searchQuery === "" ||
        incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        incident.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSeverity && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.reportedDate).getTime();
      const dateB = new Date(b.reportedDate).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addIncident({
      ...newIncident,
      reportedDate: new Date().toISOString(),
    });
    setNewIncident({ title: "", description: "", severity: "Low" });
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    // ← updated
    if (confirmDeleteId === id) {
      removeIncident({ id: id as any });
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setNewIncident({ title: "", description: "", severity: "Low" });
  };

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="dashboard">
      <h1>AI Safety Incident Dashboard</h1>
      <Statistics incidents={incidents} />
      <div className="controls">
        <div className="search-controls">
          <input
            type="text"
            placeholder="Search incidents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-controls">
          <label>
            Filter by Severity:
            <select
              value={selectedSeverity}
              onChange={(e) =>
                setSelectedSeverity(e.target.value as Severity | "All")
              }
            >
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
        </div>
        <div className="sort-controls">
          <label>
            Sort by Date:
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </label>
        </div>
        <button
          className="toggle-form-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Report New Incident"}
        </button>
      </div>

      <div className={`dashboard-content ${showForm ? "blurred" : ""}`}>
        <div className="incidents-list">
          {filteredIncidents.map((incident) => (
            <div key={incident._id} className="incident-card">
              <div className="incident-header">
                <h3>{incident.title}</h3>
                <span
                  className={`severity-badge ${incident.severity.toLowerCase()}`}
                >
                  {incident.severity}
                </span>
              </div>
              <div className="incident-meta">
                <span>
                  Reported:{" "}
                  {new Date(incident.reportedDate).toLocaleDateString()}
                </span>
                <div className="incident-actions">
                  <button
                    onClick={() =>
                      setExpandedIncidentId(
                        expandedIncidentId === incident._id
                          ? null
                          : incident._id,
                      )
                    }
                  >
                    {expandedIncidentId === incident._id
                      ? "Hide Details"
                      : "View Details"}
                  </button>
                  <button // ← updated
                    className={`delete-btn ${confirmDeleteId === incident._id ? "confirm" : ""}`}
                    onClick={() => handleDelete(incident._id)}
                  >
                    {confirmDeleteId === incident._id ? "Confirm?" : "Delete"}
                  </button>
                </div>
              </div>
              {expandedIncidentId === incident._id && (
                <div className="incident-description">
                  <p>{incident.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="form-overlay" onClick={handleCloseForm}>
          <form
            onSubmit={handleSubmit}
            className="incident-form"
            onClick={handleFormClick}
          >
            <button
              type="button"
              className="close-form-btn"
              onClick={handleCloseForm}
              aria-label="Close form"
            >
              ×
            </button>
            <h2>Report New Incident</h2>
            <div className="form-group">
              <label>
                Title:
                <input
                  type="text"
                  value={newIncident.title}
                  onChange={(e) =>
                    setNewIncident({ ...newIncident, title: e.target.value })
                  }
                  required
                  placeholder="Enter incident title"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Description:
                <textarea
                  value={newIncident.description}
                  onChange={(e) =>
                    setNewIncident({
                      ...newIncident,
                      description: e.target.value,
                    })
                  }
                  required
                  placeholder="Describe the incident in detail"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Severity:
                <select
                  value={newIncident.severity}
                  onChange={(e) =>
                    setNewIncident({
                      ...newIncident,
                      severity: e.target.value as Severity,
                    })
                  }
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Submit Incident
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
