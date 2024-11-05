import { NextPage } from "next";
import { redirect } from "next/navigation";

const Page: NextPage = ({}) => {
  redirect("/home");
  // return <div>hello</div>;
};

export default Page;
