import { Incident } from "../types/incident";
import "./Statistics.css";

interface StatisticsProps {
  incidents: Incident[];
}

export const Statistics = ({ incidents }: StatisticsProps) => {
  const totalIncidents = incidents.length;
  const highSeverityCount = incidents.filter(
    (i) => i.severity === "High",
  ).length;
  const mediumSeverityCount = incidents.filter(
    (i) => i.severity === "Medium",
  ).length;
  const lowSeverityCount = incidents.filter((i) => i.severity === "Low").length;

  const recentIncidents = incidents
    .sort(
      (a, b) =>
        new Date(b.reportedDate).getTime() - new Date(a.reportedDate).getTime(),
    )
    .slice(0, 5);

  return (
    <div className="statistics">
      <h2>Incident Analytics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Incidents</h3>
          <p className="stat-number">{totalIncidents}</p>
        </div>
        <div className="stat-card high">
          <h3>High Severity</h3>
          <p className="stat-number">{highSeverityCount}</p>
        </div>
        <div className="stat-card medium">
          <h3>Medium Severity</h3>
          <p className="stat-number">{mediumSeverityCount}</p>
        </div>
        <div className="stat-card low">
          <h3>Low Severity</h3>
          <p className="stat-number">{lowSeverityCount}</p>
        </div>
      </div>

      <div className="recent-incidents">
        <h3>Recent Incidents</h3>
        <div className="recent-list">
          {recentIncidents.map((incident) => (
            <div key={incident._id} className="recent-item">
              <span
                className={`severity-dot ${incident.severity.toLowerCase()}`}
              />
              <span className="recent-title">{incident.title}</span>
              <span className="recent-date">
                {new Date(incident.reportedDate).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
