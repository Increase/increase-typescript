// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wireTransfers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.wireTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 100,
      creditor: { name: 'Ian Crease' },
      remittance: { category: 'unstructured' },
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
    const response = await client.wireTransfers.create({
      account_id: 'account_in71c4amph0vgo2qllky',
      amount: 100,
      creditor: {
        name: 'Ian Crease',
        address: {
          unstructured: {
            line1: '33 Liberty Street',
            line2: 'New York',
            line3: 'NY 10045',
          },
        },
      },
      remittance: {
        category: 'unstructured',
        tax: {
          date: '2019-12-27',
          identification_number: 'xxxxxxxxx',
          type_code: 'xxxxx',
        },
        unstructured: { message: 'New account transfer' },
      },
      account_number: '987654321',
      debtor: {
        name: 'x',
        address: {
          unstructured: {
            line1: 'x',
            line2: 'x',
            line3: 'x',
          },
        },
      },
      external_account_id: 'external_account_id',
      inbound_wire_drawdown_request_id: 'inbound_wire_drawdown_request_id',
      require_approval: true,
      routing_number: '101050001',
      source_account_number_id: 'source_account_number_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.wireTransfers.retrieve('wire_transfer_5akynk7dqsq25qwk9q2u');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.wireTransfers.list();
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
      client.wireTransfers.list(
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
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('approve', async () => {
    const responsePromise = client.wireTransfers.approve('wire_transfer_5akynk7dqsq25qwk9q2u');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel', async () => {
    const responsePromise = client.wireTransfers.cancel('wire_transfer_5akynk7dqsq25qwk9q2u');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
