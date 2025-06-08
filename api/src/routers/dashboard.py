from fastapi import APIRouter

router = APIRouter(prefix="/dashboard")


@router.get("/")
async def get_message():
    return {"messages": "correct"}
