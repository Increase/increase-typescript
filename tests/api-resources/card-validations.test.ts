// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardValidations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cardValidations.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      card_token_id: 'outbound_card_token_zlt0ml6youq3q7vcdlg0',
      merchant_category_code: '1234',
      merchant_city_name: 'New York',
      merchant_name: 'Acme Corp',
      merchant_postal_code: '10045',
      merchant_state: 'NY',
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
    const response = await client.cardValidations.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      card_token_id: 'outbound_card_token_zlt0ml6youq3q7vcdlg0',
      merchant_category_code: '1234',
      merchant_city_name: 'New York',
      merchant_name: 'Acme Corp',
      merchant_postal_code: '10045',
      merchant_state: 'NY',
      cardholder_first_name: 'Dee',
      cardholder_last_name: 'Hock',
      cardholder_middle_name: 'Ward',
      cardholder_postal_code: '10045',
      cardholder_street_address: '33 Liberty Street',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.cardValidations.retrieve('outbound_card_validation_qqlzagpc6v1x2gcdhe24');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.cardValidations.list();
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
      client.cardValidations.list(
        {
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
          status: { in: ['requires_attention'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
