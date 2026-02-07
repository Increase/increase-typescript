// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FednowTransfers extends APIResource {
  /**
   * Create a FedNow Transfer
   *
   * @example
   * ```ts
   * const fednowTransfer = await client.fednowTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 100,
   *   creditor_name: 'Ian Crease',
   *   debtor_name: 'National Phonograph Company',
   *   source_account_number_id:
   *     'account_number_v18nkfqm6afpsrvy82b2',
   *   unstructured_remittance_information: 'Invoice 29582',
   * });
   * ```
   */
  create(body: FednowTransferCreateParams, options?: RequestOptions): APIPromise<FednowTransfer> {
    return this._client.post('/fednow_transfers', { body, ...options });
  }

  /**
   * Retrieve a FedNow Transfer
   *
   * @example
   * ```ts
   * const fednowTransfer =
   *   await client.fednowTransfers.retrieve(
   *     'fednow_transfer_4i0mptrdu1mueg1196bg',
   *   );
   * ```
   */
  retrieve(fednowTransferID: string, options?: RequestOptions): APIPromise<FednowTransfer> {
    return this._client.get(path`/fednow_transfers/${fednowTransferID}`, options);
  }

  /**
   * List FedNow Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fednowTransfer of client.fednowTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FednowTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FednowTransfersPage, FednowTransfer> {
    return this._client.getAPIList('/fednow_transfers', Page<FednowTransfer>, { query, ...options });
  }

  /**
   * Approve a FedNow Transfer
   *
   * @example
   * ```ts
   * const fednowTransfer = await client.fednowTransfers.approve(
   *   'fednow_transfer_4i0mptrdu1mueg1196bg',
   * );
   * ```
   */
  approve(fednowTransferID: string, options?: RequestOptions): APIPromise<FednowTransfer> {
    return this._client.post(path`/fednow_transfers/${fednowTransferID}/approve`, options);
  }

  /**
   * Cancel a pending FedNow Transfer
   *
   * @example
   * ```ts
   * const fednowTransfer = await client.fednowTransfers.cancel(
   *   'fednow_transfer_4i0mptrdu1mueg1196bg',
   * );
   * ```
   */
  cancel(fednowTransferID: string, options?: RequestOptions): APIPromise<FednowTransfer> {
    return this._client.post(path`/fednow_transfers/${fednowTransferID}/cancel`, options);
  }
}

export type FednowTransfersPage = Page<FednowTransfer>;

/**
 * FedNow transfers move funds, within seconds, between your Increase account and
 * any other account supporting FedNow.
 */
export interface FednowTransfer {
  /**
   * The FedNow Transfer's identifier.
   */
  id: string;

  /**
   * The Account from which the transfer was sent.
   */
  account_id: string;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * If the transfer is acknowledged by the recipient bank, this will contain
   * supplemental details.
   */
  acknowledgement: FednowTransfer.Acknowledgement | null;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: FednowTransfer.CreatedBy | null;

  /**
   * The name of the transfer's recipient. This is set by the sender when creating
   * the transfer.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For FedNow transfers this is always equal to `USD`.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The name of the transfer's sender. If not provided, defaults to the name of the
   * account's entity.
   */
  debtor_name: string;

  /**
   * The identifier of the External Account the transfer was made to, if any.
   */
  external_account_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The ID for the pending transaction representing the transfer.
   */
  pending_transaction_id: string | null;

  /**
   * If the transfer is rejected by FedNow or the destination financial institution,
   * this will contain supplemental details.
   */
  rejection: FednowTransfer.Rejection | null;

  /**
   * The destination American Bankers' Association (ABA) Routing Transit Number
   * (RTN).
   */
  routing_number: string;

  /**
   * The Account Number the recipient will see as having sent the transfer.
   */
  source_account_number_id: string;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `canceled` - The transfer has been canceled.
   * - `reviewing_rejected` - The transfer has been rejected by Increase.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `pending_approval` - The transfer is pending approval.
   * - `pending_submitting` - The transfer is queued to be submitted to FedNow.
   * - `pending_response` - The transfer has been submitted and is pending a response
   *   from FedNow.
   * - `complete` - The transfer has been sent successfully and is complete.
   * - `rejected` - The transfer was rejected by the network or the recipient's bank.
   */
  status:
    | 'pending_reviewing'
    | 'canceled'
    | 'reviewing_rejected'
    | 'requires_attention'
    | 'pending_approval'
    | 'pending_submitting'
    | 'pending_response'
    | 'complete'
    | 'rejected';

  /**
   * After the transfer is submitted to FedNow, this will contain supplemental
   * details.
   */
  submission: FednowTransfer.Submission | null;

  /**
   * The Transaction funding the transfer once it is complete.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `fednow_transfer`.
   */
  type: 'fednow_transfer';

  /**
   * The Unique End-to-end Transaction Reference
   * ([UETR](https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr))
   * of the transfer.
   */
  unique_end_to_end_transaction_reference: string;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  unstructured_remittance_information: string;
}

export namespace FednowTransfer {
  /**
   * If the transfer is acknowledged by the recipient bank, this will contain
   * supplemental details.
   */
  export interface Acknowledgement {
    /**
     * When the transfer was acknowledged.
     */
    acknowledged_at: string;
  }

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  export interface CreatedBy {
    /**
     * The type of object that created this transfer.
     *
     * - `api_key` - An API key. Details will be under the `api_key` object.
     * - `oauth_application` - An OAuth application you connected to Increase. Details
     *   will be under the `oauth_application` object.
     * - `user` - A User in the Increase dashboard. Details will be under the `user`
     *   object.
     */
    category: 'api_key' | 'oauth_application' | 'user';

    /**
     * If present, details about the API key that created the transfer.
     */
    api_key?: CreatedBy.APIKey | null;

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    oauth_application?: CreatedBy.OAuthApplication | null;

    /**
     * If present, details about the User that created the transfer.
     */
    user?: CreatedBy.User | null;
  }

