// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({ apiKey: 'My API Key', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource cardPurchaseSupplements', () => {
  test('create: only required params', async () => {
    const responsePromise = client.simulations.cardPurchaseSupplements.create({ transaction_id: 'transaction_uyrp7fld2ium70oa7oi' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.simulations.cardPurchaseSupplements.create({
    transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
    invoice: {
    discount_amount: 100,
    duty_tax_amount: 200,
    order_date: '2023-07-20',
    shipping_amount: 300,
    shipping_destination_country_code: 'US',
    shipping_destination_postal_code: '10045',
    shipping_source_postal_code: '10045',
    shipping_tax_amount: 400,
    shipping_tax_rate: '0.2',
    unique_value_added_tax_invoice_reference: '12302',
  },
    line_items: [{
    discount_amount: 0,
    item_commodity_code: '001',
    item_descriptor: 'Coffee',
    item_quantity: '1',
    product_code: '101',
    sales_tax_amount: 0,
    sales_tax_rate: '-16699',
    total_amount: 500,
    unit_cost: '5',
    unit_of_measure_code: 'NMB',
  }],
  });
  });
});
