// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WireTransfers extends APIResource {
  /**
   * Create a Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 100,
   *   creditor: { name: 'Ian Crease' },
   *   remittance: { category: 'unstructured' },
   * });
   * ```
   */
  create(body: WireTransferCreateParams, options?: RequestOptions): APIPromise<WireTransfer> {
    return this._client.post('/wire_transfers', { body, ...options });
  }

  /**
   * Retrieve a Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.retrieve(
   *   'wire_transfer_5akynk7dqsq25qwk9q2u',
   * );
   * ```
   */
  retrieve(wireTransferID: string, options?: RequestOptions): APIPromise<WireTransfer> {
    return this._client.get(path`/wire_transfers/${wireTransferID}`, options);
  }

  /**
   * List Wire Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const wireTransfer of client.wireTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WireTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WireTransfersPage, WireTransfer> {
    return this._client.getAPIList('/wire_transfers', Page<WireTransfer>, { query, ...options });
  }

  /**
   * Approve a Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.approve(
   *   'wire_transfer_5akynk7dqsq25qwk9q2u',
   * );
   * ```
   */
  approve(wireTransferID: string, options?: RequestOptions): APIPromise<WireTransfer> {
    return this._client.post(path`/wire_transfers/${wireTransferID}/approve`, options);
  }

  /**
   * Cancel a pending Wire Transfer
   *
   * @example
   * ```ts
   * const wireTransfer = await client.wireTransfers.cancel(
   *   'wire_transfer_5akynk7dqsq25qwk9q2u',
   * );
   * ```
   */
  cancel(wireTransferID: string, options?: RequestOptions): APIPromise<WireTransfer> {
    return this._client.post(path`/wire_transfers/${wireTransferID}/cancel`, options);
  }
}

export type WireTransfersPage = Page<WireTransfer>;

/**
 * Wire transfers move funds between your Increase account and any other account
 * accessible by Fedwire.
 */
export interface WireTransfer {
  /**
   * The wire transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The destination account number.
   */
  account_number: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: WireTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: WireTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: WireTransfer.CreatedBy | null;

  /**
   * The person or business that is receiving the funds from the transfer.
   */
  creditor: WireTransfer.Creditor | null;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency. For wire transfers this is always equal to `usd`.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The person or business whose funds are being transferred.
   */
  debtor: WireTransfer.Debtor | null;

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
   * The ID of an Inbound Wire Drawdown Request in response to which this transfer
   * was sent.
   */
  inbound_wire_drawdown_request_id: string | null;

  /**
   * The transfer's network.
   */
  network: 'wire';

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * Remittance information sent with the wire transfer.
   */
  remittance: WireTransfer.Remittance | null;

  /**
   * If your transfer is reversed, this will contain details of the reversal.
   */
  reversal: WireTransfer.Reversal | null;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  routing_number: string;

  /**
   * The Account Number that was passed to the wire's recipient.
   */
  source_account_number_id: string | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is pending approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `rejected` - The transfer has been rejected by Increase.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `pending_creating` - The transfer is pending creation.
   * - `reversed` - The transfer has been reversed.
   * - `submitted` - The transfer has been submitted to Fedwire.
   * - `complete` - The transfer has been acknowledged by Fedwire and can be
   *   considered complete.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_reviewing'
    | 'rejected'
    | 'requires_attention'
    | 'pending_creating'
    | 'reversed'
    | 'submitted'
    | 'complete';

  /**
   * After the transfer is submitted to Fedwire, this will contain supplemental
   * details.
   */
  submission: WireTransfer.Submission | null;

  /**
   * The ID for the transaction funding the transfer.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `wire_transfer`.
   */
  type: 'wire_transfer';

  [k: string]: unknown;
}

export namespace WireTransfer {
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
     * If present, details about the API key that created the transfer.
     */
    api_key: CreatedBy.APIKey | null;

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
     * If present, details about the OAuth Application that created the transfer.
     */
    oauth_application: CreatedBy.OAuthApplication | null;

    /**
     * If present, details about the User that created the transfer.
     */
    user: CreatedBy.User | null;
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
   * The person or business that is receiving the funds from the transfer.
   */
  export interface Creditor {
    /**
     * The person or business's address.
     */
    address: Creditor.Address | null;

    /**
     * The person or business's name.
     */
    name: string | null;
  }

  export namespace Creditor {
    /**
     * The person or business's address.
     */
    export interface Address {
      /**
       * Unstructured address lines.
       */
      unstructured: Address.Unstructured | null;
    }

