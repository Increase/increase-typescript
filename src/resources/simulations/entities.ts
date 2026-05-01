// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from '../entities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Entities extends APIResource {
  /**
   * Set the status for an
   * [Entity's validation](/documentation/api/entities#entity-object.validation). In
   * production, Know Your Customer validations
   * [run automatically](/documentation/entity-validation#entity-validation). While
   * developing, it can be helpful to override the behavior in Sandbox.
   *
   * @example
   * ```ts
   * const entity = await client.simulations.entities.validation(
   *   'entity_n8y8tnk2p9339ti393yi',
   *   {
   *     issues: [{ category: 'entity_tax_identifier' }],
   *     status: 'invalid',
   *   },
   * );
   * ```
   */
  validation(
    entityID: string,
    body: EntityValidationParams,
    options?: RequestOptions,
  ): APIPromise<EntitiesAPI.Entity> {
    return this._client.post(path`/simulations/entities/${entityID}/validation`, { body, ...options });
  }
}

export interface EntityValidationParams {
  /**
   * The validation issues to attach. Only allowed when `status` is `invalid`.
   */
  issues: Array<EntityValidationParams.Issue>;

  /**
   * The validation status to set on the Entity.
   *
   * - `valid` - The submitted data is valid.
   * - `invalid` - Additional information is required to validate the data.
   * - `pending` - The submitted data is being validated.
   */
  status: 'valid' | 'invalid' | 'pending';
}

export namespace EntityValidationParams {
  export interface Issue {
    /**
     * The type of issue.
     *
     * - `entity_tax_identifier` - The entity's tax identifier could not be validated.
     *   Update the tax ID with the
     *   [update an entity API](/documentation/api/entities#update-an-entity.corporation.legal_identifier).
     * - `entity_address` - The entity's address could not be validated. Update the
     *   address with the
     *   [update an entity API](/documentation/api/entities#update-an-entity.corporation.address).
     * - `beneficial_owner_identity` - A beneficial owner's identity could not be
     *   verified. Update the identification with the
     *   [update a beneficial owner API](/documentation/api/beneficial-owners#update-a-beneficial-owner).
     * - `beneficial_owner_address` - A beneficial owner's address could not be
     *   validated. Update the address with the
     *   [update a beneficial owner API](/documentation/api/beneficial-owners#update-a-beneficial-owner).
     */
    category:
      | 'entity_tax_identifier'
      | 'entity_address'
      | 'beneficial_owner_identity'
      | 'beneficial_owner_address';
  }
}

export declare namespace Entities {
  export { type EntityValidationParams as EntityValidationParams };
}
