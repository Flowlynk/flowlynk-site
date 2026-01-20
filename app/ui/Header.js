export default function Header() {
  return (
    <header className="header" aria-label="Intestazione principale">
      <div className="container">
        <div className="headerInner">
          <a className="logo" href="/" aria-label="Flowlynk home">
            Flow<span>lynk</span>
          </a>

          <nav className="nav" aria-label="Navigazione principale">
            <div className="navLinks nav">
              <a href="/#come-funziona">Come funziona</a>
              <a href="/#servizi">Servizi</a>
              <a href="/#perche">Perche Flowlynk</a>
              <a href="/#chi-siamo">Chi siamo</a>
              <a href="/#contatti">Contatti</a>
            </div>
            <a className="btn btnPrimary" href="/prenota-demo" aria-label="Richiedi una demo">
              Richiedi una demo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
