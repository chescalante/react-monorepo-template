import { Link } from "@tanstack/react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <main className="p-2">{children}</main>
    </div>
  );
}
