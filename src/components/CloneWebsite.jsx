import { useState } from "react";

const movies = [
  { id: 1, title: "Stranger Things", color: "#1a0535" },
  { id: 2, title: "The Crown", color: "#2c1a00" },
  { id: 3, title: "Wednesday", color: "#0d0020" },
  { id: 4, title: "Ozark", color: "#001525" },
  { id: 5, title: "Money Heist", color: "#2a0000" },
  { id: 6, title: "Dark", color: "#051005" },
  { id: 7, title: "Bridgerton", color: "#200030" },
  { id: 8, title: "Black Mirror", color: "#111" },
];

const rows = [
  "Trending Now",
  "Continue Watching",
  "Top Picks For You",
  "Netflix Originals",
];

export default function Netflix() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ background: "#141414", minHeight: "100vh", fontFamily: "Arial, sans-serif", color: "#fff" }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 40px", background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)",
        position: "sticky", top: 0, zIndex: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <span style={{ color: "#e50914", fontSize: 32, fontWeight: 900, letterSpacing: 2 }}>NETFLIX</span>
          {["Home", "TV Shows", "Movies", "My List"].map(l => (
            <span key={l} style={{ fontSize: 14, color: "#ccc", cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span style={{ fontSize: 20, cursor: "pointer" }}>🔍</span>
          <span style={{ fontSize: 20, cursor: "pointer" }}>🔔</span>
          <div style={{
            width: 32, height: 32, borderRadius: 4,
            background: "#e50914", display: "flex", alignItems: "center",
            justifyContent: "center", fontWeight: 700, cursor: "pointer"
          }}>U</div>
        </div>
      </div>
      <div style={{
        height: 480, background: "linear-gradient(135deg, #1a0010 0%, #0a0a2a 60%, #000 100%)",
        display: "flex", alignItems: "flex-end", padding: "0 40px 48px",
        marginTop: -70, position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, #141414 0%, transparent 60%)"
        }}/>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 500 }}>
          <div style={{
            background: "#e50914", display: "inline-block",
            fontSize: 11, fontWeight: 700, letterSpacing: 2,
            padding: "4px 10px", borderRadius: 2, marginBottom: 14
          }}>TRENDING #1</div>
          <h1 style={{ fontSize: 52, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.1 }}>
            Stranger Things
          </h1>
          <p style={{ color: "#bbb", fontSize: 15, margin: "0 0 24px", lineHeight: 1.6 }}>
            A young boy vanishes and a small town uncovers a mystery of secret experiments and supernatural forces.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{
              background: "#fff", color: "#000", border: "none",
              padding: "11px 28px", borderRadius: 4, fontSize: 15,
              fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8
            }}>▶ Play</button>
            <button style={{
              background: "rgba(255,255,255,0.15)", color: "#fff",
              border: "none", padding: "11px 24px", borderRadius: 4,
              fontSize: 15, fontWeight: 600, cursor: "pointer"
            }}>ℹ More Info</button>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 0 40px", marginTop: -8 }}>
        {rows.map(row => (
          <div key={row} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, padding: "0 40px", margin: "0 0 12px", color: "#e5e5e5" }}>
              {row}
            </h2>
            <div style={{ display: "flex", gap: 8, padding: "0 40px", overflowX: "auto" }}>
              {movies.map(m => (
                <div
                  key={m.id}
                  onMouseEnter={() => setHovered(`${row}-${m.id}`)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    minWidth: 200, height: 112, borderRadius: 6,
                    background: m.color, flexShrink: 0, cursor: "pointer",
                    position: "relative", overflow: "hidden",
                    transform: hovered === `${row}-${m.id}` ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.2s ease",
                    boxShadow: hovered === `${row}-${m.id}` ? "0 8px 24px rgba(0,0,0,0.7)" : "none"
                  }}
                >
                  <div style={{
                    position: "absolute", top: "20%", right: "20%",
                    width: 80, height: 80, borderRadius: "50%",
                    background: "rgba(229,9,20,0.15)", filter: "blur(20px)"
                  }}/>
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                    padding: "24px 10px 8px"
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700 }}>{m.title}</div>
                  </div>
                  {hovered === `${row}-${m.id}` && (
                    <div style={{
                      position: "absolute", inset: 0,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: "50%",
                        border: "2px solid #fff", display: "flex",
                        alignItems: "center", justifyContent: "center",
                        fontSize: 13, paddingLeft: 2
                      }}>▶</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

     
      <div style={{ borderTop: "1px solid #333", padding: "32px 40px", color: "#666", fontSize: 13 }}>
        <div style={{ color: "#e50914", fontWeight: 900, fontSize: 22, marginBottom: 20 }}>NETFLIX</div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
          {["FAQ", "Help Centre", "Account", "Media Centre", "Jobs", "Terms of Use", "Privacy", "Contact Us"].map(l => (
            <span key={l} style={{ cursor: "pointer" }}>{l}</span>
          ))}
        </div>
        <div>© 2024 Netflix Clone</div>
      </div>
    </div>
  );
}