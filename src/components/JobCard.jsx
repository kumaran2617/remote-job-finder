import { Link } from "react-router-dom";
import "./jobcard.css";
import SaveButton from "./SaveButton";

const colorThemeMap = {
  ocean: {
    "--accent-a": "#2563eb",
    "--accent-b": "#06b6d4",
    "--accent-tint": "rgba(37, 99, 235, 0.18)",
    "--accent-ring": "rgba(14, 165, 233, 0.4)",
    "--card-bg-start": "#f4f9ff",
    "--card-bg-end": "#eaf5ff",
  },
  sunset: {
    "--accent-a": "#f97316",
    "--accent-b": "#ef4444",
    "--accent-tint": "rgba(249, 115, 22, 0.2)",
    "--accent-ring": "rgba(239, 68, 68, 0.35)",
    "--card-bg-start": "#fff7ed",
    "--card-bg-end": "#fff1f2",
  },
  mint: {
    "--accent-a": "#10b981",
    "--accent-b": "#14b8a6",
    "--accent-tint": "rgba(16, 185, 129, 0.18)",
    "--accent-ring": "rgba(20, 184, 166, 0.34)",
    "--card-bg-start": "#ecfdf5",
    "--card-bg-end": "#effcf9",
  },
  orchid: {
    "--accent-a": "#7c3aed",
    "--accent-b": "#ec4899",
    "--accent-tint": "rgba(124, 58, 237, 0.18)",
    "--accent-ring": "rgba(236, 72, 153, 0.34)",
    "--card-bg-start": "#faf5ff",
    "--card-bg-end": "#fdf2f8",
  },
  gold: {
    "--accent-a": "#f59e0b",
    "--accent-b": "#d97706",
    "--accent-tint": "rgba(245, 158, 11, 0.18)",
    "--accent-ring": "rgba(217, 119, 6, 0.34)",
    "--card-bg-start": "#fffbeb",
    "--card-bg-end": "#fff7ed",
  },
};

export default function JobCard({ job, colorTheme = "default" }) {
  const title = job.title?.toLowerCase() || "";
  const roleMap = [
    { key: "frontend", label: "Frontend", match: ["frontend", "ui"] },
    { key: "backend", label: "Backend", match: ["backend", "api"] },
    { key: "fullstack", label: "Full Stack", match: ["full stack"] },
    { key: "design", label: "Design", match: ["designer", "ux", "ui/ux"] },
    { key: "data", label: "Data", match: ["data", "analyst"] },
    { key: "devops", label: "DevOps", match: ["devops", "infra"] },
    { key: "mobile", label: "Mobile", match: ["mobile", "ios", "android"] },
    { key: "qa", label: "QA", match: ["qa", "test"] },
  ];

  const role = roleMap.find((item) => item.match.some((keyword) => title.includes(keyword))) || {
    key: "general",
    label: "Remote",
  };

  const className = [
    "jobcard",
    `role-${role.key}`,
  ]
    .filter(Boolean)
    .join(" ");

  const customTheme = colorTheme !== "default" ? colorThemeMap[colorTheme] : null;

  return (
    <article className={className} style={customTheme || undefined}>
      <div className="jobcard-header">
        <div className="logo-placeholder">{job.company?.[0] || "R"}</div>
        <div>
          <span className="role-pill">{role.label}</span>
          <h3>{job.title}</h3>
          <p className="company">
            {job.company} | {job.type}
          </p>
        </div>
        <div className="job-actions">
          <SaveButton jobId={job.id} />
        </div>
      </div>

      <p className="job-location">
        {job.location} | {job.salary || "Competitive salary"}
      </p>
      <p className="job-excerpt">{job.excerpt}</p>

      {job.skills?.length > 0 ? (
        <div className="job-tags">
          {job.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="job-tag">
              {skill}
            </span>
          ))}
        </div>
      ) : null}

      <div className="jobcard-footer">
        <span>{job.postedAt || "Recently posted"}</span>
        <Link to={`/jobs/${job.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </article>
  );
}
