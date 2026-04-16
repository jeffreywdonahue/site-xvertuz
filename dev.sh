#!/bin/bash
PORT="${1:-3000}"
echo "Starting dev server on port $PORT..."
npx next dev -p "$PORT" &
DEV_PID=$!
echo "$DEV_PID" > .dev-pid
echo "Dev server PID: $DEV_PID (port $PORT)"
echo "Stop with: kill $(cat .dev-pid)"
