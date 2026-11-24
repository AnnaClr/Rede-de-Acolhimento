import Link from "next/link";
import ArticleList from "./_subcomponents/ArticleList";
import ArticleSection from "./_subcomponents/ArticleSection";

export default function Main() {
  return (
    <main id="conteudo" className="container section">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <Link href="/explore">Explorar</Link>
        <span className="sep">/</span>
        <span>Informações e Direitos</span>
      </div>

      <article className="article">
        <h1>Informações e Direitos</h1>
        <div className="article-meta">
          <span>Conteúdo editorial demonstrativo</span>
          <span>Última atualização: 18 de fevereiro de 2025</span>
        </div>

        <p>
          Este espaço reúne orientações gerais sobre direitos, proteção e acolhimento. Todo o
          conteúdo é <strong>demonstrativo</strong> e não substitui orientação jurídica, psicológica
          ou de serviços públicos oficiais.
        </p>

        <div className="callout">
          <strong>Importante:</strong> em situações de risco imediato, procure os canais oficiais de
          emergência da sua região. Os exemplos abaixo são ilustrativos.
        </div>

        <ArticleSection title="Direitos de pessoas LGBTQIA+">
          <p>
            A legislação brasileira garante direitos fundamentais a todas as pessoas, incluindo o
            reconhecimento da identidade de gênero, o uso do nome social em serviços públicos e a
            proteção contra discriminação. Este protótipo apresenta exemplos de como essas
            informações podem ser organizadas em uma plataforma comunitária.
          </p>
          <ArticleList
            items={[
              "Reconhecimento do nome social em órgãos públicos.",
              "Proteção contra práticas discriminatórias.",
              "Acesso a serviços de saúde com acolhimento adequado.",
            ]}
          />
        </ArticleSection>

        <ArticleSection title="Proteção de mulheres">
          <p>
            Redes de apoio, serviços especializados e canais de denúncia são fundamentais para o
            enfrentamento da violência. Em um cenário real, esta seção reuniria informações
            atualizadas de fontes oficiais.
          </p>
          <blockquote>
            Em caso de violência, busque apoio em serviços especializados e redes de confiança.
          </blockquote>
        </ArticleSection>

        <ArticleSection title="Canais de apoio e denúncia">
          <p>
            Os canais abaixo são <strong>exemplos demonstrativos</strong> e não correspondem a
            números reais.
          </p>
          <ArticleList
            items={[
              <>
                <strong>Canal A</strong> — exemplo de atendimento a mulheres.
              </>,
              <>
                <strong>Canal B</strong> — exemplo de apoio à população LGBTQIA+.
              </>,
              <>
                <strong>Canal C</strong> — exemplo de orientação jurídica.
              </>,
            ]}
          />
        </ArticleSection>

        <ArticleSection title="Fontes e links úteis">
          <p>
            Em uma versão real, esta seção listaria fontes oficiais, órgãos públicos e organizações
            reconhecidas. Neste protótipo, os links abaixo são apenas ilustrativos.
          </p>
          <ArticleList
            items={[
              <a key="portal" href="#">
                Exemplo de portal de direitos
              </a>,
              <a key="acolhimento" href="#">
                Exemplo de serviço de acolhimento
              </a>,
              <a key="rede" href="#">
                Exemplo de rede de apoio
              </a>,
            ]}
          />
        </ArticleSection>
      </article>
    </main>
  );
}
