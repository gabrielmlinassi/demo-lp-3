import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-4">
          <div className="flex items-center justify-center divide-gray-700 divide-x-2">
            <div className="relative h-12 w-48 mr-4">
              <Image
                src="/logo.png"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                alt="logo"
              />
            </div>
            <div>
              <div className="ml-4 uppercase">talent solutions</div>
            </div>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li>Roles We Place</li>
              <li>How We Work With You</li>
              <li>Why Work With Us?</li>
              <li>Meet Rodrigo</li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {/* hero */}
        <section
          style={{ height: "calc(100vh - 64px)" }}
          className="h-full bg-gradient-to-r from-[#5A4797] to-[#2364A4] hidden"
        >
          <div className="flex items-center max-w-screen-xl mx-auto w-full h-full">
            <div style={{ width: "50%" }}>
              <h1 className="text-9xl leading-none text-white font-strawberry capitalize">
                Build your team.
              </h1>
              <h2 className="text-5xl leading-tight -mt-2 text-white">
                Meet your deadlines. Create training that gets results.
              </h2>
              <p className="text-lg text-white mt-6">
                You need good people to get the job done. Every day we produce
                training solutions, so we know how you feel! Allow us to help
                you find exceptional talent to augment your team. We love this
                work and we’re ready to help.
              </p>
              <div
                style={{ maxWidth: "80%" }}
                className="text-2xl mt-12 font-bold italic text-[#3CBFAE]"
              >
                “I have worked with SweetRush and Rodrigo for many years, and I
                trust them and count on them, and they never let me down.”
              </div>
              <div className="flex items-end space-x-4 mt-6 text-white">
                <p>
                  <b>—Douglas E. Miller,</b> Director, Learning and Awareness
                </p>
                <div>
                  <Image
                    src="/kaiser-logo.png"
                    width={125}
                    height={15}
                    objectFit="contain"
                    objectPosition="bottom"
                    alt="Kaiser Permanente logo"
                  />
                </div>
              </div>
            </div>
            <div
              style={{ height: "85%" }}
              className="flex-1 relative w-full self-end"
            >
              <Image
                src="/hero.png"
                layout="fill"
                objectFit="cover"
                alt="woman"
                objectPosition="top"
              />
            </div>
          </div>
        </section>
        {/* another section */}
        <section className="w-full h-screen bg-yellow-200"></section>
        <div></div>
      </main>
      <footer></footer>
    </>
  );
}
