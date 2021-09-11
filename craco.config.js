module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
    jest: {
      configure: {
        preset: 'ts-jest',
        verbose: true,
        transform: {
          '^.+\\.ts?$': 'ts-jest',
          '^.+\\.tsx?$': 'ts-jest',
        },
        globals: {
          'ts-jest': {
            isolatedModules: true,
            diagnostics: false,
            autoMapModuleNames: true,
          },
        },
        testMatch: ['**/?(*.)+(spec|test).[tj]s'],
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
        moduleFileExtensions: ['js', 'ts'],
      },
    },
  },
};
