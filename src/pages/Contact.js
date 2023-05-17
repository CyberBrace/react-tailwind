import { useState } from "react";
import { Link } from "react-router-dom";
import ReadMoreReadLess from "../component/ReadMoreReadLess";
import CountdownTimer from "./CountdownTimer";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const GIVEN_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000; // 30 days from now
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterGivenDays = NOW_IN_MS + GIVEN_DAYS_IN_MS;

  const Menus = [
    { title: "Dashboard", src: "fas fa-home", link: "/dashboard" },
    { title: "Inbox", src: "fas fa-envelope", link: "/" },
    { title: "Accounts", src: "fas fa-user", link: "/contact" },
    { title: "Schedule", src: "fas fa-calendar-alt", link: "/dashboard" },
    { title: "Search", src: "fas fa-search", link: "/" },
    { title: "Analytics", src: "fas fa-chart-bar", link: "/contact" },
    { title: "Files", src: "fas fa-folder", link: "/dashboard" },
    { title: "Setting", src: "fas fa-cog", link: "/" },
    {
      title: "Logout",
      src: "fas fa-sign-out-alt absolute bottom-0",
      link: "/",
      gap: true,
    },
  ];

  return (
    <div className="flex grid-cols-12">
      <div
        className={`${
          open ? "w-48" : "w-14"
        } shadow-2xl duration-500 h-auto md:col-span-3 bg-blue-800 relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(!open)}
          className={`absolute cursor-pointer border-2 rounded-full bg-white border-finered text-finered -right-3 top-9 w-6 h-6 ${
            !open && "rotate-180"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          <img
            src="assets/duoye.png"
            className={`cursor-pointer duration-300 ml-1 w-12 h-12 ${
              open && "rotate-[360deg]"
            }`}
            alt=""
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>

        <ul className="mt-10">
          {Menus.map((menu, index) => (
            <Link to={menu.link}>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4
                            cursor-pointer p-2 hover:bg-white hover:text-blue-800 ${
                              menu.gap ? "mt-40" : "mt-2"
                            }`}
              >
                <i
                  className={`${menu.src} cursor-pointer duration-300 mt-3 text-center w-7 h-7`}
                ></i>

                <span
                  className={`${!open && "hidden"} duration-300 origin-left`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="p-7 text-2xl font-semibold flex-1 h-auto md:col-span-9">
        Main Page
        <ReadMoreReadLess limit={100}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit
          omnis autem quis soluta deserunt inventore, consequatur labore
          sapiente sunt molestiae! Nisi nemo assumenda quae. Illum, sunt
          voluptatibus. Labore, vero?
        </ReadMoreReadLess>
        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
          <div className="tk-card hover:shadow-xl dark:text-gray-800">
            <img
              src="assets/food1.jpg"
              alt="food"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Ewa Goin</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Elgold
              </span>
            </div>
            <div className="tk-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <i>25 mins</i>
            </div>
          </div>

          <div className="tk-card hover:shadow-xl dark:text-gray-800">
            <img
              src="assets/food2.jpg"
              alt="food"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Ewa Goin</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Elgold
              </span>
            </div>
            <div className="tk-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <i>25 mins</i>
            </div>
          </div>

          <div className="tk-card hover:shadow-xl dark:text-gray-800">
            <img
              src="assets/food3.jpg"
              alt="food"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Ewa Goin</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Elgold
              </span>
            </div>
            <div className="tk-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <i>25 mins</i>
            </div>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
          <div className="tk-card hover:shadow-xl dark:text-gray-800">
            <img
              src="assets/food1.jpg"
              alt="food"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Ewa Goin</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Elgold
              </span>
            </div>
            <div className="tk-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <i>25 mins</i>
            </div>
          </div>

          <div className="tk-card hover:shadow-xl dark:text-gray-800">
            <img
              src="assets/food2.jpg"
              alt="food"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Ewa Goin</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Elgold
              </span>
            </div>
            <div className="tk-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <i>25 mins</i>
            </div>
          </div>

          <div className="tk-card hover:shadow-xl dark:text-gray-800">
            <img
              src="assets/food3.jpg"
              alt="food"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Ewa Goin</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Elgold
              </span>
            </div>
            <div className="tk-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <i>25 mins</i>
            </div>
          </div>
        </div>
        {show && (
          <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
            <div className="tk-card hover:shadow-xl dark:text-gray-800">
              <img
                src="assets/food1.jpg"
                alt="food"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Ewa Goin</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Elgold
                </span>
              </div>
              <div className="tk-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <i>25 mins</i>
              </div>
            </div>

            <div className="tk-card hover:shadow-xl dark:text-gray-800">
              <img
                src="assets/food2.jpg"
                alt="food"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Ewa Goin</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Elgold
                </span>
              </div>
              <div className="tk-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <i>25 mins</i>
              </div>
            </div>

            <div className="tk-card hover:shadow-xl dark:text-gray-800">
              <img
                src="assets/food3.jpg"
                alt="food"
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Ewa Goin</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Elgold
                </span>
              </div>
              <div className="tk-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <i>25 mins</i>
              </div>
            </div>
          </div>
        )}
        <div className="text-center mt-5 mb-5">
          <button
            className="btn-box  bg-fineblue text-white"
            type="button"
            onClick={() => setShow(!show)}
          >
            {show === true ? "Show Less" : "Show More"}
          </button>
        </div>
        <div>
          <h1>Countdown Timer</h1>
          <CountdownTimer targetDate={dateTimeAfterGivenDays} />
        </div>
        <div class="load">
          <div class="smt-spinner-circle">
            <div class="smt-spinner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
