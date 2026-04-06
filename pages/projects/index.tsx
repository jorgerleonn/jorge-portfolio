import Head from 'next/head';
import Navbar from '@/components/Navbar';
import CardDeck from '@/components/projects/CardDeck';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Jorge Rgx. León</title>
        <meta name="description" content="My projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <CardDeck />
    </>
  );
}