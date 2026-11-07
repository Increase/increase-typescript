// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Checkbooks extends APIResource {
  /**
   * Create a Checkbook
   *
   * @example
   * ```ts
   * const checkbook = await client.checkbooks.create({
   *   account_number_id: 'account_number_v18nkfqm6afpsrvy82b2',
   *   mailing_address: {
   *     city: 'New York',
   *     line1: '33 Liberty Street',
   *     name: 'Ian Crease',
   *     postal_code: '10045',
   *     state: 'NY',
   *   },
   *   payer: [
   *     { contents: 'National Phonograph Company' },
   *     { contents: '33 Liberty Street' },
   *     { contents: 'New York, NY 10045' },
   *   ],
   * });
   * ```
   */
  create(body: CheckbookCreateParams, options?: RequestOptions): APIPromise<Checkbook> {
    return this._client.post('/checkbooks', { body, ...options });
  }

  /**
   * Retrieve a Checkbook
   *
   * @example
   * ```ts
   * const checkbook = await client.checkbooks.retrieve(
   *   'checkbook_7iudxhxum6vlkcjxmi8y',
   * );
   * ```
   */
  retrieve(checkbookID: string, options?: RequestOptions): APIPromise<Checkbook> {
    return this._client.get(path`/checkbooks/${checkbookID}`, options);
  }

  /**
   * List Checkbooks
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkbook of client.checkbooks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CheckbookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CheckbooksPage, Checkbook> {
    return this._client.getAPIList('/checkbooks', Page<Checkbook>, { query, ...options });
  }

  /**
   * Stop a Checkbook. Stopping a Checkbook stops all of its checks that have not yet
   * been deposited.
   *
   * @example
   * ```ts
   * const checkbook = await client.checkbooks.stop(
   *   'checkbook_7iudxhxum6vlkcjxmi8y',
   * );
   * ```
   */
  stop(checkbookID: string, options?: RequestOptions): APIPromise<Checkbook> {
    return this._client.post(path`/checkbooks/${checkbookID}/stop`, options);
  }
}

export type CheckbooksPage = Page<Checkbook>;

/**
 * Checkbooks are sets of blank checks that Increase prints and mails on your
 * behalf.
 */
export interface Checkbook {
  /**
   * The Checkbook's identifier.
   */
  id: string;

  /**
   * The identifier of the Account Number the Checkbook is attached to.
   */
  account_number_id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Checkbook was created.
   */
  created_at: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The destination address that the Checkbook will be mailed to.
   */
  mailing_address: Checkbook.MailingAddress;

  /**
   * The payer information printed on the top-left corner of each check.
   */
  payer: Array<Checkbook.Payer>;

  /**
   * The address the Checkbook will return to if there is a delivery issue.
   */
  return_address: Checkbook.ReturnAddress;

  /**
   * The lifecycle status of the Checkbook.
   *
   * - `pending_submission` - The Checkbook is pending submission to the printer.
   * - `pending_mailing` - The Checkbook has been submitted to the printer and is
   *   pending mailing.
   * - `mailed` - The Checkbook has been mailed.
   * - `stopped` - The Checkbook has been stopped and its checks can no longer be
   *   deposited.
   */
  status: 'pending_submission' | 'pending_mailing' | 'mailed' | 'stopped';

  /**
   * The physical format of the Checkbook.
   *
   * - `three_ring_binder` - A half-inch three-ring binder holding 75 pages of checks
   *   with 3 checks per page.
   * - `folder` - A folder holding 15 pages of checks with 3 checks per page.
   */
  style: 'three_ring_binder' | 'folder';

  /**
   * Tracking updates relating to the Checkbook's delivery.
   */
  tracking_updates: Array<Checkbook.TrackingUpdate>;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `checkbook`.
   */
  type: 'checkbook';
}

export namespace Checkbook {
  /**
   * The destination address that the Checkbook will be mailed to.
   */
  export interface MailingAddress {
    /**
     * The city of the destination address.
     */
    city: string;

