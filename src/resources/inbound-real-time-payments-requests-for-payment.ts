// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundRealTimePaymentsRequestsForPayment extends APIResource {
  /**
   * Retrieve an Inbound Real-Time Payments Request for Payment
   *
   * @example
   * ```ts
   * const inboundRealTimePaymentsRequestForPayment =
   *   await client.inboundRealTimePaymentsRequestsForPayment.retrieve(
   *     'inbound_real_time_payments_request_for_payment_j9c5rm4hr6qf34en8tky',
   *   );
   * ```
   */
  retrieve(
    inboundRealTimePaymentsRequestForPaymentID: string,
    options?: RequestOptions,
  ): APIPromise<InboundRealTimePaymentsRequestForPayment> {
    return this._client.get(
      path`/inbound_real_time_payments_requests_for_payment/${inboundRealTimePaymentsRequestForPaymentID}`,
      options,
    );
  }

  /**
   * List Inbound Real-Time Payments Requests for Payment
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundRealTimePaymentsRequestForPayment of client.inboundRealTimePaymentsRequestsForPayment.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboundRealTimePaymentsRequestsForPaymentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundRealTimePaymentsRequestForPaymentsPage, InboundRealTimePaymentsRequestForPayment> {
    return this._client.getAPIList(
      '/inbound_real_time_payments_requests_for_payment',
      Page<InboundRealTimePaymentsRequestForPayment>,
      { query, ...options },
    );
  }
}

export type InboundRealTimePaymentsRequestForPaymentsPage = Page<InboundRealTimePaymentsRequestForPayment>;

/**
 * An Inbound Real-Time Payments Request for Payment is a request initiated outside
 * of Increase for one of your accounts to send a Real-Time Payments transfer.
 */
export interface InboundRealTimePaymentsRequestForPayment {
  /**
   * The inbound Real-Time Payments request for payment's identifier.
   */
  id: string;

  /**
   * The Account the request for payment is for.
   */
  account_id: string;

  /**
   * The identifier of the Account Number the request for payment is for.
   */
  account_number_id: string;

  /**
   * The requested amount in USD cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the request for payment was created.
   */
  created_at: string;

  /**
   * Details of the party requesting payment.
   */
  creditor: InboundRealTimePaymentsRequestForPayment.Creditor;

  /**
   * The creditor's account number.
   */
  creditor_account_number: string;

  /**
   * The creditor's American Bankers' Association (ABA) Routing Transit Number (RTN).
   */
  creditor_routing_number: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code of the requested
   * currency. This will always be "USD" for a Real-Time Payments request for
   * payment.
   *
   * - `USD` - US Dollar (USD)
   */
  currency: 'USD';

  /**
   * The name of the account holder the payment is requested from, as provided by the
   * creditor.
   */
  debtor_name: string;

  /**
   * A free-form reference string set by the creditor, to help identify the request
   * for payment.
   */
  end_to_end_identification: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time after which
   * the request for payment is no longer valid and should no longer be paid.
   */
  expires_at: string;

  /**
   * The identifier of the Real-Time Payments Transfer that fulfilled this request
   * for payment. This is set once a transfer sent in response to the request for
   * payment has been acknowledged by the Real-Time Payments network.
   */
  fulfillment_real_time_payments_transfer_id: string | null;

  /**
   * An identifier for the party that issued the invoice, for requests for payment
   * sent on behalf of another party.
   */
  invoicer_identification: string | null;

  /**
   * The Real-Time Payments network identification of the request for payment.
   */
  payment_information_identification: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time by which
   * the creditor requests the payment to be made.
   */
  requested_execution_at: string | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_real_time_payments_request_for_payment`.
   */
  type: 'inbound_real_time_payments_request_for_payment';

  /**
   * Unstructured information included with the request for payment.
   */
  unstructured_remittance_information: string | null;
}

export namespace InboundRealTimePaymentsRequestForPayment {
  /**
   * Details of the party requesting payment.
   */
  export interface Creditor {
    /**
     * The name of the account that would receive the payment, as provided by the
     * creditor.
     */
    account_name: string | null;

    /**
     * Address of the creditor.
     */
    address: Creditor.Address;

    /**
     * The name of the creditor.
     */
    name: string;
  }

  export namespace Creditor {
    /**
     * Address of the creditor.
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
}

export interface InboundRealTimePaymentsRequestsForPaymentListParams extends PageParams {
  /**
   * Filter Inbound Real-Time Payments Requests for Payment to those belonging to the
   * specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Real-Time Payments Requests for Payment to ones belonging to the
   * specified Account Number.
   */
  account_number_id?: string;

  created_at?: InboundRealTimePaymentsRequestsForPaymentListParams.CreatedAt;
}

export namespace InboundRealTimePaymentsRequestsForPaymentListParams {
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

export declare namespace InboundRealTimePaymentsRequestsForPayment {
  export {
    type InboundRealTimePaymentsRequestForPayment as InboundRealTimePaymentsRequestForPayment,
    type InboundRealTimePaymentsRequestForPaymentsPage as InboundRealTimePaymentsRequestForPaymentsPage,
    type InboundRealTimePaymentsRequestsForPaymentListParams as InboundRealTimePaymentsRequestsForPaymentListParams,
  };
}
