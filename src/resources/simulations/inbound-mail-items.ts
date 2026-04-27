// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InboundMailItemsAPI from '../inbound-mail-items';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class InboundMailItems extends APIResource {
  /**
   * Simulates an inbound mail item to your account, as if someone had mailed a
   * physical check to one of your account's Lockboxes.
   *
   * @example
   * ```ts
   * const inboundMailItem =
   *   await client.simulations.inboundMailItems.create({
   *     amount: 1000,
   *   });
   * ```
   */
  create(
    body: InboundMailItemCreateParams,
    options?: RequestOptions,
  ): APIPromise<InboundMailItemsAPI.InboundMailItem> {
    return this._client.post('/simulations/inbound_mail_items', { body, ...options });
  }
}

export interface InboundMailItemCreateParams {
  /**
   * The amount of the check to be simulated, in cents.
   */
  amount: number;

  /**
   * The file containing the PDF contents. If not present, a default check image file
   * will be used.
   */
  contents_file_id?: string;

  /**
   * The identifier of the Lockbox Address to simulate inbound mail to.
   */
  lockbox_address_id?: string;

  /**
   * The identifier of the Lockbox Recipient to simulate inbound mail to.
   */
  lockbox_recipient_id?: string;

  [k: string]: unknown;
}

export declare namespace InboundMailItems {
  export { type InboundMailItemCreateParams as InboundMailItemCreateParams };
}
