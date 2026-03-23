#!/bin/sh

# Copy seed database to volume if it doesn't exist yet
if [ ! -f /data/testsitejon.db ]; then
  echo "Initializing database on volume..."
  cp /app/testsitejon.db /data/testsitejon.db
fi

# Ensure the nextjs user can write to the DB
chown nextjs:nodejs /data/testsitejon.db 2>/dev/null || true
chmod 664 /data/testsitejon.db 2>/dev/null || true

# Run any pending migrations on the volume database
echo "Running pending migrations..."
DATABASE_URL=file:/data/testsitejon.db npx cross-env NODE_OPTIONS=--no-deprecation npx payload migrate 2>&1 || true
echo "Migrations complete."

# Start the server
HOSTNAME="0.0.0.0" node server.js
