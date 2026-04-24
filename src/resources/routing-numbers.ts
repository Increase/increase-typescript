// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class RoutingNumbers extends APIResource {
  /**
   * You can use this API to confirm if a routing number is valid, such as when a
   * user is providing you with bank account details. Since routing numbers uniquely
   * identify a bank, this will always return 0 or 1 entry. In Sandbox, the only
   * valid routing number for this method is 110000000.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const routingNumberListResponse of client.routingNumbers.list(
   *   { routing_number: '483310694' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(query: RoutingNumberListParams, options?: RequestOptions): PagePromise<RoutingNumberListResponsesPage, RoutingNumberListResponse> {
    return this._client.getAPIList('/routing_numbers', Page<RoutingNumberListResponse>, { query, ...options });
  }
}

export type RoutingNumberListResponsesPage = Page<RoutingNumberListResponse>

/**
 * Routing numbers are used to identify your bank in a financial transaction.
 */
export interface RoutingNumberListResponse {
  /**
   * This routing number's support for ACH Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  ach_transfers: 'supported' | 'not_supported';

  /**
   * This routing number's support for FedNow Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  fednow_transfers: 'supported' | 'not_supported';

  /**
   * The name of the financial institution belonging to a routing number.
   */
  name: string;

  /**
   * This routing number's support for Real-Time Payments Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  real_time_payments_transfers: 'supported' | 'not_supported';

  /**
   * The nine digit routing number identifier.
   */
  routing_number: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `routing_number`.
   */
  type: 'routing_number';

  /**
   * This routing number's support for Wire Transfers.
   *
   * - `supported` - The routing number can receive this transfer type.
   * - `not_supported` - The routing number cannot receive this transfer type.
   */
  wire_transfers: 'supported' | 'not_supported';
}

export interface RoutingNumberListParams extends PageParams {
  /**
   * Filter financial institutions by routing number.
   */
  routing_number: string;
}

export declare namespace RoutingNumbers {
  export {
    type RoutingNumberListResponse as RoutingNumberListResponse,
    type RoutingNumberListResponsesPage as RoutingNumberListResponsesPage,
    type RoutingNumberListParams as RoutingNumberListParams
  };
}
