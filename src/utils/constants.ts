/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/17 12:11
 * @Email: fred.zhen@gmail.com
 */

// Using 'as const' and typeof eliminating repetition in code
export const periods = ["Today", "This Week", "This Month"] as const;

export type Period = typeof periods[number];

export const serverPort: number = 5101;
export const apiUrl: string = '/api';
