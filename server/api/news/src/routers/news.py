from fastapi import APIRouter
from src.models.news import NewsItem

router = APIRouter(prefix="/news")


@router.get("/", response_model=list[NewsItem])
async def get_news():
    return []
