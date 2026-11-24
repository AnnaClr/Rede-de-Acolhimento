import { Suspense } from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Main from "./_components/Main";

export default function Explore() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Main />
      </Suspense>
      <Footer />
    </>
  );
}
