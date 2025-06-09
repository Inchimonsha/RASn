import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sun, Moon, Home, BookOpen, Newspaper } from "lucide-react";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { toggleTheme } from "../../store/slices/themeSlice";

export function NavBar() {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Newspaper className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-2" />
              <span className="font-bold text-xl text-gray-900 dark:text-white mr-2">
                RASn
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <>
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/"
                    ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 focus:ring-offset-2 transition"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-offset-2 transition"
                }`}
              >
                Главная
              </Link>
              <Link
                to="/news"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/news"
                    ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 focus:ring-offset-2 transition"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-offset-2 transition"
                }`}
              >
                Новости
              </Link>
              <Link
                to="/classificator"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/classificator"
                    ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 focus:ring-offset-2 transition"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-offset-2 transition"
                }`}
              >
                Классификатор
              </Link>
            </>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-offset-2 transition"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
