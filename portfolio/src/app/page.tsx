import Image from "next/image";
import Asterisco from "../public/img/asterico-icon.svg";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
        <div className="min-h-screen w-full absolute z-0 top-0 overflow-hidden flex content-start justify-end ">
          <Image
            src={Asterisco}
            alt="design detail"
            className="animate-spinning top-0 right-0 max-w-min self-start -m-10"
          />
        </div>
      </main>
    </>
  );
}
