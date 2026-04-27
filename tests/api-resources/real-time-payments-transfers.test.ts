// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource realTimePaymentsTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.realTimePaymentsTransfers.create({
      amount: 100,
      creditor_name: 'Ian Crease',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
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
    const response = await client.realTimePaymentsTransfers.create({
      amount: 100,
      creditor_name: 'Ian Crease',
      source_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      unstructured_remittance_information: 'Invoice 29582',
      account_number: '987654321',
      debtor_name: 'debtor_name',
      external_account_id: 'external_account_id',
      require_approval: true,
      routing_number: '101050001',
      ultimate_creditor_name: 'ultimate_creditor_name',
      ultimate_debtor_name: 'ultimate_debtor_name',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.realTimePaymentsTransfers.retrieve(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
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
    const responsePromise = client.realTimePaymentsTransfers.list();
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
      client.realTimePaymentsTransfers.list(
        {
          account_id: 'account_id',
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          external_account_id: 'external_account_id',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending_approval'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('approve', async () => {
    const responsePromise = client.realTimePaymentsTransfers.approve(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
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
    const responsePromise = client.realTimePaymentsTransfers.cancel(
      'real_time_payments_transfer_iyuhl5kdn7ssmup83mvq',
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
