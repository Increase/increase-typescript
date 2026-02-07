// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CheckTransfers extends APIResource {
  /**
   * Create a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   *   amount: 1000,
   *   fulfillment_method: 'physical_check',
   *   source_account_number_id:
   *     'account_number_v18nkfqm6afpsrvy82b2',
   * });
   * ```
   */
  create(body: CheckTransferCreateParams, options?: RequestOptions): APIPromise<CheckTransfer> {
    return this._client.post('/check_transfers', { body, ...options });
  }

  /**
   * Retrieve a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.retrieve(
   *   'check_transfer_30b43acfu9vw8fyc4f5',
   * );
   * ```
   */
  retrieve(checkTransferID: string, options?: RequestOptions): APIPromise<CheckTransfer> {
    return this._client.get(path`/check_transfers/${checkTransferID}`, options);
  }

  /**
   * List Check Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const checkTransfer of client.checkTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CheckTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CheckTransfersPage, CheckTransfer> {
    return this._client.getAPIList('/check_transfers', Page<CheckTransfer>, { query, ...options });
  }

  /**
   * Approve a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.approve(
   *   'check_transfer_30b43acfu9vw8fyc4f5',
   * );
   * ```
   */
  approve(checkTransferID: string, options?: RequestOptions): APIPromise<CheckTransfer> {
    return this._client.post(path`/check_transfers/${checkTransferID}/approve`, options);
  }

  /**
   * Cancel a Check Transfer with the `pending_approval` status. See
   * [Transfer Approvals](/documentation/transfer-approvals) for more information.
   *
   * @example
   * ```ts
   * const checkTransfer = await client.checkTransfers.cancel(
   *   'check_transfer_30b43acfu9vw8fyc4f5',
   * );
   * ```
   */
  cancel(checkTransferID: string, options?: RequestOptions): APIPromise<CheckTransfer> {
    return this._client.post(path`/check_transfers/${checkTransferID}/cancel`, options);
  }

  /**
   * Stop payment on a Check Transfer
   *
   * @example
   * ```ts
   * const checkTransfer =
   *   await client.checkTransfers.stopPayment(
   *     'check_transfer_30b43acfu9vw8fyc4f5',
   *   );
   * ```
   */
  stopPayment(
    checkTransferID: string,
    body: CheckTransferStopPaymentParams,
    options?: RequestOptions,
  ): APIPromise<CheckTransfer> {
    return this._client.post(path`/check_transfers/${checkTransferID}/stop_payment`, { body, ...options });
  }
}

export type CheckTransfersPage = Page<CheckTransfer>;

/**
 * Check Transfers move funds from your Increase account by mailing a physical
 * check.
 */
export interface CheckTransfer {
  /**
   * The Check transfer's identifier.
   */
  id: string;

  /**
   * The identifier of the Account from which funds will be transferred.
   */
  account_id: string;

  /**
   * The account number printed on the check.
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
  approval: CheckTransfer.Approval | null;

  /**
   * If the Check Transfer was successfully deposited, this will contain the
   * identifier of the Inbound Check Deposit object with details of the deposit.
   */
  approved_inbound_check_deposit_id: string | null;

  /**
   * How the account's available balance should be checked.
   *
   * - `full` - The available balance of the account must be at least the amount of
   *   the check, and a Pending Transaction will be created for the full amount. This
   *   is the default behavior if `balance_check` is omitted.
   * - `none` - No balance check will performed when the check transfer is initiated.
   *   A zero-dollar Pending Transaction will be created. The balance will still be
   *   checked when the Inbound Check Deposit is created.
   */
  balance_check: 'full' | 'none' | null;

  /**
   * If your account requires approvals for transfers and the transfer was not
   * approved, this will contain details of the cancellation.
   */
  cancellation: CheckTransfer.Cancellation | null;

  /**
   * The check number printed on the check.
   */
  check_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the transfer was created.
   */
  created_at: string;

  /**
   * What object created the transfer, either via the API or the dashboard.
   */
  created_by: CheckTransfer.CreatedBy | null;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's
   * currency.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * Whether Increase will print and mail the check or if you will do it yourself.
   *
   * - `physical_check` - Increase will print and mail a physical check.
   * - `third_party` - Increase will not print a check; you are responsible for
   *   printing and mailing a check with the provided account number, routing number,
   *   check number, and amount.
   */
  fulfillment_method: 'physical_check' | 'third_party';

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * If the check has been mailed by Increase, this will contain details of the
   * shipment.
   */
  mailing: CheckTransfer.Mailing | null;

