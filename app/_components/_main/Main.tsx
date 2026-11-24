import Hero from "./_subcomponents/Hero";
import Functionality from "./_subcomponents/Functionality";
import Purpose from "./_subcomponents/Purpose";

export default function Main() {
    return (
        <main className="conteudo">
            <Hero />
            <Functionality />
            <Purpose />
        </main>
    );
}