    export namespace Address {
      /**
       * Unstructured address lines.
       */
      export interface Unstructured {
        /**
         * The first line.
         */
        line1: string | null;

        /**
         * The second line.
         */
        line2: string | null;

        /**
         * The third line.
         */
        line3: string | null;
      }
    }
  }

  /**
   * The person or business whose funds are being transferred.
   */
  export interface Debtor {
    /**
     * The person or business's address.
     */
    address: Debtor.Address | null;

    /**
     * The person or business's name.
     */
    name: string | null;
  }

  export namespace Debtor {
    /**
     * The person or business's address.
     */
    export interface Address {
      /**
       * Unstructured address lines.
       */
      unstructured: Address.Unstructured | null;
    }

    export namespace Address {
      /**
       * Unstructured address lines.
       */
      export interface Unstructured {
        /**
         * The first line.
         */
        line1: string | null;

        /**
         * The second line.
         */
        line2: string | null;

        /**
         * The third line.
         */
        line3: string | null;
      }
    }
  }

  /**
   * Remittance information sent with the wire transfer.
   */
  export interface Remittance {
    /**
     * The type of remittance information being passed.
     *
     * - `unstructured` - The wire transfer contains unstructured remittance
     *   information.
     * - `tax` - The wire transfer is for tax payment purposes to the Internal Revenue
     *   Service (IRS).
     */
    category: 'unstructured' | 'tax';

    /**
     * Internal Revenue Service (IRS) tax repayment information. Required if `category`
     * is equal to `tax`.
     */
    tax: Remittance.Tax | null;

    /**
     * Unstructured remittance information. Required if `category` is equal to
     * `unstructured`.
     */
    unstructured: Remittance.Unstructured | null;
  }

  export namespace Remittance {
    /**
     * Internal Revenue Service (IRS) tax repayment information. Required if `category`
     * is equal to `tax`.
     */
    export interface Tax {
      /**
       * The month and year the tax payment is for, in YYYY-MM-DD format. The day is
       * ignored.
       */
      date: string;

      /**
       * The 9-digit Tax Identification Number (TIN) or Employer Identification Number
       * (EIN).
       */
      identification_number: string;

      /**
       * The 5-character tax type code.
       */
      type_code: string;
    }

    /**
     * Unstructured remittance information. Required if `category` is equal to
     * `unstructured`.
     */
    export interface Unstructured {
      /**
       * The message to the beneficiary.
       */
      message: string;
    }
  }

  /**
   * If your transfer is reversed, this will contain details of the reversal.
   */
  export interface Reversal {
    /**
     * The amount that was reversed in USD cents.
     */
    amount: number;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the reversal was created.
     */
    created_at: string;

    /**
     * The debtor's routing number.
     */
    debtor_routing_number: string | null;

    /**
     * The description on the reversal message from Fedwire, set by the reversing bank.
     */
    description: string;

    /**
     * The Fedwire cycle date for the wire reversal. The "Fedwire day" begins at 9:00
     * PM Eastern Time on the evening before the `cycle date`.
     */
    input_cycle_date: string;

    /**
     * The Fedwire transaction identifier.
     */
    input_message_accountability_data: string;

    /**
     * The Fedwire sequence number.
     */
    input_sequence_number: string;

    /**
     * The Fedwire input source identifier.
     */
    input_source: string;

    /**
     * The sending bank's identifier for the reversal.
     */
    instruction_identification: string | null;

    /**
     * Additional information about the reason for the reversal.
     */
    return_reason_additional_information: string | null;

    /**
     * A code provided by the sending bank giving a reason for the reversal. The common
     * return reason codes are
     * [documented here](/documentation/wire-reversals#reversal-reason-codes).
     */
    return_reason_code: string | null;

    /**
     * An Increase-generated description of the `return_reason_code`.
     */
    return_reason_code_description: string | null;

    /**
     * The ID for the Transaction associated with the transfer reversal.
     */
    transaction_id: string;

    /**
     * The ID for the Wire Transfer that is being reversed.
     */
    wire_transfer_id: string;

    [k: string]: unknown;
  }

  /**
   * After the transfer is submitted to Fedwire, this will contain supplemental
   * details.
   */
  export interface Submission {
    /**
     * The accountability data for the submission.
     */
    input_message_accountability_data: string;

    /**
     * When this wire transfer was submitted to Fedwire.
     */
    submitted_at: string;
  }
}

