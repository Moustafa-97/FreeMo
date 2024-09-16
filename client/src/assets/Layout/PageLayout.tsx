import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function PageLayout(props: Props) {
  return (
    <>
      <section className="global-page-layout">{props.children}</section>
    </>
  );
}
