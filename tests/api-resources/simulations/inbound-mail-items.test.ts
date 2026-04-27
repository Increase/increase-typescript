// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundMailItems', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.inboundMailItems.create({ amount: 1000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.simulations.inboundMailItems.create({
      amount: 1000,
      contents_file_id: 'contents_file_id',
      lockbox_address_id: 'lockbox_address_id',
      lockbox_recipient_id: 'lockbox_3xt21ok13q19advds4t5',
    });
  });
});
