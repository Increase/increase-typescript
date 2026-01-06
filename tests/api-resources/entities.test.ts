// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Increase from 'increase';

const client = new Increase({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('create: only required params', async () => {
    const responsePromise = client.entities.create({ structure: 'corporation' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.entities.create({
      structure: 'corporation',
      corporation: {
        address: { city: 'New York', line1: '33 Liberty Street', state: 'NY', zip: '10045', line2: 'x' },
        beneficial_owners: [
          {
            individual: {
              address: {
                city: 'New York',
                country: 'x',
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
                passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
              },
              name: 'Ian Crease',
              confirmed_no_us_tax_id: true,
            },
            prongs: ['control'],
            company_title: 'CEO',
          },
        ],
        name: 'National Phonograph Company',
        tax_identifier: '602214076',
        beneficial_ownership_exemption_reason: 'regulated_financial_institution',
        email: 'dev@stainless.com',
        incorporation_state: 'NY',
        industry_code: 'x',
        website: 'https://example.com',
      },
      description: 'x',
      government_authority: {
        address: { city: 'x', line1: 'x', state: 'x', zip: 'x', line2: 'x' },
        authorized_persons: [{ name: 'x' }],
        category: 'municipality',
        name: 'x',
        tax_identifier: 'x',
        website: 'website',
      },
      joint: {
        individuals: [
          {
            address: { city: 'x', line1: 'x', state: 'x', zip: 'x', line2: 'x' },
            date_of_birth: '2019-12-27',
            identification: {
              method: 'social_security_number',
              number: 'xxxx',
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
              passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
            },
            name: 'x',
            confirmed_no_us_tax_id: true,
          },
        ],
      },
      natural_person: {
        address: { city: 'x', line1: 'x', state: 'x', zip: 'x', line2: 'x' },
        date_of_birth: '2019-12-27',
        identification: {
          method: 'social_security_number',
          number: 'xxxx',
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
          passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
        },
        name: 'x',
        confirmed_no_us_tax_id: true,
      },
      risk_rating: { rated_at: '2019-12-27T18:11:19.117Z', rating: 'low' },
      supplemental_documents: [{ file_id: 'file_makxrc67oh9l6sg7w9yc' }],
      terms_agreements: [{ agreed_at: '2019-12-27T18:11:19.117Z', ip_address: 'x', terms_url: 'x' }],
      third_party_verification: { reference: 'x', vendor: 'alloy' },
      trust: {
        address: { city: 'x', line1: 'x', state: 'x', zip: 'x', line2: 'x' },
        category: 'revocable',
        name: 'x',
        trustees: [
          {
            structure: 'individual',
            individual: {
              address: { city: 'x', line1: 'x', state: 'x', zip: 'x', line2: 'x' },
              date_of_birth: '2019-12-27',
              identification: {
                method: 'social_security_number',
                number: 'xxxx',
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
                passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
              },
              name: 'x',
              confirmed_no_us_tax_id: true,
            },
          },
        ],
        formation_document_file_id: 'formation_document_file_id',
        formation_state: 'x',
        grantor: {
          address: { city: 'x', line1: 'x', state: 'x', zip: 'x', line2: 'x' },
          date_of_birth: '2019-12-27',
          identification: {
            method: 'social_security_number',
            number: 'xxxx',
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
            passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
          },
          name: 'x',
          confirmed_no_us_tax_id: true,
        },
        tax_identifier: 'x',
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.entities.retrieve('entity_n8y8tnk2p9339ti393yi');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.entities.update('entity_n8y8tnk2p9339ti393yi', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.entities.list();
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
      client.entities.list(
        {
          created_at: {
            after: '2019-12-27T18:11:19.117Z',
            before: '2019-12-27T18:11:19.117Z',
            on_or_after: '2019-12-27T18:11:19.117Z',
            on_or_before: '2019-12-27T18:11:19.117Z',
          },
          cursor: 'cursor',
          idempotency_key: 'x',
          limit: 1,
          status: { in: ['active'] },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Increase.NotFoundError);
  });

  test('archive', async () => {
    const responsePromise = client.entities.archive('entity_n8y8tnk2p9339ti393yi');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archiveBeneficialOwner: only required params', async () => {
    const responsePromise = client.entities.archiveBeneficialOwner('entity_n8y8tnk2p9339ti393yi', {
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archiveBeneficialOwner: required and optional params', async () => {
    const response = await client.entities.archiveBeneficialOwner('entity_n8y8tnk2p9339ti393yi', {
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
    });
  });

  test('confirm', async () => {
    const responsePromise = client.entities.confirm('entity_n8y8tnk2p9339ti393yi', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createBeneficialOwner: only required params', async () => {
    const responsePromise = client.entities.createBeneficialOwner('entity_n8y8tnk2p9339ti393yi', {
      beneficial_owner: {
        individual: {
          address: { city: 'New York', country: 'US', line1: '33 Liberty Street' },
          date_of_birth: '1970-01-31',
          identification: { method: 'social_security_number', number: '078051120' },
          name: 'Ian Crease',
        },
        prongs: ['control'],
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

  test('createBeneficialOwner: required and optional params', async () => {
    const response = await client.entities.createBeneficialOwner('entity_n8y8tnk2p9339ti393yi', {
      beneficial_owner: {
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
            passport: { country: 'x', expiration_date: '2019-12-27', file_id: 'file_id' },
          },
          name: 'Ian Crease',
          confirmed_no_us_tax_id: true,
        },
        prongs: ['control'],
        company_title: 'CEO',
      },
    });
  });

  test('updateAddress: only required params', async () => {
    const responsePromise = client.entities.updateAddress('entity_n8y8tnk2p9339ti393yi', {
      address: { city: 'New York', line1: '33 Liberty Street', state: 'NY', zip: '10045' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateAddress: required and optional params', async () => {
    const response = await client.entities.updateAddress('entity_n8y8tnk2p9339ti393yi', {
      address: { city: 'New York', line1: '33 Liberty Street', state: 'NY', zip: '10045', line2: 'Unit 2' },
    });
  });

  test('updateBeneficialOwnerAddress: only required params', async () => {
    const responsePromise = client.entities.updateBeneficialOwnerAddress('entity_n8y8tnk2p9339ti393yi', {
      address: { city: 'New York', country: 'US', line1: '33 Liberty Street' },
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateBeneficialOwnerAddress: required and optional params', async () => {
    const response = await client.entities.updateBeneficialOwnerAddress('entity_n8y8tnk2p9339ti393yi', {
      address: {
        city: 'New York',
        country: 'US',
        line1: '33 Liberty Street',
        line2: 'Unit 2',
        state: 'NY',
        zip: '10045',
      },
      beneficial_owner_id: 'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
    });
  });

  test('updateIndustryCode: only required params', async () => {
    const responsePromise = client.entities.updateIndustryCode('entity_n8y8tnk2p9339ti393yi', {
      industry_code: '5132',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('updateIndustryCode: required and optional params', async () => {
    const response = await client.entities.updateIndustryCode('entity_n8y8tnk2p9339ti393yi', {
      industry_code: '5132',
    });
  });
});
