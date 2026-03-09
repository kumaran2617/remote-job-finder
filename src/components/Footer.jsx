export default function Footer() {
  return (
    <footer
      style={{
        padding: "1.5rem",
        textAlign: "center",
        color: "#475569",
        fontWeight: 500,
      }}
    >
      (c) {new Date().getFullYear()} RemoteJobs | Built for remote hiring
    </footer>
  );
}
