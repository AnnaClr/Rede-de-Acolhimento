import Link from "next/link";
import FooterCol from "./_subcomponents/FooterCol";

export default function Footer() {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                    <Link className="brand" href="/" style={{ marginBottom: '12px' }}>
                        <span className="brand-mark" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#0b0912" strokeWidth="2">
                                <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/>
                            </svg>
                        </span>
                        <span>Espaços Acolhedores</span>
                    </Link>
                    <p className="small">Rede comunitária de informação e acolhimento. Projeto demonstrativo.</p>
                    </div>
                    <FooterCol title="Navegar" links={[
                        { href: "/explore", text: "Explorar" },
                        { href: "/map", text: "Mapa" },
                        { href: "/forum", text: "Fórum" }
                    ]} />
                    <FooterCol title="Seções" links={[
                        { href: "/eventos", text: "Eventos" },
                        { href: "/organizacoes", text: "Organizações" },
                        { href: "/direitos", text: "Direitos" }
                    ]} />
                    <FooterCol title="Institucional" links={[
                        { href: "/termos", text: "Termos de uso" },
                        { href: "/privacidade", text: "Privacidade" },
                        { href: "/login", text: "Entrar" }
                    ]} />
                </div>
                <div className="footer-bottom">
                    <span>© 2025 Projeto Espaços Acolhedores — protótipo demonstrativo.</span>
                    <span>Feito com cuidado para a comunidade.</span>
                </div>
            </div>
        </footer>
    );
}