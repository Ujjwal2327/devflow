import Question from "@/components/forms/Question";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const { userId: clerkId } = auth();
  if (!clerkId) redirect("/sign-in");
  
  const mongoUser = await getUserByClerkId({ clerkId });
  if (!mongoUser) {
    alert("error in syncing clerk and mongodb")
    redirect("/sign-in");
  }

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
