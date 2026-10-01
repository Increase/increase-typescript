// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RealTimePaymentsRequestsForPayment extends APIResource {
  /**
   * Create a Real-Time Payments Request for Payment
   *
   * @example
   * ```ts
   * const realTimePaymentsRequestForPayment =
   *   await client.realTimePaymentsRequestsForPayment.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 100,
   *     debtor: {
   *       address: { country: 'US' },
   *       name: 'Ian Crease',
   *     },
   *     debtor_account_number: '987654321',
   *     debtor_routing_number: '101050001',
   *     expires_at: '2020-02-14T23:59:59Z',
   *     requested_execution_at: '2020-02-07T23:59:59Z',
   *     unstructured_remittance_information: 'Invoice 29582',
   *   });
   * ```
   */
  create(
    body: RealTimePaymentsRequestsForPaymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<RealTimePaymentsRequestForPayment> {
    return this._client.post('/real_time_payments_requests_for_payment', { body, ...options });
  }

  /**
   * Retrieve a Real-Time Payments Request for Payment
   *
   * @example
   * ```ts
   * const realTimePaymentsRequestForPayment =
   *   await client.realTimePaymentsRequestsForPayment.retrieve(
   *     'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
   *   );
   * ```
   */
  retrieve(
    realTimePaymentsRequestForPaymentID: string,
    options?: RequestOptions,
  ): APIPromise<RealTimePaymentsRequestForPayment> {
    return this._client.get(
      path`/real_time_payments_requests_for_payment/${realTimePaymentsRequestForPaymentID}`,
      options,
    );
  }

  /**
   * List Real-Time Payments Requests for Payment
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const realTimePaymentsRequestForPayment of client.realTimePaymentsRequestsForPayment.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RealTimePaymentsRequestsForPaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RealTimePaymentsRequestForPaymentsPage, RealTimePaymentsRequestForPayment> {
    return this._client.getAPIList(
      '/real_time_payments_requests_for_payment',
      Page<RealTimePaymentsRequestForPayment>,
      { query, ...options },
    );
  }

  /**
   * Cancels a Real-Time Payments Request for Payment that is still awaiting payment.
   *
   * @example
   * ```ts
   * const realTimePaymentsRequestForPayment =
   *   await client.realTimePaymentsRequestsForPayment.cancel(
   *     'real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7',
   *   );
   * ```
   */
  cancel(
    realTimePaymentsRequestForPaymentID: string,
    body: RealTimePaymentsRequestsForPaymentCancelParams,
    options?: RequestOptions,
  ): APIPromise<RealTimePaymentsRequestForPayment> {
    return this._client.post(
      path`/real_time_payments_requests_for_payment/${realTimePaymentsRequestForPaymentID}/cancel`,
      { body, ...options },
    );
  }
}

export type RealTimePaymentsRequestForPaymentsPage = Page<RealTimePaymentsRequestForPayment>;

/**
 * Real-Time Payments transfers move funds, within seconds, between your Increase
 * account and any other account on the Real-Time Payments network. A request for
 * payment is a request to the receiver to send funds to your account. The
 * permitted uses of Requests For Payment are limited by the Real-Time Payments
 * network to business-to-business payments and transfers between two accounts at
 * different banks owned by the same individual. Please contact
 * [support@increase.com](mailto:support@increase.com) to enable this API for your
 * team.
 */
export interface RealTimePaymentsRequestForPayment {
  /**
   * The Real-Time Payments Request for Payment's identifier.
   */
  id: string;

  /**
   * The Account in which a successful transfer will arrive.
   */
  account_id: string;

  /**
   * The Account Number in which a successful transfer will arrive.
   */
  account_number_id: string;

  /**
   * The transfer amount in USD cents.
   */
  amount: number;

  /**
   * If a cancellation has been requested, this will contain supplemental details.
   * The request for payment moves to `canceled` once the recipient bank acknowledges
   * the cancellation.
   */
  cancellation: RealTimePaymentsRequestForPayment.Cancellation | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the request for payment was created.
   */
  created_at: string;

