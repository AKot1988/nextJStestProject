import {Footer, Header } from "@/components";
import { FC, ComponentType } from "react";
import classes from './layout.module.scss'

// type LayoutProps = {
//     Component: ComponentType<any>;
//     children: { [k: string]: any };
// }

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className={classes.container}>{children}</div>
        <Footer title="footer"/>
      </body>
    </html>
  )
}