import NavBar from "../components/NavBar";

export default function About() {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
      <style jsx>{`
        h1 {
          font-size: 48px;
        }
      `}</style>
    </div>
  );
}
