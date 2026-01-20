export default function About() {
  return (
    <section id="chi-siamo" className="section" aria-label="Chi siamo">
      <div className="container">
        <h2 className="h2">Chi siamo</h2>
        <p className="lead">
          Flowlynk nasce con un obiettivo semplice: eliminare il lavoro ripetitivo dalle aziende, usando l’automazione in modo intelligente.
        </p>

        <div className="grid grid-3" style={{ marginTop: 18 }}>
          <div className="card">
            <h3>Crescita</h3>
            <p>Processi piu solidi per aumentare capacita operativa senza aumentare caos.</p>
          </div>
          <div className="card">
            <h3>Ordine</h3>
            <p>Dati puliti e flussi chiari: meno errori, meno rimbalzi, piu controllo.</p>
          </div>
          <div className="card">
            <h3>Tecnologia utile</h3>
            <p>La tecnologia come leva: integra strumenti gia presenti, senza complicare.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
