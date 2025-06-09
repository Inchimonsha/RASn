import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setTheme } from "./store/slices/themeSlice";

import { RootLayout } from "./features/layouts/RootLayout";

import HomePage from "./features/pages/home/HomePage";
import { NewsPage } from "./features/pages/news/NewsPage";
import { TextClassifier } from "./features/pages/classificator/TextClassifier";
import { NotFoundPage } from "./features/pages/extra/NotFoundPage";

import "./styles/App.css";

function App() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(setTheme("dark"));
    }
  }, [dispatch]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="classificator" element={<TextClassifier />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