  /**
   * The name of the creditor requesting the payment.
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
   * Details of the person being requested to pay.
   */
  debtor: RealTimePaymentsRequestForPayment.Debtor;

  /**
   * The debtor's account number, which the request is sent to.
   */
  debtor_account_number: string;

  /**
   * The debtor's American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  debtor_routing_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time after which
   * the request for payment is no longer valid. After this time the debtor's bank
   * should no longer allow the debtor to pay it.
   */
  expires_at: string;

  /**
   * The identifier of the Inbound Real-Time Payments Transfer that fulfilled this
   * request.
   */
  fulfillment_inbound_real_time_payments_transfer_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * If the request for payment is refused by the destination financial institution
   * or the receiving customer, this will contain supplemental details.
   */
  refusal: RealTimePaymentsRequestForPayment.Refusal | null;

  /**
   * If the request for payment is rejected by Real-Time Payments or the destination
   * financial institution, this will contain supplemental details.
   */
  rejection: RealTimePaymentsRequestForPayment.Rejection | null;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time by which
   * the payment was requested to be made.
   */
  requested_execution_at: string | null;

  /**
   * The lifecycle status of the request for payment.
   *
   * - `pending_submission` - The request for payment is queued to be submitted to
   *   Real-Time Payments.
   * - `pending_response` - The request for payment has been submitted and is pending
   *   a response from Real-Time Payments.
   * - `rejected` - The request for payment was rejected by the network or the
   *   recipient.
   * - `accepted` - The request for payment was accepted by the recipient but has not
   *   yet been paid.
   * - `refused` - The request for payment was refused by the recipient.
   * - `fulfilled` - The request for payment was fulfilled by the receiver.
   * - `canceled` - The request for payment was canceled and can no longer be paid.
   */
  status:
    | 'pending_submission'
    | 'pending_response'
    | 'rejected'
    | 'accepted'
    | 'refused'
    | 'fulfilled'
    | 'canceled';

  /**
   * After the request for payment is submitted to Real-Time Payments, this will
   * contain supplemental details.
   */
  submission: RealTimePaymentsRequestForPayment.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `real_time_payments_request_for_payment`.
   */
  type: 'real_time_payments_request_for_payment';

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  unstructured_remittance_information: string;
}

export namespace RealTimePaymentsRequestForPayment {
  /**
   * If a cancellation has been requested, this will contain supplemental details.
   * The request for payment moves to `canceled` once the recipient bank acknowledges
   * the cancellation.
   */
  export interface Cancellation {
    /**
     * Additional information about the cancellation, sent on to the recipient bank.
     */
    additional_information: string | null;

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the cancellation was requested.
     */
    canceled_at: string;

    /**
     * The reason the request for payment was canceled.
     *
     * - `requested_by_customer` - The creditor no longer wants to be paid. Corresponds
     *   to the Real-Time Payments reason code `CUST`.
     * - `paid_by_other_means` - The requested payment has already been made through
     *   another channel. Corresponds to the Real-Time Payments reason code `UPAY`.
     * - `duplicate` - The request for payment duplicated another request for payment.
     *   Corresponds to the Real-Time Payments reason code `DUPL`.
     * - `wrong_amount` - The request for payment was sent for the wrong amount.
     *   Corresponds to the Real-Time Payments reason code `AM09`.
     */
    reason: 'requested_by_customer' | 'paid_by_other_means' | 'duplicate' | 'wrong_amount';
  }

  /**
   * Details of the person being requested to pay.
   */
  export interface Debtor {
    /**
     * Address of the debtor.
     */
    address: Debtor.Address;

    /**
     * The name of the debtor.
     */
    name: string;
  }

  export namespace Debtor {
    /**
     * Address of the debtor.
     */
    export interface Address {
      /**
       * A second address line, such as an apartment or suite number. The first address
       * line is separated into `building_number` and `street_name`.
       */
      address_line2: string | null;

