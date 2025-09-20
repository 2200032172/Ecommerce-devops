provider "aws" {
  region = "us-east-1"  # Free tier eligible
}

resource "aws_ecr_repository" "ecommerce_repo" {
  name = "ecommerce-docker-app"
}
