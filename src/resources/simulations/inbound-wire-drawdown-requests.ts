// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundWireDrawdownRequestsAPI from '../inbound-wire-drawdown-requests';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundWireDrawdownRequests extends APIResource {
  /**
   * Simulates receiving an
   * [Inbound Wire Drawdown Request](#inbound-wire-drawdown-requests).
   *
   * @example
   * ```ts
   * const inboundWireDrawdownRequest =
   *   await client.simulations.inboundWireDrawdownRequests.create(
   *     {
   *       amount: 10000,
   *       creditor_account_number: '987654321',
   *       creditor_routing_number: '101050001',
   *       currency: 'USD',
   *       recipient_account_number_id:
   *         'account_number_v18nkfqm6afpsrvy82b2',
   *     },
   *   );
   * ```
   */
  create(
    body: InboundWireDrawdownRequestCreateParams,
    options?: RequestOptions,
  ): APIPromise<InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequest> {
    return this._client.post('/simulations/inbound_wire_drawdown_requests', { body, ...options });
  }
}

export interface InboundWireDrawdownRequestCreateParams {
  /**
   * The amount being requested in cents.
   */
  amount: number;

  /**
   * The creditor's account number.
   */
  creditor_account_number: string;

  /**
   * The creditor's routing number.
   */
  creditor_routing_number: string;

  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being
   * requested. Will always be "USD".
   */
  currency: string;

  /**
   * The Account Number to which the recipient of this request is being requested to
   * send funds from.
   */
  recipient_account_number_id: string;

  /**
   * A free-form address field set by the sender representing the first line of the
   * creditor's address.
   */
  creditor_address_line1?: string;

  /**
   * A free-form address field set by the sender representing the second line of the
   * creditor's address.
   */
  creditor_address_line2?: string;

  /**
   * A free-form address field set by the sender representing the third line of the
   * creditor's address.
   */
  creditor_address_line3?: string;

  /**
   * A free-form name field set by the sender representing the creditor's name.
   */
  creditor_name?: string;

  /**
   * The debtor's account number.
   */
  debtor_account_number?: string;

  /**
   * A free-form address field set by the sender representing the first line of the
   * debtor's address.
   */
  debtor_address_line1?: string;

  /**
   * A free-form address field set by the sender representing the second line of the
   * debtor's address.
   */
  debtor_address_line2?: string;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line3?: string;

  /**
   * A free-form name field set by the sender representing the debtor's name.
   */
  debtor_name?: string;

  /**
   * The debtor's routing number.
   */
  debtor_routing_number?: string;

  /**
   * A free-form reference string set by the sender, to help identify the transfer.
   */
  end_to_end_identification?: string;

  /**
   * The sending bank's identifier for the wire transfer.
   */
  instruction_identification?: string;

  /**
   * The Unique End-to-end Transaction Reference
   * ([UETR](https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr))
   * of the transfer.
   */
  unique_end_to_end_transaction_reference?: string;

  /**
   * A free-form message set by the sender.
   */
  unstructured_remittance_information?: string;
}

export declare namespace InboundWireDrawdownRequests {
  export { type InboundWireDrawdownRequestCreateParams as InboundWireDrawdownRequestCreateParams };
}
