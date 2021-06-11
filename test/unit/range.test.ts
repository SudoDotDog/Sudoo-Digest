/**
 * @author WMXPY
 * @namespace Digest
 * @description Range
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { digestNumericRange, DigestNumericRangeElement } from '../../src';

describe('Given [DigestNumericRange] function', (): void => {

    const chance: Chance.Chance = new Chance('digest-range');

    it('should be able to digest range', (): void => {

        const start: number = chance.integer();
        const list: number[] = [
            start,
            start + 1,
        ];

        const result: DigestNumericRangeElement[] = digestNumericRange(list);

        expect(result).to.be.deep.equal([
            {
                start,
                end: start + 1,
                size: 2,
            },
        ]);
    });
});
