#!/bin/bash

echo "Installing dependencies..."
pnpm install

echo "Starting dev server at http://localhost:3000"
pnpm dev
