// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.checkTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
      fulfillment_method: 'physical_check',
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
    const response = await client.checkTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 1000,
      fulfillment_method: 'physical_check',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      balance_check: 'full',
      check_number: 'x',
      physical_check: {
        mailing_address: {
          city: 'New York',
          line1: '33 Liberty Street',
          postal_code: '10045',
          state: 'NY',
          line2: 'x',
          name: 'Ian Crease',
          phone: '+16505046304',
        },
        memo: 'Check payment',
        recipient_name: 'Ian Crease',
        attachment_file_id: 'attachment_file_id',
        check_voucher_image_file_id: 'check_voucher_image_file_id',
        note: 'x',
        payer: [{ contents: 'x' }],
        return_address: {
          city: 'x',
          line1: 'x',
          name: 'x',
          postal_code: 'x',
          state: 'x',
          line2: 'x',
          phone: 'x',
        },
        shipping_method: 'usps_first_class',
        signature_text: 'Ian Crease',
      },
      require_approval: true,
      third_party: { recipient_name: 'x' },
      valid_until_date: '2025-12-31',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.checkTransfers.retrieve('check_transfer_30b43acfu9vw8fyc4f5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.checkTransfers.list();
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
      client.checkTransfers.list(
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
    const responsePromise = client.checkTransfers.approve('check_transfer_30b43acfu9vw8fyc4f5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel', async () => {
    const responsePromise = client.checkTransfers.cancel('check_transfer_30b43acfu9vw8fyc4f5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('stopPayment', async () => {
    const responsePromise = client.checkTransfers.stopPayment('check_transfer_30b43acfu9vw8fyc4f5', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
