import "./globals.css";

export const metadata = {
  title: "Flowlynk | Automazioni intelligenti per aziende",
  description:
    "Flowlynk aiuta le imprese a gestire prenotazioni, clienti e comunicazioni in modo automatico, riducendo tempo perso, errori e costi operativi.",
  openGraph: {
    title: "Flowlynk | Automazioni intelligenti per aziende",
    description: "Non vendiamo software. Costruiamo sistemi che lavorano per te.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
