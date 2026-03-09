import { useState } from "react";

function Icon({ children }) {
  return (
    <span className="filter-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        {children}
      </svg>
    </span>
  );
}

export default function FilterSidebar({
  jobType,
  onJobTypeChange,
  location,
  onLocationChange,
  locations,
  colorTheme,
  onColorThemeChange,
}) {
  const [expanded, setExpanded] = useState({
    availability: false,
    location: false,
    color: false,
  });

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const colorOptions = [
    { key: "default", label: "Default", dot: "linear-gradient(135deg, #64748b, #94a3b8)" },
    { key: "ocean", label: "Ocean", dot: "linear-gradient(135deg, #2563eb, #06b6d4)" },
    { key: "sunset", label: "Sunset", dot: "linear-gradient(135deg, #f97316, #ef4444)" },
    { key: "mint", label: "Mint", dot: "linear-gradient(135deg, #10b981, #14b8a6)" },
    { key: "orchid", label: "Orchid", dot: "linear-gradient(135deg, #7c3aed, #ec4899)" },
    { key: "gold", label: "Gold", dot: "linear-gradient(135deg, #f59e0b, #d97706)" },
  ];

  return (
    <aside className="filters" aria-label="Job filters">
      <div className="filter-toolbar">
        <div className="filter-chip">
          <Icon>
            <path d="M4 5h16M8 12h8M10 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </Icon>
          <span>Filter</span>
        </div>
        <div className="filter-chip search-chip">
          <Icon>
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
            <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </Icon>
          <span>Search Behance...</span>
        </div>
      </div>

      <div className="filter-list">
        <button type="button" className="filter-row" aria-expanded="false">
          <Icon>
            <path d="M5 5h5v5H5zM14 14h5v5h-5zM14 5l5 5M5 14l5 5" stroke="currentColor" strokeWidth="1.6" fill="none" />
          </Icon>
          <span>Creative Fields</span>
          <span className="row-chevron" aria-hidden="true">v</span>
        </button>

        <button
          type="button"
          className="filter-row"
          aria-expanded={expanded.availability}
          onClick={() => toggle("availability")}
        >
          <Icon>
            <circle cx="12" cy="12" r="6.8" stroke="currentColor" strokeWidth="1.6" fill="none" />
            <path d="M12 8v4l2.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </Icon>
          <span>Availability</span>
          <span className="row-chevron" aria-hidden="true">v</span>
        </button>
        {expanded.availability ? (
          <div className="filter-controls in-row">
            <select id="availability" value={jobType} onChange={(e) => onJobTypeChange(e.target.value)}>
              <option>All</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
            </select>
          </div>
        ) : null}

        <button
          type="button"
          className="filter-row"
          aria-expanded={expanded.location}
          onClick={() => toggle("location")}
        >
          <Icon>
            <path d="M12 20s6-5.6 6-10a6 6 0 10-12 0c0 4.4 6 10 6 10z" stroke="currentColor" strokeWidth="1.6" fill="none" />
            <circle cx="12" cy="10" r="2.2" fill="currentColor" />
          </Icon>
          <span>Location</span>
          <span className="row-chevron" aria-hidden="true">v</span>
        </button>
        {expanded.location ? (
          <div className="filter-controls in-row">
            <select id="location" value={location} onChange={(e) => onLocationChange(e.target.value)}>
              <option value="All">All</option>
              {locations.map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <button type="button" className="filter-row" aria-expanded="false">
          <Icon>
            <path d="M7 8l10 10M17 8L7 18M3 12h6M15 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </Icon>
          <span>Tools</span>
          <span className="row-chevron" aria-hidden="true">v</span>
        </button>

        <button
          type="button"
          className="filter-row"
          aria-expanded={expanded.color}
          onClick={() => toggle("color")}
        >
          <span className="color-wheel" aria-hidden="true" />
          <span>Color</span>
          <span className="row-chevron" aria-hidden="true">v</span>
        </button>
        {expanded.color ? (
          <div className="filter-controls in-row color-controls">
            <div className="color-options" role="listbox" aria-label="Select job card color theme">
              {colorOptions.map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className={`color-swatch ${colorTheme === option.key ? "active" : ""}`}
                  onClick={() => onColorThemeChange(option.key)}
                  aria-selected={colorTheme === option.key}
                  title={option.label}
                >
                  <span className="swatch-dot" style={{ background: option.dot }} />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
