import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white font-sans">
      <NavBar title="Caleb Krauter"></NavBar>
    </div>
  );
}
