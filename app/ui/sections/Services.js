export default function Services() {
  return (
    <section id="servizi" className="section" aria-label="Servizi">
      <div className="container">
        <h2 className="h2">Servizi</h2>
        <p className="lead">
          Automazioni progettate per ridurre lavoro ripetitivo e aumentare affidabilita operativa.
        </p>

        <div className="grid grid-4" style={{ marginTop: 18 }}>
          <div className="card">
            <h3>Automazione Prenotazioni</h3>
            <ul>
              <li>Raccoglie prenotazioni</li>
              <li>Gestisce orari e disponibilita</li>
              <li>Evita sovrapposizioni</li>
              <li>Registra i clienti in modo ordinato</li>
            </ul>
          </div>

          <div className="card">
            <h3>Gestione Clienti (Mini-CRM)</h3>
            <ul>
              <li>Nome</li>
              <li>Email</li>
              <li>Telefono</li>
              <li>Servizio richiesto + note</li>
              <li>Nessun inserimento manuale</li>
            </ul>
          </div>

          <div className="card">
            <h3>Integrazione strumenti</h3>
            <ul>
              <li>Google Calendar</li>
              <li>Email</li>
              <li>WhatsApp / SMS</li>
              <li>Fogli di lavoro / CRM</li>
            </ul>
          </div>

          <div className="card">
            <h3>Soluzioni personalizzate</h3>
            <ul>
              <li>Su misura sui tuoi processi</li>
              <li>Progressive, senza stravolgimenti</li>
              <li>Scalabili nel tempo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
