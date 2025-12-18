// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exports', () => {
  test('create: only required params', async () => {
    const responsePromise = client.exports.create({ category: 'transaction_csv' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.exports.create({
      category: 'transaction_csv',
      account_statement_bai2: {
        account_id: 'account_id',
        effective_date: '2019-12-27',
        program_id: 'program_id',
      },
      account_statement_ofx: {
        account_id: 'account_id',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      account_verification_letter: { account_number_id: 'account_number_id', balance_date: '2019-12-27' },
      balance_csv: {
        account_id: 'account_id',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
        program_id: 'program_id',
      },
      bookkeeping_account_balance_csv: {
        bookkeeping_account_id: 'bookkeeping_account_id',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
      },
      entity_csv: { status: { in: ['active'] } },
      funding_instructions: { account_number_id: 'account_number_id' },
      transaction_csv: {
        account_id: 'account_in71c4amph0vgo2qllky',
        created_at: {
          after: '2019-12-27T18:11:19.117Z',
          before: '2019-12-27T18:11:19.117Z',
          on_or_after: '2019-12-27T18:11:19.117Z',
          on_or_before: '2019-12-27T18:11:19.117Z',
        },
        program_id: 'program_id',
      },
      vendor_csv: {},
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.exports.retrieve('export_8s4m48qz3bclzje0zwh9');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.exports.list();
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
      client.exports.list(
        {
          category: { in: ['account_statement_ofx'] },
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['pending'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });
});
