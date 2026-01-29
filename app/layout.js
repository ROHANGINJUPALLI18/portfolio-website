import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
  title: 'Rohan Ginjupalii',
  description: 'Explore my tech stack',
  keywords: 'protfolio, rohan, techStack',
};

const MainLayout = ({ children }) => {
  return (
      <AuthProvider>
        <html lang='en'>
          <head>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            />
          </head>
          <body className="bg-[#090C1D] min-h-screen text-white" >
            <Navbar />
            <main>{children}</main>
            <Footer  />
          </body>
        </html>
      </AuthProvider>
  );
};
export default MainLayout;