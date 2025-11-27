import { createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform
export const testEnvironment = 'jsdom'

/** @type {import("jest").Config} **/

export const transform = {
  ...tsJestTransformCfg,
}
export const moduleNameMapper = {
  '^@/(.*)$': '<rootDir>/$1',

}
export const setupFilesAfterEnv = ['<rootDir>/jest-setup.ts']
