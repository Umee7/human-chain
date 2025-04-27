// Type definitions for AI safety incidents

// Severity levels for incidents
export type Severity = "Low" | "Medium" | "High";

// Sort order options for incident list
export type SortOrder = "newest" | "oldest";

// Main incident interface
export interface Incident {
  id: string; // Unique identifier for the incident
  title: string; // Short description of the incident
  description: string; // Detailed description of what happened
  severity: Severity; // Impact level of the incident
  reportedDate: string; // ISO timestamp of when the incident was reported
}
