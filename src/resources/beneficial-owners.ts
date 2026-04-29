// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BeneficialOwners extends APIResource {
  /**
   * Create a Beneficial Owner
   *
   * @example
   * ```ts
   * const entityBeneficialOwner =
   *   await client.beneficialOwners.create({
   *     entity_id: 'entity_n8y8tnk2p9339ti393yi',
   *     individual: {
   *       address: {
   *         city: 'New York',
   *         country: 'US',
   *         line1: '33 Liberty Street',
   *       },
   *       date_of_birth: '1970-01-31',
   *       identification: {
   *         method: 'social_security_number',
   *         number: '078051120',
   *       },
   *       name: 'Ian Crease',
   *     },
   *     prongs: ['control'],
   *   });
   * ```
   */
  create(body: BeneficialOwnerCreateParams, options?: RequestOptions): APIPromise<EntityBeneficialOwner> {
    return this._client.post('/entity_beneficial_owners', { body, ...options });
  }

  /**
   * Retrieve a Beneficial Owner
   *
   * @example
   * ```ts
   * const entityBeneficialOwner =
   *   await client.beneficialOwners.retrieve(
   *     'entity_beneficial_owner_vozma8szzu1sxezp5zq6',
   *   );
   * ```
   */
  retrieve(entityBeneficialOwnerID: string, options?: RequestOptions): APIPromise<EntityBeneficialOwner> {
    return this._client.get(path`/entity_beneficial_owners/${entityBeneficialOwnerID}`, options);
  }

  /**
   * Update a Beneficial Owner
   *
   * @example
   * ```ts
   * const entityBeneficialOwner =
   *   await client.beneficialOwners.update(
   *     'entity_beneficial_owner_vozma8szzu1sxezp5zq6',
   *   );
   * ```
   */
  update(
    entityBeneficialOwnerID: string,
    body: BeneficialOwnerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EntityBeneficialOwner> {
    return this._client.patch(path`/entity_beneficial_owners/${entityBeneficialOwnerID}`, {
      body,
      ...options,
    });
  }

  /**
   * List Beneficial Owners
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const entityBeneficialOwner of client.beneficialOwners.list(
   *   { entity_id: 'entity_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BeneficialOwnerListParams,
    options?: RequestOptions,
  ): PagePromise<EntityBeneficialOwnersPage, EntityBeneficialOwner> {
    return this._client.getAPIList('/entity_beneficial_owners', Page<EntityBeneficialOwner>, {
      query,
      ...options,
    });
  }

  /**
   * Archive a Beneficial Owner
   *
   * @example
   * ```ts
   * const entityBeneficialOwner =
   *   await client.beneficialOwners.archive(
   *     'entity_beneficial_owner_vozma8szzu1sxezp5zq6',
   *   );
   * ```
   */
  archive(entityBeneficialOwnerID: string, options?: RequestOptions): APIPromise<EntityBeneficialOwner> {
    return this._client.post(path`/entity_beneficial_owners/${entityBeneficialOwnerID}/archive`, options);
  }
}

export type EntityBeneficialOwnersPage = Page<EntityBeneficialOwner>;

/**
 * Beneficial owners are the individuals who control or own 25% or more of a
 * `corporation` entity. Beneficial owners are always people, and never
 * organizations. Generally, you will need to submit between 1 and 5 beneficial
 * owners for every `corporation` entity. You should update and archive beneficial
 * owners for a corporation entity as their details change.
 */
export interface EntityBeneficialOwner {
  /**
   * The identifier of this beneficial owner.
   */
  id: string;

  /**
   * This person's role or title within the entity.
   */
  company_title: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Beneficial Owner was created.
   */
  created_at: string;

  /**
   * The identifier of the Entity to which this beneficial owner belongs.
   */
  entity_id: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * Personal details for the beneficial owner.
   */
  individual: EntityBeneficialOwner.Individual;

  /**
   * Why this person is considered a beneficial owner of the entity.
   */
  prongs: Array<'ownership' | 'control'>;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `entity_beneficial_owner`.
   */
  type: 'entity_beneficial_owner';
}

export namespace EntityBeneficialOwner {
  /**
   * Personal details for the beneficial owner.
   */
  export interface Individual {
    /**
     * The person's address.
     */
    address: Individual.Address;

    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    date_of_birth: string;

    /**
     * A means of verifying the person's identity.
     */
    identification: Individual.Identification | null;

    /**
     * The person's legal name.
     */
    name: string;
  }

  export namespace Individual {
    /**
     * The person's address.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string | null;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address.
       */
      line1: string;

      /**
       * The second line of the address.
       */
      line2: string | null;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address.
       */
      state: string | null;

      /**
       * The ZIP or postal code of the address.
       */
      zip: string | null;
    }

    /**
     * A means of verifying the person's identity.
     */
    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       *
       * - `social_security_number` - A social security number.
       * - `individual_taxpayer_identification_number` - An individual taxpayer
       *   identification number (ITIN).
       * - `passport` - A passport number.
       * - `drivers_license` - A driver's license number.
       * - `other` - Another identifying document.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license'
        | 'other';

