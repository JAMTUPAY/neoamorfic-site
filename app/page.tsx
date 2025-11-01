// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* STICKY HEADER */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#0a0a0f",
          color: "#fff",
        }}
      >
        <div
          className="container topbar"
          style={{
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          {/* LOGO */}
          <a
            href="/"
            aria-label="NeoAmorfic — home"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              textTransform: "lowercase",
              fontSize: 24,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            neoamorfic<span style={{ fontSize: 12, verticalAlign: "super" }}>™</span>
          </a>

          {/* PATENTS */}
          <nav
            className="patents"
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", gap: 6, alignItems: "baseline", color: "#fff" }}>
              <strong style={{ fontSize: 13 }}>QEIv15™</strong>
              <small style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>
                Patent Pending GB2518252.8
              </small>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "baseline", color: "#fff" }}>
              <strong style={{ fontSize: 13 }}>X-40 Quantum Attention™</strong>
              <small style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>
                Patent Pending GB2518264.3
              </small>
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "baseline", color: "#fff" }}>
              <strong style={{ fontSize: 13 }}>QaaFS™</strong>
              <small style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>
                Patent Pending GB2518267.6
              </small>
            </div>
          </nav>
        </div>
      </div>

      {/* HERO — charcoal top → light bottom, tighter height */}
      <section
        className="hero"
        style={{
          background: "linear-gradient(180deg, #0a0a0f 0%, #e8e8e8 60%, #ffffff 100%)",
          paddingTop: 45,
          paddingBottom: 44,
          color: "#fff",
          textAlign: "center",
          minHeight: "70vh",
        }}
      >
        <div
          className="hero-inner"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            The Law of Thought.
          </h1>

          <p
            className="hero-sub"
            style={{
              maxWidth: 760,
              margin: "0 auto 28px",
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Building the quantum entropy intelligence that governs energy, thought, and time.  
            We replace probabilistic guesswork with physical law—systems that stabilise themselves by design.
          </p>

          {/* DISCOVER BUTTON — black w/ white text */}
          <a
            href="#vision"
            style={{
              borderRadius: 999,
              background: "#000",
              color: "#fff",
              padding: "10px 26px",
              textDecoration: "none",
              fontWeight: 500,
              display: "inline-block",
              marginTop: 8,
            }}
          >
            Discover QEIv15™
          </a>

          <div style={{ marginTop: 20, color: "#000" }}>Coming soon</div>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        style={{
          padding: "40px 16px 64px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <div style={{ display: "inline-block", fontSize: 12, letterSpacing: "0.08em" }}>
          vision
        </div>
        <h2
          style={{
            margin: "12px 0 18px",
            fontSize: 30,
            letterSpacing: "-0.01em",
            fontWeight: 600,
          }}
        >
          When probability ends, physics begins.
        </h2>
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            color: "#333",
            lineHeight: 1.75,
            fontSize: 16,
          }}
        >
          <p style={{ marginTop: 10 }}>
            The prevailing model of artificial intelligence is statistical at its core: it predicts
            what is likely and scales that habit with ever larger datasets. The cost is familiar:
            rising energy, drifting coherence and fragile behaviour under load.
          </p>
          <p style={{ marginTop: 10 }}>
            NeoAmorfic™ takes the alternative route. QEIv15™ treats computation as a physical
            process, balancing informational entropy with energetic flow. Where probability attempts
            to fit the past, physics governs the present—yielding systems that are ordered,
            efficient and dependable at scale.
          </p>
          <p style={{ marginTop: 10 }}>
            The outcome is practical: stable latency per stream, improved time–energy efficiency and
            predictable behaviour across substrates. Not a new metaphor for intelligence, but a law:
            computation that obeys thermodynamics.
          </p>
        </div>
      </section>

      {/* MOBILE HEADER FIXES */}
      <style>{`
        @media (max-width: 640px) {
          .topbar {
            flex-direction: column !important;
            align-items: flex-start !important;
            height: auto !important;
            padding-top: 8px !important;
            padding-bottom: 8px !important;
            padding-left: 12px !important; /* add left padding for header elements */
          }
          .patents {
            width: 100% !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            padding-left: 12px !important; /* ensure consistent padding under logo */
          }
        }
      `}</style>
    </main>
  );
}