      /**
       * The number identifying the position of the building on the street.
       */
      building_number: string | null;

      /**
       * The town or city.
       */
      city: string | null;

      /**
       * The ISO 3166, Alpha-2 country code.
       */
      country: string | null;

      /**
       * The postal code or zip.
       */
      postal_code: string | null;

      /**
       * The US state component of the address.
       */
      state: string | null;

      /**
       * The street name without the street number.
       */
      street_name: string | null;
    }
  }

  /**
   * If the request for payment is refused by the destination financial institution
   * or the receiving customer, this will contain supplemental details.
   */
  export interface Refusal {
    /**
     * Additional information about the refusal provided by the recipient bank or the
     * customer. This is typically present when the `refusal_reason_code` is `other`.
     */
    refusal_reason_additional_information: string | null;

    /**
     * The reason the request for payment was refused as provided by the recipient bank
     * or the customer.
     *
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the Real-Time Payments reason code
     *   `AC06`.
     * - `transaction_forbidden` - Real-Time Payments transfers are not allowed to the
     *   destination account. Corresponds to the Real-Time Payments reason code `AG01`.
     * - `transaction_type_not_supported` - Real-Time Payments transfers are not
     *   enabled for the destination account. Corresponds to the Real-Time Payments
     *   reason code `AG03`.
     * - `unexpected_amount` - The amount of the transfer is different than expected by
     *   the recipient. Corresponds to the Real-Time Payments reason code `AM09`.
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the Real-Time Payments reason
     *   code `AM14`.
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the Real-Time Payments reason code `BE07`.
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the Real-Time Payments reason code `BE04`.
     * - `creditor_identifier_incorrect` - Creditor identifier incorrect. Corresponds
     *   to the Real-Time Payments reason code `CH11`.
     * - `requested_by_customer` - The customer refused the request. Corresponds to the
     *   Real-Time Payments reason code `CUST`.
     * - `order_rejected` - The order was rejected. Corresponds to the Real-Time
     *   Payments reason code `DS04`.
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the Real-Time Payments reason code `MD07`.
     * - `customer_has_opted_out` - The customer has opted out of receiving requests
     *   for payments from this creditor. Corresponds to the Real-Time Payments reason
     *   code `SL12`.
     * - `other` - Some other error or issue has occurred.
     */
    refusal_reason_code:
      | 'account_blocked'
      | 'transaction_forbidden'
      | 'transaction_type_not_supported'
      | 'unexpected_amount'
      | 'amount_exceeds_bank_limits'
      | 'invalid_debtor_address'
      | 'invalid_creditor_address'
      | 'creditor_identifier_incorrect'
      | 'requested_by_customer'
      | 'order_rejected'
      | 'end_customer_deceased'
      | 'customer_has_opted_out'
      | 'other';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the request for payment was refused.
     */
    refused_at: string | null;
  }

  /**
   * If the request for payment is rejected by Real-Time Payments or the destination
   * financial institution, this will contain supplemental details.
   */
  export interface Rejection {
    /**
     * Additional information about the rejection provided by the recipient bank or the
     * Real-Time Payments network. This is typically present when the
     * `reject_reason_code` is `narrative`.
     */
    reject_reason_additional_information: string | null;

    /**
     * The reason the request for payment was rejected as provided by the recipient
     * bank or the Real-Time Payments network.
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
     * the request for payment was rejected.
     */
    rejected_at: string | null;
  }

  /**
   * After the request for payment is submitted to Real-Time Payments, this will
   * contain supplemental details.
   */
  export interface Submission {
    /**
     * The Real-Time Payments payment information identification of the request.
     */
    payment_information_identification: string;
  }
}

export interface RealTimePaymentsRequestsForPaymentCreateParams {
  /**
   * The identifier of the Account Number where the funds will land.
   */
  account_number_id: string;

