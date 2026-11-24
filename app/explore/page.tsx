import { Suspense } from "react";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Main from "@/src/components/pages/explore/Main";
import "./style.css";

export default function Explore() {
  return (
    <>
      <Header activePath="/explore" />
      <Suspense fallback={null}>
        <Main />
      </Suspense>
      <Footer />
    </>
  );
}
