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

export const digestNumericRange = (target: number[]): DigestNumericRangeElement[] => {

    if (target.length === 0) {
        return [];
    }

    const result: DigestNumericRangeElement[] = [];

    let currentStart: number = -Infinity;
    let currentEnd: number = Infinity;

    for (let i = 0; i < target.length; i++) {

        currentStart = target[0];
        currentEnd = currentStart;

        while (target[i + 1] - target[i] === 1) {

            currentEnd = target[i + 1];
            i++;
        }

        result.push({

            start: currentStart,
            end: currentEnd,

            size: currentEnd - currentStart + 1,
        });
    }

    return result;
};
