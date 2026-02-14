// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundMailItems extends APIResource {
  /**
   * Retrieve an Inbound Mail Item
   *
   * @example
   * ```ts
   * const inboundMailItem =
   *   await client.inboundMailItems.retrieve(
   *     'inbound_mail_item_q6rrg7mmqpplx80zceev',
   *   );
   * ```
   */
  retrieve(inboundMailItemID: string, options?: RequestOptions): APIPromise<InboundMailItem> {
    return this._client.get(path`/inbound_mail_items/${inboundMailItemID}`, options);
  }

  /**
   * List Inbound Mail Items
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundMailItem of client.inboundMailItems.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboundMailItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundMailItemsPage, InboundMailItem> {
    return this._client.getAPIList('/inbound_mail_items', Page<InboundMailItem>, { query, ...options });
  }

  /**
   * Action an Inbound Mail Item
   *
   * @example
   * ```ts
   * const inboundMailItem =
   *   await client.inboundMailItems.action(
   *     'inbound_mail_item_q6rrg7mmqpplx80zceev',
   *     {
   *       checks: [{ action: 'deposit' }, { action: 'ignore' }],
   *     },
   *   );
   * ```
   */
  action(
    inboundMailItemID: string,
    body: InboundMailItemActionParams,
    options?: RequestOptions,
  ): APIPromise<InboundMailItem> {
    return this._client.post(path`/inbound_mail_items/${inboundMailItemID}/action`, { body, ...options });
  }
}

export type InboundMailItemsPage = Page<InboundMailItem>;

/**
 * Inbound Mail Items represent pieces of physical mail delivered to a Lockbox.
 */
export interface InboundMailItem {
  /**
   * The Inbound Mail Item identifier.
   */
  id: string;

  /**
   * The checks in the mail item.
   */
  checks: Array<InboundMailItem.Check>;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Inbound
   * Mail Item was created.
   */
  created_at: string;

  /**
   * The identifier for the File containing the scanned contents of the mail item.
   */
  file_id: string;

  /**
   * The identifier for the Lockbox that received this mail item. For mail items that
   * could not be processed due to an invalid address, this will be null.
   */
  lockbox_id: string | null;

  /**
   * The recipient name as written on the mail item.
   */
  recipient_name: string | null;

  /**
   * If the mail item has been rejected, why it was rejected.
   *
   * - `no_matching_lockbox` - The mail item does not match any lockbox.
   * - `no_check` - The mail item does not contain a check.
   * - `lockbox_not_active` - The Lockbox or its associated Account is not active.
   */
  rejection_reason: 'no_matching_lockbox' | 'no_check' | 'lockbox_not_active' | null;

  /**
   * If the mail item has been processed.
   *
   * - `pending` - The mail item is pending processing.
   * - `processed` - The mail item has been processed.
   * - `rejected` - The mail item has been rejected.
   */
  status: 'pending' | 'processed' | 'rejected';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_mail_item`.
   */
  type: 'inbound_mail_item';

  [k: string]: unknown;
}

export namespace InboundMailItem {
  /**
   * Inbound Mail Item Checks represent the checks in an Inbound Mail Item.
   */
  export interface Check {
    /**
     * The amount of the check.
     */
    amount: number;

    /**
     * The identifier for the File containing the back of the check.
     */
    back_file_id: string | null;

    /**
     * The identifier of the Check Deposit if this check was deposited.
     */
    check_deposit_id: string | null;

    /**
     * The identifier for the File containing the front of the check.
     */
    front_file_id: string | null;

    /**
     * The status of the Inbound Mail Item Check.
     *
     * - `pending` - The check is pending processing.
     * - `deposited` - The check has been deposited.
     * - `ignored` - The check has been ignored.
     */
    status: 'pending' | 'deposited' | 'ignored' | null;
  }
}

export interface InboundMailItemListParams extends PageParams {
  created_at?: InboundMailItemListParams.CreatedAt;

  /**
   * Filter Inbound Mail Items to ones sent to the provided Lockbox.
   */
  lockbox_id?: string;
}

export namespace InboundMailItemListParams {
  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}

export interface InboundMailItemActionParams {
  /**
   * The actions to perform on the Inbound Mail Item.
   */
  checks: Array<InboundMailItemActionParams.Check>;
}

export namespace InboundMailItemActionParams {
  export interface Check {
    /**
     * The action to perform on the Inbound Mail Item.
     *
     * - `deposit` - The check will be deposited.
     * - `ignore` - The check will be ignored.
     */
    action: 'deposit' | 'ignore';

    /**
     * The identifier of the Account to deposit the check into. If not provided, the
     * check will be deposited into the Account associated with the Lockbox.
     */
    account?: string;
  }
}

export declare namespace InboundMailItems {
  export {
    type InboundMailItem as InboundMailItem,
    type InboundMailItemsPage as InboundMailItemsPage,
    type InboundMailItemListParams as InboundMailItemListParams,
    type InboundMailItemActionParams as InboundMailItemActionParams,
  };
}
