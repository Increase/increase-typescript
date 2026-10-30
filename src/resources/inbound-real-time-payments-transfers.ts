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
  retrieve(
    inboundRealTimePaymentsTransferID: string,
    options?: RequestOptions,
  ): APIPromise<InboundRealTimePaymentsTransfer> {
    return this._client.get(
      path`/inbound_real_time_payments_transfers/${inboundRealTimePaymentsTransferID}`,
      options,
    );
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
  list(
    query: InboundRealTimePaymentsTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundRealTimePaymentsTransfersPage, InboundRealTimePaymentsTransfer> {
    return this._client.getAPIList(
      '/inbound_real_time_payments_transfers',
      Page<InboundRealTimePaymentsTransfer>,
      { query, ...options },
    );
  }

  /**
   * Return an Inbound Real-Time Payments Transfer
   *
   * @example
   * ```ts
   * const realTimePaymentsTransfer =
   *   await client.inboundRealTimePaymentsTransfers.return(
   *     'inbound_real_time_payments_transfer_63hlz498vcxg644hcrzr',
   *   );
   * ```
   */
  return(
    inboundRealTimePaymentsTransferID: string,
    body: InboundRealTimePaymentsTransferReturnParams,
    options?: RequestOptions,
  ): APIPromise<RealTimePaymentsTransfer> {
    return this._client.post(
      path`/inbound_real_time_payments_transfers/${inboundRealTimePaymentsTransferID}/return`,
      { body, ...options },
    );
  }
}

export type InboundRealTimePaymentsTransfersPage = Page<InboundRealTimePaymentsTransfer>;

export type RealTimePaymentsTransfersPage = Page<RealTimePaymentsTransfer>;

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
   * A free-form reference string set by the sender, to help identify the transfer.
   */
  end_to_end_identification: string | null;

  /**
   * The identifier of the Real-Time Payments Transfer this transfer returns, if any.
   */
  return_of_real_time_payments_transfer_id: string | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_confirming` - The transfer is pending confirmation.
   * - `timed_out` - The transfer was not responded to in time. This is rare and
   *   represents an error at Increase.
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

  [k: string]: unknown;
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
     * - `transaction_not_allowed` - The transaction is not allowed per Increase's
     *   terms.
     */
    reason:
      | 'account_number_canceled'
      | 'account_number_disabled'
      | 'account_restricted'
      | 'group_locked'
      | 'entity_not_active'
      | 'real_time_payments_not_enabled'
      | 'transaction_not_allowed';
  }
}

/**
 * Real-Time Payments transfers move funds, within seconds, between your Increase
 * account and any other account on the Real-Time Payments network.
 */
export interface RealTimePaymentsTransfer {
  /**
   * The Real-Time Payments Transfer's identifier.
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
  acknowledgement: RealTimePaymentsTransfer.Acknowledgement | null;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: RealTimePaymentsTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: RealTimePaymentsTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: RealTimePaymentsTransfer.CreatedBy | null;

  /**
   * The name of the transfer's recipient. This is set by the sender when creating
   * the transfer.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For real-time payments transfers this is always equal to `USD`.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The name of the transfer's sender. If not provided, defaults to the name of the
   * account's entity.
   */
  debtor_name: string | null;

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
   * The identifier of the Inbound Real-Time Payments Request for Payment this
   * transfer was sent in response to, if any.
   */
  inbound_real_time_payments_request_for_payment_id: string | null;

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * If the transfer is rejected by Real-Time Payments or the destination financial
   * institution, this will contain supplemental details.
   */
  rejection: RealTimePaymentsTransfer.Rejection | null;

  /**
   * The identifier of the Inbound Real-Time Payments Transfer this transfer returns,
   * if any.
   */
  return_of_inbound_real_time_payments_transfer_id: string | null;

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
   * - `pending_approval` - The transfer is pending approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_submission` - The transfer is queued to be submitted to Real-Time
   *   Payments.
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `rejected` - The transfer was rejected by the network or the recipient's bank.
   * - `submitted` - The transfer has been submitted and is pending a response from
   *   Real-Time Payments.
   * - `complete` - The transfer has been sent successfully and is complete.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_submission'
    | 'pending_reviewing'
    | 'requires_attention'
    | 'rejected'
    | 'submitted'
    | 'complete';

  /**
   * After the transfer is submitted to Real-Time Payments, this will contain
   * supplemental details.
   */
  submission: RealTimePaymentsTransfer.Submission | null;

  /**
   * The Transaction funding the transfer once it is complete.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `real_time_payments_transfer`.
   */
  type: 'real_time_payments_transfer';

  /**
   * The name of the ultimate recipient of the transfer. Set this if the creditor is
   * an intermediary receiving the payment for someone else.
   */
  ultimate_creditor_name: string | null;

  /**
   * The name of the ultimate sender of the transfer. Set this if the funds are being
   * sent on behalf of someone who is not the account holder at Increase.
   */
  ultimate_debtor_name: string | null;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  unstructured_remittance_information: string;

  [k: string]: unknown;
}

