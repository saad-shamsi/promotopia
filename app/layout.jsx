import "@styles/globals.css";
import { Children } from "react";

import Nav from "@components/Nav"
import Provider from "@components/Provider"

const metadata = {
  title: "PRomptopia",
  description: "Discover & share AI",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
