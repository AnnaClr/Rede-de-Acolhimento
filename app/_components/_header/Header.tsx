import Link from "next/link";

export default function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
            <Link className="brand" href="/">
                <span className="brand-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0b0912"><path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/></svg>
                </span>
                <span>Espaços Acolhedores</span>
            </Link>
            <button className="menu-toggle" aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
            <nav className="main-nav" id="menu-principal" aria-label="Navegação principal">
                <Link className="nav-link" href="/">Início</Link>
                <Link className="nav-link" href="/explore">Explorar</Link>
                <Link className="nav-link" href="/map">Mapa</Link>
                <Link className="nav-link" href="/forum">Fórum</Link>
            </nav>
            <div className="header-actions">
                <button className="account-btn" type="button">
                <span className="avatar" aria-hidden="true">?</span>
                <span className="account-label">Entrar</span>
                </button>
            </div>
            </div>
        </header>
    );
}