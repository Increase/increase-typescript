// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource supplementalDocuments', () => {
  test('create: only required params', async () => {
    const responsePromise = client.supplementalDocuments.create({
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
      file_id: 'file_makxrc67oh9l6sg7w9yc',
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
    const response = await client.supplementalDocuments.create({
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
      file_id: 'file_makxrc67oh9l6sg7w9yc',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.supplementalDocuments.list({ entity_id: 'entity_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.supplementalDocuments.list({
      entity_id: 'entity_id',
      cursor: 'cursor',
      idempotency_key: 'x',
      limit: 1,
    });
  });
});
