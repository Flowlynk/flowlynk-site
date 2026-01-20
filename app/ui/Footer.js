export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footerRow">
          <div>
            <div className="logo" style={{ marginBottom: 8 }}>
              Flow<span>lynk</span>
            </div>
            <div>Automazioni intelligenti per aziende.</div>
          </div>

          <div>
            <div style={{ fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
              Contatti
            </div>
            <div>Email: info@flowlynk.com</div>
            <div>Telefono: +39 000 000 0000</div>
          </div>

          <div>
            <div style={{ fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
              Note
            </div>
            <div>© {year} Flowlynk. Tutti i diritti riservati.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
