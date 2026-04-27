// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardPushTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.cardPushTransfers.create({
      business_application_identifier: 'funds_disbursement',
      card_token_id: 'outbound_card_token_zlt0ml6youq3q7vcdlg0',
      merchant_category_code: '1234',
      merchant_city_name: 'New York',
      merchant_name: 'Acme Corp',
      merchant_name_prefix: 'Acme',
      merchant_postal_code: '10045',
      merchant_state: 'NY',
      presentment_amount: { currency: 'USD', value: '1234.56' },
      recipient_name: 'Ian Crease',
      sender_address_city: 'New York',
      sender_address_line1: '33 Liberty Street',
      sender_address_postal_code: '10045',
      sender_address_state: 'NY',
      sender_name: 'Ian Crease',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
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
    const response = await client.cardPushTransfers.create({
      business_application_identifier: 'funds_disbursement',
      card_token_id: 'outbound_card_token_zlt0ml6youq3q7vcdlg0',
      merchant_category_code: '1234',
      merchant_city_name: 'New York',
      merchant_name: 'Acme Corp',
      merchant_name_prefix: 'Acme',
      merchant_postal_code: '10045',
      merchant_state: 'NY',
      presentment_amount: { currency: 'USD', value: '1234.56' },
      recipient_name: 'Ian Crease',
      sender_address_city: 'New York',
      sender_address_line1: '33 Liberty Street',
      sender_address_postal_code: '10045',
      sender_address_state: 'NY',
      sender_name: 'Ian Crease',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      merchant_legal_business_name: 'x6',
      merchant_street_address: 'merchant_street_address',
      recipient_address_city: 'recipient_address_city',
      recipient_address_line1: 'recipient_address_line1',
      recipient_address_postal_code: 'x6',
      recipient_address_state: 'x6',
      require_approval: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.cardPushTransfers.retrieve(
      'outbound_card_push_transfer_e0z9rdpamraczh4tvwye',
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
    const responsePromise = client.cardPushTransfers.list();
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
      client.cardPushTransfers.list(
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
          status: { in: ['pending_approval'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('approve', async () => {
    const responsePromise = client.cardPushTransfers.approve(
      'outbound_card_push_transfer_e0z9rdpamraczh4tvwye',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel', async () => {
    const responsePromise = client.cardPushTransfers.cancel(
      'outbound_card_push_transfer_e0z9rdpamraczh4tvwye',
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
