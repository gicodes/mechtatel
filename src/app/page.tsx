// import Image from "next/image";
import { Fragment } from "react";
import Header from "./home/header";
// import { Roboto } from 'next/font/google';

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

export default function Home() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <main className="p-2">
        <div className="">
          <div className="card container">
            <div className="card-header">
              Impact Management
            </div>
          </div>
        </div>
      </main>

      <footer className="">
      </footer>
    </Fragment>
  );
}
