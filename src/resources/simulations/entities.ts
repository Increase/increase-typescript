// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EntitiesAPI from '../entities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Entities extends APIResource {
  /**
   * Simulate updates to an
   * [Entity's validation](/documentation/api/entities#entity-object.validation). In
   * production, Know Your Customer validations
   * [run automatically](/documentation/entity-validation#entity-validation) for
   * eligible programs. While developing, use this API to simulate issues with
   * information submissions.
   *
   * @example
   * ```ts
   * const entity =
   *   await client.simulations.entities.updateValidation(
   *     'entity_n8y8tnk2p9339ti393yi',
   *     { issues: [{ category: 'entity_tax_identifier' }] },
   *   );
   * ```
   */
  updateValidation(
    entityID: string,
    body: EntityUpdateValidationParams,
    options?: RequestOptions,
  ): APIPromise<EntitiesAPI.Entity> {
    return this._client.post(path`/simulations/entities/${entityID}/update_validation`, { body, ...options });
  }
}

export interface EntityUpdateValidationParams {
  /**
   * The validation issues to attach. If no issues are provided, the validation
   * status will be set to `valid`.
   */
  issues: Array<EntityUpdateValidationParams.Issue>;
}

export namespace EntityUpdateValidationParams {
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
  export { type EntityUpdateValidationParams as EntityUpdateValidationParams };
}
