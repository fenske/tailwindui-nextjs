import Head from 'next/head'

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>TailwindUI + NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="hero">
        <h1 className="text-xl">TailwindUI + NextJS</h1>
      </div>
    </div>
  )
}
