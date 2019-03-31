import * as parser from 'parse-address'

export default function parse(address) {
  return parser.parseLocation(address)
}
