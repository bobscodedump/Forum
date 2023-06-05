import "@styles/globals.css";

export const metadata = {
  title: "Blog",
  description: "Post what's on your mind",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
