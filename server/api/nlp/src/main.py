from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from functools import lru_cache

from src.core.config import origins
from src.routers import nlp, dashboard
from src.services.nlp.service import NLPService


@lru_cache()
def get_nlp_service():
    return NLPService()


app = FastAPI()

# ~~~~~~~ ROUTES ~~~~~~~
app.include_router(nlp.router, prefix="/api")
app.include_router(dashboard.router, prefix="/api")
# ~~~~~~~~~~~~~~~~~~~~~~

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
