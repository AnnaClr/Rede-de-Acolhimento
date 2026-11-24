import Link from "next/link";
import { CANAIS_APOIO, FONTES_DIREITOS } from "@/src/lib/referencias";

const grupos = [
  {
    id: "lgbtqia",
    tema: "Comunidade LGBTQIA+",
    titulo: "Direitos e reconhecimento",
    descricao:
      "Decisões e normas brasileiras sobre igualdade, identidade de gênero e proteção contra discriminação.",
  },
  {
    id: "mulheres",
    tema: "Mulheres",
    titulo: "Proteção, autonomia e igualdade",
    descricao:
      "Leis e políticas de proteção contra violências e de promoção da igualdade para mulheres.",
  },
] as const;

export default function Main() {
  return (
    <main id="conteudo" className="container section rights-page">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Informações e Direitos</span>
      </div>

      <header className="rights-hero">
        <span className="rights-eyebrow">Guia de informação pública</span>
        <h1>Informações e Direitos</h1>
        <p>
          Um ponto de partida para conhecer direitos, leis e canais oficiais de
          apoio para pessoas LGBTQIA+ e mulheres.
        </p>
        <span className="rights-updated">
          Revisado em 15 de novembro de 2026
        </span>
      </header>

      <section className="rights-help" aria-labelledby="rights-help-title">
        <div className="rights-section-heading">
          <span className="rights-eyebrow">Precisa de apoio?</span>
          <h2 id="rights-help-title">Canais públicos de atendimento</h2>
          <p>
            Estes canais são gerais e independem dos espaços demonstrativos
            listados no Explorar.
          </p>
        </div>
        <div className="rights-contact-grid">
          {CANAIS_APOIO.map((canal) => (
            <article className="rights-contact-card" key={canal.id}>
              <span className="rights-contact-label">Canal oficial</span>
              <h3>{canal.nome}</h3>
              <p>{canal.descricao}</p>
              <div className="rights-contact-actions">
                <a
                  className="btn btn-primary btn-sm"
                  href={`tel:${canal.numero}`}
                >
                  Ligar {canal.numero}
                </a>
                {canal.whatsapp && (
                  <a
                    className="btn btn-secondary btn-sm"
                    href={`https://wa.me/${canal.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
                <a href={canal.url} target="_blank" rel="noreferrer">
                  Informações oficiais
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="rights-emergency">
          <strong>Emergência:</strong> o 190 é o telefone da Polícia Militar
          para situações que exigem atendimento policial imediato.{" "}
          <a href="tel:190">Ligar 190</a>
        </p>
      </section>

      <div className="rights-groups">
        {grupos.map((grupo) => (
          <section
            className="rights-group"
            id={grupo.id}
            aria-labelledby={`${grupo.id}-title`}
            key={grupo.id}
          >
            <div className="rights-section-heading">
              <span className="rights-eyebrow">{grupo.tema}</span>
              <h2 id={`${grupo.id}-title`}>{grupo.titulo}</h2>
              <p>{grupo.descricao}</p>
            </div>
            <div className="rights-law-grid">
              {FONTES_DIREITOS.filter((fonte) => fonte.grupo === grupo.id).map(
                (fonte) => (
                  <article className="rights-law-card" key={fonte.id}>
                    <span className="rights-law-number">
                      {fonte.referencia}
                    </span>
                    <h3>{fonte.titulo}</h3>
                    <p>{fonte.resumo}</p>
                    <a href={fonte.url} target="_blank" rel="noreferrer">
                      {fonte.rotuloFonte}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                    {fonte.urlFonteComplementar &&
                      fonte.rotuloFonteComplementar && (
                        <a
                          href={fonte.urlFonteComplementar}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {fonte.rotuloFonteComplementar}
                          <span aria-hidden="true"> ↗</span>
                        </a>
                      )}
                  </article>
                ),
              )}
            </div>
          </section>
        ))}
      </div>

      <aside className="rights-note">
        <h2>Como usar este guia</h2>
        <p>
          As explicações são resumos para orientação inicial, não substituem a
          leitura das normas, aconselhamento jurídico ou atendimento
          profissional. A aplicação de uma lei depende das circunstâncias de
          cada caso. Consulte as fontes oficiais vinculadas a cada tema.
        </p>
      </aside>
    </main>
  );
}
