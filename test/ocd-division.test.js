import { getStateId, getCityId } from '@/utils/ocd-division'

describe('OCD Division', () => {
  test('returns a formatted OCD ID given an address object', () => {
    const addressObject = {
      number: '20',
      street: 'Jay',
      type: 'St',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201'
    }
    const stateId = 'ocd-division/country:us/state:ny'
    const cityId = 'ocd-division/country:us/state:ny/place:brooklyn'
    expect(getStateId(addressObject)).toBe(stateId)
    expect(getCityId(addressObject)).toBe(cityId)
  })
})
