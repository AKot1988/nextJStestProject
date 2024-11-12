'use client'
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Second level of nesting</h1>
      <button type='button' onClick={() => router.push("/")}>Go to first page</button>
    </div>
  );
};

export default Page;
