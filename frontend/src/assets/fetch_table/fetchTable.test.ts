import { fetchTable } from "./fetchTable";
import fetchMock from "jest-fetch-mock";

beforeEach(() => {
    fetchMock.resetMocks()
})


describe('fetch table', () => {

    it('returns table data when the response is ok', async () => {
        const fakeData = {
            საგნები: [
                {
                    დასახელება: 'ხელოვნური ინტელექტი', 
                    გაკვეთილები: [
                        {
                            ტიპი: 'ლექცია',
                            ლექტორი: 'გელა',
                            აუდიტორია: '103',
                            დღე: 'სამშაბათი',
                            დრო: '12:00',
                        }
                    ]
                }
            ]
        }
        fetchMock.mockResponseOnce(JSON.stringify(fakeData))

        const result = await fetchTable('user123', 'pass123')
        expect(result).toStrictEqual(fakeData)

        expect(fetchMock).toHaveBeenCalledWith('https://unimap-5vf6.onrender.com/schedule', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: 'user123', password: 'pass123'})
        }
       )
    });

    it('returns error object of 401', async () => {
        fetchMock.mockResponseOnce('', { status: 401})

        const result = await fetchTable('invalidUsername', 'invalidPassword')

        expect(result).toEqual({error: 'user not found or unauthorized (401)'})
    })

    it('returns incorrect username or password', async () => {
        fetchMock.mockResponseOnce('', {status: 404})

        const result = await fetchTable('missingUsername', 'missingPassword')

        expect(result).toEqual({error: 'incorrect id or password (404)'})
    })

    it('returns some unexpected error like 500 or something', async () => {
        fetchMock.mockResponseOnce('', {status: 500, statusText: 'server error'})

        const result = await fetchTable('user', 'pass')

        expect(result).toEqual({error: 'unexpected error: 500 server error'})
    })

    it('throws error on network failure', async () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
        fetchMock.mockRejectOnce(new Error('network is down'))

        await expect(fetchTable('user', 'pass')).rejects.toThrow('network is down')
        consoleSpy.mockRestore()
    })


})