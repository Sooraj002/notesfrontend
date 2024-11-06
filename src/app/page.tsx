import { NextPage } from "next";
import { redirect } from "next/navigation";

const Page: NextPage = ({}) => {
  redirect("/home");
};

export default Page;
