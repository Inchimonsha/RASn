FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt pytest

COPY . .
CMD ["pytest", "--junitxml=/utils/testing/results/test-results.xml"]