  /**
   * The ID for the pending transaction representing the transfer. A pending
   * transaction is created when the transfer
   * [requires approval](https://increase.com/documentation/transfer-approvals#transfer-approvals)
   * by someone else in your organization.
   */
  pending_transaction_id: string | null;

  /**
   * Details relating to the physical check that Increase will print and mail. Will
   * be present if and only if `fulfillment_method` is equal to `physical_check`.
   */
  physical_check: CheckTransfer.PhysicalCheck | null;

  /**
   * The routing number printed on the check.
   */
  routing_number: string;

  /**
   * The identifier of the Account Number from which to send the transfer and print
   * on the check.
   */
  source_account_number_id: string | null;

  /**
   * The lifecycle status of the transfer.
   *
   * - `pending_approval` - The transfer is awaiting approval.
   * - `canceled` - The transfer has been canceled.
   * - `pending_submission` - The transfer is pending submission.
   * - `requires_attention` - The transfer requires attention from an Increase
   *   operator.
   * - `rejected` - The transfer has been rejected.
   * - `pending_mailing` - The check is queued for mailing.
   * - `mailed` - The check has been mailed.
   * - `deposited` - The check has been deposited.
   * - `stopped` - A stop-payment was requested for this check.
   * - `returned` - The transfer has been returned.
   */
  status:
    | 'pending_approval'
    | 'canceled'
    | 'pending_submission'
    | 'requires_attention'
    | 'rejected'
    | 'pending_mailing'
    | 'mailed'
    | 'deposited'
    | 'stopped'
    | 'returned';

  /**
   * After a stop-payment is requested on the check, this will contain supplemental
   * details.
   */
  stop_payment_request: CheckTransfer.StopPaymentRequest | null;

  /**
   * After the transfer is submitted, this will contain supplemental details.
   */
  submission: CheckTransfer.Submission | null;

  /**
   * Details relating to the custom fulfillment you will perform. Will be present if
   * and only if `fulfillment_method` is equal to `third_party`.
   */
  third_party: CheckTransfer.ThirdParty | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `check_transfer`.
   */
  type: 'check_transfer';

  /**
   * If set, the check will be valid on or before this date. After this date, the
   * check transfer will be automatically stopped and deposits will not be accepted.
   * For checks printed by Increase, this date is included on the check as its
   * expiry.
   */
  valid_until_date: string | null;

  [k: string]: unknown;
}

export namespace CheckTransfer {
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
   * If the check has been mailed by Increase, this will contain details of the
   * shipment.
   */
  export interface Mailing {
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the check was mailed.
     */
    mailed_at: string;

    [k: string]: unknown;
  }

  /**
   * Details relating to the physical check that Increase will print and mail. Will
   * be present if and only if `fulfillment_method` is equal to `physical_check`.
   */
  export interface PhysicalCheck {
    /**
     * The ID of the file for the check attachment.
     */
    attachment_file_id: string | null;

    /**
     * The ID of the file for the check voucher image.
     */
    check_voucher_image_file_id: string | null;

    /**
     * Details for where Increase will mail the check.
     */
    mailing_address: PhysicalCheck.MailingAddress;

    /**
     * The descriptor that will be printed on the memo field on the check.
     */
    memo: string | null;

    /**
     * The descriptor that will be printed on the letter included with the check.
     */
    note: string | null;

    /**
     * The payer of the check. This will be printed on the top-left portion of the
     * check and defaults to the return address if unspecified.
     */
    payer: Array<PhysicalCheck.Payer>;

    /**
     * The name that will be printed on the check.
     */
    recipient_name: string;

    /**
     * The return address to be printed on the check.
     */
    return_address: PhysicalCheck.ReturnAddress | null;

    /**
     * The shipping method for the check.
     *
     * - `usps_first_class` - USPS First Class
     * - `fedex_overnight` - FedEx Overnight
     */
    shipping_method: 'usps_first_class' | 'fedex_overnight' | null;

