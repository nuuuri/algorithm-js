import { getGCD } from "./getGCD";

// 최소공배수(Least Common Multiple)
export const getLCM = (num1: number, num2: number) => {
  const gcd = getGCD(num1, num2);

  return (num1 * num2) / gcd;
};
