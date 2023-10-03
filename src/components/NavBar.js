import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link
        className={`${router.pathname === "/" ? styles.active : ""} ${
          styles.link
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${router.pathname === "/about" ? styles.active : ""} ${
          styles.link
        }`}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
