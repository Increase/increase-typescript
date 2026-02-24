// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WireDrawdownRequests extends APIResource {
  /**
   * Create a Wire Drawdown Request
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.wireDrawdownRequests.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 10000,
   *     creditor_address: {
   *       city: 'New York',
   *       country: 'US',
   *       line1: '33 Liberty Street',
   *     },
   *     creditor_name: 'National Phonograph Company',
   *     debtor_address: {
   *       city: 'New York',
   *       country: 'US',
   *       line1: '33 Liberty Street',
   *     },
   *     debtor_name: 'Ian Crease',
   *     unstructured_remittance_information: 'Invoice 29582',
   *   });
   * ```
   */
  create(body: WireDrawdownRequestCreateParams, options?: RequestOptions): APIPromise<WireDrawdownRequest> {
    return this._client.post('/wire_drawdown_requests', { body, ...options });
  }

  /**
   * Retrieve a Wire Drawdown Request
   *
   * @example
   * ```ts
   * const wireDrawdownRequest =
   *   await client.wireDrawdownRequests.retrieve(
   *     'wire_drawdown_request_q6lmocus3glo0lr2bfv3',
   *   );
   * ```
   */
  retrieve(wireDrawdownRequestID: string, options?: RequestOptions): APIPromise<WireDrawdownRequest> {
    return this._client.get(path`/wire_drawdown_requests/${wireDrawdownRequestID}`, options);
  }

  /**
   * List Wire Drawdown Requests
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const wireDrawdownRequest of client.wireDrawdownRequests.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WireDrawdownRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WireDrawdownRequestsPage, WireDrawdownRequest> {
    return this._client.getAPIList('/wire_drawdown_requests', Page<WireDrawdownRequest>, {
      query,
      ...options,
    });
  }
}

export type WireDrawdownRequestsPage = Page<WireDrawdownRequest>;

/**
 * Wire drawdown requests enable you to request that someone else send you a wire.
 * Because there is nuance to making sure your counterparty's bank processes these
 * correctly, we ask that you reach out to
 * [support@increase.com](mailto:support@increase.com) to enable this feature so we
 * can help you plan your integration. For more information, see our
 * [Wire Drawdown Requests documentation](/documentation/wire-drawdown-requests).
 */
export interface WireDrawdownRequest {
  /**
   * The Wire drawdown request identifier.
   */
  id: string;

  /**
   * The Account Number to which the debtor—the recipient of this request—is being
   * requested to send funds.
   */
  account_number_id: string;

  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the wire drawdown request was created.
   */
  created_at: string;

  /**
   * The creditor's address.
   */
  creditor_address: WireDrawdownRequest.CreditorAddress;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * The debtor's account number.
   */
  debtor_account_number: string;

  /**
   * The debtor's address.
   */
  debtor_address: WireDrawdownRequest.DebtorAddress;

  /**
   * The debtor's external account identifier.
   */
  debtor_external_account_id: string | null;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * The debtor's routing number.
   */
  debtor_routing_number: string;

  /**
   * If the recipient fulfills the drawdown request by sending funds, then this will
   * be the identifier of the corresponding Transaction.
   */
  fulfillment_inbound_wire_transfer_id: string | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The lifecycle status of the drawdown request.
   *
   * - `pending_submission` - The drawdown request is queued to be submitted to
   *   Fedwire.
   * - `fulfilled` - The drawdown request has been fulfilled by the recipient.
   * - `pending_response` - The drawdown request has been sent and the recipient
   *   should respond in some way.
   * - `refused` - The drawdown request has been refused by the recipient.
   */
  status: 'pending_submission' | 'fulfilled' | 'pending_response' | 'refused';

  /**
   * After the drawdown request is submitted to Fedwire, this will contain
   * supplemental details.
   */
  submission: WireDrawdownRequest.Submission | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `wire_drawdown_request`.
   */
  type: 'wire_drawdown_request';

  /**
   * Remittance information the debtor will see as part of the drawdown request.
   */
  unstructured_remittance_information: string;
}

export namespace WireDrawdownRequest {
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
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The ZIP code of the address.
     */
    postal_code: string | null;

    /**
     * The address state.
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
    city: string;

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
     * The ZIP code of the address.
     */
    postal_code: string | null;

    /**
     * The address state.
     */
    state: string | null;
  }

  /**
   * After the drawdown request is submitted to Fedwire, this will contain
   * supplemental details.
   */
  export interface Submission {
    /**
     * The input message accountability data (IMAD) uniquely identifying the submission
     * with Fedwire.
     */
    input_message_accountability_data: string;
  }
}

export interface WireDrawdownRequestCreateParams {
  /**
   * The Account Number to which the debtor should send funds.
   */
  account_number_id: string;

  /**
   * The amount requested from the debtor, in USD cents.
   */
  amount: number;

  /**
   * The creditor's address.
   */
  creditor_address: WireDrawdownRequestCreateParams.CreditorAddress;

  /**
   * The creditor's name.
   */
  creditor_name: string;

  /**
   * The debtor's address.
   */
  debtor_address: WireDrawdownRequestCreateParams.DebtorAddress;

  /**
   * The debtor's name.
   */
  debtor_name: string;

  /**
   * Remittance information the debtor will see as part of the request.
   */
  unstructured_remittance_information: string;

  /**
   * The debtor's account number.
   */
  debtor_account_number?: string;

  /**
   * The ID of an External Account to initiate a transfer to. If this parameter is
   * provided, `debtor_account_number` and `debtor_routing_number` must be absent.
   */
  debtor_external_account_id?: string;

  /**
   * The debtor's routing number.
   */
  debtor_routing_number?: string;

  /**
   * A free-form reference string set by the sender mirrored back in the subsequent
   * wire transfer.
   */
  end_to_end_identification?: string;

  [k: string]: unknown;
}

export namespace WireDrawdownRequestCreateParams {
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
     * The ZIP code of the address.
     */
    postal_code?: string;

    /**
     * The address state.
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
     * The ZIP code of the address.
     */
    postal_code?: string;

    /**
     * The address state.
     */
    state?: string;
  }
}

export interface WireDrawdownRequestListParams extends PageParams {
  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: WireDrawdownRequestListParams.Status;
}

export namespace WireDrawdownRequestListParams {
  export interface Status {
    /**
     * Filter Wire Drawdown Requests for those with the specified status. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending_submission' | 'fulfilled' | 'pending_response' | 'refused'>;
  }
}

export declare namespace WireDrawdownRequests {
  export {
    type WireDrawdownRequest as WireDrawdownRequest,
    type WireDrawdownRequestsPage as WireDrawdownRequestsPage,
    type WireDrawdownRequestCreateParams as WireDrawdownRequestCreateParams,
    type WireDrawdownRequestListParams as WireDrawdownRequestListParams,
  };
}
