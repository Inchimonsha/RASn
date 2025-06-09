import spacy
from transformers import pipeline
import nltk


class NLPService:
    def __init__(self):
        tpm_name = "distilbert-base-uncased-finetuned-sst-2-english"

        try:
            nltk.data.find('corpora/stopwords')
        except LookupError:
            nltk.download('stopwords')

        self.stop_words = set(nltk.corpus.stopwords.words('russian'))

        self.spacy_nlp = spacy.load("ru_core_news_md")

        self.classifier = pipeline("text-classification",
                                   model=tpm_name,
                                   device=-1)  # -1 для CPU, 0 для GPU

    def __preprocess(self, text: str):
        doc = self.spacy_nlp(text.lower())
        tokens = [token.text for token in doc if token.is_alpha
                  and token.text not in self.stop_words]
        return tokens

    def classify(self, text: str):
        cleaned_text = self.__preprocess(text)
        hf_result = self.classifier(' '.join(cleaned_text))
        doc = self.spacy_nlp(text)
        categories = list(set(ent.label_ for ent in doc.ents))
        return {"hf_prediction": hf_result[0],
                "spacy_categories": categories}