  export namespace CreatedBy {
    /**
     * If present, details about the API key that created the transfer.
     */
    export interface APIKey {
      /**
       * The description set for the API key when it was created.
       */
      description: string | null;
    }

    /**
     * If present, details about the OAuth Application that created the transfer.
     */
    export interface OAuthApplication {
      /**
       * The name of the OAuth Application.
       */
      name: string;
    }

    /**
     * If present, details about the User that created the transfer.
     */
    export interface User {
      /**
       * The email address of the User.
       */
      email: string;
    }
  }

  /**
   * If the transfer is rejected by FedNow or the destination financial institution,
   * this will contain supplemental details.
   */
  export interface Rejection {
    /**
     * Additional information about the rejection provided by the recipient bank.
     */
    reject_reason_additional_information: string | null;

    /**
     * The reason the transfer was rejected as provided by the recipient bank or the
     * FedNow network.
     *
     * - `account_closed` - The destination account is closed. Corresponds to the
     *   FedNow reason code `AC04`.
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the FedNow reason code `AC06`.
     * - `invalid_creditor_account_type` - The destination account is ineligible to
     *   receive FedNow transfers. Corresponds to the FedNow reason code `AC14`.
     * - `invalid_creditor_account_number` - The destination account does not exist.
     *   Corresponds to the FedNow reason code `AC03`.
     * - `invalid_creditor_financial_institution_identifier` - The destination routing
     *   number is invalid. Corresponds to the FedNow reason code `RC04`.
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the FedNow reason code `MD07`.
     * - `narrative` - The reason is provided as narrative information in the
     *   additional information field. Corresponds to the FedNow reason code `NARR`.
     * - `transaction_forbidden` - FedNow transfers are not allowed to the destination
     *   account. Corresponds to the FedNow reason code `AG01`.
     * - `transaction_type_not_supported` - FedNow transfers are not enabled for the
     *   destination account. Corresponds to the FedNow reason code `AG03`.
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the FedNow reason code `E990`.
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the FedNow reason code `BE04`.
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the FedNow reason code `BE07`.
     * - `timeout` - There was a timeout processing the transfer. Corresponds to the
     *   FedNow reason code `E997`.
     * - `processing_error` - The transfer was rejected due to an internal Increase
     *   issue. We have been notified.
     * - `other` - Some other error or issue has occurred.
     */
    reject_reason_code:
      | 'account_closed'
      | 'account_blocked'
      | 'invalid_creditor_account_type'
      | 'invalid_creditor_account_number'
      | 'invalid_creditor_financial_institution_identifier'
      | 'end_customer_deceased'
      | 'narrative'
      | 'transaction_forbidden'
      | 'transaction_type_not_supported'
      | 'amount_exceeds_bank_limits'
      | 'invalid_creditor_address'
      | 'invalid_debtor_address'
      | 'timeout'
      | 'processing_error'
      | 'other';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was rejected.
     */
    rejected_at: string | null;
  }

  /**
   * After the transfer is submitted to FedNow, this will contain supplemental
   * details.
   */
  export interface Submission {
    /**
     * The FedNow network identification of the message submitted.
     */
    message_identification: string;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was submitted to FedNow.
     */
    submitted_at: string | null;
  }
}

export interface FednowTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The amount, in minor units, to send to the creditor.
   */
  amount: number;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * The Account Number to include in the transfer as the debtor's account number.
   */
  source_account_number_id: string;

  /**
   * Unstructured remittance information to include in the transfer.
   */
  unstructured_remittance_information: string;

  /**
   * The creditor's account number.
   */
  account_number?: string;

  /**
   * The creditor's address.
   */
  creditor_address?: FednowTransferCreateParams.CreditorAddress;

  /**
   * The debtor's address.
   */
  debtor_address?: FednowTransferCreateParams.DebtorAddress;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `account_number` and `routing_number` must be absent.
   */
  external_account_id?: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The creditor's bank account routing number.
   */
  routing_number?: string;

  [k: string]: unknown;
}

export namespace FednowTransferCreateParams {
  /**
   * The creditor's address.
   */
  export interface CreditorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The postal code component of the address.
     */
    postal_code: string;

    /**
     * The US state component of the address.
     */
    state: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1?: string;
  }

  /**
   * The debtor's address.
   */
  export interface DebtorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The postal code component of the address.
     */
    postal_code: string;

    /**
     * The US state component of the address.
     */
    state: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1?: string;
  }
}

export interface FednowTransferListParams extends PageParams {
  /**
   * Filter FedNow Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: FednowTransferListParams.CreatedAt;

  /**
   * Filter FedNow Transfers to those made to the specified External Account.
   */
  external_account_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: FednowTransferListParams.Status;
}

export namespace FednowTransferListParams {
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

  export interface Status {
    /**
     * Return results whose value is in the provided list. For GET requests, this
     * should be encoded as a comma-delimited string, such as `?in=one,two,three`.
     */
    in?: Array<
      | 'pending_reviewing'
      | 'canceled'
      | 'reviewing_rejected'
      | 'requires_attention'
      | 'pending_approval'
      | 'pending_submitting'
      | 'pending_response'
      | 'complete'
      | 'rejected'
    >;
  }
}

export declare namespace FednowTransfers {
  export {
    type FednowTransfer as FednowTransfer,
    type FednowTransfersPage as FednowTransfersPage,
    type FednowTransferCreateParams as FednowTransferCreateParams,
    type FednowTransferListParams as FednowTransferListParams,
  };
}
