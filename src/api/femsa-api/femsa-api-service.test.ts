import MockAdapter from 'axios-mock-adapter';

import {femsaAPI} from './femsa-api-service';

describe('femsa-api-service', () => {
  const axiosMock = new MockAdapter(femsaAPI);

  it('should return [] from /example endpoint', async () => {
    axiosMock.onGet('/example').reply(200, []);

    const {data} = await femsaAPI.get('/example');
    expect(data).toEqual([]);
  });
});
