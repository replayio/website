import Head from "next/head";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Demo() {
  return (
    <>
      <iframe
        className="header-demo"
        style={{
          borderRadius: "10px",
          border: "1px solid #ccc",
          background: "white",
          marginTop: "40px",
          width: "100%",
          height: "600px"
        }}
        src="https://app.replay.io/?id=0b4ea691-feea-46b7-972b-a7ea66ecc3ce&demo=1"
      />
    </>
  );
}

export default function () {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: ` (function () {
        var qs,
          js,
          q,
          s,
          d = document,
          gi = d.getElementById,
          ce = d.createElement,
          gt = d.getElementsByTagName,
          id = "typef_orm_share",
          b = "https://embed.typeform.com/";
        if (!gi.call(d, id)) {
          js = ce.call(d, "script");
          js.id = id;
          js.src = b + "embed.js";
          q = gt.call(d, "script")[0];
          q.parentNode.insertBefore(js, q);
        }
      })();`
          }}
        />
      </Head>

      <div className="space-y-8">
        <div className="bg-gray-50">
          <Header />
          <div style={{ marginBottom: "-340px" }}>
            <div className="relative md:py-16 space-y-8">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative sm:overflow-hidden">
                  <div className="relative px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                      <span className="block text-gray-900 font-bold">
                        Your Time Travel Debugger
                      </span>
                    </h1>
                    <p className="mt-2 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl my-8 font-light">
                      Replay is the first runtime recorder that lets you replay
                      your application the same way every time.
                    </p>
                    <div className="flex  justify-center">
                      <a
                        className="inline-flex typeform-share text-center whitespace-nowrap px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-700"
                        href="https://form.typeform.com/to/jAaabLbi"
                        data-mode="drawer_right"
                        data-submit-close-delay="0"
                        target="_blank"
                      >
                        Join our beta list
                      </a>
                    </div>
                  </div>
                  <Demo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Features />

        <Footer />
      </div>
    </>
  );
}
