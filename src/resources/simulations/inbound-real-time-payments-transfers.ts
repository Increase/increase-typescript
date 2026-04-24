// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundRealTimePaymentsTransfersAPI from '../inbound-real-time-payments-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundRealTimePaymentsTransfers extends APIResource {
  /**
   * Simulates an
   * [Inbound Real-Time Payments Transfer](#inbound-real-time-payments-transfers) to
   * your account. Real-Time Payments are a beta feature.
   *
   * @example
   * ```ts
   * const inboundRealTimePaymentsTransfer =
   *   await client.simulations.inboundRealTimePaymentsTransfers.create(
   *     {
   *       account_number_id:
   *         'account_number_v18nkfqm6afpsrvy82b2',
   *       amount: 1000,
   *     },
   *   );
   * ```
   */
  create(body: InboundRealTimePaymentsTransferCreateParams, options?: RequestOptions): APIPromise<InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfer> {
    return this._client.post('/simulations/inbound_real_time_payments_transfers', { body, ...options });
  }
}

export interface InboundRealTimePaymentsTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound Real-Time Payments Transfer is
   * for.
   */
  account_number_id: string;

  /**
   * The transfer amount in USD cents. Must be positive.
   */
  amount: number;

  /**
   * The account number of the account that sent the transfer.
   */
  debtor_account_number?: string;

  /**
   * The name provided by the sender of the transfer.
   */
  debtor_name?: string;

  /**
   * The routing number of the account that sent the transfer.
   */
  debtor_routing_number?: string;

  /**
   * The identifier of a pending Request for Payment that this transfer will fulfill.
   */
  request_for_payment_id?: string;

  /**
   * Additional information included with the transfer.
   */
  unstructured_remittance_information?: string;

[k: string]: unknown
}

export declare namespace InboundRealTimePaymentsTransfers {
  export {
    type InboundRealTimePaymentsTransferCreateParams as InboundRealTimePaymentsTransferCreateParams
  };
}
