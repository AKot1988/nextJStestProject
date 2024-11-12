// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import classes from "./page.module.scss";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className={classes.text}>firstNestedPage</h1>
      <Link href="/firsNestedPage/secondLevelOfNesting">Next Nested Route</Link>
    </>
  );
}
