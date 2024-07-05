import "../app/style.css";
import Image from "next/image";
import image1 from "../../public/images/section1 right.svg";
import illustration2 from "../../public/images/section 2 1.svg";
import illustration3 from "../../public/images/section 2 2.svg";
import illustration4 from "../../public/images/section 2 3.svg";
import illustration5 from "../../public/images/section 2 4.svg";
import illustration6 from "../../public/images/section 2 5.svg";
import illustration7 from "../../public/images/section 3 1.svg";
import illustration8 from "../../public/images/section 3 2.svg";
import illustration9 from "../../public/images/section 3 3.svg";
import illustration10 from "../../public/images/section 3 4.svg";
import illustration11 from "../../public/images/section 3 5.svg";
import logo from "../../public/images/Reflense (1).svg";
import "../app/style.css";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  overflow-x-hidden">

      <header className="flex w-full pt-10 px-10"><Image
        src={logo}
        alt="Vercel Logo"
        className="dark:invert mb-10"
        width={150}
        height={100}
        priority
      /></header>

      <section className="flex mt-10  w-screen px-20 mb-0 md:mb-20 flex-col md:flex-row items-center">
        <div className="w-6/12  md:h-96 flex flex-col justify-center items-center gap-5 ">
          <p className="text-center font-black  2xl:text-3xl xl:text-2xl lg:text-lg md:text-base sm:text-sm">Expand your<br></br> recruitment network <br></br>and find the perfect fit</p>
          <button className="bg-blue-600 2xl:text-2xl xl:text-lg lg-text-base md:text-sm sm:text-xs px-6 py-2 rounded-full text-white bold " style={{ backgroundColor: "#042D62" }}>Let's Start Today</button>
        </div>
        <div className="w-6/12  h-96 flex justify-center">
          <Image src="/images/section1 right.svg" alt="avc"
            width={0}
            height={0}
            sizes="100vw"
            
            className="w-64  -translate-y-16 md:h-full md:w-full"></Image>
        </div>
      </section>

      <section className="text-center w-screen py-8 flex flex-col gap-2" style={{ backgroundColor: "#042D62" }}>
        <h1 className="font-bold  text-4xl text-white">Hire Better. Faster. Smarter.
        </h1>
        <p className="font-semibold text-white">Designed for Partnerships. <span style={{ color: "#0F9ECA" }}>Built for Empowerment.</span></p>
      </section>

      <section style={{ backgroundColor: "#FFF4EF", position: "relative" }} className="min-h-screen pt-20">
        <div className="mt-32 relative">
          <div className="flex flex-col md:flex-row justify-center items-center  py-8" style={{ position: "relative" }}>
            <Image src={illustration2} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '25%', height: '130%' }}></Image>
             
              <Image src={illustration3} alt="Illustrations" width={0} height={0} sizes="100vw" style={{width: '17%', height: '130%' }} className="md:block hidden "></Image>
            
            <Image src={illustration4} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '20%', height: '130%' }}></Image>
            <Image src={illustration5} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '17%', height: '130%' }} className="md:block hidden "></Image>
            <Image src={illustration6} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '25%', height: '130%' }}></Image>

            <p className="absolute text-center      font-bold  l-26 text-[8px] sm:text-[8px] md:text-[8px]  lg:text-[10px] xl:text-[14px] left1" >Unlock access to a vast<br></br> pool of top-tier talent<br></br> that fits your needs</p>
            <p className="absolute bottom-6 l-7 font-medium    md:font-bold   xl:text-lg text-[8px] sm:text-[8px] md:text-[8px]  lg:text-[10px] xl:text-[14px]">With our rockstar recruiter network</p>
            <p className="absolute  r-27 t-26  text-center font-bold text-[8px] sm:text-[8px] md:text-[12px]  lg:text-[10px] xl:text-[14px] xl:t-26 2xl:t-22">Discover top talent<br></br> efficiently, saving <br></br>time and energy</p>
            <p className="absolute t-22 r-2 text-center font-bold   text-[8px] sm:text-[6px] md:text-[8px]  lg:text-[10px] xl:text-[14px] absolute hidden md:block">With ratings and skill <br></br>evaluations from trusted <br></br>and authentic recruiters</p>
          </div>

        </div>

        <h1 className="font-bold  text-2xl text-white text-center" style={{ color: "#EF6C2D" }}>Endless Talent, Unmatched Quality</h1>

        <div className="mt-32 mb-10 w-full flex justify-center gap-10 md:gap-28 flex-col md:flex-row items-center" >
          <button style={{ backgroundColor: "#EF6C2D" }} className=" text-2xl px-6 py-2 w-fit rounded-full text-white font-bold text-[6px] sm:text-[8px] md:text-[10px]  lg:text-[12px] xl:text-[18px]">Post Your Jobs Now</button>
          <button style={{ backgroundColor: "#EF6C2D" }} className=" text-2xl px-6 py-2 w-fit rounded-full text-white font-bold text-[6px] sm:text-[8px] md:text-[10px]  lg:text-[12px] xl:text-[18px]">Check All Jobs</button>
          <button style={{ backgroundColor: "#EF6C2D" }} className=" text-2xl px-6 py-2 w-fit rounded-full text-white font-bold text-[6px] sm:text-[8px] md:text-[10px]  lg:text-[12px] xl:text-[18px]">Hurry! Refer Your Talents</button>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="flex mt-48  flex-col md:flex-row relative justify-between items-center px-10 mb-10">
          <Image src={illustration7} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '40%', height: '130%' }}></Image>
          <Image src={illustration8} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '17%', height: '50%', left: "29%", top: "-24%" }} className="absolute hidden md:block"></Image>
          <Image src={illustration9} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '20%', height: '30%', right: "27%", bottom: "28%" }} className="absolute hidden md:block"></Image>
          <p className=" md:absolute text-center  w-full text-3xl font-bold text-[12px] sm:text-[14px] md:text-[18px]  lg:text-[26px] xl:text-[30px]" style={{ color: "#41757D", top: "30%" }} >Power to the Recruiters</p>
          <Image src={illustration10} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '40%', height: '130%' }}></Image>
          {/* <Image src={illustration11} alt="Illustrations" width={0} height={0} sizes="100vw" style={{ width: '20%', height: '100%', top: "-22%", right: "-4%" }} className="absolute hidden md:block"></Image> */}

          <p className="absolute top-1/4 l-17 font-bold text-right text-[8px] sm:text-[10px] md:text-[10px]  lg:text-[12px] xl:text-[20px] md:top-0">Get access to numerous job <br></br>opportunities</p>
          <p className="absolute b-20  text-center font-bold text-[6px] sm:text-[8px] md:text-[10px]  lg:text-[12px] xl:text-[18px] left2 absolute hidden md:block"  >With your expertise and our tools, ensuring every<br></br> talent you engage with gets a chance to shine.</p>
          <p className="absolute b-20   text-right top-0 md:t-14  font-bold text-[6px] l-58 md:right-0 sm:text-[8px] md:text-[10px]  lg:text-[12px] xl:text-[18px] " >You know your candidates better. Leverage it to find<br></br> perfect opportunities for them. Score based on job fit,<br></br> guiding effortlessly</p>
        </div>

        <div style={{ backgroundColor: "#042D62" }} className="w-full py-10"><p className="text-center text-2xl font-bold text-white">Email us for any questions: info@reflesnse.com</p></div>
      </section>

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
