import dynamic from 'next/dynamic';

import Header from '../components/header';

const Footer = dynamic(() => import('../components/footer'));

const DefaultLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { DefaultLayout };