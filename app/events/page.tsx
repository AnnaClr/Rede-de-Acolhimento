import { redirect } from "next/navigation";

export default function Events() {
  redirect("/explore?filtro=eventos");
}
