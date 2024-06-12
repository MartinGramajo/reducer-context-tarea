import AppRouter from "../../routers/Routes";
import { Footer } from "./Footer";
import { NavReact } from "./NavReact";

export function Main() {
  return (
    <main>
      <NavReact />
      <AppRouter />
      <Footer />
    </main>
  );
}
