import React, { useState } from "react";
import axios from "axios";

export const TextClassifier = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("/nlp-api/nlp/classify", { text });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-left">
      <h2 className="mb-4 text-2xl font-semibold">Классификация текста</h2>

      <form onSubmit={handleSubmit} className="mb-4 dark:text-black">
        <textarea
          rows={5}
          cols={50}
          placeholder="Введите текст для классификации"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-2 rounded bg-gray-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Обработка..." : "Отправить"}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {result && (
        <>
          <h2 className="mb-4 text-2xl font-semibold">
            Результат классификации
          </h2>
          <div className="mt-6 rounded border border-gray-300 p-4 bg-gray-50 dark:text-black">
            <p>
              <strong>Метка:</strong> {result.hf_prediction.label}
            </p>
            <p>
              <strong>Уверенность:</strong>{" "}
              {(result.hf_prediction.score * 100).toFixed(2)}%
            </p>
            <p>
              <strong>Категории SpaCy:</strong>{" "}
              {result.spacy_categories.length > 0
                ? result.spacy_categories.join(", ")
                : "Не обнаружено"}
            </p>
          </div>
        </>
      )}
    </section>
  );
};
