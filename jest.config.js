// jest.config.js
export default {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    transform: {},
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    moduleFileExtensions: ['ts', 'js'],
  };
  