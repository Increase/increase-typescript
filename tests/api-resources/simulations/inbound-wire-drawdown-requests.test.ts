// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundWireDrawdownRequests', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.inboundWireDrawdownRequests.create({
      amount: 10000,
      creditor_account_number: '987654321',
      creditor_routing_number: '101050001',
      currency: 'USD',
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
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
    const response = await client.simulations.inboundWireDrawdownRequests.create({
      amount: 10000,
      creditor_account_number: '987654321',
      creditor_routing_number: '101050001',
      currency: 'USD',
      recipient_account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      creditor_address_line1: '33 Liberty Street',
      creditor_address_line2: 'New York, NY, 10045',
      creditor_address_line3: 'x',
      creditor_name: 'Ian Crease',
      debtor_account_number: '987654321',
      debtor_address_line1: '33 Liberty Street',
      debtor_address_line2: 'New York, NY, 10045',
      debtor_address_line3: 'x',
      debtor_name: 'Ian Crease',
      debtor_routing_number: '101050001',
      end_to_end_identification: 'x',
      instruction_identification: 'x',
      unique_end_to_end_transaction_reference: 'x',
      unstructured_remittance_information: 'x',
    });
  });
});
