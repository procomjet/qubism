import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500">
      <div className="flex justify-between items-center w-full h-14">
        <div className="text-center ml-5">logo</div>
        <div className="flex items-center justify-end mr-5  text-[1.2rem]">
          <div className="mx-5">
            <Link href="/home">Home</Link>
          </div>
          <div className="mx-5">
            <Link href="/analysis">Analysis</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
