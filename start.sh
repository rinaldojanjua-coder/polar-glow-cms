#!/bin/sh

# Copy seed database to volume if it doesn't exist yet
if [ ! -f /data/testsitejon.db ]; then
  echo "Initializing database on volume..."
  cp /app/testsitejon.db /data/testsitejon.db
fi

# Start the server
HOSTNAME="0.0.0.0" node server.js
