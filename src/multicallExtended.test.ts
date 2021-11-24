import { MulticallExtended } from './multicallExtended'

describe('MulticallExtended', () => {
  it('works with no validation', () => {
    const calldata = MulticallExtended.encodeMulticall('0x01')
    expect(calldata).toBe('0x01')
  })

  it('works with deadline', () => {
    const calldata = MulticallExtended.encodeMulticall('0x01', 123)
    expect(calldata).toBe(
      '0x5ae401dc000000000000000000000000000000000000000000000000000000000000007b00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000'
    )
  })

  it('works with deadline', () => {
    const calldata = MulticallExtended.encodeMulticall(
      '0x01',
      '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    )
    expect(calldata).toBe(
      '0x1f0464d1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000'
    )
  })
})
