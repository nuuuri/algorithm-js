// 최대공약수(Greatest Common Divisor)
export const getGCD = (num1: number, num2: number): number =>
  num2 > 0 ? getGCD(num2, num1 % num2) : num1;