    /**
     * The text that will appear as the signature on the check in cursive font. If
     * blank, the check will be printed with 'No signature required'.
     */
    signature_text: string | null;

    /**
     * Tracking updates relating to the physical check's delivery.
     */
    tracking_updates: Array<PhysicalCheck.TrackingUpdate>;

    [k: string]: unknown;
  }

  export namespace PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    export interface MailingAddress {
      /**
       * The city of the check's destination.
       */
      city: string | null;

      /**
       * The street address of the check's destination.
       */
      line1: string | null;

      /**
       * The second line of the address of the check's destination.
       */
      line2: string | null;

      /**
       * The name component of the check's mailing address.
       */
      name: string | null;

      /**
       * The phone number to be used in case of delivery issues at the check's mailing
       * address. Only used for FedEx overnight shipping.
       */
      phone: string | null;

      /**
       * The postal code of the check's destination.
       */
      postal_code: string | null;

      /**
       * The state of the check's destination.
       */
      state: string | null;
    }

    export interface Payer {
      /**
       * The contents of the line.
       */
      contents: string;
    }

    /**
     * The return address to be printed on the check.
     */
    export interface ReturnAddress {
      /**
       * The city of the check's destination.
       */
      city: string | null;

      /**
       * The street address of the check's destination.
       */
      line1: string | null;

      /**
       * The second line of the address of the check's destination.
       */
      line2: string | null;

      /**
       * The name component of the check's return address.
       */
      name: string | null;

      /**
       * The shipper's phone number to be used in case of delivery issues. Only used for
       * FedEx overnight shipping.
       */
      phone: string | null;

      /**
       * The postal code of the check's destination.
       */
      postal_code: string | null;

      /**
       * The state of the check's destination.
       */
      state: string | null;
    }

    export interface TrackingUpdate {
      /**
       * The type of tracking event.
       *
       * - `in_transit` - The check is in transit.
       * - `processed_for_delivery` - The check has been processed for delivery.
       * - `delivered` - The check has been delivered.
       * - `delivery_issue` - There is an issue preventing delivery. The delivery will be
       *   attempted again if possible. If the issue cannot be resolved, the check will
       *   be returned to sender.
       * - `returned_to_sender` - Delivery failed and the check was returned to sender.
       */
      category:
        | 'in_transit'
        | 'processed_for_delivery'
        | 'delivered'
        | 'delivery_issue'
        | 'returned_to_sender';

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

  /**
   * After a stop-payment is requested on the check, this will contain supplemental
   * details.
   */
  export interface StopPaymentRequest {
    /**
     * The reason why this transfer was stopped.
     *
     * - `mail_delivery_failed` - The check could not be delivered.
     * - `rejected_by_increase` - The check was canceled by an Increase operator who
     *   will provide details out-of-band.
     * - `not_authorized` - The check was not authorized.
     * - `valid_until_date_passed` - The check was stopped for `valid_until_date` being
     *   in the past.
     * - `unknown` - The check was stopped for another reason.
     */
    reason:
      | 'mail_delivery_failed'
      | 'rejected_by_increase'
      | 'not_authorized'
      | 'valid_until_date_passed'
      | 'unknown';

    /**
     * The time the stop-payment was requested.
     */
    requested_at: string;

    /**
     * The ID of the check transfer that was stopped.
     */
    transfer_id: string;

    /**
     * A constant representing the object's type. For this resource it will always be
     * `check_transfer_stop_payment_request`.
     */
    type: 'check_transfer_stop_payment_request';

    [k: string]: unknown;
  }

  /**
   * After the transfer is submitted, this will contain supplemental details.
   */
  export interface Submission {
    /**
     * The ID of the file corresponding to an image of the check that was mailed, if
     * available.
     */
    preview_file_id: string | null;

    /**
     * The address we submitted to the printer. This is what is physically printed on
     * the check.
     */
    submitted_address: Submission.SubmittedAddress;

    /**
     * When this check was submitted to our check printer.
     */
    submitted_at: string;

    /**
     * The tracking number for the check shipment.
     */
    tracking_number: string | null;

    [k: string]: unknown;
  }

  export namespace Submission {
    /**
     * The address we submitted to the printer. This is what is physically printed on
     * the check.
     */
    export interface SubmittedAddress {
      /**
       * The submitted address city.
       */
      city: string;

