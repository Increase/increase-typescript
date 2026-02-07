// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SwiftTransfers extends APIResource {
  /**
   * Create a Swift Transfer
   *
   * @example
   * ```ts
   * const swiftTransfer = await client.swiftTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   account_number: '987654321',
   *   bank_identification_code: 'ECBFDEFFTPP',
   *   creditor_address: {
   *     city: 'Frankfurt',
   *     country: 'DE',
   *     line1: 'Sonnemannstrasse 20',
   *   },
   *   creditor_name: 'Ian Crease',
   *   debtor_address: {
   *     city: 'New York',
   *     country: 'US',
   *     line1: '33 Liberty Street',
   *   },
   *   debtor_name: 'National Phonograph Company',
   *   instructed_amount: 100,
   *   instructed_currency: 'USD',
   *   source_account_number_id:
   *     'account_number_v18nkfqm6afpsrvy82b2',
   *   unstructured_remittance_information: 'New Swift transfer',
   * });
   * ```
   */
  create(body: SwiftTransferCreateParams, options?: RequestOptions): APIPromise<SwiftTransfer> {
    return this._client.post('/swift_transfers', { body, ...options });
  }

  /**
   * Retrieve a Swift Transfer
   *
   * @example
   * ```ts
   * const swiftTransfer = await client.swiftTransfers.retrieve(
   *   'swift_transfer_29h21xkng03788zwd3fh',
   * );
   * ```
   */
  retrieve(swiftTransferID: string, options?: RequestOptions): APIPromise<SwiftTransfer> {
    return this._client.get(path`/swift_transfers/${swiftTransferID}`, options);
  }

  /**
   * List Swift Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const swiftTransfer of client.swiftTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SwiftTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SwiftTransfersPage, SwiftTransfer> {
    return this._client.getAPIList('/swift_transfers', Page<SwiftTransfer>, { query, ...options });
  }

  /**
   * Approve a Swift Transfer
   *
   * @example
   * ```ts
   * const swiftTransfer = await client.swiftTransfers.approve(
   *   'swift_transfer_29h21xkng03788zwd3fh',
   * );
   * ```
   */
  approve(swiftTransferID: string, options?: RequestOptions): APIPromise<SwiftTransfer> {
    return this._client.post(path`/swift_transfers/${swiftTransferID}/approve`, options);
  }

  /**
   * Cancel a pending Swift Transfer
   *
   * @example
   * ```ts
   * const swiftTransfer = await client.swiftTransfers.cancel(
   *   'swift_transfer_29h21xkng03788zwd3fh',
   * );
   * ```
   */
  cancel(swiftTransferID: string, options?: RequestOptions): APIPromise<SwiftTransfer> {
    return this._client.post(path`/swift_transfers/${swiftTransferID}/cancel`, options);
  }
}

export type SwiftTransfersPage = Page<SwiftTransfer>;

/**
 * Swift Transfers send funds internationally.
 */
export interface SwiftTransfer {
  /**
   * The Swift transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The creditor's account number.
   */
  account_number: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * The bank identification code (BIC) of the creditor.
   */
  bank_identification_code: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: SwiftTransfer.CreatedBy;

  /**
   * The creditor's address.
   */
  creditor_address: SwiftTransfer.CreditorAddress;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The debtor's address.
   */
  debtor_address: SwiftTransfer.DebtorAddress;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The amount that was instructed to be transferred in minor units of the
   * `instructed_currency`.
   */
  instructed_amount: number;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the
   * instructed amount.
   *
   * - `USD` - United States Dollar
   */
  instructed_currency: 'USD';

  /**
   * The ID for the pending transaction representing the transfer.
   */
  pending_transaction_id: string | null;

  /**
   * The creditor's bank account routing or transit number. Required in certain
   * countries.
   */
  routing_number: string | null;