export namespace RealTimePaymentsTransfer {
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
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  export interface Approval {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was approved.
     */
    approved_at: string;

    /**
     * If the Transfer was approved by a user in the dashboard, the email address of
     * that user.
     */
    approved_by: string | null;
  }

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  export interface Cancellation {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the Transfer was canceled.
     */
    canceled_at: string;

    /**
     * If the Transfer was canceled by a user in the dashboard, the email address of
     * that user.
     */
    canceled_by: string | null;
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
   * If the transfer is rejected by Real-Time Payments or the destination financial
   * institution, this will contain supplemental details.
   */
  export interface Rejection {
    /**
     * Additional information about the rejection provided by the recipient bank when
     * the `reject_reason_code` is `NARRATIVE`.
     */
    reject_reason_additional_information: string | null;

    /**
     * The reason the transfer was rejected as provided by the recipient bank or the
     * Real-Time Payments network.
     *
     * - `account_closed` - The destination account is closed. Corresponds to the
     *   Real-Time Payments reason code "AC04".
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the Real-Time Payments reason code
     *   "AC06".
     * - `invalid_creditor_account_type` - The destination account is ineligible to
     *   receive Real-Time Payments transfers. Corresponds to the Real-Time Payments
     *   reason code "AC14".
     * - `invalid_creditor_account_number` - The destination account does not exist.
     *   Corresponds to the Real-Time Payments reason code "AC03".
     * - `invalid_creditor_financial_institution_identifier` - The destination routing
     *   number is invalid. Corresponds to the Real-Time Payments reason code "RC04".
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the Real-Time Payments reason code "MD07".
     * - `narrative` - The reason is provided as narrative information in the
     *   additional information field.
     * - `transaction_forbidden` - Real-Time Payments transfers are not allowed to the
     *   destination account. Corresponds to the Real-Time Payments reason code "AG01".
     * - `transaction_type_not_supported` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code "AG03".
     * - `unexpected_amount` - The amount of the transfer is different than expected by
     *   the recipient. Corresponds to the Real-Time Payments reason code "AM09".
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the Real-Time Payments reason
     *   code "AM14".
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the Real-Time Payments reason code "BE04".
     * - `unknown_end_customer` - The specified creditor is unknown. Corresponds to the
     *   Real-Time Payments reason code "BE06".
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the Real-Time Payments reason code "BE07".
     * - `timeout` - There was a timeout processing the transfer. Corresponds to the
     *   Real-Time Payments reason code "DS24".
     * - `unsupported_message_for_recipient` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code "NOAT".
     * - `recipient_connection_not_available` - The destination financial institution
     *   is currently not connected to Real-Time Payments. Corresponds to the Real-Time
     *   Payments reason code "9912".
     * - `real_time_payments_suspended` - Real-Time Payments is currently unavailable.
     *   Corresponds to the Real-Time Payments reason code "9948".
     * - `instructed_agent_signed_off` - The destination financial institution is
     *   currently signed off of Real-Time Payments. Corresponds to the Real-Time
     *   Payments reason code "9910".
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
      | 'unexpected_amount'
      | 'amount_exceeds_bank_limits'
      | 'invalid_creditor_address'
      | 'unknown_end_customer'
      | 'invalid_debtor_address'
      | 'timeout'
      | 'unsupported_message_for_recipient'
      | 'recipient_connection_not_available'
      | 'real_time_payments_suspended'
      | 'instructed_agent_signed_off'
      | 'processing_error'
      | 'other';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was rejected.
     */
    rejected_at: string | null;
  }

  /**
   * After the transfer is submitted to Real-Time Payments, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was submitted to The Clearing House.
     */
    submitted_at: string | null;

    /**
     * The Real-Time Payments network identification of the transfer.
     */
    transaction_identification: string;
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

export interface InboundRealTimePaymentsTransferReturnParams {
  /**
   * The amount to return, in USD cents. Defaults to the full amount of the Inbound
   * Real-Time Payments Transfer, and can't be higher than it.
   */
  amount?: number;
}

export declare namespace InboundRealTimePaymentsTransfers {
  export {
    type InboundRealTimePaymentsTransfer as InboundRealTimePaymentsTransfer,
    type RealTimePaymentsTransfer as RealTimePaymentsTransfer,
    type InboundRealTimePaymentsTransfersPage as InboundRealTimePaymentsTransfersPage,
    type InboundRealTimePaymentsTransferListParams as InboundRealTimePaymentsTransferListParams,
    type InboundRealTimePaymentsTransferReturnParams as InboundRealTimePaymentsTransferReturnParams,
  };
}
