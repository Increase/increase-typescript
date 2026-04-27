// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardAuthorizations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.cardAuthorizations.create({ amount: 1000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.simulations.cardAuthorizations.create({
      amount: 1000,
      authenticated_card_payment_id: 'authenticated_card_payment_id',
      card_id: 'card_oubs0hwk5rn6knuecxg2',
      decline_reason: 'account_closed',
      digital_wallet_token_id: 'digital_wallet_token_id',
      event_subscription_id: 'event_subscription_001dzz0r20rcdxgb013zqb8m04g',
      merchant_acceptor_id: '5665270011000168',
      merchant_category_code: '5734',
      merchant_city: 'New York',
      merchant_country: 'US',
      merchant_descriptor: 'AMAZON.COM',
      merchant_state: 'NY',
      network_details: { visa: { stand_in_processing_reason: 'issuer_error' } },
      network_risk_score: 0,
      physical_card_id: 'physical_card_id',
      processing_category: {
        category: 'account_funding',
        refund: { original_card_payment_id: 'original_card_payment_id' },
      },
      terminal_id: 'x',
    });
  });
});
