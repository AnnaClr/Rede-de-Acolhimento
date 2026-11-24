import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Main from "@/src/components/pages/rights/Main";
import "./style.css";

export default function Rights() {
  return (
    <>
      <Header activePath="/rights" />
      <Main />
      <Footer />
    </>
  );
}
