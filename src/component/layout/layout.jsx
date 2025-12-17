import { Outlet, useLocation } from "react-router";
import { NavBar } from "../nav-bar";
import { Profile } from "../profile";
import LetsCollaborate from "../comman/lets-collaborate";
import { FrequentlyAskedQuestions } from "../../pages/frequenlty-asked-questions";
import { useEffect } from "react";

const PROFILE_WIDTH = 500;

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <NavBar />

      <aside
        className="
          hidden lg:block
          fixed top-10 left-0
          h-[calc(100vh-80px)]
          z-0
        "
        style={{ width: PROFILE_WIDTH }}
      >
        <Profile />
      </aside>

      <main
        className="
          min-h-screen
          pt-24
          pb-16
          px-4 sm:px-6 md:px-8
          text-gray-100
          transition-all duration-300
          lg:ml-125
        "
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
          <FrequentlyAskedQuestions />
          <LetsCollaborate />
        </div>
      </main>

      <footer
        className="
        relative
        z-50
        border-t border-white/10
        py-3
        bg-violet-700
        text-center
      "
      >
        <p className="text-sm text-white">
          © {new Date().getFullYear()} bipinvishwakarma.com. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
