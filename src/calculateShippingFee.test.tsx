import { calculateShippingFee, isRushTime } from './utils'

describe('calculateShippingFee', () => {
  it('should return 0 for cart values over 200', async () => {
    const input = {
      cartValue: '250',
      distance: '1500',
      amount: '5',
      time: new Date('2024-01-31T15:00:00'),
    }
    const fee = await calculateShippingFee(input)
    expect(fee).toBe(0)
  })

  it('should mock non-rush time outside rush hours', () => {
    const nonRushTime = new Date('2024-01-31T12:00:00')
    expect(isRushTime(nonRushTime)).toBe(false)
  })
})

it('should calculate base fee, distance fee, and exceed item fee correctly', async () => {
  const input = {
    cartValue: '80',
    distance: '2500',
    amount: '6',
    time: new Date('2024-01-31T14:00:00'),
  }
  const fee = await calculateShippingFee(input)
  expect(fee).toBe(6)
})

it('should apply bulk item fee for large amounts', async () => {
  const input = {
    cartValue: '100',
    distance: '1000',
    amount: '15',
    time: new Date('2024-01-31T14:00:00'),
  }
  const fee = await calculateShippingFee(input)
  expect(fee).toBe(8.7)
})

it('should apply rush time multiplier during rush hours', async () => {
  const input = {
    cartValue: '50',
    distance: '1000',
    amount: '4',
    time: new Date('2024-01-31T16:30:00'),
  }
  const fee = await calculateShippingFee(input)
  expect(fee).toBe(2)
})

it('should cap the total fee at 15', async () => {
  const input = {
    cartValue: '10',
    distance: '4000',
    amount: '20',
    time: new Date('2024-01-31T16:00:00'),
  }
  const fee = await calculateShippingFee(input)
  expect(fee).toBe(15)
})

it('should handle invalid input types', async () => {
  const input = {
    cartValue: 'abc',
    distance: 'xyz',
    amount: '123',
    time: new Date('invalid-time'),
  }
  await expect(calculateShippingFee(input)).rejects.toThrow('Invalid time')
})

it('should not mock rush time during rush hours', () => {
  const rushTime = new Date('2024-01-31T16:30:00')
  expect(isRushTime(rushTime)).toBe(false)
})

it('should mock rush time during rush hours in Friday', () => {
  const rushTime = new Date('2024-02-02T16:30:00')
  expect(isRushTime(rushTime)).toBe(true)
})

afterAll(() => {
  jest.runAllTimers()
})
