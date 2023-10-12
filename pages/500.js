import React from "react";

const Error505 = () => {
  return (
    <section class="px-10 py-5">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-indigo-600 dark:text-indigo-500">
            500
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Internal Server Error.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            We are already working to solve the problem.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error505;
