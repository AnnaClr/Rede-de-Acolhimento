"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { DADOS, type Espaco } from "@/app/_lib/dados";

function espacoPorId(id: string | null): Espaco | null {
  return id ? DADOS.espacos.find((e) => e.id === id) ?? null : null;
}

export default function Main() {
  const searchParams = useSearchParams();
  const idInicial = searchParams.get("id");

  const [categoria, setCategoria] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [selecionado, setSelecionado] = useState<Espaco | null>(() => espacoPorId(idInicial));

  // Sincroniza a seleção quando o parâmetro ?id= muda (ex.: clique em "Ver no mapa").
  const [idSincronizado, setIdSincronizado] = useState(idInicial);
  if (idInicial !== idSincronizado) {
    setIdSincronizado(idInicial);
    setSelecionado(espacoPorId(idInicial));
  }

  const itens = useMemo(
    () =>
      DADOS.espacos.filter(
        (e) => (!categoria || e.categoria === categoria) && (!municipio || e.municipio === municipio)
      ),
    [categoria, municipio]
  );

  const categoriaSelecionada = selecionado
    ? DADOS.categorias.find((c) => c.id === selecionado.categoria)
    : null;

  return (
    <main id="conteudo" className="container section">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Mapa</span>
      </div>
      <h1>Mapa</h1>
      <p className="muted" style={{ maxWidth: "60ch", marginBottom: 32 }}>
        Visualize espaços e iniciativas de acolhimento pela região. Dados ilustrativos — sem
        precisão geográfica real.
      </p>

      <div className="filters">
        <label className="sr-only" htmlFor="mapa-cat">
          Filtrar por categoria
        </label>
        <select
          className="select"
          id="mapa-cat"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Todas as categorias</option>
          {DADOS.categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nome}
            </option>
          ))}
        </select>
        <label className="sr-only" htmlFor="mapa-mun">
          Filtrar por município
        </label>
        <select
          className="select"
          id="mapa-mun"
          value={municipio}
          onChange={(e) => setMunicipio(e.target.value)}
        >
          <option value="">Todos os municípios</option>
          {DADOS.municipios.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="map-layout">
        <div className="map-canvas" id="mapa-canvas" aria-label="Mapa de espaços e iniciativas">
          <div className="map-grid-lines" aria-hidden="true" />
          <span className="map-label">Visualização ilustrativa</span>
          {itens.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`map-marker${selecionado?.id === item.id ? " active" : ""}`}
              data-cat={item.categoria}
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              aria-label={`${item.nome} — ${item.municipio}`}
              onClick={() => setSelecionado(item)}
            />
          ))}
        </div>

        <aside className="map-side" id="mapa-side" aria-live="polite">
          {selecionado ? (
            <>
              <span className="tag" data-cat={selecionado.categoria}>
                {categoriaSelecionada?.nome || selecionado.categoria}
              </span>
              <h3>{selecionado.nome}</h3>
              <p>{selecionado.descricao}</p>
              <ul className="info-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong>Município</strong>
                    {selecionado.municipio}
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <div>
                    <strong>Horário</strong>
                    {selecionado.horario}
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <div>
                    <strong>Público</strong>
                    {selecionado.publico}
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <>
              <h3>Selecione um ponto</h3>
              <p className="side-empty">
                Escolha um marcador no mapa para ver detalhes resumidos do espaço ou iniciativa.
              </p>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}
