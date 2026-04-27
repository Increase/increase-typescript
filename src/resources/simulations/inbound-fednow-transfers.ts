// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundFednowTransfersAPI from '../inbound-fednow-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundFednowTransfers extends APIResource {
  /**
   * Simulates an [Inbound FedNow Transfer](#inbound-fednow-transfers) to your
   * account.
   *
   * @example
   * ```ts
   * const inboundFednowTransfer =
   *   await client.simulations.inboundFednowTransfers.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: InboundFednowTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<InboundFednowTransfersAPI.InboundFednowTransfer> {
    return this._client.post('/simulations/inbound_fednow_transfers', { body, ...options });
  }
}

export interface InboundFednowTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound FedNow Transfer is for.
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
   * Additional information included with the transfer.
   */
  unstructured_remittance_information?: string;
}

export declare namespace InboundFednowTransfers {
  export { type InboundFednowTransferCreateParams as InboundFednowTransferCreateParams };
}
