import * as migration_20260322_220242 from './20260322_220242';
import * as migration_20260323_003001 from './20260323_003001';
import * as migration_20260323_010144 from './20260323_010144';

export const migrations = [
  {
    up: migration_20260322_220242.up,
    down: migration_20260322_220242.down,
    name: '20260322_220242',
  },
  {
    up: migration_20260323_003001.up,
    down: migration_20260323_003001.down,
    name: '20260323_003001',
  },
  {
    up: migration_20260323_010144.up,
    down: migration_20260323_010144.down,
    name: '20260323_010144'
  },
];
