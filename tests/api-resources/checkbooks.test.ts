// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkbooks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.checkbooks.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      mailing_address: {
        city: 'New York',
        line1: '33 Liberty Street',
        name: 'Ian Crease',
        postal_code: '10045',
        state: 'NY',
      },
      payer: [
        { contents: 'National Phonograph Company' },
        { contents: '33 Liberty Street' },
        { contents: 'New York, NY 10045' },
      ],
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
    await client.checkbooks.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      mailing_address: {
        city: 'New York',
        line1: '33 Liberty Street',
        name: 'Ian Crease',
        postal_code: '10045',
        state: 'NY',
        line2: 'line2',
      },
      payer: [
        { contents: 'National Phonograph Company' },
        { contents: '33 Liberty Street' },
        { contents: 'New York, NY 10045' },
      ],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.checkbooks.retrieve('checkbook_7iudxhxum6vlkcjxmi8y');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.checkbooks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.checkbooks.list(
        {
          account_number_id: 'account_number_id',
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending_submission'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('stop', async () => {
    const responsePromise = client.checkbooks.stop('checkbook_7iudxhxum6vlkcjxmi8y');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
