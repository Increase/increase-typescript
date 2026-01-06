// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundACHTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.inboundACHTransfers.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
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
    const response = await client.simulations.inboundACHTransfers.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      addenda: {
        category: 'freeform',
        freeform: { entries: [{ payment_related_information: 'x' }] },
      },
      company_descriptive_date: 'x',
      company_discretionary_data: 'x',
      company_entry_description: 'x',
      company_id: 'x',
      company_name: 'x',
      receiver_id_number: 'x',
      receiver_name: 'x',
      resolve_at: '2019-12-27T18:11:19.117Z',
      standard_entry_class_code: 'corporate_credit_or_debit',
    });
  });
});
