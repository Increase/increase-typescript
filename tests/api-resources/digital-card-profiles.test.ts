// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource digitalCardProfiles', () => {
  test('create: only required params', async () => {
    const responsePromise = client.digitalCardProfiles.create({
      app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
      background_image_file_id: 'file_1ai913suu1zfn1pdetru',
      card_description: 'MyBank Signature Card',
      description: 'My Card Profile',
      issuer_name: 'MyBank',
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
    const response = await client.digitalCardProfiles.create({
      app_icon_file_id: 'file_8zxqkwlh43wo144u8yec',
      background_image_file_id: 'file_1ai913suu1zfn1pdetru',
      card_description: 'MyBank Signature Card',
      description: 'My Card Profile',
      issuer_name: 'MyBank',
      contact_email: 'user@example.com',
      contact_phone: '+18885551212',
      contact_website: 'https://example.com',
      text_color: {
        blue: 59,
        green: 43,
        red: 26,
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.digitalCardProfiles.retrieve('digital_card_profile_s3puplu90f04xhcwkiga');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.digitalCardProfiles.list();
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
      client.digitalCardProfiles.list(
        {
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = client.digitalCardProfiles.archive('digital_card_profile_s3puplu90f04xhcwkiga');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('clone', async () => {
    const responsePromise = client.digitalCardProfiles.clone('digital_card_profile_s3puplu90f04xhcwkiga', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