  /**
   * The requested amount in USD cents. Must be positive.
   */
  amount: number;

  /**
   * Details of the person being requested to pay.
   */
  debtor: RealTimePaymentsRequestsForPaymentCreateParams.Debtor;

  /**
   * The debtor's account number, which the funds will be requested from.
   */
  debtor_account_number: string;

  /**
   * The debtor's American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  debtor_routing_number: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time after which
   * the request for payment is no longer valid. After this time the debtor's bank
   * should no longer allow the debtor to pay it. Must not be before
   * `requested_execution_at`.
   */
  expires_at: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time by which
   * you are requesting the payment to be made.
   */
  requested_execution_at: string;

  /**
   * Unstructured information that will show on the recipient's bank statement.
   */
  unstructured_remittance_information: string;

  /**
   * The name of the creditor requesting the payment. If not provided, defaults to
   * the name of the account's entity.
   */
  creditor_name?: string;

  [k: string]: unknown;
}

export namespace RealTimePaymentsRequestsForPaymentCreateParams {
  /**
   * Details of the person being requested to pay.
   */
  export interface Debtor {
    /**
     * Address of the debtor.
     */
    address: Debtor.Address;

    /**
     * The name of the debtor.
     */
    name: string;
  }

  export namespace Debtor {
    /**
     * Address of the debtor.
     */
    export interface Address {
      /**
       * The ISO 3166, Alpha-2 country code.
       *
       * Defaults to `US`.
       */
      country: string;

      /**
       * A second address line, such as an apartment or suite number. The first address
       * line is separated into `building_number` and `street_name`.
       */
      address_line2?: string;

      /**
       * The number identifying the position of the building on the street.
       */
      building_number?: string;

      /**
       * The town or city.
       */
      city?: string;

      /**
       * The postal code or zip.
       */
      postal_code?: string;

      /**
       * The US state component of the address.
       */
      state?: string;

      /**
       * The street name without the street number.
       */
      street_name?: string;
    }
  }
}

export interface RealTimePaymentsRequestsForPaymentListParams extends PageParams {
  /**
   * Filter Real-Time Payments Requests for Payment to those destined to the
   * specified Account.
   */
  account_id?: string;

  created_at?: RealTimePaymentsRequestsForPaymentListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace RealTimePaymentsRequestsForPaymentListParams {
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

export interface RealTimePaymentsRequestsForPaymentCancelParams {
  /**
   * Additional information about the cancellation to pass on to the recipient bank.
   */
  additional_information?: string;

  /**
   * The reason the request for payment is being canceled. Defaults to
   * `requested_by_customer`.
   *
   * - `requested_by_customer` - The creditor no longer wants to be paid. Corresponds
   *   to the Real-Time Payments reason code `CUST`.
   * - `paid_by_other_means` - The requested payment has already been made through
   *   another channel. Corresponds to the Real-Time Payments reason code `UPAY`.
   * - `duplicate` - The request for payment duplicated another request for payment.
   *   Corresponds to the Real-Time Payments reason code `DUPL`.
   * - `wrong_amount` - The request for payment was sent for the wrong amount.
   *   Corresponds to the Real-Time Payments reason code `AM09`.
   */
  reason?: 'requested_by_customer' | 'paid_by_other_means' | 'duplicate' | 'wrong_amount';
}

export declare namespace RealTimePaymentsRequestsForPayment {
  export {
    type RealTimePaymentsRequestForPayment as RealTimePaymentsRequestForPayment,
    type RealTimePaymentsRequestForPaymentsPage as RealTimePaymentsRequestForPaymentsPage,
    type RealTimePaymentsRequestsForPaymentCreateParams as RealTimePaymentsRequestsForPaymentCreateParams,
    type RealTimePaymentsRequestsForPaymentListParams as RealTimePaymentsRequestsForPaymentListParams,
    type RealTimePaymentsRequestsForPaymentCancelParams as RealTimePaymentsRequestsForPaymentCancelParams,
  };
}
