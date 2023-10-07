import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link
        href="/"
        legacyBehavior
      >
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link
        href="/about"
        legacyBehavior
      >
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
          font-size: 50px;

          &.active {
            color: red;
          }
        }
      `}</style>
    </nav>
  );
}