  /**
   * The Account Number included in the transfer as the debtor's account number.
   */
  source_account_number_id: string;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is pending approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_reviewing` - The transfer is pending review by Increase.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `pending_initiating` - The transfer is pending initiation.
   * - `initiated` - The transfer has been initiated.
   * - `rejected` - The transfer has been rejected by Increase.
   * - `returned` - The transfer has been returned.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_reviewing'
    | 'requires_attention'
    | 'pending_initiating'
    | 'initiated'
    | 'rejected'
    | 'returned';

  /**
   * The ID for the transaction funding the transfer. This will be populated after
   * the transfer is initiated.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `swift_transfer`.
   */
  type: 'swift_transfer';

  /**
   * The Unique End-to-end Transaction Reference
   * ([UETR](https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr))
   * for the transfer.
   */
  unique_end_to_end_transaction_reference: string;

  /**
   * The unstructured remittance information that was included with the transfer.
   */
  unstructured_remittance_information: string;
}

export namespace SwiftTransfer {
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
   * The creditor's address.
   */
  export interface CreditorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string | null;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The ZIP or postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state, province, or region of the address. Required in certain countries.
     */
    state: string | null;
  }

  /**
   * The debtor's address.
   */
  export interface DebtorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string | null;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The ZIP or postal code of the address.
     */
    postal_code: string | null;

    /**
     * The state, province, or region of the address. Required in certain countries.
     */
    state: string | null;
  }
}

export interface SwiftTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The creditor's account number.
   */
  account_number: string;

  /**
   * The bank identification code (BIC) of the creditor. If it ends with the
   * three-character branch code, this must be 11 characters long. Otherwise this
   * must be 8 characters and the branch code will be assumed to be `XXX`.
   */
  bank_identification_code: string;

  /**
   * The creditor's address.
   */
  creditor_address: SwiftTransferCreateParams.CreditorAddress;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The debtor's address.
   */
  debtor_address: SwiftTransferCreateParams.DebtorAddress;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * The amount, in minor units of `instructed_currency`, to send to the creditor.
   */
  instructed_amount: number;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the
   * instructed amount.
   *
   * - `USD` - United States Dollar
   */
  instructed_currency: 'USD';

  /**
   * The Account Number to include in the transfer as the debtor's account number.
   */
  source_account_number_id: string;

  /**
   * Unstructured remittance information to include in the transfer.
   */
  unstructured_remittance_information: string;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * The creditor's bank account routing or transit number. Required in certain
   * countries.
   */
  routing_number?: string;

  [k: string]: unknown;
}

export namespace SwiftTransferCreateParams {
  /**
   * The creditor's address.
   */
  export interface CreditorAddress {
    /**
     * The city, district, town, or village of the address.
     */
    city: string;

    /**
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;

    /**
     * The ZIP or postal code of the address. Required in certain countries.
     */
    postal_code?: string;

    /**
     * The state, province, or region of the address. Required in certain countries.
     */
    state?: string;
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
     * The two-letter
     * [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code for
     * the country of the address.
     */
    country: string;

    /**
     * The first line of the address. This is usually the street number and street.
     */
    line1: string;

    /**
     * The second line of the address. This might be the floor or room number.
     */
    line2?: string;

    /**
     * The ZIP or postal code of the address. Required in certain countries.
     */
    postal_code?: string;

    /**
     * The state, province, or region of the address. Required in certain countries.
     */
    state?: string;
  }
}

export interface SwiftTransferListParams extends PageParams {
  /**
   * Filter Swift Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: SwiftTransferListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: SwiftTransferListParams.Status;
}

export namespace SwiftTransferListParams {
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
      | 'pending_approval'
      | 'canceled'
      | 'pending_reviewing'
      | 'requires_attention'
      | 'pending_initiating'
      | 'initiated'
      | 'rejected'
      | 'returned'
    >;
  }
}

export declare namespace SwiftTransfers {
  export {
    type SwiftTransfer as SwiftTransfer,
    type SwiftTransfersPage as SwiftTransfersPage,
    type SwiftTransferCreateParams as SwiftTransferCreateParams,
    type SwiftTransferListParams as SwiftTransferListParams,
  };
}
