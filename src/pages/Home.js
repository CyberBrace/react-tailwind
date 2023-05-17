import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Fragment>
      {/* Content Wrapper */}
      <div className="grid md:grid-cols-8 font-montserrat selection:bg-mhcolor dark:bg-gray-700 dark:text-white">
        {/* Nav Begins  */}
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="md:text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100 hover:text-blue-800">
                <Link to={"/"}>Food Restaurant</Link>
              </h1>
              <div className="px-4 cursor-pointer md:hidden" id="hider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            </div>
            <ul className="text-sm mt-6 hidden md:block" id="menu">
              <li className="text-gray-700 font-bold py-1 dark:text-white">
                <Link
                  to={"/"}
                  className="px-4 flex md:justify-end border-r-4 border-finered"
                >
                  <span>Home</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={"/dashboard"}
                  className="px-4 flex md:justify-end border-r-4 border-white"
                >
                  <span>Admin</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to={"/contact"}
                  className="px-4 flex md:justify-end border-r-4 border-white"
                >
                  <span>Contact</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Nav Ends */}

        <main className="px-16 py-6 bg-gray-200 md:col-span-7 dark:bg-gray-800 dark:text-white">
          <div className="flex justify-center md:justify-end">
            <Link
              to={"/"}
              className="btn-rounded text-finered md:bg-white border-finered md:border-2 hover:bg-finered hover:text-white"
            >
              Log in{" "}
            </Link>
            <Link
              to={"/"}
              className="btn-rounded text-finered ml-2 md:bg-white border-finered md:border-2 hover:bg-finered hover:text-white"
            >
              Sign up{" "}
            </Link>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold md:text-blue-700">
              Recipes <div className="vr w-28"></div>{" "}
            </h2>

            <h3 className="text-2xl font-semibold">For GSB</h3>
          </header>

          <div>
            <h4 className="font-bold mt-12 pb-2">Latest Recipes</h4>
            {/* Cards  */}
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

            <h4 className="font-bold mt-12 pb-2">Most Popular</h4>
            <div className="mt-8">{/* Cards  */}</div>

            <div className="flex justify-center">
              <div className="bg-secondary-100 text-secondary-200 btn-rounded hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease out duration-300">
                Load More
              </div>
            </div>
          </div>

          <div>
            <div className="bg-red-500 w-10 text-white text-xs uppercase font-bold rounded-full p-3 ">
              <i>25</i>
            </div>
            <div className="vl ml-4 h-28"></div>

            <div className="bg-red-500 w-10 text-white text-xs uppercase font-bold rounded-full p-3 ">
              <i>25</i>
            </div>
            <div className="vl ml-4 h-28"></div>

            <div className="bg-red-500 w-10 text-white text-xs uppercase font-bold rounded-full p-3 ">
              <i>25</i>
            </div>
            <div className="vl ml-4 h-28"></div>

            <div className="bg-red-500 w-10 text-white text-xs uppercase font-bold rounded-full p-3 ">
              <i>25</i>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <Link
                to={"/"}
                className="btn-rounded text-fineblue border-fineblue md:border-2 hover:bg-fineblue hover:text-white focus:outline-none focus:ring focus:ring-fineblue"
              >
                Button Outline{" "}
              </Link>
              <Link
                to={"/"}
                className="btn-box ml-2 text-finered border-finered md:border-2 hover:bg-finered hover:text-white focus:outline-none focus:ring focus:ring-finered"
              >
                Button Outline{" "}
              </Link>

              <Link
                to={"/"}
                className="btn-box ml-2 text-white bg-finegreen hover:bg-white hover:text-finegreen hover:border-finegreen hover:border-2 focus:outline-none focus:ring focus:ring-finegreen"
              >
                Button Hover{" "}
              </Link>
              <Link
                to={"/"}
                className="btn-rounded ml-2 text-white bg-fineyellow focus:outline-none focus:ring focus:ring-fineyellow"
              >
                Button Box{" "}
              </Link>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="finecard p-6 relative w-full htk">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className="mx-auto rounded-xl w-72 !h-64 sm:h-48 object-cover"
              />
              <div className="m-4 py-3 text-2xl text-center text-gray-400 bg-white rounded-full shadow-md relative mx-auto bottom-14 h-14 w-52">
                <Link to={"/"} target={"_blank"}>
                  <i className="fab fa-facebook-f mr-4 ml-4 hover:text-fineblue"></i>
                </Link>

                <Link to={"/"} target={"_blank"}>
                  <i className="fab fa-instagram mr-4 hover:text-finered"></i>
                </Link>

                <Link to={"/"} target={"_blank"}>
                  <i className="fab fa-twitter mr-4 hover:text-blue-400"></i>
                </Link>

                <Link to={"/"} target={"_blank"}>
                  <i className="fab fa-linkedin-in mr-4 hover:text-indigo-600"></i>
                </Link>
              </div>

              <div className="text-center relative bottom-12">
                <span className="font-bold text-xl text-gray-600">
                  Blessing Adesiyan
                </span>
                <span className="block text-gray-500 text-sm">
                  CEO & Founder MotherHonestly
                </span>
              </div>
            </div>
          </div>

          <div className="p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 gap-3 lg:gap-10">
            <div className=" text-white mt-2 py-4 rounded-lg  sm:col-span-1  md:col-span-1 md:translate-y-8 w-64 !h-96">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className="mx-auto rounded-xl object-cover h-full"
              />
            </div>
            <div className=" text-white mt-2  py-4 rounded-lg sm:row-span-1 md:row-span-2 gooda md:transform scale-200 md:translate-y-24 w-64 h-64 md:h-full">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className=" rounded-xl h-full object-cover"
              />
            </div>
            <div className=" text-white sm:mt-2 py-4 rounded-1g sm:col-span-1 md:row-span-2 md:col-span-1 md:transform scale-200 md:translate-x-8 !h-64 w-56">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className="grayscale mx-auto  h-full rounded-xl  object-cover "
              />
            </div>
          </div>

          <div className="col-span-6 p-16 grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-1 gap-3 lg:gap-10">
            <div className=" text-white mt-2 py-4 rounded-lg  sm:col-span-1  md:col-span-1 md:translate-y-8 w-72 !h-80">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className="mx-auto rounded-xl object-cover h-full"
              />
            </div>
            <div className=" text-white mt-2  py-4 rounded-lg sm:row-span-1 md:row-span-2 gooda md:transform scale-200 md:translate-y-48 !h-56 w-56">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className=" rounded-xl h-full object-cover"
              />
            </div>
            <div className=" text-white sm:mt-2 py-4 rounded-1g sm:col-span-1 md:row-span-2 md:col-span-1 md:transform scale-200 md:translate-x-16 !h-56 w-56">
              <img
                src="assets/ble.jpeg"
                alt="food"
                className="grayscale mx-auto  h-full rounded-xl  object-cover "
              />
            </div>
          </div>

          <ul
            id="navdiv"
            className="navdiv flex flex-wrap bg-orange-300 uppercase navwidth md:w-fit lg:w-fit h-20 py-2 px-6 text-xs md:text-sm md:font-medium rounded-full text-center text-gray-500 dark:text-gray-400"
          >
            <li className="mr-6 md:mr-6">
              <Link
                to={"/"}
                className="inline-block w-20 md:w-40 lg:w-48 md:py-3 py-4 px-3 text-gray-500 rounded-full bgactive active"
                aria-current="page"
              >
                Opening <br /> <p className="font-semibold"> 8:00am </p>
              </Link>
            </li>
            <li className="md:mr-2">
              <Link
                to={"/"}
                className="inline-block w-30 md:w-42 lg:w-52 md:py-3 py-4 px-4 text-gray-500 rounded-full bgactive"
                aria-current="page"
              >
                Break <br />{" "}
                <p className="font-semibold"> 10:20am - 10:30am </p>
              </Link>
            </li>
            <li className="md:translate-x-4 translate-x-5">
              <Link
                to={"/"}
                className="inline-block w-36 md:w-48 lg:w-52 md:py-3 py-2 px-4 text-gray-500  rounded-full bgactive"
                aria-current="page"
              >
                Breakout Sessions <br />{" "}
                <p className="font-semibold">1:00pm - 1:45pm </p>
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </Fragment>
  );
}

export default Home;
