import Link from "next/link";

export default function Main() {
  return (
    <main id="conteudo" className="container section map-page">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Mapa</span>
      </div>
      <h1>Mapa</h1>

      <div className="map-layout">
        <div
          className="map-canvas"
          id="mapa-canvas"
          aria-label="Visualização ilustrativa do mapa"
        >
          <div className="map-grid-lines" aria-hidden="true" />
          <aside className="map-status" aria-labelledby="map-status-title">
            <span className="map-status-label">Em desenvolvimento</span>
            <h2 id="map-status-title">Estamos preparando este mapa</h2>
            <p>
              O mapa ainda não está disponível. Por enquanto, esta é uma
              visualização ilustrativa dos próximos recursos.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
