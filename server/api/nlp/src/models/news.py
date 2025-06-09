from pydantic import BaseModel


class ArticleRequest(BaseModel):
    text: str
