export default function HowItWorks() {
  return (
    <section id="come-funziona" className="section" aria-label="Come funziona">
      <div className="container">
        <h2 className="h2">Come funziona</h2>
        <p className="lead">
          Un flusso semplice: il cliente prenota, l’automazione organizza, tu lavori senza interruzioni.
        </p>

        <div className="grid grid-3" style={{ marginTop: 18 }}>
          <div className="card">
            <h3>1. Il cliente prenota</h3>
            <ul>
              <li>Dal tuo sito</li>
              <li>Da Google Calendar</li>
              <li>Da link personalizzato</li>
            </ul>
          </div>

          <div className="card">
            <h3>2. L’automazione lavora</h3>
            <ul>
              <li>I dati vengono raccolti</li>
              <li>Organizzati</li>
              <li>Puliti e salvati automaticamente</li>
            </ul>
          </div>

          <div className="card">
            <h3>3. Tu ti concentri sul lavoro</h3>
            <ul>
              <li>Meno chiamate</li>
              <li>Zero caos</li>
              <li>Tutto sotto controllo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
