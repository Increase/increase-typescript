// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('updateValidation: only required params', async () => {
    const responsePromise = client.simulations.entities.updateValidation('entity_n8y8tnk2p9339ti393yi', {
      issues: [{ category: 'entity_tax_identifier' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateValidation: required and optional params', async () => {
    const response = await client.simulations.entities.updateValidation('entity_n8y8tnk2p9339ti393yi', {
      issues: [{ category: 'entity_tax_identifier' }],
    });
  });
});
