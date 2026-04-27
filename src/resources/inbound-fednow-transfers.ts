// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundFednowTransfers extends APIResource {
  /**
   * Retrieve an Inbound FedNow Transfer
   *
   * @example
   * ```ts
   * const inboundFednowTransfer =
   *   await client.inboundFednowTransfers.retrieve(
   *     'inbound_fednow_transfer_ctxxbc07oh5ke5w1hk20',
   *   );
   * ```
   */
  retrieve(inboundFednowTransferID: string, options?: RequestOptions): APIPromise<InboundFednowTransfer> {
    return this._client.get(path`/inbound_fednow_transfers/${inboundFednowTransferID}`, options);
  }

  /**
   * List Inbound FedNow Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundFednowTransfer of client.inboundFednowTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboundFednowTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundFednowTransfersPage, InboundFednowTransfer> {
    return this._client.getAPIList('/inbound_fednow_transfers', Page<InboundFednowTransfer>, {
      query,
      ...options,
    });
  }
}

export type InboundFednowTransfersPage = Page<InboundFednowTransfer>;

/**
 * An Inbound FedNow Transfer is a FedNow transfer initiated outside of Increase to
 * your account.
 */
export interface InboundFednowTransfer {
  /**
   * The inbound FedNow transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer was sent.
   */
  account_id: string;

  /**
   * The identifier of the Account Number to which this transfer was sent.
   */
  account_number_id: string;

  /**
   * The amount in USD cents.
   */
  amount: number;

  /**
   * If your transfer is confirmed, this will contain details of the confirmation.
   */
  confirmation: InboundFednowTransfer.Confirmation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * The name the sender of the transfer specified as the recipient of the transfer.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the transfer's
   * currency. This will always be "USD" for a FedNow transfer.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The account number of the account that sent the transfer.
   */
  debtor_account_number: string;

  /**
   * The name provided by the sender of the transfer.
   */
  debtor_name: string;

  /**
   * The routing number of the account that sent the transfer.
   */
  debtor_routing_number: string;

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  decline: InboundFednowTransfer.Decline | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_confirming` - The transfer is pending confirmation.
   * - `timed_out` - The transfer was not responded to in time.
   * - `confirmed` - The transfer has been received successfully and is confirmed.
   * - `declined` - The transfer has been declined.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   */
  status: 'pending_confirming' | 'timed_out' | 'confirmed' | 'declined' | 'requires_attention';

  /**
   * The identifier of the Transaction object created when the transfer was
   * confirmed.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_fednow_transfer`.
   */
  type: 'inbound_fednow_transfer';

  /**
   * Additional information included with the transfer.
   */
  unstructured_remittance_information: string | null;
}

export namespace InboundFednowTransfer {
  /**
   * If your transfer is confirmed, this will contain details of the confirmation.
   */
  export interface Confirmation {
    /**
     * The identifier of the FedNow Transfer that led to this Transaction.
     */
    transfer_id: string;

    [k: string]: unknown;
  }

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  export interface Decline {
    /**
     * Why the transfer was declined.
     *
     * - `account_number_canceled` - The account number is canceled.
     * - `account_number_disabled` - The account number is disabled.
     * - `account_restricted` - Your account is restricted.
     * - `group_locked` - Your account is inactive.
     * - `entity_not_active` - The account's entity is not active.
     * - `fednow_not_enabled` - Your account is not enabled to receive FedNow
     *   transfers.
     */
    reason:
      | 'account_number_canceled'
      | 'account_number_disabled'
      | 'account_restricted'
      | 'group_locked'
      | 'entity_not_active'
      | 'fednow_not_enabled';

    /**
     * The identifier of the FedNow Transfer that led to this declined transaction.
     */
    transfer_id: string;

    [k: string]: unknown;
  }
}

export interface InboundFednowTransferListParams extends PageParams {
  /**
   * Filter Inbound FedNow Transfers to those belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound FedNow Transfers to ones belonging to the specified Account
   * Number.
   */
  account_number_id?: string;

  created_at?: InboundFednowTransferListParams.CreatedAt;
}

export namespace InboundFednowTransferListParams {
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

export declare namespace InboundFednowTransfers {
  export {
    type InboundFednowTransfer as InboundFednowTransfer,
    type InboundFednowTransfersPage as InboundFednowTransfersPage,
    type InboundFednowTransferListParams as InboundFednowTransferListParams,
  };
}
