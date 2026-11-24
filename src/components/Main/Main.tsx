import Link from "next/link";

export default function Main() {
  return (
    <main id="conteudo" className="home-page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>
              Encontre <span className="grad-text">acolhimento</span>, serviços
              e informação para seguir em frente.
            </h1>
            <p className="hero-lead">
              O Espaços Acolhedores aproxima pessoas de informações sobre
              serviços, organizações, ações culturais, eventos e direitos.
              Reunimos esses caminhos em um só lugar para apoiar pessoas
              LGBTQIA+, mulheres, familiares e toda a comunidade na busca por
              acolhimento e redes de apoio.
            </p>
            <div className="hero-actions">
              <Link href="/explore" className="btn btn-primary">
                Explorar espaços
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-ring" />
            <div className="hero-ring r2" />
            <div className="hero-ring r3" />
            <span className="hero-node n1" />
            <span className="hero-node n2" />
            <span className="hero-node n3" />
            <span className="hero-node n4" />
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="titulo-func">
        <div className="section-head">
          <div>
            <h2 id="titulo-func">Por onde começar</h2>
            <p>
              Funcionalidades pensadas para conectar pessoas e recursos da
              região.
            </p>
          </div>
        </div>
        <div className="grid grid-4">
          {[
            {
              link: "/explore",
              h3: "Encontrar acolhimento",
              p: "Descubra espaços de escuta, apoio e convivência.",
              span: "Explorar →",
            },
            {
              link: "/map",
              h3: "Explorar a região",
              p: "Consulte locais e pontos de referência no mapa.",
              span: "Abrir mapa →",
            },
            {
              link: "/explore?filtro=eventos",
              h3: "Descobrir eventos",
              p: "Encontros, oficinas e atividades comunitárias.",
              span: "Ver eventos →",
            },
            {
              link: "/rights",
              h3: "Conhecer seus direitos",
              p: "Orientações, canais de apoio e informações de proteção.",
              span: "Ler conteúdos →",
            },
          ].map((card) => (
            <Link
              className="card feature-card"
              href={card.link}
              key={card.link}
            >
              <span className="feature-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
                </svg>
              </span>
              <h3>{card.h3}</h3>
              <p>{card.p}</p>
              <span className="card-link">{card.span}</span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="section container purpose-section"
        id="proposta"
        aria-labelledby="titulo-prop"
      >
        <div className="purpose-intro">
          <span className="purpose-eyebrow">Sobre o projeto</span>
          <h2 id="titulo-prop">
            Informação organizada para aproximar pessoas e redes de apoio.
          </h2>
          <p>
            Informações sobre acolhimento costumam estar espalhadas por
            diferentes serviços e iniciativas. O projeto reúne esses temas em
            uma navegação simples para que cada pessoa possa conhecer opções,
            entender seus direitos e decidir quais caminhos fazem sentido para
            sua realidade.
          </p>
        </div>

        <div className="grid grid-3 purpose-grid">
          <article className="card purpose-item">
            <span className="purpose-number">01</span>
            <h3>Serviços e espaços</h3>
            <p>
              Conheça iniciativas de acolhimento, saúde, assistência, cultura e
              organizações, com filtros por categoria, município e
              palavra-chave.
            </p>
          </article>
          <article className="card purpose-item">
            <span className="purpose-number">02</span>
            <h3>Orientação para se localizar</h3>
            <p>
              Consulte o mapa para encontrar pontos de referência e veja
              detalhes como horário, público atendido e informações de cada
              iniciativa.
            </p>
          </article>
          <article className="card purpose-item">
            <span className="purpose-number">03</span>
            <h3>Direitos e fontes</h3>
            <p>
              Acesse resumos de leis, decisões e canais públicos de apoio, com
              links para consultar referências oficiais.
            </p>
          </article>
        </div>

        <section
          className="purpose-howto"
          aria-labelledby="purpose-howto-title"
        >
          <div className="purpose-howto-intro">
            <span className="purpose-eyebrow">Como usar</span>
            <h3 id="purpose-howto-title">
              Do primeiro passo à informação que você procura.
            </h3>
            <p>
              Navegue no seu ritmo: comece por um tema, refine as opções e abra
              os detalhes para encontrar informações de contato e fontes úteis.
            </p>
          </div>
          <ol className="purpose-steps">
            <li>
              <span>01</span>
              <div>
                <h4>Escolha por onde começar</h4>
                <p>
                  Explore os espaços, confira eventos ou consulte a página de
                  direitos.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h4>Encontre opções relevantes</h4>
                <p>
                  Use categorias, municípios e busca para chegar às informações
                  de interesse.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h4>Veja os próximos caminhos</h4>
                <p>
                  Consulte os detalhes, acesse o mapa e siga os links para
                  fontes e canais de apoio.
                </p>
              </div>
            </li>
          </ol>
        </section>
      </section>
    </main>
  );
}
