import Head from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const CustomHead = ({ 
  title = 'GameVerse - Your Ultimate Gaming Platform',
  description = 'Discover and play amazing games on GameVerse. Join our community of gamers and experience the future of gaming.',
  image = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
  url = 'https://gameverse.vercel.app'
}: HeadProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="keywords" content="gaming, games, online games, multiplayer, gameverse" />
      <meta name="author" content="GameVerse Team" />
      
      {/* PWA Support */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="application-name" content="GameVerse" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="GameVerse" />
    </Head>
  );
};

export default CustomHead; 