// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource achTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.achTransfers.create({
    account_id: 'account_in71c4amph0vgo2qllky',
    amount: 100,
    statement_descriptor: 'New ACH transfer',
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
    const response = await client.achTransfers.create({
    account_id: 'account_in71c4amph0vgo2qllky',
    amount: 100,
    statement_descriptor: 'New ACH transfer',
    account_number: '987654321',
    addenda: {
    category: 'freeform',
    freeform: { entries: [{ payment_related_information: 'payment_related_information' }] },
    payment_order_remittance_advice: { invoices: [{ invoice_number: 'sq', paid_amount: 0 }] },
  },
    company_descriptive_date: 'J!',
    company_discretionary_data: 'J!',
    company_entry_description: 'J!',
    company_name: 'company_name',
    destination_account_holder: 'business',
    external_account_id: 'external_account_id',
    funding: 'checking',
    individual_id: 'individual_id',
    individual_name: 'individual_name',
    preferred_effective_date: { date: '2019-12-27', settlement_schedule: 'same_day' },
    require_approval: true,
    routing_number: '101050001',
    standard_entry_class_code: 'corporate_credit_or_debit',
    transaction_timing: 'synchronous',
  });
  });

  test('retrieve', async () => {
    const responsePromise = client.achTransfers.retrieve('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.achTransfers.list();
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
    await expect(client.achTransfers.list({
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
  }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Increase.NotFoundError);
  });

  test('approve', async () => {
    const responsePromise = client.achTransfers.approve('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel', async () => {
    const responsePromise = client.achTransfers.cancel('ach_transfer_uoxatyh3lt5evrsdvo7q');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
