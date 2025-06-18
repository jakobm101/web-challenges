import "./styles.css";
import Image from "./components/Image";
import Link from "./components/Link";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <Image className="round-image" src={logo} alt="logo" />
        </Link>
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
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
