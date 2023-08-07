import {pathsToModuleNameMapper, type JestConfigWithTsJest} from 'ts-jest';
import {defaults as tsjPreset} from 'ts-jest/presets';

import {compilerOptions} from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|@kichiyaki/react-native-barcode-generator|jsbarcode|@gorhom)',
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  fakeTimers: {
    enableGlobally: true,
  },
};

export default jestConfig;
