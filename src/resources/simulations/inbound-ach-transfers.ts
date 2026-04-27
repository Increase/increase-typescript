// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundACHTransfersAPI from '../inbound-ach-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundACHTransfers extends APIResource {
  /**
   * Simulates an inbound ACH transfer to your account. This imitates initiating a
   * transfer to an Increase account from a different financial institution. The
   * transfer may be either a credit or a debit depending on if the `amount` is
   * positive or negative. The result of calling this API will contain the created
   * transfer. You can pass a `resolve_at` parameter to allow for a window to
   * [action on the Inbound ACH Transfer](https://increase.com/documentation/receiving-ach-transfers).
   * Alternatively, if you don't pass the `resolve_at` parameter the result will
   * contain either a [Transaction](#transactions) or a
   * [Declined Transaction](#declined-transactions) depending on whether or not the
   * transfer is allowed.
   *
   * @example
   * ```ts
   * const inboundACHTransfer =
   *   await client.simulations.inboundACHTransfers.create({
   *     account_number_id:
   *       'account_number_v18nkfqm6afpsrvy82b2',
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: InboundACHTransferCreateParams,
    options?: RequestOptions,
  ): APIPromise<InboundACHTransfersAPI.InboundACHTransfer> {
    return this._client.post('/simulations/inbound_ach_transfers', { body, ...options });
  }
}

export interface InboundACHTransferCreateParams {
  /**
   * The identifier of the Account Number the inbound ACH Transfer is for.
   */
  account_number_id: string;

  /**
   * The transfer amount in cents. A positive amount originates a credit transfer
   * pushing funds to the receiving account. A negative amount originates a debit
   * transfer pulling funds from the receiving account.
   */
  amount: number;

  /**
   * Additional information to include in the transfer.
   */
  addenda?: InboundACHTransferCreateParams.Addenda;

  /**
   * The description of the date of the transfer.
   */
  company_descriptive_date?: string;

  /**
   * Data associated with the transfer set by the sender.
   */
  company_discretionary_data?: string;

  /**
   * The description of the transfer set by the sender.
   */
  company_entry_description?: string;

  /**
   * The sender's company ID.
   */
  company_id?: string;

  /**
   * The name of the sender.
   */
  company_name?: string;

  /**
   * The ID of the receiver of the transfer.
   */
  receiver_id_number?: string;

  /**
   * The name of the receiver of the transfer.
   */
  receiver_name?: string;

  /**
   * The time at which the transfer should be resolved. If not provided will resolve
   * immediately.
   */
  resolve_at?: string;

  /**
   * The standard entry class code for the transfer.
   *
   * - `corporate_credit_or_debit` - Corporate Credit and Debit (CCD).
   * - `corporate_trade_exchange` - Corporate Trade Exchange (CTX).
   * - `prearranged_payments_and_deposit` - Prearranged Payments and Deposits (PPD).
   * - `internet_initiated` - Internet Initiated (WEB).
   * - `point_of_sale` - Point of Sale (POS).
   * - `telephone_initiated` - Telephone Initiated (TEL).
   * - `customer_initiated` - Customer Initiated (CIE).
   * - `accounts_receivable` - Accounts Receivable (ARC).
   * - `machine_transfer` - Machine Transfer (MTE).
   * - `shared_network_transaction` - Shared Network Transaction (SHR).
   * - `represented_check` - Represented Check (RCK).
   * - `back_office_conversion` - Back Office Conversion (BOC).
   * - `point_of_purchase` - Point of Purchase (POP).
   * - `check_truncation` - Check Truncation (TRC).
   * - `destroyed_check` - Destroyed Check (XCK).
   * - `international_ach_transaction` - International ACH Transaction (IAT).
   */
  standard_entry_class_code?:
    | 'corporate_credit_or_debit'
    | 'corporate_trade_exchange'
    | 'prearranged_payments_and_deposit'
    | 'internet_initiated'
    | 'point_of_sale'
    | 'telephone_initiated'
    | 'customer_initiated'
    | 'accounts_receivable'
    | 'machine_transfer'
    | 'shared_network_transaction'
    | 'represented_check'
    | 'back_office_conversion'
    | 'point_of_purchase'
    | 'check_truncation'
    | 'destroyed_check'
    | 'international_ach_transaction';
}

export namespace InboundACHTransferCreateParams {
  /**
   * Additional information to include in the transfer.
   */
  export interface Addenda {
    /**
     * The type of addenda to simulate being sent with the transfer.
     *
     * - `freeform` - Unstructured `payment_related_information` passed through with
     *   the transfer.
     */
    category: 'freeform';

    /**
     * Unstructured `payment_related_information` passed through with the transfer.
     */
    freeform?: Addenda.Freeform;
  }

  export namespace Addenda {
    /**
     * Unstructured `payment_related_information` passed through with the transfer.
     */
    export interface Freeform {
      /**
       * Each entry represents an addendum sent with the transfer.
       */
      entries: Array<Freeform.Entry>;
    }

    export namespace Freeform {
      export interface Entry {
        /**
         * The payment related information passed in the addendum.
         */
        payment_related_information: string;
      }
    }
  }
}

export declare namespace InboundACHTransfers {
  export { type InboundACHTransferCreateParams as InboundACHTransferCreateParams };
}
