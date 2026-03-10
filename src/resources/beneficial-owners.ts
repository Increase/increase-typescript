// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BeneficialOwners extends APIResource {
  /**
   * Retrieve a Beneficial Owner
   *
   * @example
   * ```ts
   * const entityBeneficialOwner =
   *   await client.beneficialOwners.retrieve(
   *     'entity_setup_beneficial_owner_submission_vgkyk7dj5eb4sfhdbkx7',
   *   );
   * ```
   */
  retrieve(entityBeneficialOwnerID: string, options?: RequestOptions): APIPromise<EntityBeneficialOwner> {
    return this._client.get(path`/entity_beneficial_owners/${entityBeneficialOwnerID}`, options);
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
}

export type EntityBeneficialOwnersPage = Page<EntityBeneficialOwner>;

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

  [k: string]: unknown;
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
    identification: Individual.Identification;

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
    type BeneficialOwnerListParams as BeneficialOwnerListParams,
  };
}
