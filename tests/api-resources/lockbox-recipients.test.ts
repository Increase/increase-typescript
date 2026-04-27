// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource lockboxRecipients', () => {
  test('create: only required params', async () => {
    const responsePromise = client.lockboxRecipients.create({ account_id: 'account_in71c4amph0vgo2qllky', lockbox_address_id: 'lockbox_address_lw6sbzl9ol5dfd8hdml6' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.lockboxRecipients.create({
    account_id: 'account_in71c4amph0vgo2qllky',
    lockbox_address_id: 'lockbox_address_lw6sbzl9ol5dfd8hdml6',
    description: 'x',
    recipient_name: 'Ian Crease',
  });
  });

  test('retrieve', async () => {
    const responsePromise = client.lockboxRecipients.retrieve('lockbox_3xt21ok13q19advds4t5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.lockboxRecipients.update('lockbox_3xt21ok13q19advds4t5', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.lockboxRecipients.list();
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
    await expect(client.lockboxRecipients.list({
    account_id: 'account_id',
    created_at: {
    after: '2019-12-27T18:11:19.117Z',
    before: '2019-12-27T18:11:19.117Z',
    on_or_after: '2019-12-27T18:11:19.117Z',
    on_or_before: '2019-12-27T18:11:19.117Z',
  },
    cursor: 'cursor',
    idempotency_key: 'x',
    limit: 1,
    lockbox_address_id: 'lockbox_address_id',
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Increase.NotFoundError);
  });
});
