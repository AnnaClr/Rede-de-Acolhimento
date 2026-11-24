import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Main from "@/src/components/pages/map/Main";
import "./style.css";

export default function MapPage() {
  return (
    <>
      <Header activePath="/map" />
      <Main />
      <Footer />
    </>
  );
}