export interface WireTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The person or business that is receiving the funds from the transfer.
   */
  creditor: WireTransferCreateParams.Creditor;

  /**
   * Additional remittance information related to the wire transfer.
   */
  remittance: WireTransferCreateParams.Remittance;

  /**
   * The account number for the destination account.
   */
  account_number?: string;

  /**
   * The person or business whose funds are being transferred. This is only necessary
   * if you're transferring from a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  debtor?: WireTransferCreateParams.Debtor;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `account_number` and `routing_number` must be absent.
   */
  external_account_id?: string;

  /**
   * The ID of an Inbound Wire Drawdown Request in response to which this transfer is
   * being sent.
   */
  inbound_wire_drawdown_request_id?: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The American Bankers' Association (ABA) Routing Transit Number (RTN) for the
   * destination account.
   */
  routing_number?: string;

  /**
   * The ID of an Account Number that will be passed to the wire's recipient
   */
  source_account_number_id?: string;

  [k: string]: unknown;
}

export namespace WireTransferCreateParams {
  /**
   * The person or business that is receiving the funds from the transfer.
   */
  export interface Creditor {
    /**
     * The person or business's name.
     */
    name: string;

    /**
     * The person or business's address.
     */
    address?: Creditor.Address;
  }

  export namespace Creditor {
    /**
     * The person or business's address.
     */
    export interface Address {
      /**
       * Unstructured address lines.
       */
      unstructured: Address.Unstructured;
    }

    export namespace Address {
      /**
       * Unstructured address lines.
       */
      export interface Unstructured {
        /**
         * The address line 1.
         */
        line1: string;

        /**
         * The address line 2.
         */
        line2?: string;

        /**
         * The address line 3.
         */
        line3?: string;
      }
    }
  }

  /**
   * Additional remittance information related to the wire transfer.
   */
  export interface Remittance {
    /**
     * The type of remittance information being passed.
     *
     * - `unstructured` - The wire transfer contains unstructured remittance
     *   information.
     * - `tax` - The wire transfer is for tax payment purposes to the Internal Revenue
     *   Service (IRS).
     */
    category: 'unstructured' | 'tax';

    /**
     * Internal Revenue Service (IRS) tax repayment information. Required if `category`
     * is equal to `tax`.
     */
    tax?: Remittance.Tax;

    /**
     * Unstructured remittance information. Required if `category` is equal to
     * `unstructured`.
     */
    unstructured?: Remittance.Unstructured;
  }

  export namespace Remittance {
    /**
     * Internal Revenue Service (IRS) tax repayment information. Required if `category`
     * is equal to `tax`.
     */
    export interface Tax {
      /**
       * The month and year the tax payment is for, in YYYY-MM-DD format. The day is
       * ignored.
       */
      date: string;

      /**
       * The 9-digit Tax Identification Number (TIN) or Employer Identification Number
       * (EIN).
       */
      identification_number: string;

      /**
       * The 5-character tax type code.
       */
      type_code: string;
    }

    /**
     * Unstructured remittance information. Required if `category` is equal to
     * `unstructured`.
     */
    export interface Unstructured {
      /**
       * The information.
       */
      message: string;
    }
  }

  /**
   * The person or business whose funds are being transferred. This is only necessary
   * if you're transferring from a commingled account. Otherwise, we'll use the
   * associated entity's details.
   */
  export interface Debtor {
    /**
     * The person or business's name.
     */
    name: string;

    /**
     * The person or business's address.
     */
    address?: Debtor.Address;
  }

  export namespace Debtor {
    /**
     * The person or business's address.
     */
    export interface Address {
      /**
       * Unstructured address lines.
       */
      unstructured: Address.Unstructured;
    }

    export namespace Address {
      /**
       * Unstructured address lines.
       */
      export interface Unstructured {
        /**
         * The address line 1.
         */
        line1: string;

        /**
         * The address line 2.
         */
        line2?: string;

        /**
         * The address line 3.
         */
        line3?: string;
      }
    }
  }
}

export interface WireTransferListParams extends PageParams {
  /**
   * Filter Wire Transfers to those belonging to the specified Account.
   */
  account_id?: string;

  created_at?: WireTransferListParams.CreatedAt;

  /**
   * Filter Wire Transfers to those made to the specified External Account.
   */
  external_account_id?: string;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace WireTransferListParams {
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

export declare namespace WireTransfers {
  export {
    type WireTransfer as WireTransfer,
    type WireTransfersPage as WireTransfersPage,
    type WireTransferCreateParams as WireTransferCreateParams,
    type WireTransferListParams as WireTransferListParams,
  };
}
