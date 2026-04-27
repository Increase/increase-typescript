// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundFednowTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.inboundFednowTransfers.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
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
    const response = await client.simulations.inboundFednowTransfers.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      debtor_account_number: 'x',
      debtor_name: 'x',
      debtor_routing_number: 'xxxxxxxxx',
      unstructured_remittance_information: 'x',
    });
  });
});
