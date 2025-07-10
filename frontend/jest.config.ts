import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
   moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^assets/(.*)$': '<rootDir>/src/assets/$1',
  '^components/(.*)$': '<rootDir>/src/components/$1',
  '^app/(.*)$': '<rootDir>/src/app/$1',
}
};

export default createJestConfig(customJestConfig);
