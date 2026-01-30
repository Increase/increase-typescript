// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IntrafiExclusions extends APIResource {
  /**
   * Create an IntraFi Exclusion
   *
   * @example
   * ```ts
   * const intrafiExclusion =
   *   await client.intrafiExclusions.create({
   *     entity_id: 'entity_n8y8tnk2p9339ti393yi',
   *     fdic_certificate_number: '314159',
   *   });
   * ```
   */
  create(body: IntrafiExclusionCreateParams, options?: RequestOptions): APIPromise<IntrafiExclusion> {
    return this._client.post('/intrafi_exclusions', { body, ...options });
  }

  /**
   * Get an IntraFi Exclusion
   *
   * @example
   * ```ts
   * const intrafiExclusion =
   *   await client.intrafiExclusions.retrieve(
   *     'account_in71c4amph0vgo2qllky',
   *   );
   * ```
   */
  retrieve(intrafiExclusionID: string, options?: RequestOptions): APIPromise<IntrafiExclusion> {
    return this._client.get(path`/intrafi_exclusions/${intrafiExclusionID}`, options);
  }

  /**
   * List IntraFi Exclusions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const intrafiExclusion of client.intrafiExclusions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: IntrafiExclusionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<IntrafiExclusionsPage, IntrafiExclusion> {
    return this._client.getAPIList('/intrafi_exclusions', Page<IntrafiExclusion>, { query, ...options });
  }

  /**
   * Archive an IntraFi Exclusion
   *
   * @example
   * ```ts
   * const intrafiExclusion =
   *   await client.intrafiExclusions.archive(
   *     'intrafi_exclusion_ygfqduuzpau3jqof6jyh',
   *   );
   * ```
   */
  archive(intrafiExclusionID: string, options?: RequestOptions): APIPromise<IntrafiExclusion> {
    return this._client.post(path`/intrafi_exclusions/${intrafiExclusionID}/archive`, options);
  }
}

export type IntrafiExclusionsPage = Page<IntrafiExclusion>;

/**
 * Certain institutions may be excluded per Entity when sweeping funds into the
 * IntraFi network. This is useful when an Entity already has deposits at a
 * particular bank, and does not want to sweep additional funds to it. It may take
 * 5 business days for an exclusion to be processed.
 */
export interface IntrafiExclusion {
  /**
   * The identifier of this exclusion request.
   */
  id: string;

  /**
   * The name of the excluded institution.
   */
  bank_name: string | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the exclusion was created.
   */
  created_at: string;

  /**
   * The entity for which this institution is excluded.
   */
  entity_id: string;

  /**
   * When this was exclusion was confirmed by IntraFi.
   */
  excluded_at: string | null;

  /**
   * The Federal Deposit Insurance Corporation's certificate number for the
   * institution.
   */
  fdic_certificate_number: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The status of the exclusion request.
   *
   * - `pending` - The exclusion is being added to the IntraFi network.
   * - `completed` - The exclusion has been added to the IntraFi network.
   * - `archived` - The exclusion has been removed from the IntraFi network.
   */
  status: 'pending' | 'completed' | 'archived';

  /**
   * When this was exclusion was submitted to IntraFi by Increase.
   */
  submitted_at: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `intrafi_exclusion`.
   */
  type: 'intrafi_exclusion';
}

export interface IntrafiExclusionCreateParams {
  /**
   * The identifier of the Entity whose deposits will be excluded.
   */
  entity_id: string;

  /**
   * The FDIC certificate number of the financial institution to be excluded. An FDIC
   * certificate number uniquely identifies a financial institution, and is different
   * than a routing number. To find one, we recommend searching by Bank Name using
   * the [FDIC's bankfind tool](https://banks.data.fdic.gov/bankfind-suite/bankfind).
   */
  fdic_certificate_number: string;

  [k: string]: unknown;
}

export interface IntrafiExclusionListParams extends PageParams {
  /**
   * Filter IntraFi Exclusions for those belonging to the specified Entity.
   */
  entity_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export declare namespace IntrafiExclusions {
  export {
    type IntrafiExclusion as IntrafiExclusion,
    type IntrafiExclusionsPage as IntrafiExclusionsPage,
    type IntrafiExclusionCreateParams as IntrafiExclusionCreateParams,
    type IntrafiExclusionListParams as IntrafiExclusionListParams,
  };
}
