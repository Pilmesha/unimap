import { fetchOffice } from './fetchOffice'
import fetchMock from 'jest-fetch-mock'

beforeEach(() => {
    fetchMock.resetMocks()
})

describe('fetch offices', () => {
  it('returns data when the response is ok', async () => {
    fetchMock.mockResponseOnce(JSON.stringify('411'))
  

  const result = await fetchOffice('gela bela')
  expect(result).toBe('411')

  expect(fetchMock).toHaveBeenCalledWith(
    expect.stringContaining('staffFullName=gela bela')
  )
})

  it('returns null when the statuse code is 404',async () => {
    fetchMock.mockResponseOnce('', {status: 404})
    
    const result = await fetchOffice('gela bela')

    expect(result).toBeNull();
  })

  it('throws error on another http errors', async () => {
    fetchMock.mockResponseOnce('', {status: 500, statusText: 'server error'})
    await expect(fetchOffice('Error User')).rejects.toThrow('http error, status: server error')
  })

})