      /**
       * The last 4 digits of the identification number that can be used to verify the
       * individual's identity.
       */
      number_last4: string;

      [k: string]: unknown;
    }
  }
}

export interface BeneficialOwnerCreateParams {
  /**
   * The identifier of the Entity to associate with the new Beneficial Owner.
   */
  entity_id: string;

  /**
   * Personal details for the beneficial owner.
   */
  individual: BeneficialOwnerCreateParams.Individual;

  /**
   * Why this person is considered a beneficial owner of the entity. At least one
   * option is required, if a person is both a control person and owner, submit an
   * array containing both.
   */
  prongs: Array<'ownership' | 'control'>;

  /**
   * This person's role or title within the entity.
   */
  company_title?: string;

  [k: string]: unknown;
}

export namespace BeneficialOwnerCreateParams {
  /**
   * Personal details for the beneficial owner.
   */
  export interface Individual {
    /**
     * The individual's physical address. Mail receiving locations like PO Boxes and
     * PMB's are disallowed.
     */
    address: Individual.Address;

    /**
     * The person's date of birth in YYYY-MM-DD format.
     */
    date_of_birth: string;

    /**
     * A means of verifying the person's identity.
     */
    identification: Individual.Identification;

    /**
     * The person's legal name.
     */
    name: string;

    /**
     * The identification method for an individual can only be a passport, driver's
     * license, or other document if you've confirmed the individual does not have a US
     * tax id (either a Social Security Number or Individual Taxpayer Identification
     * Number).
     */
    confirmed_no_us_tax_id?: boolean;
  }

  export namespace Individual {
    /**
     * The individual's physical address. Mail receiving locations like PO Boxes and
     * PMB's are disallowed.
     */
    export interface Address {
      /**
       * The city, district, town, or village of the address.
       */
      city: string;

      /**
       * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
       */
      country: string;

      /**
       * The first line of the address. This is usually the street number and street.
       */
      line1: string;

      /**
       * The second line of the address. This might be the floor or room number.
       */
      line2?: string;

      /**
       * The two-letter United States Postal Service (USPS) abbreviation for the US
       * state, province, or region of the address. Required in certain countries.
       */
      state?: string;

      /**
       * The ZIP or postal code of the address. Required in certain countries.
       */
      zip?: string;
    }

    /**
     * A means of verifying the person's identity.
     */
    export interface Identification {
      /**
       * A method that can be used to verify the individual's identity.
       *
       * - `social_security_number` - A social security number.
       * - `individual_taxpayer_identification_number` - An individual taxpayer
       *   identification number (ITIN).
       * - `passport` - A passport number.
       * - `drivers_license` - A driver's license number.
       * - `other` - Another identifying document.
       */
      method:
        | 'social_security_number'
        | 'individual_taxpayer_identification_number'
        | 'passport'
        | 'drivers_license'
        | 'other';

      /**
       * An identification number that can be used to verify the individual's identity,
       * such as a social security number. For Social Security Numbers and Individual
       * Taxpayer Identification Numbers, submit nine digits with no dashes or other
       * separators.
       */
      number: string;

      /**
       * Information about the United States driver's license used for identification.
       * Required if `method` is equal to `drivers_license`.
       */
      drivers_license?: Identification.DriversLicense;

      /**
       * Information about the identification document provided. Required if `method` is
       * equal to `other`.
       */
      other?: Identification.Other;

      /**
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      passport?: Identification.Passport;

      [k: string]: unknown;
    }

    export namespace Identification {
      /**
       * Information about the United States driver's license used for identification.
       * Required if `method` is equal to `drivers_license`.
       */
      export interface DriversLicense {
        /**
         * The driver's license's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the front of the driver's license.
         */
        file_id: string;

        /**
         * The state that issued the provided driver's license.
         */
        state: string;

        /**
         * The identifier of the File containing the back of the driver's license.
         */
        back_file_id?: string;
      }

      /**
       * Information about the identification document provided. Required if `method` is
       * equal to `other`.
       */
      export interface Other {
        /**
         * The two-character ISO 3166-1 code representing the country that issued the
         * document (e.g., `US`).
         */
        country: string;

        /**
         * A description of the document submitted.
         */
        description: string;

        /**
         * The identifier of the File containing the front of the document.
         */
        file_id: string;

        /**
         * The identifier of the File containing the back of the document. Not every
         * document has a reverse side.
         */
        back_file_id?: string;

        /**
         * The document's expiration date in YYYY-MM-DD format.
         */
        expiration_date?: string;
      }

      /**
       * Information about the passport used for identification. Required if `method` is
       * equal to `passport`.
       */
      export interface Passport {
        /**
         * The two-character ISO 3166-1 code representing the country that issued the
         * document (e.g., `US`).
         */
        country: string;