      /**
       * The submitted address line 1.
       */
      line1: string;

      /**
       * The submitted address line 2.
       */
      line2: string | null;

      /**
       * The submitted recipient name.
       */
      recipient_name: string;

      /**
       * The submitted address state.
       */
      state: string;

      /**
       * The submitted address zip.
       */
      zip: string;
    }
  }

  /**
   * Details relating to the custom fulfillment you will perform. Will be present if
   * and only if `fulfillment_method` is equal to `third_party`.
   */
  export interface ThirdParty {
    /**
     * The name that you will print on the check.
     */
    recipient_name: string | null;

    [k: string]: unknown;
  }
}

export interface CheckTransferCreateParams {
  /**
   * The identifier for the account that will send the transfer.
   */
  account_id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * Whether Increase will print and mail the check or if you will do it yourself.
   *
   * - `physical_check` - Increase will print and mail a physical check.
   * - `third_party` - Increase will not print a check; you are responsible for
   *   printing and mailing a check with the provided account number, routing number,
   *   check number, and amount.
   */
  fulfillment_method: 'physical_check' | 'third_party';

  /**
   * The identifier of the Account Number from which to send the transfer and print
   * on the check.
   */
  source_account_number_id: string;

  /**
   * How the account's available balance should be checked. If omitted, the default
   * behavior is `balance_check: full`.
   *
   * - `full` - The available balance of the account must be at least the amount of
   *   the check, and a Pending Transaction will be created for the full amount. This
   *   is the default behavior if `balance_check` is omitted.
   * - `none` - No balance check will performed when the check transfer is initiated.
   *   A zero-dollar Pending Transaction will be created. The balance will still be
   *   checked when the Inbound Check Deposit is created.
   */
  balance_check?: 'full' | 'none';

  /**
   * The check number Increase should use for the check. This should not contain
   * leading zeroes and must be unique across the `source_account_number`. If this is
   * omitted, Increase will generate a check number for you.
   */
  check_number?: string;

  /**
   * Details relating to the physical check that Increase will print and mail. This
   * is required if `fulfillment_method` is equal to `physical_check`. It must not be
   * included if any other `fulfillment_method` is provided.
   */
  physical_check?: CheckTransferCreateParams.PhysicalCheck;

  /**
   * Whether the transfer requires explicit approval via the dashboard or API.
   */
  require_approval?: boolean;

  /**
   * Details relating to the custom fulfillment you will perform. This is required if
   * `fulfillment_method` is equal to `third_party`. It must not be included if any
   * other `fulfillment_method` is provided.
   */
  third_party?: CheckTransferCreateParams.ThirdParty;

  /**
   * If provided, the check will be valid on or before this date. After this date,
   * the check transfer will be automatically stopped and deposits will not be
   * accepted. For checks printed by Increase, this date is included on the check as
   * its expiry.
   */
  valid_until_date?: string;

  [k: string]: unknown;
}

export namespace CheckTransferCreateParams {
  /**
   * Details relating to the physical check that Increase will print and mail. This
   * is required if `fulfillment_method` is equal to `physical_check`. It must not be
   * included if any other `fulfillment_method` is provided.
   */
  export interface PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    mailing_address: PhysicalCheck.MailingAddress;

    /**
     * The descriptor that will be printed on the memo field on the check.
     */
    memo: string;

    /**
     * The name that will be printed on the check in the 'To:' field.
     */
    recipient_name: string;

    /**
     * The ID of a File to be attached to the check. This must have
     * `purpose: check_attachment`. For details on pricing and restrictions, see
     * https://increase.com/documentation/originating-checks#printing-checks .
     */
    attachment_file_id?: string;

    /**
     * The ID of a File to be used as the check voucher image. This must have
     * `purpose: check_voucher_image`. For details on pricing and restrictions, see
     * https://increase.com/documentation/originating-checks#printing-checks .
     */
    check_voucher_image_file_id?: string;

    /**
     * The descriptor that will be printed on the letter included with the check.
     */
    note?: string;

    /**
     * The payer of the check. This will be printed on the top-left portion of the
     * check and defaults to the return address if unspecified. This should be an array
     * of up to 4 elements, each of which represents a line of the payer.
     */
    payer?: Array<PhysicalCheck.Payer>;

