import { Footer, Header } from "@/components";
import { FC, ComponentType } from "react";

export default function FirstNestedPageLauout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <section>{children}</section>
      <Footer title="footer" />
    </div>
  );
}