    /**
     * The first line of the destination address.
     */
    line1: string;

    /**
     * The second line of the destination address.
     */
    line2: string | null;

    /**
     * The recipient at the destination address.
     */
    name: string;

    /**
     * The postal code of the destination address.
     */
    postal_code: string;

    /**
     * The state of the destination address.
     */
    state: string;
  }

  export interface Payer {
    /**
     * The contents of the line.
     */
    contents: string;
  }

  /**
   * The address the Checkbook will return to if there is a delivery issue.
   */
  export interface ReturnAddress {
    /**
     * The city of the return address.
     */
    city: string;

    /**
     * The first line of the return address.
     */
    line1: string;

    /**
     * The second line of the return address.
     */
    line2: string | null;

    /**
     * The recipient at the return address.
     */
    name: string;

    /**
     * The postal code of the return address.
     */
    postal_code: string;

    /**
     * The state of the return address.
     */
    state: string;
  }

  export interface TrackingUpdate {
    /**
     * The type of tracking event.
     *
     * - `in_transit` - The checkbook is in transit.
     * - `processed_for_delivery` - The checkbook has been processed for delivery.
     * - `delivered` - The checkbook has been delivered. Note that some couriers track
     *   delivery status based on driver location data rather than an explicit scan.
     *   While uncommon, a single checkbook may have more than one delivered event.
     * - `delivery_issue` - There is an issue preventing delivery. The delivery will be
     *   attempted again if possible. If the issue cannot be resolved, the checkbook
     *   will be rerouted to the return address.
     * - `returning_to_sender` - The checkbook has been rerouted to the return address.
     * - `returned_to_sender` - The checkbook has been delivered to the return address.
     */
    category:
      | 'in_transit'
      | 'processed_for_delivery'
      | 'delivered'
      | 'delivery_issue'
      | 'returning_to_sender'
      | 'returned_to_sender';

    /**
     * The ISO 3166-1 alpha-2 country code for the country where the event took place.
     */
    country: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the tracking event took place.
     */
    created_at: string;

    /**
     * The postal code where the event took place.
     */
    postal_code: string;
  }
}

export interface CheckbookCreateParams {
  /**
   * The identifier of the Account Number that the checks will draw from. The Account
   * Number must be active.
   */
  account_number_id: string;

  /**
   * The destination address that the Checkbook will be mailed to.
   */
  mailing_address: CheckbookCreateParams.MailingAddress;

  /**
   * The payer of the checks. This will be printed on the top-left corner of each
   * check. This should be an array of up to 4 elements, each of which represents a
   * line of the payer.
   */
  payer: Array<CheckbookCreateParams.Payer>;

  [k: string]: unknown;
}

export namespace CheckbookCreateParams {
  /**
   * The destination address that the Checkbook will be mailed to.
   */
  export interface MailingAddress {
    /**
     * The city of the destination address.
     */
    city: string;

    /**
     * The first line of the destination address.
     */
    line1: string;

    /**
     * The recipient at the destination address.
     */
    name: string;

    /**
     * The postal code of the destination address.
     */
    postal_code: string;

    /**
     * The US state of the destination address.
     */
    state: string;

    /**
     * The second line of the destination address.
     */
    line2?: string;
  }

  export interface Payer {
    /**
     * The contents of the line.
     */
    contents: string;
  }
}

export interface CheckbookListParams extends PageParams {
  /**
   * Filter Checkbooks to those attached to the specified Account Number.
   */
  account_number_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: CheckbookListParams.Status;
}

export namespace CheckbookListParams {
  export interface Status {
    /**
     * Filter Checkbooks for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending_submission' | 'pending_mailing' | 'mailed' | 'stopped'>;
  }
}

export declare namespace Checkbooks {
  export {
    type Checkbook as Checkbook,
    type CheckbooksPage as CheckbooksPage,
    type CheckbookCreateParams as CheckbookCreateParams,
    type CheckbookListParams as CheckbookListParams,
  };
}
