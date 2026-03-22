import * as migration_20260322_220242 from './20260322_220242';

export const migrations = [
  {
    up: migration_20260322_220242.up,
    down: migration_20260322_220242.down,
    name: '20260322_220242'
  },
];
