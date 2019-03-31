import { getStateId, getCityId } from '@/utils/ocd-division'
import parse from '@/utils/parser'

describe('Generate ID', () => {
  test('generates the correct OCD Division string given an address string.', () => {
    const address = '20 Jay St, Brooklyn, NY 11201'
    const stateId = 'ocd-division/country:us/state:ny'
    const cityId = 'ocd-division/country:us/state:ny/place:brooklyn'
    expect(getStateId(parse(address))).toBe(stateId)
    expect(getCityId(parse(address))).toBe(cityId)
  })
})
