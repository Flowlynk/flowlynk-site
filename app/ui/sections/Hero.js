export default function Hero() {
  return (
    <section className="section" style={{ borderTop: "none", paddingTop: 56 }} aria-label="Hero">
      <div className="container">
        <div className="badge">Automazione aziendale semplificata</div>

        <h1 className="h1">
          Automazioni intelligenti per aziende che vogliono{" "}
          <span style={{ color: "var(--accent)" }}>lavorare meglio</span>, non di piu.
        </h1>

        <p className="lead">
          Flowlynk aiuta le imprese a gestire prenotazioni, clienti e comunicazioni in modo automatico, riducendo tempo perso,
          errori e costi operativi.
        </p>

        <div className="btnRow">
          <a className="btn btnPrimary" href="/prenota-demo" aria-label="Richiedi una demo">
            Richiedi una demo
          </a>
          <a className="btn" href="/#come-funziona" aria-label="Scopri come funziona">
            Scopri come funziona
          </a>
        </div>

        <div style={{ marginTop: 26 }} className="kicker">
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 99,
              background: "var(--accent)",
              display: "inline-block",
            }}
            aria-hidden="true"
          />
          <span>Non vendiamo software. Costruiamo sistemi che lavorano per te.</span>
        </div>
      </div>
    </section>
  );
}
