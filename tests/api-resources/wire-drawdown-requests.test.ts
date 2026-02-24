// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wireDrawdownRequests', () => {
  test('create: only required params', async () => {
    const responsePromise = client.wireDrawdownRequests.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 10000,
      creditor_address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
      },
      creditor_name: 'National Phonograph Company',
      debtor_address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
      },
      debtor_name: 'Ian Crease',
      unstructured_remittance_information: 'Invoice 29582',
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
    const response = await client.wireDrawdownRequests.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 10000,
      creditor_address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
        line2: 'x',
        postal_code: '10045',
        state: 'NY',
      },
      creditor_name: 'National Phonograph Company',
      debtor_address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
        line2: 'x',
        postal_code: '10045',
        state: 'NY',
      },
      debtor_name: 'Ian Crease',
      unstructured_remittance_information: 'Invoice 29582',
      debtor_account_number: '987654321',
      debtor_external_account_id: 'debtor_external_account_id',
      debtor_routing_number: '101050001',
      end_to_end_identification: 'x',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.wireDrawdownRequests.retrieve(
      'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
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
    const responsePromise = client.wireDrawdownRequests.list();
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
      client.wireDrawdownRequests.list(
        {
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending_submission'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
