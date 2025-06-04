import React from 'react';
import { clamp } from '../../utils';

interface Options {
  min?: number;
  max?: number;
}
export default function useCounter(
  startingValue: number,
  { max = Infinity, min = -Infinity }: Options
) {
  if (startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }
  if (startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = React.useCallback(() => {
    setCount((c) => Math.min(max, c + 1));
  }, [max]);

  const decrement = React.useCallback(() => {
    setCount((c) => Math.max(min, c - 1));
  }, [min]);

  const set = React.useCallback(
    (value: number) => {
      setCount(clamp(value, min, max));
    },
    [max, min]
  );

  const reset = React.useCallback(() => {
    setCount(startingValue);
  }, [startingValue]);

  return [count, { increment, decrement, set, reset }] as const;
}
