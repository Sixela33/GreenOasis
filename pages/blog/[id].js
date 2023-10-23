import React from "react";
import { useRouter } from "next/router";
import officeimg from "./../../public/img/office.png";
import Image from "next/image";

const Post = () => {
  const route = useRouter();
  console.log(route.query.id);

  return (
    <section class="flex flex-col px-10 py-5">
      <div class="h-60 w-full relative py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <Image fill src={officeimg} class="object-cover rounded-lg" />
      </div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
          Designed for business teams like yours
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Strive we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
    </section>
  );
};

export default Post;
