import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Main from "@/src/components/pages/forum/Main";
import "./style.css";

export default function Forum() {
  return (
    <>
      <Header activePath="/forum" />
      <Main />
      <Footer />
    </>
  );
}
