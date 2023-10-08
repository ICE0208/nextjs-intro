import Seo from "@/components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>HOME</h1>
      <style jsx>{`
        h1 {
          font-size: 48px;
        }
      `}</style>
    </div>
  );
}
