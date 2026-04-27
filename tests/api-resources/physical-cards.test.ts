// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource physicalCards', () => {
  test('create: only required params', async () => {
    const responsePromise = client.physicalCards.create({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      cardholder: { first_name: 'Ian', last_name: 'Crease' },
      shipment: {
        address: {
          city: 'New York',
          line1: '33 Liberty Street',
          name: 'Ian Crease',
          postal_code: '10045',
          state: 'NY',
        },
        method: 'usps',
      },
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
    const response = await client.physicalCards.create({
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      cardholder: { first_name: 'Ian', last_name: 'Crease' },
      shipment: {
        address: {
          city: 'New York',
          line1: '33 Liberty Street',
          name: 'Ian Crease',
          postal_code: '10045',
          state: 'NY',
          country: 'x',
          line2: 'Unit 2',
          line3: 'x',
          phone_number: 'x',
        },
        method: 'usps',
        schedule: 'next_day',
      },
      physical_card_profile_id: 'physical_card_profile_id',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.physicalCards.retrieve('physical_card_ode8duyq5v2ynhjoharl');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: only required params', async () => {
    const responsePromise = client.physicalCards.update('physical_card_ode8duyq5v2ynhjoharl', {
      status: 'disabled',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.physicalCards.update('physical_card_ode8duyq5v2ynhjoharl', {
      status: 'disabled',
    });
  });

  test('list', async () => {
    const responsePromise = client.physicalCards.list();
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
      client.physicalCards.list(
        {
          card_id: 'card_id',
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
});
