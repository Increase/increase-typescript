// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource realTimePaymentsRequestsForPayment', () => {
  test('create: only required params', async () => {
    const responsePromise = client.realTimePaymentsRequestsForPayment.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 100,
      debtor: {
        address: { country: 'US' },
        name: 'Ian Crease',
      },
      debtor_account_number: '987654321',
      debtor_routing_number: '101050001',
      expires_at: '2020-02-14T23:59:59Z',
      requested_execution_at: '2020-02-07T23:59:59Z',
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
    await client.realTimePaymentsRequestsForPayment.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 100,
      debtor: {
        address: {
          country: 'US',
          address_line2: 'x',
          building_number: 'x',
          city: 'x',
          postal_code: 'x',
          state: 'xx',
          street_name: 'Liberty Street',
        },
        name: 'Ian Crease',
      },
      debtor_account_number: '987654321',
      debtor_routing_number: '101050001',
      expires_at: '2020-02-14T23:59:59Z',
      requested_execution_at: '2020-02-07T23:59:59Z',
      unstructured_remittance_information: 'Invoice 29582',
      creditor_name: 'National Phonograph Company',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.realTimePaymentsRequestsForPayment.retrieve(
      'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
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
    const responsePromise = client.realTimePaymentsRequestsForPayment.list();
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
      client.realTimePaymentsRequestsForPayment.list(
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('cancel', async () => {
    const responsePromise = client.realTimePaymentsRequestsForPayment.cancel(
      'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
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
