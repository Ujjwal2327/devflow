import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const hotQuestions = [
  { _id: 1, title: "Ask any question related to Code, Dev or DSA" },
  { _id: 2, title: "Ask any question related to Code, Dev or DSA" },
  { _id: 3, title: "Ask any question related to Code, Dev or DSA" },
  { _id: 4, title: "Ask any question related to Code, Dev or DSA" },
  { _id: 5, title: "Ask any question related to Code, Dev or DSA" },
];

const popularTags = [
  { _id: 1, name: "Javascript", totalQuestions: 5 },
  { _id: 1, name: "react", totalQuestions: 5 },
  { _id: 1, name: "nextjs", totalQuestions: 5 },
  { _id: 1, name: "mongodb", totalQuestions: 5 },
  { _id: 1, name: "redux", totalQuestions: 5 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* top questions */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* popular tags */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag key={tag._id} {...tag} showCount />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