    /**
     * The return address to be printed on the check. If omitted this will default to
     * an Increase-owned address that will mark checks as delivery failed and shred
     * them.
     */
    return_address?: PhysicalCheck.ReturnAddress;

    /**
     * How to ship the check. For details on pricing, timing, and restrictions, see
     * https://increase.com/documentation/originating-checks#printing-checks .
     *
     * - `usps_first_class` - USPS First Class
     * - `fedex_overnight` - FedEx Overnight
     */
    shipping_method?: 'usps_first_class' | 'fedex_overnight';

    /**
     * The text that will appear as the signature on the check in cursive font. If not
     * provided, the check will be printed with 'No signature required'.
     */
    signature_text?: string;

    [k: string]: unknown;
  }

  export namespace PhysicalCheck {
    /**
     * Details for where Increase will mail the check.
     */
    export interface MailingAddress {
      /**
       * The city component of the check's destination address.
       */
      city: string;

      /**
       * The first line of the address component of the check's destination address.
       */
      line1: string;

      /**
       * The postal code component of the check's destination address.
       */
      postal_code: string;

      /**
       * The US state component of the check's destination address.
       */
      state: string;

      /**
       * The second line of the address component of the check's destination address.
       */
      line2?: string;

      /**
       * The name component of the check's destination address. Defaults to the provided
       * `recipient_name` parameter if `name` is not provided.
       */
      name?: string;

      /**
       * The phone number to associate with the check's destination address. The phone
       * number is only used when `shipping_method` is `fedex_overnight` and will be
       * supplied to FedEx to be used in case of delivery issues.
       */
      phone?: string;
    }

    export interface Payer {
      /**
       * The contents of the line.
       */
      contents: string;
    }

    /**
     * The return address to be printed on the check. If omitted this will default to
     * an Increase-owned address that will mark checks as delivery failed and shred
     * them.
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
       * The name of the return address.
       */
      name: string;

      /**
       * The postal code of the return address.
       */
      postal_code: string;

      /**
       * The US state of the return address.
       */
      state: string;

      /**
       * The second line of the return address.
       */
      line2?: string;

      /**
       * The phone number to associate with the shipper. The phone number is only used
       * when `shipping_method` is `fedex_overnight` and will be supplied to FedEx to be
       * used in case of delivery issues.
       */
      phone?: string;
    }
  }

  /**
   * Details relating to the custom fulfillment you will perform. This is required if
   * `fulfillment_method` is equal to `third_party`. It must not be included if any
   * other `fulfillment_method` is provided.
   */
  export interface ThirdParty {
    /**
     * The pay-to name you will print on the check. If provided, this is used for
     * [Positive Pay](/documentation/positive-pay). If this is omitted, Increase will
     * be unable to validate the payer name when the check is deposited.
     */
    recipient_name?: string;

    [k: string]: unknown;
  }
}

export interface CheckTransferListParams extends PageParams {
  /**
   * Filter Check Transfers to those that originated from the specified Account.
   */
  account_id?: string;

  created_at?: CheckTransferListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: CheckTransferListParams.Status;
}

export namespace CheckTransferListParams {
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
     * Filter Check Transfers to those that have the specified status. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'pending_approval'
      | 'canceled'
      | 'pending_submission'
      | 'requires_attention'
      | 'rejected'
      | 'pending_mailing'
      | 'mailed'
      | 'deposited'
      | 'stopped'
      | 'returned'
    >;
  }
}

export interface CheckTransferStopPaymentParams {
  /**
   * The reason why this transfer should be stopped.
   *
   * - `mail_delivery_failed` - The check could not be delivered.
   * - `not_authorized` - The check was not authorized.
   * - `valid_until_date_passed` - The check was stopped for `valid_until_date` being
   *   in the past.
   * - `unknown` - The check was stopped for another reason.
   */
  reason?: 'mail_delivery_failed' | 'not_authorized' | 'valid_until_date_passed' | 'unknown';
}

export declare namespace CheckTransfers {
  export {
    type CheckTransfer as CheckTransfer,
    type CheckTransfersPage as CheckTransfersPage,
    type CheckTransferCreateParams as CheckTransferCreateParams,
    type CheckTransferListParams as CheckTransferListParams,
    type CheckTransferStopPaymentParams as CheckTransferStopPaymentParams,
  };
}
