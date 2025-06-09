import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

import { NewsCardComponent } from "./components/NewsCardComponent";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/news-api/news/", {
        params: { page, page_size: pageSize },
      });
      setNews(response.data);
    } catch {
      setError("Ошибка при загрузке новостей");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (news.length === pageSize) setPage((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 text-center">
      <Link
        to="/"
        className="inline-block mb-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        aria-label="Назад на главную"
      >
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <h1 className="mb-6 text-3xl font-bold">Новости</h1>

      {error && <div className="mb-6 text-red-600">{error}</div>}

      {loading ? (
        <div>Загрузка...</div>
      ) : news.length > 0 ? (
        news.map((item) => <NewsCardComponent key={item.id} news={item} />)
      ) : (
        <div>Новости пока не загружены</div>
      )}

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="rounded bg-gray-300 px-4 py-2 disabled:opacity-50"
          aria-label="Предыдущая страница"
        >
          Назад
        </button>
        <span className="px-4 py-2">Страница {page}</span>
        <button
          onClick={handleNext}
          disabled={news.length < pageSize}
          className="rounded bg-gray-300 px-4 py-2 disabled:opacity-50"
          aria-label="Следующая страница"
        >
          Вперед
        </button>
      </div>
    </div>
  );
};
