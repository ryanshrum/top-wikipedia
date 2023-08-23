import { formatDateForAPI, formatDateReadable, getYesterdayDate } from './utilities'

describe('formatDateForAPI', () => {
  test('should format date to "YYYY/MM/DD" format', () => {
    const date = new Date('2023-08-08')
    expect(formatDateForAPI(date)).toBe('2023/08/08')
  })
})

describe('formatDateReadable', () => {
  test('should format date to readable string', () => {
    const date = new Date('2023-08-08')
    expect(formatDateReadable(date)).toBe('August 8, 2023')
  })
})

describe('getYesterdayDate', () => {
  it("should return yesterday's date", () => {
    const expectedDate = new Date()
    expectedDate.setDate(expectedDate.getDate() - 1)

    const actualDate = getYesterdayDate()

    expect(actualDate).toEqual(expectedDate)
  })
})
