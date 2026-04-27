// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PhysicalCardsAPI from '../physical-cards';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhysicalCards extends APIResource {
  /**
   * This endpoint allows you to simulate receiving a tracking update for a Physical
   * Card, to simulate the progress of a shipment.
   *
   * @example
   * ```ts
   * const physicalCard =
   *   await client.simulations.physicalCards.create(
   *     'physical_card_ode8duyq5v2ynhjoharl',
   *     { category: 'delivered' },
   *   );
   * ```
   */
  create(
    physicalCardID: string,
    body: PhysicalCardCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhysicalCardsAPI.PhysicalCard> {
    return this._client.post(path`/simulations/physical_cards/${physicalCardID}/tracking_updates`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint allows you to simulate advancing the shipment status of a Physical
   * Card, to simulate e.g., that a physical card was attempted shipped but then
   * failed delivery.
   *
   * @example
   * ```ts
   * const physicalCard =
   *   await client.simulations.physicalCards.advanceShipment(
   *     'physical_card_ode8duyq5v2ynhjoharl',
   *     { shipment_status: 'shipped' },
   *   );
   * ```
   */
  advanceShipment(
    physicalCardID: string,
    body: PhysicalCardAdvanceShipmentParams,
    options?: RequestOptions,
  ): APIPromise<PhysicalCardsAPI.PhysicalCard> {
    return this._client.post(path`/simulations/physical_cards/${physicalCardID}/advance_shipment`, {
      body,
      ...options,
    });
  }
}

export interface PhysicalCardCreateParams {
  /**
   * The type of tracking event.
   *
   * - `in_transit` - The physical card is in transit.
   * - `processed_for_delivery` - The physical card has been processed for delivery.
   * - `delivered` - The physical card has been delivered.
   * - `delivery_issue` - There is an issue preventing delivery. The delivery will be
   *   attempted again if possible. If the issue cannot be resolved, the physical
   *   card will be returned to sender.
   * - `returned_to_sender` - Delivery failed and the physical card was returned to
   *   sender.
   */
  category: 'in_transit' | 'processed_for_delivery' | 'delivered' | 'delivery_issue' | 'returned_to_sender';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the
   * carrier expects the card to be delivered.
   */
  carrier_estimated_delivery_at?: string;

  /**
   * The city where the event took place.
   */
  city?: string;

  /**
   * The postal code where the event took place.
   */
  postal_code?: string;

  /**
   * The state where the event took place.
   */
  state?: string;
}

export interface PhysicalCardAdvanceShipmentParams {
  /**
   * The shipment status to move the Physical Card to.
   *
   * - `pending` - The physical card has not yet been shipped.
   * - `canceled` - The physical card shipment was canceled prior to submission.
   * - `submitted` - The physical card shipment has been submitted to the card
   *   fulfillment provider.
   * - `acknowledged` - The physical card shipment has been acknowledged by the card
   *   fulfillment provider and will be processed in their next batch.
   * - `rejected` - The physical card shipment was rejected by the card printer due
   *   to an error.
   * - `shipped` - The physical card has been shipped.
   * - `returned` - The physical card shipment was returned to the sender and
   *   destroyed by the production facility.
   * - `requires_attention` - The physical card shipment requires attention from
   *   Increase before progressing.
   */
  shipment_status:
    | 'pending'
    | 'canceled'
    | 'submitted'
    | 'acknowledged'
    | 'rejected'
    | 'shipped'
    | 'returned'
    | 'requires_attention';
}

export declare namespace PhysicalCards {
  export {
    type PhysicalCardCreateParams as PhysicalCardCreateParams,
    type PhysicalCardAdvanceShipmentParams as PhysicalCardAdvanceShipmentParams,
  };
}
