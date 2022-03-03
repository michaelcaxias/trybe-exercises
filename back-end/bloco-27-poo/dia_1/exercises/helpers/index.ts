export const sumArrays = (...arrays: number[][]): number => {
  return arrays.reduce(
    (acc, curr) => acc.concat(curr), []).reduce((acc, curr) => acc + curr
  );
}