// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inboundWireTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.inboundWireTransfers.create({
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
    const response = await client.simulations.inboundWireTransfers.create({
      account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
      amount: 1000,
      creditor_address_line1: 'x',
      creditor_address_line2: 'x',
      creditor_address_line3: 'x',
      creditor_name: 'x',
      debtor_address_line1: 'x',
      debtor_address_line2: 'x',
      debtor_address_line3: 'x',
      debtor_name: 'x',
      end_to_end_identification: 'x',
      instructing_agent_routing_number: 'x',
      instruction_identification: 'x',
      unique_end_to_end_transaction_reference: 'x',
      unstructured_remittance_information: 'x',
      wire_drawdown_request_id: 'wire_drawdown_request_id',
    });
  });
});
