import React from 'react'

function Navbar() {
  return (
    <nav className="p-4 flex font-extrabold justify-between items-center mt-2 px-8 text-sm">
        <div className="flex justify-between items-center">
            <ul className="flex space-x-2 items-center z-50">
                <li className="relative group flex justify-between items-center">
                    <a href="/hiring" className="text-black p-2 rounded">Find Designers</a>
                    <div className="h-2 w-auto">
                        <img src="/png/dropdown.png" alt="dropdown" className="mt-0.5 h-full w-auto"/>
                    </div>
                    <div>
                        <ul className="absolute left-0 hidden bg-white text-black mt-4 group-hover:block w-auto whitespace-nowrap shadow-lg rounded-custom-sm borderWidth-custom-thin p-2 border-2">
                            <li><a href="/designers" className="block px-4 py-2 rounded">Designer Search
                                <span className="block text-sm text-gray-600">Quickly find your next designer</span>
                            </a></li>
                            <li><a href="/hiring" className="block px-4 py-2 rounded">Post a Job
                                <span className="block text-sm text-gray-600">The #1 job board for design talent</span>
                            </a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="/shots/popular" className="text-black p-2 rounded">Inspiration</a></li>
                <li className="relative group flex  justify-between items-center">
                    <a href="/product-design" className="text-black p-2 rounded">Courses</a>
                    <div className="h-2 w-auto">
                        <img src="/png/dropdown.png" alt="dropdown" className="mt-0.5 h-full w-auto"/>
                    </div>
                    <div>
                        <ul className="absolute left-0 hidden bg-white text-black mt-4 group-hover:block w-auto whitespace-nowrap shadow-lg  rounded-custom-sm borderWidth-custom-thin p-2 border-2">
                            <li><a href="/ux-diploma" className="block px-4 py-2">UX Diploma
                                <span className="block text-sm text-gray-600">Learn UX design from scratch in 6 months</span>
                            </a></li>
                            <li><a href="/ui-certificate" className="block px-4 py-2">UI Certificate
                                <span className="block text-sm text-gray-600">12-week UI skill building for designers</span>
                            </a></li>
                            <li className="border-t border-gray-200"></li>
                            <li><a href="/workshops" className="block px-4 py-2">Live Workshops
                                <span className="block text-sm text-gray-600">with design professionals</span>
                            </a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="/jobs" className="text-black p-2 rounded">Jobs</a></li>
                <li><a href="/pro" className="text-black p-2 rounded">Go Pro</a></li>
            </ul>
        </div>


        <div className="h-8 w-auto">
            <a href="/">
                <img src="/png/dribble-spell.png" alt="Dribble Image" className="h-full w-auto"/>
            </a>
        </div>


        <div className="flex justify-between items-center space-x-4">
            <div className="relative">
                <div className="absolute left-0 top-0 mt-4 ml-5">
                    <img src="/png/search-icon.png" alt="" className="h-4 w-4  text-gray-200"/>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className=" pl-12 pr-24 py-3 font-medium rounded-custom-2xl bg-gray-100 focus:outline-none px-4 block w-full appearance-none leading-normal"
                />

            </div>

            <div className="flex space-x-4 justify-between items-center">
                <a className="nav-v2-dynamic__login text-gray-700 hover:text-blue-600" href="/session/new" > Log in </a>
                <a className="btn2 btn2--medium bg-black text-white px-6 py-4 rounded-custom-2xl hover:bg-blue-700" href="/signup/new" > Sign up </a>
            </div>
        </div>
</nav>
  )
}

export default Navbar

