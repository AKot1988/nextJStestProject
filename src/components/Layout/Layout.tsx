import {Footer, Header } from "@/components";
import { FC, ComponentType } from "react";

type LayoutProps = {
    Component: ComponentType<any>;
    children: { [k: string]: any };
}



const Layout: FC = ({ children }) => {
    return (
      <>
        <Header/>
        <main>{children}</main>
        <Footer title="footer"/>
      </>
    )
  }
export default Layout;