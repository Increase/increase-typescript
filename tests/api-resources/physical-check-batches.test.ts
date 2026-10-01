// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource physicalCheckBatches', () => {
  test('create: only required params', async () => {
    const responsePromise = client.physicalCheckBatches.create({
      mailing_address: {
        city: 'New York',
        line1: '33 Liberty Street',
        name: 'Ian Crease',
        postal_code: '10045',
        state: 'NY',
      },
      return_address: {
        city: 'New York',
        line1: '33 Liberty Street',
        name: 'National Phonograph Company',
        postal_code: '10045',
        state: 'NY',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    await client.physicalCheckBatches.create({
      mailing_address: {
        city: 'New York',
        line1: '33 Liberty Street',
        name: 'Ian Crease',
        postal_code: '10045',
        state: 'NY',
        line2: 'line2',
        phone: 'x',
      },
      return_address: {
        city: 'New York',
        line1: '33 Liberty Street',
        name: 'National Phonograph Company',
        postal_code: '10045',
        state: 'NY',
        line2: 'line2',
        phone: 'x',
      },
      shipping_method: 'usps_first_class',
    });
  });

  test('cancel', async () => {
    const responsePromise = client.physicalCheckBatches.cancel('physical_check_batch_yzdwjhdbw0in6191whce');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('complete', async () => {
    const responsePromise = client.physicalCheckBatches.complete('physical_check_batch_yzdwjhdbw0in6191whce');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
