/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/28 09:37
 * @Email: fred.zhen@gmail.com
 */

// Validation APIs
type Rule = (value: string) => Status
export interface Status {
  valid: boolean
  message?: string
}

// Validation function

export const validate = (value: string, rules: Rule[]): Status => {
  for (const rule of rules) {
    const result = rule(value)
    if (!result.valid) {
      return result
    }
  }
  return {
    valid: true
  }
}

// Rules as the following:
export const required: Rule = (value: string): Status => {
  const result = Boolean(value);
  return {
    valid: result,
    message: result ? undefined: 'This field is required.'
  }
};

export function length({min, max}: {min: number, max: number}): Rule {
  return function (value: string): Status {
    const result = Boolean(value.length >= min && value.length <= max);

    return {
      valid: result,
      message: result ? undefined: `This field must be between ${min} and ${max}`
    }
  }
}

// local test: "npx ts-node-esm src/utils/validation.ts"
console.log(
  validate('', [required]),
  validate('username', [required]),
  validate('a', [length({min: 5, max: 10})]),
  validate('aaaaaaaaaaaa', [length({min: 5, max: 10})]),
  validate('username', [length({min: 5, max: 10})]),
)
