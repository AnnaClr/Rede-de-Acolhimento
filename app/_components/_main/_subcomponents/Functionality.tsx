import Card from "./Card";

export default function Functionality() {
    return (
        <section className="section container" aria-labelledby="titulo-func">
            <div className="section-head">
                <div>
                <h2 id="titulo-func">Por onde começar</h2>
                <p>Funcionalidades pensadas para conectar pessoas e recursos da região.</p>
                </div>
            </div>
            <div className="grid grid-4">
                <Card link="/explore" h3="Encontrar acolhimento" p="Descubra espaços de escuta, apoio e convivência." span="Explorar →" />
                <Card link="/map" h3="Explorar a região" p="Localize serviços e iniciativas no mapa demonstrativo." span="Abrir mapa →" />
                <Card link="/events" h3="Descobrir eventos" p="Agenda de encontros, oficinas e atividades comunitárias." span="Ver agenda →" />
                <Card link="/rights" h3="Conhecer seus direitos" p="Orientações, canais de apoio e informações de proteção." span="Ler conteúdos →" />
            </div>
            </section>
    );
}