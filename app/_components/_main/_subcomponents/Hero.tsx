

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div>
                <span className="hero-eyebrow"><span className="dot"></span> Rede comunitária • Iguatu e região</span>
                <h1>Encontre <span className="grad-text">acolhimento</span>, informação e conexões que importam.</h1>
                <p className="hero-lead">Um espaço digital para descobrir serviços, organizações, eventos e direitos voltados a pessoas LGBTQIA+, mulheres e toda a comunidade.</p>
                <div className="hero-actions">
                    <a href="explorar.html" className="btn btn-primary">Explorar espaços</a>
                    <a href="mapa.html" className="btn btn-secondary">Ver mapa</a>
                </div>
                <form className="searchbar" id="hero-search" role="search" style={{marginTop: "32px"}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    <label htmlFor="busca-hero" className="sr-only">Buscar espaços, serviços ou organizações</label>
                    <input id="busca-hero" type="search" placeholder="Buscar espaços, serviços, organizações…" />
                    <button className="btn btn-primary btn-sm" type="submit">Buscar</button>
                </form>
                </div>
                <div className="hero-visual" aria-hidden="true">
                <div className="hero-orb"></div>
                <div className="hero-ring"></div>
                <div className="hero-ring r2"></div>
                <div className="hero-ring r3"></div>
                <span className="hero-node n1"></span>
                <span className="hero-node n2"></span>
                <span className="hero-node n3"></span>
                <span className="hero-node n4"></span>
                <span className="hero-node n5"></span>
                </div>
            </div>
            </section>
    );
}