        /**
         * The passport's expiration date in YYYY-MM-DD format.
         */
        expiration_date: string;

        /**
         * The identifier of the File containing the passport.
         */
        file_id: string;
      }
    }
  }
}

export interface BeneficialOwnerUpdateParams {
  /**
   * The individual's physical address. Mail receiving locations like PO Boxes and
   * PMB's are disallowed.
   */
  address?: BeneficialOwnerUpdateParams.Address;

  /**
   * The identification method for an individual can only be a passport, driver's
   * license, or other document if you've confirmed the individual does not have a US
   * tax id (either a Social Security Number or Individual Taxpayer Identification
   * Number).
   */
  confirmed_no_us_tax_id?: boolean;

  /**
   * A means of verifying the person's identity.
   */
  identification?: BeneficialOwnerUpdateParams.Identification;

  /**
   * The individual's legal name.
   */
  name?: string;
}

export namespace BeneficialOwnerUpdateParams {
  /**
   * The individual's physical address. Mail receiving locations like PO Boxes and
   * PMB's are disallowed.
   */
  export interface Address {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The two-letter ISO 3166-1 alpha-2 code for the country of the address.
     */
    country: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;

    /**
     * The two-letter United States Postal Service (USPS) abbreviation for the US
     * state, province, or region of the address. Required in certain countries.
     */
    state?: string;

    /**
     * The ZIP or postal code of the address. Required in certain countries.
     */
    zip?: string;
  }

  /**
   * A means of verifying the person's identity.
   */
  export interface Identification {
    /**
     * A method that can be used to verify the individual's identity.
     *
     * - `social_security_number` - A social security number.
     * - `individual_taxpayer_identification_number` - An individual taxpayer
     *   identification number (ITIN).
     * - `passport` - A passport number.
     * - `drivers_license` - A driver's license number.
     * - `other` - Another identifying document.
     */
    method:
      | 'social_security_number'
      | 'individual_taxpayer_identification_number'
      | 'passport'
      | 'drivers_license'
      | 'other';

    /**
     * An identification number that can be used to verify the individual's identity,
     * such as a social security number. For Social Security Numbers and Individual
     * Taxpayer Identification Numbers, submit nine digits with no dashes or other
     * separators.
     */
    number: string;

    /**
     * Information about the United States driver's license used for identification.
     * Required if `method` is equal to `drivers_license`.
     */
    drivers_license?: Identification.DriversLicense;

    /**
     * Information about the identification document provided. Required if `method` is
     * equal to `other`.
     */
    other?: Identification.Other;

    /**
     * Information about the passport used for identification. Required if `method` is
     * equal to `passport`.
     */
    passport?: Identification.Passport;

    [k: string]: unknown;
  }

  export namespace Identification {
    /**
     * Information about the United States driver's license used for identification.
     * Required if `method` is equal to `drivers_license`.
     */
    export interface DriversLicense {
      /**
       * The driver's license's expiration date in YYYY-MM-DD format.
       */
      expiration_date: string;

      /**
       * The identifier of the File containing the front of the driver's license.
       */
      file_id: string;

      /**
       * The state that issued the provided driver's license.
       */
      state: string;

      /**
       * The identifier of the File containing the back of the driver's license.
       */
      back_file_id?: string;
    }

    /**
     * Information about the identification document provided. Required if `method` is
     * equal to `other`.
     */
    export interface Other {
      /**
       * The two-character ISO 3166-1 code representing the country that issued the
       * document (e.g., `US`).
       */
      country: string;

      /**
       * A description of the document submitted.
       */
      description: string;

      /**
       * The identifier of the File containing the front of the document.
       */
      file_id: string;

      /**
       * The identifier of the File containing the back of the document. Not every
       * document has a reverse side.
       */
      back_file_id?: string;

      /**
       * The document's expiration date in YYYY-MM-DD format.
       */
      expiration_date?: string;
    }

    /**
     * Information about the passport used for identification. Required if `method` is
     * equal to `passport`.
     */
    export interface Passport {
      /**
       * The two-character ISO 3166-1 code representing the country that issued the
       * document (e.g., `US`).
       */
      country: string;

      /**
       * The passport's expiration date in YYYY-MM-DD format.
       */
      expiration_date: string;

      /**
       * The identifier of the File containing the passport.
       */
      file_id: string;
    }
  }
}

export interface BeneficialOwnerListParams extends PageParams {
  /**
   * The identifier of the Entity to list beneficial owners for. Only `corporation`
   * entities have beneficial owners.
   */
  entity_id: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export declare namespace BeneficialOwners {
  export {
    type EntityBeneficialOwner as EntityBeneficialOwner,
    type EntityBeneficialOwnersPage as EntityBeneficialOwnersPage,
    type BeneficialOwnerCreateParams as BeneficialOwnerCreateParams,
    type BeneficialOwnerUpdateParams as BeneficialOwnerUpdateParams,
    type BeneficialOwnerListParams as BeneficialOwnerListParams,
  };
}
