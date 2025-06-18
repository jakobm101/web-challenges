import Link from "./Link";
import logo from '../img/logo.jpg'
import Image from "./Image";

export default function Logo({ children }) {
  return (
    <Link href="#">{children}
      <Image className="round-image" src={logo} alt="logo" />
    </Link>

  );
}
