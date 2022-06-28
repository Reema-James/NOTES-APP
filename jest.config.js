module.exports = {
    "preset": "jest-preset-angular",
    
    "testPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        // "<rootDir>/cypress/",
        "<rootDir>/src/test.ts",
    ],
    "testMatch": [
        '<rootDir>/src/**/groups.component.spec.ts'
      ],
      "setupFilesAfterEnv": [
        "<rootDir>/src/setup-jest.ts"
      ]

};  