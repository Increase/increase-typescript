// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundRealTimePaymentsTransfers extends APIResource {
  /**
   * Retrieve an Inbound Real-Time Payments Transfer
   *
   * @example
   * ```ts
   * const inboundRealTimePaymentsTransfer =
   *   await client.inboundRealTimePaymentsTransfers.retrieve(
   *     'inbound_real_time_payments_transfer_63hlz498vcxg644hcrzr',
   *   );
   * ```
   */
  retrieve(inboundRealTimePaymentsTransferID: string, options?: RequestOptions): APIPromise<InboundRealTimePaymentsTransfer> {
    return this._client.get(path`/inbound_real_time_payments_transfers/${inboundRealTimePaymentsTransferID}`, options);
  }

  /**
   * List Inbound Real-Time Payments Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundRealTimePaymentsTransfer of client.inboundRealTimePaymentsTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(query: InboundRealTimePaymentsTransferListParams | null | undefined = {}, options?: RequestOptions): PagePromise<InboundRealTimePaymentsTransfersPage, InboundRealTimePaymentsTransfer> {
    return this._client.getAPIList('/inbound_real_time_payments_transfers', Page<InboundRealTimePaymentsTransfer>, { query, ...options });
  }
}

export type InboundRealTimePaymentsTransfersPage = Page<InboundRealTimePaymentsTransfer>

/**
 * An Inbound Real-Time Payments Transfer is a Real-Time Payments transfer
 * initiated outside of Increase to your account.
 */
export interface InboundRealTimePaymentsTransfer {
  /**
   * The inbound Real-Time Payments transfer's identifier.
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
  confirmation: InboundRealTimePaymentsTransfer.Confirmation | null;

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
   * currency. This will always be "USD" for a Real-Time Payments transfer.
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
  decline: InboundRealTimePaymentsTransfer.Decline | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_confirming` - The transfer is pending confirmation.
   * - `timed_out` - The transfer was not responded to in time.
   * - `confirmed` - The transfer has been received successfully and is confirmed.
   * - `declined` - The transfer has been declined.
   */
  status: 'pending_confirming' | 'timed_out' | 'confirmed' | 'declined';

  /**
   * The Real-Time Payments network identification of the transfer.
   */
  transaction_identification: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_real_time_payments_transfer`.
   */
  type: 'inbound_real_time_payments_transfer';

  /**
   * Additional information included with the transfer.
   */
  unstructured_remittance_information: string | null;

[k: string]: unknown
}

export namespace InboundRealTimePaymentsTransfer {
  /**
   * If your transfer is confirmed, this will contain details of the confirmation.
   */
  export interface Confirmation {
    /**
     * The time at which the transfer was confirmed.
     */
    confirmed_at: string;

    /**
     * The id of the transaction for the confirmed transfer.
     */
    transaction_id: string;
  }

  /**
   * If your transfer is declined, this will contain details of the decline.
   */
  export interface Decline {
    /**
     * The time at which the transfer was declined.
     */
    declined_at: string;

    /**
     * The id of the transaction for the declined transfer.
     */
    declined_transaction_id: string;

    /**
     * The reason for the transfer decline.
     *
     * - `account_number_canceled` - The account number is canceled.
     * - `account_number_disabled` - The account number is disabled.
     * - `account_restricted` - Your account is restricted.
     * - `group_locked` - Your account is inactive.
     * - `entity_not_active` - The account's entity is not active.
     * - `real_time_payments_not_enabled` - Your account is not enabled to receive
     *   Real-Time Payments transfers.
     */
    reason: 'account_number_canceled' | 'account_number_disabled' | 'account_restricted' | 'group_locked' | 'entity_not_active' | 'real_time_payments_not_enabled';
  }
}

export interface InboundRealTimePaymentsTransferListParams extends PageParams {
  /**
   * Filter Inbound Real-Time Payments Transfers to those belonging to the specified
   * Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Real-Time Payments Transfers to ones belonging to the specified
   * Account Number.
   */
  account_number_id?: string;

  created_at?: InboundRealTimePaymentsTransferListParams.CreatedAt;
}

export namespace InboundRealTimePaymentsTransferListParams {
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

export declare namespace InboundRealTimePaymentsTransfers {
  export {
    type InboundRealTimePaymentsTransfer as InboundRealTimePaymentsTransfer,
    type InboundRealTimePaymentsTransfersPage as InboundRealTimePaymentsTransfersPage,
    type InboundRealTimePaymentsTransferListParams as InboundRealTimePaymentsTransferListParams
  };
}
