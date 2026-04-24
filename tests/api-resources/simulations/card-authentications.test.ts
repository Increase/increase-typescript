// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource cardAuthentications', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.cardAuthentications.create({ card_id: 'card_oubs0hwk5rn6knuecxg2' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.simulations.cardAuthentications.create({
    card_id: 'card_oubs0hwk5rn6knuecxg2',
    category: 'payment_authentication',
    device_channel: 'app',
    merchant_acceptor_id: '5665270011000168',
    merchant_category_code: '5734',
    merchant_country: 'US',
    merchant_name: 'x',
    purchase_amount: 1000,
  });
  });

  test('challengeAttempts: only required params', async () => {
    const responsePromise = client.simulations.cardAuthentications.challengeAttempts('card_payment_nd3k2kacrqjli8482ave', { one_time_code: '123456' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('challengeAttempts: required and optional params', async () => {
    const response = await client.simulations.cardAuthentications.challengeAttempts('card_payment_nd3k2kacrqjli8482ave', { one_time_code: '123456' });
  });

  test('challenges', async () => {
    const responsePromise = client.simulations.cardAuthentications.challenges('card_payment_nd3k2kacrqjli8482ave');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
