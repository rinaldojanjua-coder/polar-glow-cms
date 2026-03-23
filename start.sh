#!/bin/sh

# Copy seed database ONLY if no database exists yet (first deploy)
if [ ! -f /data/testsitejon.db ]; then
  echo "No database found. Creating from seed..."
  cp /app/testsitejon.db /data/testsitejon.db
  echo "Database created."
else
  echo "Existing database found. Preserving data."
fi

# Ensure the nextjs user can write to the DB
chown nextjs:nodejs /data/testsitejon.db 2>/dev/null || true
chmod 664 /data/testsitejon.db 2>/dev/null || true

# Start the server
HOSTNAME="0.0.0.0" node server.js
