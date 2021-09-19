# Sudoo-Digest

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Digest/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Digest/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Digest/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Digest)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fdigest.svg)](https://www.npmjs.com/package/@sudoo/digest)
[![downloads](https://img.shields.io/npm/dm/@sudoo/digest.svg)](https://www.npmjs.com/package/@sudoo/digest)

Digest Utils

## Install

```sh
yarn add @sudoo/digest
# Or
npm install @sudoo/digest --save
```

## Usage

### Digest Numeric Range

```ts
import { digestNumericRange } from "@sudoo/digest";

const result: DigestNumericRangeResult = digestNumericRange([
    1, 2, 3, 5, 6, 8,
]); // [1-3, 5-6, 8]
```
