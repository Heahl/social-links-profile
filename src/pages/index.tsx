import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="social-link" />
        <link rel="icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      {/* Background */}
      <main className="bg-off-black flex min-h-screen flex-col items-center justify-center">
        {/* Social Links Container */}
        <div className="bg-dark-grey mx-6 flex flex-col items-center justify-center rounded-xl p-10">
          {/* Header Container */}
          <div className="mx-12 flex flex-col items-center justify-center">
            {/* Avatar Image */}
            <Image
              className="mb-1 h-24 w-24 rounded-full"
              src="/assets/images/avatar-jessica.jpeg"
              width={100}
              height={100}
              alt="Avatar"
            ></Image>
            {/* Title Container */}
            <div className="my-5 flex flex-col items-center justify-center">
              <h1 className="my-1 text-center text-3xl font-bold text-white">
                Jessica Randall
              </h1>
              <h2 className="text-primary-green my-1 text-center">
                London, United Kingdom
              </h2>
            </div>
            {/* Description Container */}
            <div className="mb-3 mt-1 flex flex-col items-center justify-center">
              <p className="text-center text-white">
                &quot;Front-end developer and avid reader.&quot;
              </p>
            </div>
          </div>
          {/* Buttons Container */}
          <div className="my-2 flex w-full flex-col items-center justify-center space-y-4">
            <button>GitHub</button>
            <button>Frontend Mentor</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
            <button>Instagram</button>
          </div>
        </div>
      </main>
    </>
  );
}
