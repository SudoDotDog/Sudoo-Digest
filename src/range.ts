/**
 * @author WMXPY
 * @namespace Digest
 * @description Range
 */

export type DigestNumericRangeElement = {

    readonly start: number;
    readonly end: number;

    readonly size: number;
};

export type DigestNumericRangeResult = DigestNumericRangeElement[];

export const digestNumericRange = (target: number[]): DigestNumericRangeResult => {

    if (target.length === 0) {
        return [];
    }

    const result: DigestNumericRangeResult = [];

    for (let i = 0; i < target.length; i++) {

        const start: number = target[i];
        let currentEnd: number = start;

        while (target[i + 1] - target[i] === 1) {

            currentEnd = target[i + 1];
            i++;
        }

        result.push({

            start,
            end: currentEnd,

            size: currentEnd - start + 1,
        });
    }

    return result;
};
