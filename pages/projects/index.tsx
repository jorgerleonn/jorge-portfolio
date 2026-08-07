import Head from 'next/head';
import GridBackground from '@/components/GridBackground';
import Navbar from '@/components/Navbar';
import CardDeck from '@/components/projects/CardDeck';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos — Jorge Rguez. León</title>
        <meta name="description" content="Mis proyectos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <GridBackground style={{ position: 'fixed' }} />
      <CardDeck />
    </>
  );
}
