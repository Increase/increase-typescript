// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundWireTransfersAPI from '../inbound-wire-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundWireTransfers extends APIResource {
  /**
   * Simulates an [Inbound Wire Transfer](#inbound-wire-transfers) to your account.
   *
   * @example
   * ```ts
   * const inboundWireTransfer =
   *   await client.simulations.inboundWireTransfers.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: InboundWireTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<InboundWireTransfersAPI.InboundWireTransfer> {
    return this._client.post('/simulations/inbound_wire_transfers', { body, ...options });
  }
}

export interface InboundWireTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound Wire Transfer is for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. Must be positive.
   */
  amount: number;

  /**
   * The sending bank will set creditor_address_line1 in production. You can simulate
   * any value here.
   */
  creditor_address_line1?: string;

  /**
   * The sending bank will set creditor_address_line2 in production. You can simulate
   * any value here.
   */
  creditor_address_line2?: string;

  /**
   * The sending bank will set creditor_address_line3 in production. You can simulate
   * any value here.
   */
  creditor_address_line3?: string;

  /**
   * The sending bank will set creditor_name in production. You can simulate any
   * value here.
   */
  creditor_name?: string;

  /**
   * The sending bank will set debtor_address_line1 in production. You can simulate
   * any value here.
   */
  debtor_address_line1?: string;

  /**
   * The sending bank will set debtor_address_line2 in production. You can simulate
   * any value here.
   */
  debtor_address_line2?: string;

  /**
   * The sending bank will set debtor_address_line3 in production. You can simulate
   * any value here.
   */
  debtor_address_line3?: string;

  /**
   * The sending bank will set debtor_name in production. You can simulate any value
   * here.
   */
  debtor_name?: string;

  /**
   * The sending bank will set end_to_end_identification in production. You can
   * simulate any value here.
   */
  end_to_end_identification?: string;

  /**
   * The sending bank will set instructing_agent_routing_number in production. You
   * can simulate any value here.
   */
  instructing_agent_routing_number?: string;

  /**
   * The sending bank will set instruction_identification in production. You can
   * simulate any value here.
   */
  instruction_identification?: string;

  /**
   * The sending bank will set unique_end_to_end_transaction_reference in production.
   * You can simulate any value here.
   */
  unique_end_to_end_transaction_reference?: string;

  /**
   * The sending bank will set unstructured_remittance_information in production. You
   * can simulate any value here.
   */
  unstructured_remittance_information?: string;

  /**
   * The identifier of a Wire Drawdown Request the inbound Wire Transfer is
   * fulfilling.
   */
  wire_drawdown_request_id?: string;
}

export declare namespace InboundWireTransfers {
  export { type InboundWireTransferCreateParams as InboundWireTransferCreateParams };
}
