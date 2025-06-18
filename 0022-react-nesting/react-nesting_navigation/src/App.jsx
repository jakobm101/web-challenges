import "./styles.css";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";
import Link from "./components/Link";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <>
      <Header>
        <Logo></Logo>
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
      </Header>
      <Avatar></Avatar>
      <main>content goes here…</main>
    </>
  );
}
