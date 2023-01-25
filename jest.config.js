module.exports = {
  roots: ['./'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./hooks/**'],
  coverageThreshold: {
    global: {
      lines: 70
    }
  }
}
