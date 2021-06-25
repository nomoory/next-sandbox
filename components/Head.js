import Head from "next/head";
export const siteTitle = "EDmicBio";

const CustomHead = () => (
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="The first penguin of bio-mimicry 3D Organ-on-a-chip"
    />
    <meta
      property="og:image"
      content={`https://firebasestorage.googleapis.com/v0/b/edmicbio.appspot.com/o/og_image.png?alt=media&token=ab67ab61-534a-49b1-9e10-d9237a32129a`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />
    <title>EDmicBio</title>
  </Head>
);

export default CustomHead;
