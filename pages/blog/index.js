import Link from "next/link";
import React from "react";

const Blog = () => {
  const data = [
    {
      id: 1,
      category: 'CATEGORY-1',
      title: 'The Catalyzer',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      img: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
    {
      id: 2,
      category: 'CATEGORY-1',
      title: 'The Catalyzer',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      img: "https://images.unsplash.com/photo-1624628639856-100bf817fd35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      category: 'CATEGORY-1',
      title: 'The Catalyzer',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      img: "https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      category: 'CATEGORY-1',
      title: 'The Catalyzer',
      desc: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
      img: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    },
  ]

  return (
    <section class="text-gray-600 dark:text-white body-font px-10 py-5">
      <div class=" px-4 mx-auto max-w-screen-xl lg:px-10">
        <div class="flex flex-wrap -m-4">
          {data?.map((post, index) => (
            <div key={index} class="px-4 py-5 md:py-4 md:w-1/2">
              <div class="h-full rounded-xl shadow-cla-blue bg-indigo-100 dark:bg-gray-800 overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src={post.img}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {post.category}
                  </h2>
                  <h1 class="title-font text-lg font-medium mb-3">
                    {post.title}
                  </h1>
                  <p class="leading-relaxed mb-3">
                    {post.desc}
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <Link href={`/blog/${post.id}`} class="text-white bg-indigo-600 hover:bg-indigo-700 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
