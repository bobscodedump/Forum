import Navigation from "@components/Navigation";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Blog",
  description: "Post what's on your mind",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="" />
          </div>

          <main className="app">
            <Navigation />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
