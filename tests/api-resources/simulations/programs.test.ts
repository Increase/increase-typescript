// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource programs', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.programs.create({ name: 'For Benefit Of' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.simulations.programs.create({
      name: 'For Benefit Of',
      bank: 'core_bank',
      lending_maximum_extendable_credit: 0,
      reserve_account_id: 'reserve_account_id',
    });
  });
});
