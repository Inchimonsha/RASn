import { Link } from "react-router-dom";
import { Brain, BookOpen, Trophy, Newspaper, ArrowRight } from "lucide-react";

import { useAppSelector, useAppDispatch } from "../../../hooks/redux";

import { FeatureCardComponent } from "./components/FeatureCardComponent";

export default function HomePage() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <BookOpen className="h-20 w-20 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Классифицируйте новостные статьи
        </h1>
        <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
          RASn — система для обработки текстовых данных (новостных статей) с
          использованием нейронной NLP-модели для классификации тем.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="transition-shadow transition-transform duration-300 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50">
          <Link to="/news">
            <FeatureCardComponent
              icon={Newspaper}
              title="Будьте в курсе"
              description="Просматривайте новости с разных источников."
            />
          </Link>
        </div>
        <div className="transition-shadow transition-transform duration-300 rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50">
          <Link to="/classificator">
            <FeatureCardComponent
              icon={BookOpen}
              title="Классификация новостей"
              description="Делайте классификацию новостных статей."
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
