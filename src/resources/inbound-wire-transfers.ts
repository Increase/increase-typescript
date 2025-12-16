// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class InboundWireTransfers extends APIResource {
  /**
   * Retrieve an Inbound Wire Transfer
   *
   * @example
   * ```ts
   * const inboundWireTransfer =
   *   await client.inboundWireTransfers.retrieve(
   *     'inbound_wire_transfer_f228m6bmhtcxjco9pwp0',
   *   );
   * ```
   */
  retrieve(inboundWireTransferID: string, options?: RequestOptions): APIPromise<InboundWireTransfer> {
    return this._client.get(path`/inbound_wire_transfers/${inboundWireTransferID}`, options);
  }

  /**
   * List Inbound Wire Transfers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const inboundWireTransfer of client.inboundWireTransfers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: InboundWireTransferListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InboundWireTransfersPage, InboundWireTransfer> {
    return this._client.getAPIList('/inbound_wire_transfers', Page<InboundWireTransfer>, {
      query,
      ...options,
    });
  }

  /**
   * Reverse an Inbound Wire Transfer
   *
   * @example
   * ```ts
   * const inboundWireTransfer =
   *   await client.inboundWireTransfers.reverse(
   *     'inbound_wire_transfer_f228m6bmhtcxjco9pwp0',
   *     { reason: 'creditor_request' },
   *   );
   * ```
   */
  reverse(
    inboundWireTransferID: string,
    body: InboundWireTransferReverseParams,
    options?: RequestOptions,
  ): APIPromise<InboundWireTransfer> {
    return this._client.post(path`/inbound_wire_transfers/${inboundWireTransferID}/reverse`, {
      body,
      ...options,
    });
  }
}

export type InboundWireTransfersPage = Page<InboundWireTransfer>;

/**
 * An Inbound Wire Transfer is a wire transfer initiated outside of Increase to
 * your account.
 */
export interface InboundWireTransfer {
  /**
   * The inbound wire transfer's identifier.
   */
  id: string;

  /**
   * The Account to which the transfer belongs.
   */
  account_id: string;

  /**
   * The identifier of the Account Number to which this transfer was sent.
   */
  account_number_id: string;

  /**
   * The amount in USD cents.
   */
  amount: number;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the inbound wire transfer was created.
   */
  created_at: string;

  /**
   * A free-form address field set by the sender.
   */
  creditor_address_line1: string | null;

  /**
   * A free-form address field set by the sender.
   */
  creditor_address_line2: string | null;

  /**
   * A free-form address field set by the sender.
   */
  creditor_address_line3: string | null;

  /**
   * A name set by the sender.
   */
  creditor_name: string | null;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line1: string | null;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line2: string | null;

  /**
   * A free-form address field set by the sender.
   */
  debtor_address_line3: string | null;

  /**
   * A name set by the sender.
   */
  debtor_name: string | null;

  /**
   * An Increase-constructed description of the transfer.
   */
  description: string;

  /**
   * A free-form reference string set by the sender, to help identify the transfer.
   */
  end_to_end_identification: string | null;

  /**
   * A unique identifier available to the originating and receiving banks, commonly
   * abbreviated as IMAD. It is created when the wire is submitted to the Fedwire
   * service and is helpful when debugging wires with the originating bank.
   */
  input_message_accountability_data: string | null;

  /**
   * The American Banking Association (ABA) routing number of the bank that sent the
   * wire.
   */
  instructing_agent_routing_number: string | null;

  /**
   * The sending bank's identifier for the wire transfer.
   */
  instruction_identification: string | null;

  /**
   * Information about the reversal of the inbound wire transfer if it has been
   * reversed.
   */
  reversal: InboundWireTransfer.Reversal | null;

  /**
   * The status of the transfer.
   *
   * - `pending` - The Inbound Wire Transfer is awaiting action, will transition
   *   automatically if no action is taken.
   * - `accepted` - The Inbound Wire Transfer is accepted.
   * - `declined` - The Inbound Wire Transfer was declined.
   * - `reversed` - The Inbound Wire Transfer was reversed.
   */
  status: 'pending' | 'accepted' | 'declined' | 'reversed';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `inbound_wire_transfer`.
   */
  type: 'inbound_wire_transfer';

  /**
   * The Unique End-to-end Transaction Reference
   * ([UETR](https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr))
   * of the transfer.
   */
  unique_end_to_end_transaction_reference: string | null;

  /**
   * A free-form message set by the sender.
   */
  unstructured_remittance_information: string | null;

  /**
   * The wire drawdown request the inbound wire transfer is fulfilling.
   */
  wire_drawdown_request_id: string | null;

  [k: string]: unknown;
}

export namespace InboundWireTransfer {
  /**
   * Information about the reversal of the inbound wire transfer if it has been
   * reversed.
   */
  export interface Reversal {
    /**
     * The reason for the reversal.
     *
     * - `duplicate` - The inbound wire transfer was a duplicate.
     * - `creditor_request` - The recipient of the wire transfer requested the funds be
     *   returned to the sender.
     * - `transaction_forbidden` - The account cannot currently receive inbound wires.
     */
    reason: 'duplicate' | 'creditor_request' | 'transaction_forbidden';

    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
     * the transfer was reversed.
     */
    reversed_at: string;
  }
}

export interface InboundWireTransferListParams extends PageParams {
  /**
   * Filter Inbound Wire Transfers to ones belonging to the specified Account.
   */
  account_id?: string;

  /**
   * Filter Inbound Wire Transfers to ones belonging to the specified Account Number.
   */
  account_number_id?: string;

  created_at?: InboundWireTransferListParams.CreatedAt;

  status?: InboundWireTransferListParams.Status;

  /**
   * Filter Inbound Wire Transfers to ones belonging to the specified Wire Drawdown
   * Request.
   */
  wire_drawdown_request_id?: string;
}

export namespace InboundWireTransferListParams {
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
     * Filter Inbound Wire Transfers to those with the specified status. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'accepted' | 'declined' | 'reversed'>;
  }
}

export interface InboundWireTransferReverseParams {
  /**
   * Reason for the reversal.
   *
   * - `duplicate` - The inbound wire transfer was a duplicate.
   * - `creditor_request` - The recipient of the wire transfer requested the funds be
   *   returned to the sender.
   * - `transaction_forbidden` - The account cannot currently receive inbound wires.
   */
  reason: 'duplicate' | 'creditor_request' | 'transaction_forbidden';
}

export declare namespace InboundWireTransfers {
  export {
    type InboundWireTransfer as InboundWireTransfer,
    type InboundWireTransfersPage as InboundWireTransfersPage,
    type InboundWireTransferListParams as InboundWireTransferListParams,
    type InboundWireTransferReverseParams as InboundWireTransferReverseParams,
  };
}
