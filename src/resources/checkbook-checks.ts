// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckbookChecks extends APIResource {
  /**
   * Retrieve a Checkbook Check
   *
   * @example
   * ```ts
   * const checkbookCheck =
   *   await client.checkbookChecks.retrieve(
   *     'checkbook_check_klgh3z50guf6jcnfhibb',
   *   );
   * ```
   */
  retrieve(checkbookCheckID: string, options?: RequestOptions): APIPromise<CheckbookCheck> {
    return this._client.get(path`/checkbook_checks/${checkbookCheckID}`, options);
  }

  /**
   * List Checkbook Checks
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkbookCheck of client.checkbookChecks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CheckbookCheckListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CheckbookChecksPage, CheckbookCheck> {
    return this._client.getAPIList('/checkbook_checks', Page<CheckbookCheck>, { query, ...options });
  }

  /**
   * Stop a Checkbook Check. A stopped check cannot be deposited.
   *
   * @example
   * ```ts
   * const checkbookCheck = await client.checkbookChecks.stop(
   *   'checkbook_check_klgh3z50guf6jcnfhibb',
   * );
   * ```
   */
  stop(checkbookCheckID: string, options?: RequestOptions): APIPromise<CheckbookCheck> {
    return this._client.post(path`/checkbook_checks/${checkbookCheckID}/stop`, options);
  }
}

export type CheckbookChecksPage = Page<CheckbookCheck>;

/**
 * A Checkbook Check is a single check within a Checkbook.
 */
export interface CheckbookCheck {
  /**
   * The Checkbook Check's identifier.
   */
  id: string;

  /**
   * The check number printed on the check.
   */
  check_number: number;

  /**
   * The identifier of the Checkbook the check belongs to.
   */
  checkbook_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Checkbook Check was created.
   */
  created_at: string;

  /**
   * The status of the Checkbook Check.
   *
   * - `pending_deposit` - The check has not yet been deposited.
   * - `deposited` - The check has been deposited.
   * - `stopped` - The check has been stopped and can no longer be deposited.
   * - `requires_attention` - The check requires attention from an Increase operator.
   */
  status: 'pending_deposit' | 'deposited' | 'stopped' | 'requires_attention';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `checkbook_check`.
   */
  type: 'checkbook_check';
}

export interface CheckbookCheckListParams extends PageParams {
  /**
   * Filter Checkbook Checks to those drawn on the specified Account Number.
   */
  account_number_id?: string;

  /**
   * Filter Checkbook Checks to the one with the specified check number.
   */
  check_number?: number;

  /**
   * Filter Checkbook Checks to those belonging to the specified Checkbook.
   */
  checkbook_id?: string;
}

export declare namespace CheckbookChecks {
  export {
    type CheckbookCheck as CheckbookCheck,
    type CheckbookChecksPage as CheckbookChecksPage,
    type CheckbookCheckListParams as CheckbookCheckListParams,
  };
}
