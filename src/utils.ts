import { IFormValue } from './types'

export const INTEGER_REGEX = /^\d+$/
export const FLOAT_REGEX = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/

export const commonValidationProps = {
  required: 'Value is required',
  min: {
    value: 0,
    message: 'Value must be greater than 0',
  },
}

export const floatValidationProps = {
  ...commonValidationProps,
  pattern: {
    value: FLOAT_REGEX,
    message: 'Value must be a number',
  },
}

export const integerValidationProps = {
  ...commonValidationProps,
  pattern: {
    value: INTEGER_REGEX,
    message: 'Value must be an integer',
  },
}

export const convertValuesToNumber = (
  input: IFormValue<string>
): IFormValue<number> => {
  return {
    ...input,
    cartValue: parseFloat(input.cartValue),
    distance: parseInt(input.distance),
    amount: parseInt(input.amount),
    time: new Date(input.time),
  }
}

export const isRushTime = (time: Date): boolean => {
  const date = new Date(time)
  return date.getDay() === 5 && date.getHours() >= 15 && date.getHours() <= 19
}

export const calculateShippingFee = (
  input: IFormValue<string>
): Promise<number> => {
  const { cartValue, distance, amount, time } = convertValuesToNumber(input)
  if (isNaN(time.getTime())) {
    return Promise.reject(new Error('Invalid time'))
  }

  if (cartValue >= 200) {
    return Promise.resolve(0)
  }
  const smallOrderSurcharge = Math.max(0, 10 - cartValue)
  const baseShippingFee = smallOrderSurcharge > 0 ? smallOrderSurcharge : 0

  const distanceFee = 2 + Math.max(0, Math.ceil((distance - 1000) / 500))

  const exceedItemFee = Math.max(0, (amount - 4) * 0.5)

  const bulkItemFee = amount > 12 ? 1.2 : 0

  const rushTimeMultiplier = isRushTime(time) ? 1.2 : 1

  const total =
    (baseShippingFee + distanceFee + bulkItemFee + exceedItemFee) *
    rushTimeMultiplier

  const totalFee = total > 15 ? 15 : Math.round(total * 100) / 100

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(totalFee)
    }, 250)
  })
}
