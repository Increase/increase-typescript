// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CardPurchaseSupplementsAPI from '../card-purchase-supplements';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CardPurchaseSupplements extends APIResource {
  /**
   * Simulates the creation of a Card Purchase Supplement (Level 3 data) for a card
   * settlement. This happens asynchronously in production when Visa sends enhanced
   * transaction data about a purchase.
   *
   * @example
   * ```ts
   * const cardPurchaseSupplement =
   *   await client.simulations.cardPurchaseSupplements.create({
   *     transaction_id: 'transaction_uyrp7fld2ium70oa7oi',
   *   });
   * ```
   */
  create(
    body: CardPurchaseSupplementCreateParams,
    options?: RequestOptions,
  ): APIPromise<CardPurchaseSupplementsAPI.CardPurchaseSupplement> {
    return this._client.post('/simulations/card_purchase_supplements', { body, ...options });
  }
}

export interface CardPurchaseSupplementCreateParams {
  /**
   * The identifier of the Transaction to create a Card Purchase Supplement for. The
   * Transaction must have a source of type `card_settlement`.
   */
  transaction_id: string;

  /**
   * Invoice-level information about the payment.
   */
  invoice?: CardPurchaseSupplementCreateParams.Invoice;

  /**
   * Line item information, such as individual products purchased.
   */
  line_items?: Array<CardPurchaseSupplementCreateParams.LineItem>;
}

export namespace CardPurchaseSupplementCreateParams {
  /**
   * Invoice-level information about the payment.
   */
  export interface Invoice {
    /**
     * Discount given to cardholder.
     */
    discount_amount?: number;

    /**
     * Amount of duty taxes.
     */
    duty_tax_amount?: number;

    /**
     * Date the order was taken.
     */
    order_date?: string;

    /**
     * The shipping cost.
     */
    shipping_amount?: number;

    /**
     * Country code of the shipping destination.
     */
    shipping_destination_country_code?: string;

    /**
     * Postal code of the shipping destination.
     */
    shipping_destination_postal_code?: string;

    /**
     * Postal code of the location being shipped from.
     */
    shipping_source_postal_code?: string;

    /**
     * Taxes paid for freight and shipping.
     */
    shipping_tax_amount?: number;

    /**
     * Tax rate for freight and shipping.
     */
    shipping_tax_rate?: string;

    /**
     * Value added tax invoice reference number.
     */
    unique_value_added_tax_invoice_reference?: string;
  }

  export interface LineItem {
    /**
     * Discount amount for this specific line item.
     */
    discount_amount?: number;

    /**
     * Code used to categorize the purchase item.
     */
    item_commodity_code?: string;

    /**
     * Description of the purchase item.
     */
    item_descriptor?: string;

    /**
     * The number of units of the product being purchased.
     */
    item_quantity?: string;

    /**
     * Code used to categorize the product being purchased.
     */
    product_code?: string;

    /**
     * Sales tax amount for this line item.
     */
    sales_tax_amount?: number;

    /**
     * Sales tax rate for this line item.
     */
    sales_tax_rate?: string;

    /**
     * Total amount of all line items.
     */
    total_amount?: number;

    /**
     * Cost of line item per unit of measure, in major units.
     */
    unit_cost?: string;

    /**
     * Code indicating unit of measure (gallons, etc.).
     */
    unit_of_measure_code?: string;
  }
}

export declare namespace CardPurchaseSupplements {
  export { type CardPurchaseSupplementCreateParams as CardPurchaseSupplementCreateParams };
}
