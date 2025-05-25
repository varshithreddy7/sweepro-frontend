import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "1rem", background: "#f5f5f5" }}>
        <h1>Sweepro Home</h1>
      </header>
      <main style={{ flex: 1, padding: "2rem" }}>
        {children}
      </main>
      <footer style={{ padding: "1rem", background: "#f5f5f5", textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Sweepro
      </footer>
    </div>
  );
}