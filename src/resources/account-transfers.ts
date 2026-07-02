// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountTransfers extends APIResource {
  /**
   * Create an Account Transfer
   *
   * @example
   * ```ts
   * const accountTransfer =
   *   await client.accountTransfers.create({
   *     account_id: 'account_in71c4amph0vgo2qllky',
   *     amount: 100,
   *     description: 'Creating liquidity',
   *     destination_account_id: 'account_uf16sut2ct5bevmq3eh',
   *   });
   * ```
   */
  create(body: AccountTransferCreateParams, options?: RequestOptions): APIPromise<AccountTransfer> {
    return this._client.post('/account_transfers', { body, ...options });
  }

  /**
   * Retrieve an Account Transfer
   *
   * @example
   * ```ts
   * const accountTransfer =
   *   await client.accountTransfers.retrieve(
   *     'account_transfer_7k9qe1ysdgqztnt63l7n',
   *   );
   * ```
   */
  retrieve(accountTransferID: string, options?: RequestOptions): APIPromise<AccountTransfer> {
    return this._client.get(path`/account_transfers/${accountTransferID}`, options);
  }

  /**
   * List Account Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountTransfer of client.accountTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountTransfersPage, AccountTransfer> {
    return this._client.getAPIList('/account_transfers', Page<AccountTransfer>, { query, ...options });
  }

  /**
   * Approves an Account Transfer in status `pending_approval`.
   *
   * @example
   * ```ts
   * const accountTransfer =
   *   await client.accountTransfers.approve(
   *     'account_transfer_7k9qe1ysdgqztnt63l7n',
   *   );
   * ```
   */
  approve(accountTransferID: string, options?: RequestOptions): APIPromise<AccountTransfer> {
    return this._client.post(path`/account_transfers/${accountTransferID}/approve`, options);
  }

  /**
   * Cancels an Account Transfer in status `pending_approval`.
   *
   * @example
   * ```ts
   * const accountTransfer =
   *   await client.accountTransfers.cancel(
   *     'account_transfer_7k9qe1ysdgqztnt63l7n',
   *   );
   * ```
   */
  cancel(accountTransferID: string, options?: RequestOptions): APIPromise<AccountTransfer> {
    return this._client.post(path`/account_transfers/${accountTransferID}/cancel`, options);
  }
}

export type AccountTransfersPage = Page<AccountTransfer>;

/**
 * Account transfers move funds between your own accounts at Increase (accounting
 * systems often refer to these as Book Transfers). Account Transfers are free and
 * synchronous. Upon creation they create two Transactions, one negative on the
 * originating account and one positive on the destination account (unless the
 * transfer requires approval, in which case the Transactions will be created when
 * the transfer is approved).
 */
export interface AccountTransfer {
  /**
   * The Account Transfer's identifier.
   */
  id: string;

  /**
   * The Account from which the transfer originated.
   */
  account_id: string;

  /**
   * The transfer amount in cents. This will always be positive and indicates the
   * amount of money leaving the originating account.
   */
  amount: number;

  /**
   * If your account requires approvals for transfers and the transfer was approved,
   * this will contain details of the approval.
   */
  approval: AccountTransfer.Approval | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: AccountTransfer.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: AccountTransfer.CreatedBy | null;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's
   * currency.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * An internal-facing description for the transfer for display in the API and
   * dashboard. This will also show in the description of the created Transactions.
   */
  description: string;

  /**
   * The destination Account's identifier.
   */
  destination_account_id: string;

  /**
   * The identifier of the Transaction on the destination Account representing the
   * received funds.
   */
  destination_transaction_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is pending approval from your team.
   * - `canceled` - The transfer was pending approval from your team and has been
   *   canceled.
   * - `complete` - The transfer has been completed.
   */
  status: 'pending_approval' | 'canceled' | 'complete';

  /**
   * The identifier of the Transaction on the originating account representing the
   * transferred funds.
   */
  transaction_id: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `account_transfer`.
   */
  type: 'account_transfer';

  [k: string]: unknown;
}

export namespace AccountTransfer {
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
}

export interface AccountTransferCreateParams {
  /**
   * The identifier for the originating Account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in the minor unit of the account currency. For dollars, for
   * example, this is cents.
   */
  amount: number;

  /**
   * An internal-facing description for the transfer for display in the API and
   * dashboard. This will also show in the description of the created Transactions.
   */
  description: string;

  /**
   * The identifier for the destination Account that will receive the transfer.
   */
  destination_account_id: string;

  /**
   * Whether the transfer should require explicit approval via the dashboard or API.
   * For more information, see
   * [Transfer Approvals](/documentation/transfer-approvals).
   */
  require_approval?: boolean;

  [k: string]: unknown;
}

export interface AccountTransferListParams extends PageParams {
  /**
   * Filter Account Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: AccountTransferListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace AccountTransferListParams {
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

export declare namespace AccountTransfers {
  export {
    type AccountTransfer as AccountTransfer,
    type AccountTransfersPage as AccountTransfersPage,
    type AccountTransferCreateParams as AccountTransferCreateParams,
    type AccountTransferListParams as AccountTransferListParams,
  };
}
