import parse from '@/utils/parser'

describe('Parser', () => {
  test('parses an address', () => {
    const address = '20 Jay St, Brooklyn, NY 11201'
    const addressObject = {
      number: '20',
      street: 'Jay',
      type: 'St',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201'
    }
    expect(parse(address)).toMatchObject(addressObject)
  })
})
