import "./global.css";

export const metadata = {
  title: "Videoteca Personale",
  description: "Catalogo dei miei film in Blu-ray e DVD",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <header>
          <h1>🎬 La mia videoteca</h1>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} - Tutti i diritti riservati
        </footer>
      </body>
    </html>
  );
}
