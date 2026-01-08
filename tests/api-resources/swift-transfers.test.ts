// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource swiftTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.swiftTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      account_number: '987654321',
      bank_identification_code: 'ECBFDEFFTPP',
      creditor_address: {
        city: 'Frankfurt',
        country: 'DE',
        line1: 'Sonnemannstrasse 20',
      },
      creditor_name: 'Ian Crease',
      debtor_address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
      },
      debtor_name: 'National Phonograph Company',
      instructed_amount: 100,
      instructed_currency: 'USD',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      unstructured_remittance_information: 'New Swift transfer',
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
    const response = await client.swiftTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      account_number: '987654321',
      bank_identification_code: 'ECBFDEFFTPP',
      creditor_address: {
        city: 'Frankfurt',
        country: 'DE',
        line1: 'Sonnemannstrasse 20',
        line2: 'x',
        postal_code: '60314',
        state: 'x',
      },
      creditor_name: 'Ian Crease',
      debtor_address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
        line2: 'x',
        postal_code: '10045',
        state: 'NY',
      },
      debtor_name: 'National Phonograph Company',
      instructed_amount: 100,
      instructed_currency: 'USD',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      unstructured_remittance_information: 'New Swift transfer',
      require_approval: true,
      routing_number: 'x',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.swiftTransfers.retrieve('swift_transfer_29h21xkng03788zwd3fh');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.swiftTransfers.list();
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
      client.swiftTransfers.list(
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
    const responsePromise = client.swiftTransfers.approve('swift_transfer_29h21xkng03788zwd3fh');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel', async () => {
    const responsePromise = client.swiftTransfers.cancel('swift_transfer_29h21xkng03788zwd3fh');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
