// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PhysicalCheckBatches extends APIResource {
  /**
   * Create a Physical Check Batch
   *
   * @example
   * ```ts
   * const physicalCheckBatch =
   *   await client.physicalCheckBatches.create({
   *     mailing_address: {
   *       city: 'New York',
   *       line1: '33 Liberty Street',
   *       name: 'Ian Crease',
   *       postal_code: '10045',
   *       state: 'NY',
   *     },
   *     return_address: {
   *       city: 'New York',
   *       line1: '33 Liberty Street',
   *       name: 'National Phonograph Company',
   *       postal_code: '10045',
   *       state: 'NY',
   *     },
   *   });
   * ```
   */
  create(body: PhysicalCheckBatchCreateParams, options?: RequestOptions): APIPromise<PhysicalCheckBatch> {
    return this._client.post('/physical_check_batches', { body, ...options });
  }

  /**
   * Cancel a pending Physical Check Batch, which cancels all of its related checks.
   *
   * @example
   * ```ts
   * const physicalCheckBatch =
   *   await client.physicalCheckBatches.cancel(
   *     'physical_check_batch_yzdwjhdbw0in6191whce',
   *   );
   * ```
   */
  cancel(physicalCheckBatchID: string, options?: RequestOptions): APIPromise<PhysicalCheckBatch> {
    return this._client.post(path`/physical_check_batches/${physicalCheckBatchID}/cancel`, options);
  }

  /**
   * Completing a Physical Check Batch closes it to new Physical Checks and begins
   * the process of printing and mailing it.
   *
   * @example
   * ```ts
   * const physicalCheckBatch =
   *   await client.physicalCheckBatches.complete(
   *     'physical_check_batch_yzdwjhdbw0in6191whce',
   *   );
   * ```
   */
  complete(physicalCheckBatchID: string, options?: RequestOptions): APIPromise<PhysicalCheckBatch> {
    return this._client.post(path`/physical_check_batches/${physicalCheckBatchID}/complete`, options);
  }
}

/**
 * Physical Check Batches are groups of checks that are mailed in the same parcel.
 * Tracking updates are propagated to every related Check Transfer.
 */
export interface PhysicalCheckBatch {
  /**
   * The Physical Check Batch's identifier.
   */
  id: string;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Physical Check Batch was created.
   */
  created_at: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The mailing address of the parcel.
   */
  mailing_address: PhysicalCheckBatch.MailingAddress;

  /**
   * The return address of the parcel.
   */
  return_address: PhysicalCheckBatch.ReturnAddress;

  /**
   * The shipping method for the parcel.
   *
   * - `usps_first_class` - USPS First Class
   * - `fedex_overnight` - FedEx Overnight
   */
  shipping_method: 'usps_first_class' | 'fedex_overnight';

  /**
   * The lifecycle status of the Physical Check Batch.
   *
   * - `pending` - The batch is pending completion and is open to accepting new
   *   checks.
   * - `completed` - The batch has been completed.
   * - `canceled` - The batch and all checks related to it have been canceled.
   * - `requires_attention` - The batch requires attention from an Increase operator.
   */
  status: 'pending' | 'completed' | 'canceled' | 'requires_attention';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `physical_check_batch`.
   */
  type: 'physical_check_batch';
}

export namespace PhysicalCheckBatch {
  /**
   * The mailing address of the parcel.
   */
  export interface MailingAddress {
    /**
     * The city of the address.
     */
    city: string;

    /**
     * The first line of the address.
     */
    line1: string;

    /**
     * The second line of the address.
     */
    line2: string | null;

    /**
     * The name component of the address.
     */
    name: string;

    /**
     * The phone number that is used for delivery issues.
     */
    phone: string | null;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * The state of the address.
     */
    state: string;
  }

  /**
   * The return address of the parcel.
   */
  export interface ReturnAddress {
    /**
     * The city of the return address.
     */
    city: string;

    /**
     * The first line of the return address.
     */
    line1: string;

    /**
     * The second line of the return address.
     */
    line2: string | null;

    /**
     * The name component of the return address.
     */
    name: string;

    /**
     * The phone number that is used for delivery issues.
     */
    phone: string | null;

    /**
     * The postal code of the return address.
     */
    postal_code: string;

    /**
     * The state of the return address.
     */
    state: string;
  }
}

export interface PhysicalCheckBatchCreateParams {
  /**
   * Details for where the parcel will be mailed.
   */
  mailing_address: PhysicalCheckBatchCreateParams.MailingAddress;

  /**
   * Details for where the parcel should return if it is unable to be delivered.
   */
  return_address: PhysicalCheckBatchCreateParams.ReturnAddress;

  /**
   * How to ship the batch.
   *
   * - `usps_first_class` - USPS First Class
   * - `fedex_overnight` - FedEx Overnight
   */
  shipping_method?: 'usps_first_class' | 'fedex_overnight';

  [k: string]: unknown;
}

export namespace PhysicalCheckBatchCreateParams {
  /**
   * Details for where the parcel will be mailed.
   */
  export interface MailingAddress {
    /**
     * The city of the destination address.
     */
    city: string;

    /**
     * The first line of the destination address.
     */
    line1: string;

    /**
     * The recipient at the destination address.
     */
    name: string;

    /**
     * The postal code of the destination address.
     */
    postal_code: string;

    /**
     * The US state of the destination address.
     */
    state: string;

    /**
     * The second line of the destination address.
     */
    line2?: string;

    /**
     * The phone number used for delivery issues at the destination address. Only used
     * when `shipping_method` is `fedex_overnight`.
     */
    phone?: string;
  }

  /**
   * Details for where the parcel should return if it is unable to be delivered.
   */
  export interface ReturnAddress {
    /**
     * The city of the return address.
     */
    city: string;

    /**
     * The first line of the return address.
     */
    line1: string;

    /**
     * The recipient at the return address.
     */
    name: string;

    /**
     * The postal code of the return address.
     */
    postal_code: string;

    /**
     * The US state of the return address.
     */
    state: string;

    /**
     * The second line of the return address.
     */
    line2?: string;

    /**
     * The phone number used for delivery issues at the return address. Only used when
     * `shipping_method` is `fedex_overnight`.
     */
    phone?: string;
  }
}

export declare namespace PhysicalCheckBatches {
  export {
    type PhysicalCheckBatch as PhysicalCheckBatch,
    type PhysicalCheckBatchCreateParams as PhysicalCheckBatchCreateParams,
  };
}
