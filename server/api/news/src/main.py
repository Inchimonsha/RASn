from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.core.config import origins
from src.routers import news


app = FastAPI()

# ~~~~~~~ ROUTES ~~~~~~~
app.include_router(news.router, prefix="/api")
# ~~~~~~~~~~~~~~~~~~~~~~

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
