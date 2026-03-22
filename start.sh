#!/bin/sh

# Copy seed database to volume if it doesn't exist yet
if [ ! -f /data/testsitejon.db ]; then
  echo "Initializing database on volume..."
  cp /app/testsitejon.db /data/testsitejon.db
fi

# Ensure the nextjs user can write to the DB
chown nextjs:nodejs /data/testsitejon.db 2>/dev/null || true
chmod 664 /data/testsitejon.db 2>/dev/null || true

# Start the server
HOSTNAME="0.0.0.0" node server.js
