// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource interestPayments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.interestPayments.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
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
    const response = await client.simulations.interestPayments.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
      accrued_on_account_id: 'accrued_on_account_id',
      period_end: '2019-12-27T18:11:19.117Z',
      period_start: '2019-12-27T18:11:19.117Z',
    });
  });
});
