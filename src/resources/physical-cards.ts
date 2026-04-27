// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PhysicalCards extends APIResource {
  /**
   * Create a Physical Card
   *
   * @example
   * ```ts
   * const physicalCard = await client.physicalCards.create({
   *   card_id: 'card_oubs0hwk5rn6knuecxg2',
   *   cardholder: { first_name: 'Ian', last_name: 'Crease' },
   *   shipment: {
   *     address: {
   *       city: 'New York',
   *       line1: '33 Liberty Street',
   *       name: 'Ian Crease',
   *       postal_code: '10045',
   *       state: 'NY',
   *     },
   *     method: 'usps',
   *   },
   * });
   * ```
   */
  create(body: PhysicalCardCreateParams, options?: RequestOptions): APIPromise<PhysicalCard> {
    return this._client.post('/physical_cards', { body, ...options });
  }

  /**
   * Retrieve a Physical Card
   *
   * @example
   * ```ts
   * const physicalCard = await client.physicalCards.retrieve(
   *   'physical_card_ode8duyq5v2ynhjoharl',
   * );
   * ```
   */
  retrieve(physicalCardID: string, options?: RequestOptions): APIPromise<PhysicalCard> {
    return this._client.get(path`/physical_cards/${physicalCardID}`, options);
  }

  /**
   * Update a Physical Card
   *
   * @example
   * ```ts
   * const physicalCard = await client.physicalCards.update(
   *   'physical_card_ode8duyq5v2ynhjoharl',
   *   { status: 'disabled' },
   * );
   * ```
   */
  update(
    physicalCardID: string,
    body: PhysicalCardUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhysicalCard> {
    return this._client.patch(path`/physical_cards/${physicalCardID}`, { body, ...options });
  }

  /**
   * List Physical Cards
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const physicalCard of client.physicalCards.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PhysicalCardListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhysicalCardsPage, PhysicalCard> {
    return this._client.getAPIList('/physical_cards', Page<PhysicalCard>, { query, ...options });
  }
}

export type PhysicalCardsPage = Page<PhysicalCard>;

/**
 * Custom physical Visa cards that are shipped to your customers. The artwork is
 * configurable by a connected [Card Profile](/documentation/api#card-profiles).
 * The same Card can be used for multiple Physical Cards. Printing cards incurs a
 * fee. Please contact [support@increase.com](mailto:support@increase.com) for
 * pricing!
 */
export interface PhysicalCard {
  /**
   * The physical card identifier.
   */
  id: string;

  /**
   * The identifier for the Card this Physical Card represents.
   */
  card_id: string;

  /**
   * Details about the cardholder, as it appears on the printed card.
   */
  cardholder: PhysicalCard.Cardholder;

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
   * the Physical Card was created.
   */
  created_at: string;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The Physical Card Profile used for this Physical Card.
   */
  physical_card_profile_id: string | null;

  /**
   * The details used to ship this physical card.
   */
  shipment: PhysicalCard.Shipment;

  /**
   * The status of the Physical Card.
   *
   * - `active` - The physical card is active.
   * - `disabled` - The physical card is temporarily disabled.
   * - `canceled` - The physical card is permanently canceled.
   */
  status: 'active' | 'disabled' | 'canceled';

  /**
   * A constant representing the object's type. For this resource it will always be
   * `physical_card`.
   */
  type: 'physical_card';
}

export namespace PhysicalCard {
  /**
   * Details about the cardholder, as it appears on the printed card.
   */
  export interface Cardholder {
    /**
     * The cardholder's first name.
     */
    first_name: string;

    /**
     * The cardholder's last name.
     */
    last_name: string;
  }

  /**
   * The details used to ship this physical card.
   */
  export interface Shipment {
    /**
     * The location to where the card's packing label is addressed.
     */
    address: Shipment.Address;

    /**
     * The shipping method.
     *
     * - `usps` - USPS Post.
     * - `fedex_priority_overnight` - FedEx Priority Overnight, no signature.
     * - `fedex_2_day` - FedEx 2-day.
     * - `dhl_worldwide_express` - DHL Worldwide Express, international shipping only.
     */
    method: 'usps' | 'fedex_priority_overnight' | 'fedex_2_day' | 'dhl_worldwide_express';

    /**
     * When this physical card should be produced by the card printer. The default
     * timeline is the day after the card printer receives the order, except for
     * `FEDEX_PRIORITY_OVERNIGHT` cards, which default to `SAME_DAY`. To use faster
     * production methods, please reach out to
     * [support@increase.com](mailto:support@increase.com).
     *
     * - `next_day` - The physical card will be shipped one business day after the
     *   order is received by the card printer. A card that is submitted to Increase on
     *   a Monday evening (Pacific Time) will ship out on Wednesday.
     * - `same_day` - The physical card will be shipped on the same business day that
     *   the order is received by the card printer. A card that is submitted to
     *   Increase on a Monday evening (Pacific Time) will ship out on Tuesday.
     */
    schedule: 'next_day' | 'same_day';

    /**
     * The status of this shipment.
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
    status:
      | 'pending'
      | 'canceled'
      | 'submitted'
      | 'acknowledged'
      | 'rejected'
      | 'shipped'
      | 'returned'
      | 'requires_attention';

    /**
     * Tracking details for the shipment.
     */
    tracking: Shipment.Tracking | null;
  }

  export namespace Shipment {
    /**
     * The location to where the card's packing label is addressed.
     */
    export interface Address {
      /**
       * The city of the shipping address.
       */
      city: string;

      /**
       * The country of the shipping address.
       */
      country: string;

      /**
       * The first line of the shipping address.
       */
      line1: string;

      /**
       * The second line of the shipping address.
       */
      line2: string | null;

      /**
       * The third line of the shipping address.
       */
      line3: string | null;

      /**
       * The name of the recipient.
       */
      name: string;

      /**
       * The postal code of the shipping address.
       */
      postal_code: string;

      /**
       * The state of the shipping address.
       */
      state: string;
    }

    /**
     * Tracking details for the shipment.
     */
    export interface Tracking {
      /**
       * The tracking number. Not available for USPS shipments.
       */
      number: string | null;

      /**
       * For returned shipments, the tracking number of the return shipment.
       */
      return_number: string | null;

      /**
       * For returned shipments, this describes why the package was returned.
       */
      return_reason: string | null;

      /**
       * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
       * the fulfillment provider marked the card as ready for pick-up by the shipment
       * carrier.
       */
      shipped_at: string;

      /**
       * Tracking updates relating to the physical card's delivery.
       */
      updates: Array<Tracking.Update>;
    }

    export namespace Tracking {
      export interface Update {
        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the
         * carrier expects the card to be delivered.
         */
        carrier_estimated_delivery_at: string | null;

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
        category:
          | 'in_transit'
          | 'processed_for_delivery'
          | 'delivered'
          | 'delivery_issue'
          | 'returned_to_sender';

        /**
         * The city where the event took place.
         */
        city: string | null;

        /**
         * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which
         * the tracking event took place.
         */
        created_at: string;

        /**
         * The postal code where the event took place.
         */
        postal_code: string | null;

        /**
         * The state where the event took place.
         */
        state: string | null;
      }
    }
  }
}

export interface PhysicalCardCreateParams {
  /**
   * The underlying card representing this physical card.
   */
  card_id: string;

  /**
   * Details about the cardholder, as it will appear on the physical card.
   */
  cardholder: PhysicalCardCreateParams.Cardholder;

  /**
   * The details used to ship this physical card.
   */
  shipment: PhysicalCardCreateParams.Shipment;

  /**
   * The physical card profile to use for this physical card. The latest default
   * physical card profile will be used if not provided.
   */
  physical_card_profile_id?: string;

  [k: string]: unknown;
}

export namespace PhysicalCardCreateParams {
  /**
   * Details about the cardholder, as it will appear on the physical card.
   */
  export interface Cardholder {
    /**
     * The cardholder's first name.
     */
    first_name: string;

    /**
     * The cardholder's last name.
     */
    last_name: string;
  }

  /**
   * The details used to ship this physical card.
   */
  export interface Shipment {
    /**
     * The address to where the card should be shipped.
     */
    address: Shipment.Address;

    /**
     * The shipping method to use.
     *
     * - `usps` - USPS Post.
     * - `fedex_priority_overnight` - FedEx Priority Overnight, no signature.
     * - `fedex_2_day` - FedEx 2-day.
     * - `dhl_worldwide_express` - DHL Worldwide Express, international shipping only.
     */
    method: 'usps' | 'fedex_priority_overnight' | 'fedex_2_day' | 'dhl_worldwide_express';

    /**
     * When this physical card should be produced by the card printer. The default
     * timeline is the day after the card printer receives the order, except for
     * `FEDEX_PRIORITY_OVERNIGHT` cards, which default to `SAME_DAY`. To use faster
     * production methods, please reach out to
     * [support@increase.com](mailto:support@increase.com).
     *
     * - `next_day` - The physical card will be shipped one business day after the
     *   order is received by the card printer. A card that is submitted to Increase on
     *   a Monday evening (Pacific Time) will ship out on Wednesday.
     * - `same_day` - The physical card will be shipped on the same business day that
     *   the order is received by the card printer. A card that is submitted to
     *   Increase on a Monday evening (Pacific Time) will ship out on Tuesday.
     */
    schedule?: 'next_day' | 'same_day';
  }

  export namespace Shipment {
    /**
     * The address to where the card should be shipped.
     */
    export interface Address {
      /**
       * The city of the shipping address.
       */
      city: string;

      /**
       * The first line of the shipping address.
       */
      line1: string;

      /**
       * The name of the recipient.
       */
      name: string;

      /**
       * The postal code of the shipping address.
       */
      postal_code: string;

      /**
       * The state of the shipping address.
       */
      state: string;

      /**
       * The two-character ISO 3166-1 code of the country where the card should be
       * shipped (e.g., `US`). Please reach out to
       * [support@increase.com](mailto:support@increase.com) to ship cards
       * internationally.
       */
      country?: string;

      /**
       * The second line of the shipping address.
       */
      line2?: string;

      /**
       * The third line of the shipping address.
       */
      line3?: string;

      /**
       * The phone number of the recipient.
       */
      phone_number?: string;
    }
  }
}

export interface PhysicalCardUpdateParams {
  /**
   * The status to update the Physical Card to.
   *
   * - `active` - The physical card is active.
   * - `disabled` - The physical card is temporarily disabled.
   * - `canceled` - The physical card is permanently canceled.
   */
  status: 'active' | 'disabled' | 'canceled';
}

export interface PhysicalCardListParams extends PageParams {
  /**
   * Filter Physical Cards to ones belonging to the specified Card.
   */
  card_id?: string;

  created_at?: PhysicalCardListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;
}

export namespace PhysicalCardListParams {
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
}

export declare namespace PhysicalCards {
  export {
    type PhysicalCard as PhysicalCard,
    type PhysicalCardsPage as PhysicalCardsPage,
    type PhysicalCardCreateParams as PhysicalCardCreateParams,
    type PhysicalCardUpdateParams as PhysicalCardUpdateParams,
    type PhysicalCardListParams as PhysicalCardListParams,
  };
}
