// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource physicalCardProfiles', () => {
  test('create: only required params', async () => {
    const responsePromise = client.physicalCardProfiles.create({
      carrier_image_file_id: 'file_h6v7mtipe119os47ehlu',
      contact_phone: '+16505046304',
      description: 'My Card Profile',
      front_image_file_id: 'file_o6aex13wm1jcc36sgcj1',
      program_id: 'program_i2v2os4mwza1oetokh9i',
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
    const response = await client.physicalCardProfiles.create({
      carrier_image_file_id: 'file_h6v7mtipe119os47ehlu',
      contact_phone: '+16505046304',
      description: 'My Card Profile',
      front_image_file_id: 'file_o6aex13wm1jcc36sgcj1',
      program_id: 'program_i2v2os4mwza1oetokh9i',
      front_text: { line1: 'x', line2: 'x' },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.physicalCardProfiles.retrieve(
      'physical_card_profile_m534d5rn9qyy9ufqxoec',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.physicalCardProfiles.list();
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
      client.physicalCardProfiles.list(
        {
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending_creating'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = client.physicalCardProfiles.archive('physical_card_profile_m534d5rn9qyy9ufqxoec');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('clone', async () => {
    const responsePromise = client.physicalCardProfiles.clone(
      'physical_card_profile_m534d5rn9qyy9ufqxoec',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
