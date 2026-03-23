#!/bin/sh

# Force recreate database from build to pick up new schema
# Remove this line after initial migration is complete
if [ -f /data/.schema_version ]; then
  CURRENT_VERSION=$(cat /data/.schema_version)
else
  CURRENT_VERSION="0"
fi

BUILD_VERSION="3"

if [ "$CURRENT_VERSION" != "$BUILD_VERSION" ]; then
  echo "Schema version mismatch ($CURRENT_VERSION != $BUILD_VERSION). Recreating database..."
  rm -f /data/testsitejon.db
  cp /app/testsitejon.db /data/testsitejon.db
  echo "$BUILD_VERSION" > /data/.schema_version
  echo "Database recreated with latest schema."
else
  echo "Database schema is current (version $BUILD_VERSION)."
fi

# Ensure the nextjs user can write to the DB
chown nextjs:nodejs /data/testsitejon.db 2>/dev/null || true
chmod 664 /data/testsitejon.db 2>/dev/null || true

# Start the server
HOSTNAME="0.0.0.0" node server.js
