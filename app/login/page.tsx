import Header from "@/src/components/Header/Header";
import Main from "@/src/components/pages/login/Main";
import "./style.css";

export default function Login() {
  return (
    <>
      <Header activePath="/login" />
      <Main />
    </>
  );
}
