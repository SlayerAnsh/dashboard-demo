import React, { ReactNode } from 'react'
import Link from 'next/link'
import { SITE_PAGE, SITE_PAGES } from '@src/Utils/sitemap/pages'

interface LayoutProps {
    children?: ReactNode;
    active?: SITE_PAGE;
}
export default function Layout(props: LayoutProps) {
    const { children, active } = props

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="layout-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    {/* NAVBAR FOR MOBILE */}
                    <div className="w-full navbar bg-base-300 lg:hidden">
                        <div className="flex-none">
                            <label htmlFor="layout-drawer" className="btn btn-ghost btn-sm drawer-button lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="">
                        {children}
                    </div>
                </div>

                {/* SIDEBAR */}
                <div className="drawer-side">
                    <label htmlFor="layout-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-[#0000f5] text-white font-medium">
                        <li className={`border-white ${active === 'home' ? 'border-l-2' : 'border-l-0'}`}>
                            <Link href={SITE_PAGES.home()} passHref>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={`border-white ${active === 'about' ? 'border-l-2' : 'border-l-0'}`}>
                            <Link href={SITE_PAGES.about()} passHref>
                                <a>About</a>
                            </Link>
                        </li>
                        <li className={`border-white ${active === 'contact' ? 'border-l-2' : 'border-l-0'}`}>
                            <Link href={SITE_PAGES.contact()} passHref>
                                <a>Contact</a>
                            </Link>
                        </li>
                        <li className={`border-white ${active === 'feedback' ? 'border-l-2' : 'border-l-0'}`}>
                            <Link href={SITE_PAGES.feedback()} passHref>
                                <a>Feedback</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}