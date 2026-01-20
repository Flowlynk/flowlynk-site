export default function FinalCTA() {
  return (
    <section className="section dark" aria-label="Call to action finale">
      <div className="container">
        <span className="badge">Inizia oggi</span>
        <h2 className="h2" style={{ marginTop: 14, color: "#fff" }}>
          Automatizza il tuo flusso di lavoro.<br />Inizia oggi.
        </h2>
        <p className="lead" style={{ maxWidth: "70ch" }}>
          Sostituisci attivita ripetitive con automazioni affidabili: prenotazioni, contatti e comunicazioni senza interventi manuali.
        </p>

        <div className="btnRow">
          <a className="btn btnPrimary" href="/prenota-demo" aria-label="Prenota una call">
            Prenota una call
          </a>
          <a className="btn" href="/#contatti" aria-label="Contattaci">
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
}
