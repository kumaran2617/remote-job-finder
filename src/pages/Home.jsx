import { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import FilterSidebar from "../components/FilterSidebar";
import { useJobs } from "../context/JobsContext";
import "./pages.css";

export default function Home() {
  const { jobs } = useJobs();
  const [query, setQuery] = useState("");
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("All");
  const [colorTheme, setColorTheme] = useState("default");

  const locations = useMemo(
    () => [...new Set(jobs.map((job) => job.location))].sort(),
    [jobs]
  );

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return jobs.filter((job) => {
      const matchesType = jobType === "All" || job.type === jobType;
      const matchesLocation = location === "All" || job.location === location;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [job.title, job.company, job.location, ...(job.skills || [])]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesType && matchesLocation && matchesQuery;
    });
  }, [jobs, jobType, location, query]);

  return (
    <main className="page">
      <header className="hero">
        <h1>Find Remote Jobs and Work from Anywhere</h1>
        <p>Search by role, company, location, or skill and save jobs to review later.</p>
        <SearchBar value={query} onChange={setQuery} />
      </header>

      <section className="layout">
        <FilterSidebar
          jobType={jobType}
          onJobTypeChange={setJobType}
          location={location}
          onLocationChange={setLocation}
          locations={locations}
          colorTheme={colorTheme}
          onColorThemeChange={setColorTheme}
        />

        <div className="results">
          {filteredJobs.length ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} colorTheme={colorTheme} />)
          ) : (
            <div className="empty-state">
              <h3>No jobs found</h3>
              <p>Try a different keyword or change the selected job type.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
