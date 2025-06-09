from fastapi import APIRouter, Depends
import spacy
from transformers import pipeline

from src.models.news import ArticleRequest
from src.services.nlp.service import NLPService


classifier = pipeline("text-classification",
                      model="distilbert-base-uncased-finetuned-sst-2-english")
nlp = spacy.load("ru_core_news_md")

router = APIRouter(prefix="/nlp")


def get_nlp_service():
    return NLPService()


@router.post("/classify")
async def classify_article(article: ArticleRequest,
                           nlp_service: NLPService = Depends(get_nlp_service)):
    result = nlp_service.classify(article.text)
    return result
