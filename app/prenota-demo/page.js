import Header from "../ui/Header";
import Footer from "../ui/Footer";

export const metadata = {
  title: "Prenota una demo | Flowlynk",
  description:
    "Prenota una demo di Flowlynk. Pagina pronta per integrare un sistema di appuntamenti.",
};

export default function BookDemo() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <span className="badge">Prenota una demo</span>
          <h1 className="h2" style={{ marginTop: 14 }}>
            Scegli un orario in pochi secondi
          </h1>
          <p className="lead">
            Questa pagina e pronta per integrare un sistema di appuntamenti
            (Calendly, Google Calendar, o soluzione personalizzata).
          </p>

          <div className="card" style={{ marginTop: 18 }}>
            <h3>Placeholder integrazione</h3>
            <p>Inserire qui il widget di prenotazione oppure un calendario integrato.</p>
          </div>

          <div className="btnRow" style={{ marginTop: 18 }}>
            <a className="btn btnPrimary" href="/">
              Torna alla homepage
            </a>
            <a className="btn" href="/#contatti">
              Contattaci
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
