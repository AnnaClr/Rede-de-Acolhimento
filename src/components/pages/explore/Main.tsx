"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import FilterChip from "@/src/components/shared/FilterChip";
import FilterSelect from "@/src/components/shared/forms/FilterSelect";
import { DADOS } from "@/src/lib/dados";

const categories = [
  { label: "Todas", category: "todas" },
  { label: "Acolhimento", category: "acolhimento" },
  { label: "Saúde", category: "saude" },
  { label: "Assistência", category: "assistencia" },
  { label: "Cultura", category: "cultura" },
  { label: "Eventos", category: "eventos" },
  { label: "Organizações", category: "organizacoes" },
  { label: "Serviços públicos", category: "servicos" },
  { label: "Informações e Direitos", category: "direitos" },
];

type ItemExplore = {
  id: string;
  nome: string;
  descricao: string;
  categoria: string;
  municipio: string;
  tipo: string;
  horario: string;
  publico: string;
  data?: string;
  local?: string;
  contato?: string;
  fonte?: string;
  tipoItem: "espaco" | "evento";
};

function formatarData(data: string) {
  const [ano, mes, dia] = data.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(
    new Date(ano, mes - 1, dia),
  );
}

export default function Main() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [busca, setBusca] = useState(searchParams.get("q") || "");
  const filtroUrl = searchParams.get("filtro");
  const filtroCat = categories.some(({ category }) => category === filtroUrl)
    ? (filtroUrl ?? "todas")
    : "todas";
  const [categoria, setCategoria] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [tipo, setTipo] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState<ItemExplore | null>(
    null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);

  const itens = useMemo<ItemExplore[]>(
    () => [
      ...DADOS.espacos.map((item) => ({
        ...item,
        tipoItem: "espaco" as const,
      })),
      ...DADOS.eventos.map((item) => ({
        ...item,
        categoria: "eventos",
        tipo: "Evento",
        horario: item.horario,
        local: item.local,
        data: item.data,
        tipoItem: "evento" as const,
      })),
    ],
    [],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    try {
      if (itemSelecionado && !dialog.open) {
        dialog.showModal();
      } else if (!itemSelecionado && dialog.open) {
        dialog.close();
      }
    } catch (error) {
      console.error("Não foi possível abrir os detalhes do item.", error);
    }
  }, [itemSelecionado]);

  const tipos = useMemo(
    () => [...new Set(itens.map((item) => item.tipo))],
    [itens],
  );

  const filtrados = useMemo(() => {
    const q = busca.toLowerCase().trim();
    return itens.filter((item) => {
      const textoBusca = [item.nome, item.descricao, item.local, item.municipio]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (q && !textoBusca.includes(q)) {
        return false;
      }
      if (filtroCat !== "todas" && item.categoria !== filtroCat) return false;
      if (categoria && item.categoria !== categoria) return false;
      if (municipio && item.municipio !== municipio) return false;
      if (tipo && item.tipo !== tipo) return false;
      return true;
    });
  }, [busca, filtroCat, categoria, municipio, tipo, itens]);

  function limparFiltros() {
    setBusca("");
    setCategoria("");
    setMunicipio("");
    setTipo("");
    router.replace("/explore", { scroll: false });
  }

  function selecionarFiltro(category: string) {
    router.replace(
      category === "todas"
        ? "/explore"
        : `/explore?filtro=${encodeURIComponent(category)}`,
      { scroll: false },
    );
  }

  return (
    <main id="conteudo" className="container section explore-page">
      <div className="breadcrumbs">
        <Link href="/">Início</Link>
        <span className="sep">/</span>
        <span>Explorar</span>
      </div>
      <h1>Explorar</h1>
      <p className="muted page-intro">
        Descubra espaços, serviços, organizações, eventos e conteúdos sobre
        direitos na região.
      </p>

      <div className="searchbar explore-searchbar">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <label htmlFor="filtro-busca" className="sr-only">
          Buscar por palavra-chave
        </label>
        <input
          id="filtro-busca"
          type="search"
          placeholder="Buscar por palavra-chave…"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="filters" role="group" aria-label="Filtros por categoria">
        {categories.map(({ label, category }) => (
          <FilterChip
            key={category}
            label={label}
            category={category}
            active={category === filtroCat}
            onClick={selecionarFiltro}
          />
        ))}
      </div>

      <div className="filters">
        <FilterSelect
          id="filtro-categoria"
          label="Categoria"
          placeholder="Todas as categorias"
          options={DADOS.categorias.map((c) => ({
            value: c.id,
            label: c.nome,
          }))}
          value={categoria}
          onChange={setCategoria}
        />
        <FilterSelect
          id="filtro-municipio"
          label="Município"
          placeholder="Todos os municípios"
          options={DADOS.municipios.map((m) => ({ value: m, label: m }))}
          value={municipio}
          onChange={setMunicipio}
        />
        <FilterSelect
          id="filtro-tipo"
          label="Tipo de serviço"
          placeholder="Todos os tipos"
          options={tipos.map((t) => ({ value: t, label: t }))}
          value={tipo}
          onChange={setTipo}
        />
        <button
          className="btn btn-ghost btn-sm"
          id="limpar-filtros"
          type="button"
          onClick={limparFiltros}
        >
          Limpar filtros
        </button>
      </div>

      <div className="section-head results-head">
        <p className="small muted" id="contagem">
          {filtrados.length} resultado{filtrados.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div className="grid grid-3" id="resultados">
        {filtrados.length === 0 ? (
          <div className="empty-state results-empty">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <h3>Nenhum resultado encontrado</h3>
            <p>Tente ajustar a busca ou remover alguns filtros.</p>
          </div>
        ) : (
          filtrados.map((item) => {
            const cat = DADOS.categorias.find((c) => c.id === item.categoria);
            return (
              <article className="result-card" key={item.id}>
                <div className="result-head">
                  <span className="tag" data-cat={item.categoria}>
                    {cat?.nome || item.categoria}
                  </span>
                  <span className="small muted">{item.municipio}</span>
                </div>
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                <div className="result-meta">
                  {item.data && (
                    <span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        width="14"
                        height="14"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      {formatarData(item.data)}
                    </span>
                  )}
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="14"
                      height="14"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.local || item.tipo}
                  </span>
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      width="14"
                      height="14"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {item.horario}
                  </span>
                </div>
                <div className="result-actions">
                  <Link
                    className="btn btn-primary btn-sm"
                    href={
                      item.tipoItem === "evento"
                        ? `/map?evento=${item.id}`
                        : `/map?id=${item.id}`
                    }
                  >
                    Ver no mapa
                  </Link>
                  <button
                    className="btn btn-secondary btn-sm"
                    type="button"
                    onClick={() => setItemSelecionado(item)}
                    aria-label={`Ver informações de ${item.nome}`}
                  >
                    Ver informações
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>

      <dialog
        className="item-dialog"
        ref={dialogRef}
        aria-labelledby="item-dialog-title"
        onClose={() => setItemSelecionado(null)}
        onCancel={() => setItemSelecionado(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
      >
        {itemSelecionado && (
          <div className="item-dialog-content">
            <header className="item-dialog-heading">
              <div>
                <span className="tag" data-cat={itemSelecionado.categoria}>
                  {DADOS.categorias.find(
                    (cat) => cat.id === itemSelecionado.categoria,
                  )?.nome ?? itemSelecionado.categoria}
                </span>
                <h2 id="item-dialog-title">{itemSelecionado.nome}</h2>
                <span className="item-dialog-subtitle">
                  Ficha informativa demonstrativa
                </span>
              </div>
              <button
                className="item-dialog-close"
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Fechar informações"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m18 6-12 12M6 6l12 12" />
                </svg>
              </button>
            </header>

            <p className="item-dialog-description">
              {itemSelecionado.descricao}
            </p>

            <div className="item-dialog-columns">
              <section
                className="item-dialog-details-panel"
                aria-labelledby="item-details-title"
              >
                <h3 id="item-details-title">Informações gerais</h3>
                <dl className="item-dialog-details">
                  {itemSelecionado.tipoItem === "evento" &&
                    itemSelecionado.data && (
                      <div>
                        <dt>Data</dt>
                        <dd>{formatarData(itemSelecionado.data)}</dd>
                      </div>
                    )}
                  {itemSelecionado.local && (
                    <div>
                      <dt>Local</dt>
                      <dd>{itemSelecionado.local}</dd>
                    </div>
                  )}
                  <div>
                    <dt>Município</dt>
                    <dd>{itemSelecionado.municipio}</dd>
                  </div>
                  <div>
                    <dt>
                      {itemSelecionado.tipoItem === "evento"
                        ? "Horário"
                        : "Tipo e horário"}
                    </dt>
                    <dd>
                      {itemSelecionado.tipoItem === "evento"
                        ? itemSelecionado.horario
                        : `${itemSelecionado.tipo} · ${itemSelecionado.horario}`}
                    </dd>
                  </div>
                  <div>
                    <dt>Público</dt>
                    <dd>{itemSelecionado.publico}</dd>
                  </div>
                  {itemSelecionado.fonte && (
                    <div>
                      <dt>Mais informações</dt>
                      <dd>
                        <a
                          href={itemSelecionado.fonte}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Acessar fonte
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </section>
            </div>

            <footer className="item-dialog-footer">
              {itemSelecionado.tipoItem === "espaco" ? (
                <Link
                  className="btn btn-primary btn-sm"
                  href={`/map?id=${itemSelecionado.id}`}
                  onClick={() => dialogRef.current?.close()}
                >
                  Ver no mapa
                </Link>
              ) : (
                <Link
                  className="btn btn-primary btn-sm"
                  href={`/map?evento=${itemSelecionado.id}`}
                  onClick={() => dialogRef.current?.close()}
                >
                  Ver no mapa
                </Link>
              )}
              <button
                className="btn btn-ghost btn-sm"
                type="button"
                onClick={() => dialogRef.current?.close()}
              >
                Fechar
              </button>
            </footer>
          </div>
        )}
      </dialog>
    </main>
  );
}
