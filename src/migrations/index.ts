import * as migration_20260322_220242 from './20260322_220242';
import * as migration_20260323_174011 from './20260323_174011';

export const migrations = [
  {
    up: migration_20260322_220242.up,
    down: migration_20260322_220242.down,
    name: '20260322_220242',
  },
  {
    up: migration_20260323_174011.up,
    down: migration_20260323_174011.down,
    name: '20260323_174011'
  },
];
