export default function WhyFlowlynk() {
  const items = [
    "Nessun software complicato",
    "Nessun cambiamento drastico",
    "Funziona con strumenti gia usati",
    "Riduce errori umani",
    "Risparmia tempo ogni giorno",
    "Scalabile nel tempo",
  ];

  return (
    <section id="perche" className="section" aria-label="Perche Flowlynk">
      <div className="container">
        <h2 className="h2">Perche Flowlynk</h2>
        <p className="lead">Automazioni pragmatiche: meno attrito operativo, piu controllo, piu risultati.</p>

        <div className="grid grid-3" style={{ marginTop: 18 }}>
          {items.map((t) => (
            <div className="card" key={t}>
              <h3 style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 999,
                    background: "rgba(31,102,255,0.12)",
                    border: "1px solid rgba(31,102,255,0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    fontWeight: 900,
                  }}
                >
                  ✓
                </span>
                {t}
              </h3>
              <p style={{ marginTop: 8 }}>
                Progettato per ridurre attivita ripetitive e standardizzare la gestione delle richieste.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
