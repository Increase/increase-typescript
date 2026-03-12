// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource beneficialOwners', () => {
  test('create: only required params', async () => {
    const responsePromise = client.beneficialOwners.create({
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
      individual: {
        address: {
          city: 'New York',
          country: 'US',
          line1: '33 Liberty Street',
        },
        date_of_birth: '1970-01-31',
        identification: { method: 'social_security_number', number: '078051120' },
        name: 'Ian Crease',
      },
      prongs: ['control'],
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
    const response = await client.beneficialOwners.create({
      entity_id: 'entity_n8y8tnk2p9339ti393yi',
      individual: {
        address: {
          city: 'New York',
          country: 'US',
          line1: '33 Liberty Street',
          line2: 'x',
          state: 'NY',
          zip: '10045',
        },
        date_of_birth: '1970-01-31',
        identification: {
          method: 'social_security_number',
          number: '078051120',
          drivers_license: {
            expiration_date: '2019-12-27',
            file_id: 'file_id',
            state: 'x',
            back_file_id: 'back_file_id',
          },
          other: {
            country: 'x',
            description: 'x',
            file_id: 'file_id',
            back_file_id: 'back_file_id',
            expiration_date: '2019-12-27',
          },
          passport: {
            country: 'x',
            expiration_date: '2019-12-27',
            file_id: 'file_id',
          },
        },
        name: 'Ian Crease',
        confirmed_no_us_tax_id: true,
      },
      prongs: ['control'],
      company_title: 'CEO',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.beneficialOwners.retrieve('entity_beneficial_owner_vozma8szzu1sxezp5zq6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.beneficialOwners.update(
      'entity_beneficial_owner_vozma8szzu1sxezp5zq6',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: only required params', async () => {
    const responsePromise = client.beneficialOwners.list({ entity_id: 'entity_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.beneficialOwners.list({
      entity_id: 'entity_id',
      cursor: 'cursor',
      idempotency_key: 'x',
      limit: 1,
    });
  });

  test('archive', async () => {
    const responsePromise = client.beneficialOwners.archive('entity_beneficial_owner_vozma8szzu1sxezp5zq6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
