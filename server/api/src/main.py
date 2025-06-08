from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.core.config import origins
from src.routers import dashboard

app = FastAPI()

# ~~~~~~~ ROUTES ~~~~~~~
app.include_router(dashboard.router)
# ~~~~~~~~~~~~~~~~~~~~~~

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
