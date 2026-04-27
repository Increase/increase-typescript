// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fileLinks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.fileLinks.create({ file_id: 'file_makxrc67oh9l6sg7w9yc' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.fileLinks.create({
      file_id: 'file_makxrc67oh9l6sg7w9yc',
      expires_at: '2019-12-27T18:11:19.117Z',
    });
  });
});
