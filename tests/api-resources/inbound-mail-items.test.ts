// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundMailItems', () => {
  test('retrieve', async () => {
    const responsePromise = client.inboundMailItems.retrieve('inbound_mail_item_q6rrg7mmqpplx80zceev');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.inboundMailItems.list();
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
      client.inboundMailItems.list(
        {
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          limit: 1,
          lockbox_address_id: 'lockbox_address_id',
          lockbox_recipient_id: 'lockbox_recipient_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('action: only required params', async () => {
    const responsePromise = client.inboundMailItems.action('inbound_mail_item_q6rrg7mmqpplx80zceev', {
      checks: [{ action: 'deposit' }, { action: 'ignore' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('action: required and optional params', async () => {
    const response = await client.inboundMailItems.action('inbound_mail_item_q6rrg7mmqpplx80zceev', {
      checks: [
        { action: 'deposit', account_id: 'account_in71c4amph0vgo2qllky' },
        { action: 'ignore', account_id: 'account_in71c4amph0vgo2qllky' },
      ],
    });
  });
});
