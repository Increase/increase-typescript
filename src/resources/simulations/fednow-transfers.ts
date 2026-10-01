// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FednowTransfersAPI from '../fednow-transfers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FednowTransfers extends APIResource {
  /**
   * Simulates submission of a [FedNow Transfer](#fednow-transfers) and handling the
   * response from the destination financial institution. This transfer must first
   * have a `status` of `pending_submitting`.
   *
   * @example
   * ```ts
   * const fednowTransfer =
   *   await client.simulations.fednowTransfers.complete(
   *     'fednow_transfer_4i0mptrdu1mueg1196bg',
   *   );
   * ```
   */
  complete(
    fednowTransferID: string,
    body: FednowTransferCompleteParams,
    options?: RequestOptions,
  ): APIPromise<FednowTransfersAPI.FednowTransfer> {
    return this._client.post(path`/simulations/fednow_transfers/${fednowTransferID}/complete`, {
      body,
      ...options,
    });
  }
}

export interface FednowTransferCompleteParams {
  /**
   * If set, the simulation will reject the transfer.
   */
  rejection?: FednowTransferCompleteParams.Rejection;
}

export namespace FednowTransferCompleteParams {
  /**
   * If set, the simulation will reject the transfer.
   */
  export interface Rejection {
    /**
     * The reason code that the simulated rejection will have.
     *
     * - `account_closed` - The destination account is closed. Corresponds to the
     *   FedNow reason code `AC04`.
     * - `account_blocked` - The destination account is currently blocked from
     *   receiving transactions. Corresponds to the FedNow reason code `AC06`.
     * - `invalid_creditor_account_type` - The destination account is ineligible to
     *   receive FedNow transfers. Corresponds to the FedNow reason code `AC14`.
     * - `invalid_creditor_account_number` - The destination account does not exist.
     *   Corresponds to the FedNow reason code `AC03`.
     * - `invalid_creditor_financial_institution_identifier` - The destination routing
     *   number is invalid. Corresponds to the FedNow reason code `RC04`.
     * - `end_customer_deceased` - The destination account holder is deceased.
     *   Corresponds to the FedNow reason code `MD07`.
     * - `narrative` - The reason is provided as narrative information in the
     *   additional information field. Corresponds to the FedNow reason code `NARR`.
     * - `transaction_forbidden` - FedNow transfers are not allowed to the destination
     *   account. Corresponds to the FedNow reason code `AG01`.
     * - `transaction_type_not_supported` - FedNow transfers are not enabled for the
     *   destination account. Corresponds to the FedNow reason code `AG03`.
     * - `amount_exceeds_bank_limits` - The amount is higher than the recipient is
     *   authorized to send or receive. Corresponds to the FedNow reason code `E990`.
     * - `invalid_creditor_address` - The creditor's address is required, but missing
     *   or invalid. Corresponds to the FedNow reason code `BE04`.
     * - `invalid_debtor_address` - The debtor's address is required, but missing or
     *   invalid. Corresponds to the FedNow reason code `BE07`.
     * - `timeout` - There was a timeout processing the transfer. Corresponds to the
     *   FedNow reason code `E997`.
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
      | 'amount_exceeds_bank_limits'
      | 'invalid_creditor_address'
      | 'invalid_debtor_address'
      | 'timeout'
      | 'processing_error'
      | 'other';
  }
}

export declare namespace FednowTransfers {
  export { type FednowTransferCompleteParams as FednowTransferCompleteParams };
}
