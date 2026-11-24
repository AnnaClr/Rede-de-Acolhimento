import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Main from "@/src/components/Main/Main";
import "./style.css";

export default function Home() {
  return (
    <>
      <Header activePath="/" />
      <Main />
      <Footer />
    </>
  );
}
