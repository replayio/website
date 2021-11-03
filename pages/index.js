import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: ` (function () {
            document.location.replace('./demo/index.html');
          })();`
          }}
        />
      </Head>
      <a href="/demo/index.html">Replay Demo</a>
    </>
  );
}
