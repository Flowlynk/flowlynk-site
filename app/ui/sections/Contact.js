"use client";

import { useMemo, useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({ nome: "", email: "", azienda: "", messaggio: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const emailOk = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
  }, [values.email]);

  function onChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    const nome = values.nome.trim();
    const email = values.email.trim();
    const messaggio = values.messaggio.trim();

    if (!nome || !email || !messaggio) {
      setError("Compila almeno nome, email e messaggio.");
      return;
    }
    if (!emailOk) {
      setError("Inserisci un’email valida.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <section id="contatti" className="section" aria-label="Contatti">
      <div className="container">
        <h2 className="h2">Contatti</h2>
        <p className="lead">
          Raccontaci come lavori oggi e dove perdi tempo: ti proponiamo un flusso automatico semplice e misurabile.
        </p>

        <div className="grid grid-3" style={{ marginTop: 18, alignItems: "start" }}>
          <div className="card" style={{ gridColumn: "span 1" }}>
            <h3>Contatti diretti</h3>
            <p style={{ marginTop: 8 }}>
              Email: <strong style={{ color: "var(--fg)" }}>info@flowlynk.com</strong>
              <br />
              Telefono: <strong style={{ color: "var(--fg)" }}>+39 000 000 0000</strong>
            </p>
            <p className="helper">Sostituisci questi dati con i tuoi contatti reali quando sei pronto.</p>
          </div>

          <div className="card" style={{ gridColumn: "span 2" }}>
            {!submitted ? (
              <form onSubmit={onSubmit} aria-label="Modulo contatto">
                <div className="formGrid">
                  <div>
                    <label htmlFor="nome">Nome</label>
                    <input className="input" id="nome" name="nome" value={values.nome} onChange={onChange} placeholder="Il tuo nome" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input className="input" id="email" name="email" value={values.email} onChange={onChange} placeholder="nome@azienda.com" />
                  </div>
                  <div>
                    <label htmlFor="azienda">Azienda (opzionale)</label>
                    <input className="input" id="azienda" name="azienda" value={values.azienda} onChange={onChange} placeholder="Nome azienda" />
                  </div>
                  <div>
                    <label htmlFor="messaggio">Messaggio</label>
                    <input className="input" id="messaggio" name="messaggio" value={values.messaggio} onChange={onChange} placeholder="Es. Gestiamo molte prenotazioni e vogliamo ridurre telefonate..." />
                  </div>
                </div>

                {error ? (
                  <div className="alert error" style={{ marginTop: 12 }}>
                    {error}
                  </div>
                ) : null}

                <div className="btnRow" style={{ marginTop: 12 }}>
                  <button type="submit" className="btn btnPrimary" aria-label="Invia richiesta">
                    Invia
                  </button>
                  <a className="btn" href="/prenota-demo" aria-label="Vai alla pagina prenota demo">
                    Prenota una demo
                  </a>
                </div>

                <div className="helper">
                  Nota: al momento il form mostra un messaggio di successo. Possiamo collegarlo a email/WhatsApp quando vuoi.
                </div>
              </form>
            ) : (
              <div className="alert" role="status" aria-live="polite">
                Richiesta inviata correttamente. Ti risponderemo al piu presto.
                <div className="btnRow" style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => {
                      setSubmitted(false);
                      setValues({ nome: "", email: "", azienda: "", messaggio: "" });
                    }}
                  >
                    Invia un’altra richiesta
                  </button>
                  <a className="btn btnPrimary" href="/prenota-demo">
                    Prenota una demo
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
