"use client";

import { useEffect, useState } from "react";
import http from "../../service/http";
import { baseURL } from "../../service/api";

// const blogs = [
//   {
//     img: "/b1.png",
//     title: "Dolorum optio tempore voluptas dignissimos",
//     date: "12",
//     month: "Fab",
//     author: "John Doe",
//     category: "Politics",
//   },
//   {
//     img: "/b1.png",
//     title: "Dolorum optio tempore voluptas dignissimos",
//     date: "12",
//     month: "Fab",
//     author: "John Doe",
//     category: "Politics",
//   },
//   {
//     img: "/b1.png",
//     title: "Dolorum optio tempore voluptas dignissimos",
//     date: "12",
//     month: "Fab",
//     author: "John Doe",
//     category: "Politics",
//   },
//   {
//     img: "/b1.png",
//     title: "Dolorum optio tempore voluptas dignissimos",
//     date: "12",
//     month: "Fab",
//     author: "John Doe",
//     category: "Politics",
//   },
//   {
//     img: "/b1.png",
//     title: "Dolorum optio tempore voluptas dignissimos",
//     date: "12",
//     month: "Fab",
//     author: "John Doe",
//     category: "Politics",
//   },
//   {
//     img: "/b1.png",
//     title: "Dolorum optio tempore voluptas dignissimos",
//     date: "12",
//     month: "Fab",
//     author: "John Doe",
//     category: "Politics",
//   },
// ];

export default function BlogGrid() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const fetchBlogs = async (pageNumber) => {
    try {
      setLoading(true);

      const res = await http.get(`/blogs?page=${pageNumber}`);

      setBlogs(res.data.data);
      setLastPage(res.data.last_page);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-10 ">
          {loading ? (
            <div className="col-span-3 text-center text-white py-20">
              Loading blogs...
            </div>
          ) : (
            blogs.map((blog) => {
              const date = new Date(blog.published_date);
              const day = date.getDate();
              const month = date.toLocaleString("default", { month: "short" });

              return (
                <div
                  key={blog.id}
                  className="relative rounded-[30px] overflow-hidden border border-white/10 bg-gradient-to-b from-[#414141] to-[#212121]  hover:shadow-[0_0_150px_#C2C2C2] hover:border-gray-600 hover:scale-105 hover:rounded-3xl transition-all"
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <img
                      src={`${baseURL}/${blog.image || ""}`}
                      className="w-full h-[270px]  rounded-[30px] object-fill"
                    />

                    {/* IMAGE GRADIENT */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}
                  </div>

                  {/* CONTENT */}
                  <div className="relative px-7 pb-8 pt-10 ">
                    <div className="absolute -top-6 left-7">
                      {/* DATE + META ROW */}
                      <div className="flex items-end gap-6 relative">
                        {/* DATE BOX */}
                        <div className="bg-transparent backdrop-blur-xs rounded-xl border border-white/30 px-4 py-2 text-center">
                          <div className="text-white text-lg font-semibold leading-none">
                            {day}
                          </div>
                          <div className="text-xs text-gray-300">{month}</div>
                        </div>

                        {/* AUTHOR + CATEGORY */}
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span className="flex items-center text-xs gap-2">
                            <svg
                              className="w-4 h-4 opacity-70"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" />
                              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                            </svg>
                            <span className="text-[#FFFFFF]">
                              {blog.author}
                            </span>
                          </span>

                          <span className="flex items-center text-xs gap-2">
                            <svg
                              className="w-4 h-4 opacity-70"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                              />
                            </svg>

                            <span className="text-[#FFFFFF]">
                              {blog.category}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-white text-xl font-semibold mb-6 leading-snug">
                      {blog.title}
                    </h3>

                    {/* BUTTON */}
                    <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-black via-white/40 to-black">
                      <button className="flex items-center gap-2 bg-[#141414] text-white text-xs font-normal px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
                        Read more
                        <span className="text-sm text-[#424242] leading-none">
                          ›
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* PAGINATION */}
        <BlogPagination page={page} lastPage={lastPage} setPage={setPage} />
      </div>
    </section>
  );
}
function BlogPagination({ page, lastPage, setPage }) {
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(lastPage, startPage + 4);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="flex justify-center mt-16">
      <div className="p-[1px] bg-gradient-to-r from-black via-white/40 to-black">
        <div className="flex items-center gap-3 px-8 py-2 bg-[#000000]">
          {/* Left Arrow */}
          <button
            className="text-gray-400 hover:text-white text-lg"
            onClick={() => page > 1 && setPage(page - 1)}
          >
            ‹
          </button>

          {pages.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 flex items-center justify-center rounded-md
              ${
                p === page
                  ? "border border-white text-white"
                  : "bg-[#1a1a1a] text-gray-300"
              }`}
            >
              {p}
            </button>
          ))}

          {/* Right Arrow */}
          <button
            className="text-gray-400 hover:text-white text-lg"
            onClick={() => page < lastPage && setPage(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

// function BlogPagination() {
//   return (
//     <div className="flex justify-center mt-16">
//       {/* Gradient Border Wrapper */}
//       <div className="p-[1px] bg-gradient-to-r from-black via-white/40 to-black">
//         {/* Inner Container */}
//         <div className="flex items-center gap-3 px-8 py-2 bg-[#000000]">
//           {/* Left Arrow */}
//           <button className="text-gray-400 hover:text-white text-lg">‹</button>

//           {/* Page Buttons */}
//           <button className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1a1a1a] text-gray-300">
//             1
//           </button>

//           <button className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1a1a1a] text-gray-300">
//             2
//           </button>

//           <button className="w-9 h-9 flex items-center justify-center rounded-md bg-[#1a1a1a] text-gray-300">
//             3
//           </button>

//           {/* Active Page */}
//           <button className="w-9 h-9 flex items-center justify-center rounded-md border border-white text-white">
//             4
//           </button>

//           {/* Right Arrow */}
//           <button className="text-gray-400 hover:text-white text-lg">›</button>
//         </div>
//       </div>
//     </div>
//   );
// }
