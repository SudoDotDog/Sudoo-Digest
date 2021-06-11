/**
 * @author WMXPY
 * @namespace Digest
 * @description Range
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { digestNumericRange, DigestNumericRangeResult } from '../../src';

describe('Given [DigestNumericRange] function', (): void => {

    const chance: Chance.Chance = new Chance('digest-range');

    it('should be able to digest range', (): void => {

        const start: number = chance.integer();
        const list: number[] = [
            start,
            start + 1,
        ];

        const result: DigestNumericRangeResult = digestNumericRange(list);

        expect(result).to.be.deep.equal([
            {
                start,
                end: start + 1,
                size: 2,
            },
        ]);
    });

    it('should be able to digest multiple range', (): void => {

        const start: number = chance.integer();
        const list: number[] = [
            start,
            start + 1,
            start + 3,
            start + 4,
            start + 6,
        ];

        const result: DigestNumericRangeResult = digestNumericRange(list);

        expect(result).to.be.deep.equal([
            {
                start,
                end: start + 1,
                size: 2,
            },
            {
                start: start + 3,
                end: start + 4,
                size: 2,
            },
            {
                start: start + 6,
                end: start + 6,
                size: 1,
            },
        ]);
    });
});
