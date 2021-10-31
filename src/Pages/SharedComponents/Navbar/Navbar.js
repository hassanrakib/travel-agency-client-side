import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();
    const signInSignOut = () => {
        user?.email ? logOut() : history.push('/signin')
    }
    return (
        <Popover className="absolute z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex lg:w-0 justify-start flex-1">
                        <Link to="/">
                            <span className="sr-only">Travel Agency</span>
                            <img className="h-8 w-auto sm:h-10" src="https://img.icons8.com/dotty/80/ffffff/summer.png" alt="" />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover as="nav" className="hidden md:flex space-x-10">
                        {
                            user?.email &&
                            <div className="hidden md:flex items-center">
                                <Link to="/add-package" className="text-base font-medium text-white hover:text-gray-900">
                                    Add Package
                                </Link>
                                <Link to="/my-bookings" className="ml-8 text-base font-medium text-white hover:text-gray-900">
                                    My Bookings
                                </Link>
                                <Link to="/all-bookings" className="ml-8 text-base font-medium text-white hover:text-gray-900">
                                    All Bookings
                                </Link>
                            </div>
                        }
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={signInSignOut}
                                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                {user?.email ? `${user.displayName} / Sign Out` : 'Sign In'}
                            </button>
                        </div>
                    </Popover>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://img.icons8.com/dotty/80/000000/summer.png"
                                        alt="Travel Agency"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                {
                                    user?.email &&
                                    <nav className="grid gap-y-8">
                                        <Link
                                            to='/add-package'
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <span className="text-base font-medium text-gray-900">Add Package</span>
                                        </Link>
                                        <Link
                                            to='/my-bookings'
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <span className="text-base font-medium text-gray-900">My Bookings</span>
                                        </Link>
                                        <Link
                                            to='/all-bookings'
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <span className="text-base font-medium text-gray-900">All Bookings</span>
                                        </Link>
                                    </nav>}
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <button
                                    onClick={signInSignOut}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    {user?.email ? `${user.displayName} / Sign Out` : 'Sign In'}
                                </button>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default Navbar;