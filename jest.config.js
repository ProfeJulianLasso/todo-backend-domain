module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  rootDir: '.',
  roots: ['<rootDir>/tests/'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: './coverage',
  testRegex: '.*\\.spec\\.ts$',
  collectCoverageFrom: ['src/**/*.(t|j)s'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/mocks/',
    'index.ts',
    '(.*).enum.ts',
    '(.*).type.ts',
    '(.*).mock.ts',
    '(.*).interface.ts',
  ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
