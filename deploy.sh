#!/bin/bash
set -e

ENV_VARS=$(tr '\n' ',' < .env.production)
DEPLOYMENT_NAME="auto-descriptions-web"
IMAGE_NAME="gcr.io/flyttkoll/${DEPLOYMENT_NAME}"
REGION="us-east1"

docker build -t $IMAGE_NAME .
docker push $IMAGE_NAME

gcloud run deploy $DEPLOYMENT_NAME  \
  --image $IMAGE_NAME               \
  --update-env-vars $ENV_VARS       \
  --region $REGION                  \
  --platform managed                \
  --allow-unauthenticated
gcloud run services update-traffic $DEPLOYMENT_NAME \
  --to-latest                                       \
  --platform managed
