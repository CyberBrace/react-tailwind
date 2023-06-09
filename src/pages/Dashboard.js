import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReadMoreReadLess from '../component/ReadMoreReadLess'


function Dashboard() {
    const [show, setShow] = useState(false);


    return (
        <Fragment>
            <div className='grid-cols-8 flex selection:bg-mhcolor dark:bg-gray-700 dark:text-white'>
                <div className="md:col-span-3 flex flex-col shadow-xl w-72 h-auto py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">Brand</h2>

                    <div className="flex flex-col items-center mt-6 -mx-2">
                        <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
                        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">john@example.com</p>
                    </div>

                    <div className="flex flex-col justify-between flex-1 mt-6">
                        <nav>
                            <Link to={"#"} className="flex items-center px-4 py-2 text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200" >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Dashboard</span>
                            </Link>

                            <Link to={"/"} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Accounts</span>
                            </Link>

                            <Link to={"#"} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Tickets</span>
                            </Link>

                            <Link to={"#"} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span className="mx-4 font-medium">Settings</span>
                            </Link>
                        </nav>

                    </div>

                </div>

                <div className='md:col-span-5 md:justify-center text-xl'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque dignissimos, natus nobis ea dolores ipsum dolorem illum rerum sint veritatis quos, eius optio neque est ut similique repudiandae eaque!</h1>

                    <br /><br />




                    <div>
                        <input type="checkbox" className="read-more-state" id="post" />

                        <ul className="read-more-wrap">
                            <li>lorem</li>
                            <li>lorem 2</li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                <span className="read-more-target"> Doloribus quae nesciunt magnam corrupti. Atque facere, eveniet hic quaerat autem voluptatem neque iusto incidunt? Labore quae facilis, officiis reprehenderit earum odit!
                                </span>
                            </li>
                        </ul>

                        <p><label for="post" className="text-white bg-finered btn-rounded read-more-trigger"></label></p>
                    </div>




                    <ReadMoreReadLess limit={50}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, tempore quod nisi non culpa neque provident quo obcaecati dignissimos corrupti, laboriosam maiores libero molestiae minima, esse in cumque deleniti ratione?
                        Taye Kehinde Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam perferendis itaque illo, obcaecati temporibus, sequi sunt, quaerat debitis reprehenderit quam vero quos repudiandae velit accusamus laborum voluptatem harum blanditiis!
                    </ReadMoreReadLess>


                    <br /> <br />

                    <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
                        <div className="tk-card hover:shadow-xl dark:text-gray-800">
                            <img src="assets/food1.jpg" alt="food" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Ewa Goin</span>
                                <span className="block text-gray-500 text-sm">Recipe by Elgold</span>
                            </div>
                            <div className="tk-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <i>25 mins</i>
                            </div>
                        </div>


                        <div className="tk-card hover:shadow-xl dark:text-gray-800">
                            <img src="assets/food2.jpg" alt="food" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Ewa Goin</span>
                                <span className="block text-gray-500 text-sm">Recipe by Elgold</span>
                            </div>
                            <div className="tk-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <i>25 mins</i>
                            </div>
                        </div>


                        <div className="tk-card hover:shadow-xl dark:text-gray-800">
                            <img src="assets/food3.jpg" alt="food" className="w-full h-32 sm:h-48 object-cover" />
                            <div className="m-4">
                                <span className="font-bold">Ewa Goin</span>
                                <span className="block text-gray-500 text-sm">Recipe by Elgold</span>
                            </div>
                            <div className="tk-badge">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <i>25 mins</i>
                            </div>
                        </div>

                    </div>


                    {show &&
                        <div className="mt-8 grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
                            <div className="tk-card hover:shadow-xl dark:text-gray-800">
                                <img src="assets/food1.jpg" alt="food" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Ewa Goin</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Elgold</span>
                                </div>
                                <div className="tk-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <i>25 mins</i>
                                </div>
                            </div>


                            <div className="tk-card hover:shadow-xl dark:text-gray-800">
                                <img src="assets/food2.jpg" alt="food" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Ewa Goin</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Elgold</span>
                                </div>
                                <div className="tk-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <i>25 mins</i>
                                </div>
                            </div>


                            <div className="tk-card hover:shadow-xl dark:text-gray-800">
                                <img src="assets/food3.jpg" alt="food" className="w-full h-32 sm:h-48 object-cover" />
                                <div className="m-4">
                                    <span className="font-bold">Ewa Goin</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Elgold</span>
                                </div>
                                <div className="tk-badge">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 inline-block" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <i>25 mins</i>
                                </div>
                            </div>

                        </div>

                    }
                    <div className='text-center mt-5 mb-5'>
                        <button className='btn-box  bg-fineblue text-white' type='button' onClick={() => setShow(!show)}>
                            {show === true ? 'Show Less' : 'Show More'}
                        </button>
                    </div>

                </div>


            </div>
        </Fragment >
    )
}

export default Dashboard