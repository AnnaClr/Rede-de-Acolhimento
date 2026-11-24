

export default function Purpose() {
    return (
        <section className="section container" aria-labelledby="titulo-prop">
            <div className="card" style={{padding: '48px', background: 'var(--grad-soft)'}}>
                <h2 id="titulo-prop">Um projeto feito de encontros</h2>
                <p style={{maxWidth: "70ch"}}>O Projeto Espaços Acolhedores reúne, em um só lugar, informações sobre acolhimento, serviços, cultura, eventos, organizações e direitos. A proposta é facilitar o acesso a redes de apoio em Iguatu e regiões próximas, com linguagem clara, navegação acessível e compromisso com o cuidado.</p>
                <p className="small muted">Este é um protótipo demonstrativo. Todos os espaços, organizações e eventos citados são fictícios e servem apenas para ilustrar a experiência.</p>
            </div>
        </section>
    );
}