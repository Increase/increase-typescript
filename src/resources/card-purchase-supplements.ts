// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CardPurchaseSupplements extends APIResource {
  /**
   * Retrieve a Card Purchase Supplement
   *
   * @example
   * ```ts
   * const cardPurchaseSupplement =
   *   await client.cardPurchaseSupplements.retrieve(
   *     'card_purchase_supplement_ijuc45iym4jchnh2sfk3',
   *   );
   * ```
   */
  retrieve(cardPurchaseSupplementID: string, options?: RequestOptions): APIPromise<CardPurchaseSupplement> {
    return this._client.get(path`/card_purchase_supplements/${cardPurchaseSupplementID}`, options);
  }

  /**
   * List Card Purchase Supplements
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const cardPurchaseSupplement of client.cardPurchaseSupplements.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CardPurchaseSupplementListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CardPurchaseSupplementsPage, CardPurchaseSupplement> {
    return this._client.getAPIList('/card_purchase_supplements', Page<CardPurchaseSupplement>, {
      query,
      ...options,
    });
  }
}

export type CardPurchaseSupplementsPage = Page<CardPurchaseSupplement>;

/**
 * Additional information about a card purchase (e.g., settlement or refund), such
 * as level 3 line item data.
 */
export interface CardPurchaseSupplement {
  /**
   * The Card Purchase Supplement identifier.
   */
  id: string;

  /**
   * The ID of the Card Payment this transaction belongs to.
   */
  card_payment_id: string | null;

  /**
   * Invoice-level information about the payment.
   */
  invoice: CardPurchaseSupplement.Invoice | null;

  /**
   * Line item information, such as individual products purchased.
   */
  line_items: Array<CardPurchaseSupplement.LineItem> | null;

  /**
   * The ID of the transaction.
   */
  transaction_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `card_purchase_supplement`.
   */
  type: 'card_purchase_supplement';

  [k: string]: unknown;
}

export namespace CardPurchaseSupplement {
  /**
   * Invoice-level information about the payment.
   */
  export interface Invoice {
    /**
     * Discount given to cardholder.
     */
    discount_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the discount.
     */
    discount_currency: string | null;

    /**
     * Indicates how the merchant applied the discount.
     *
     * - `no_invoice_level_discount_provided` - No invoice level discount provided
     * - `tax_calculated_on_post_discount_invoice_total` - Tax calculated on post
     *   discount invoice total
     * - `tax_calculated_on_pre_discount_invoice_total` - Tax calculated on pre
     *   discount invoice total
     */
    discount_treatment_code:
      | 'no_invoice_level_discount_provided'
      | 'tax_calculated_on_post_discount_invoice_total'
      | 'tax_calculated_on_pre_discount_invoice_total'
      | null;

    /**
     * Amount of duty taxes.
     */
    duty_tax_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the duty tax.
     */
    duty_tax_currency: string | null;

    /**
     * Date the order was taken.
     */
    order_date: string | null;

    /**
     * The shipping cost.
     */
    shipping_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the shipping
     * cost.
     */
    shipping_currency: string | null;

    /**
     * Country code of the shipping destination.
     */
    shipping_destination_country_code: string | null;

    /**
     * Postal code of the shipping destination.
     */
    shipping_destination_postal_code: string | null;

    /**
     * Postal code of the location being shipped from.
     */
    shipping_source_postal_code: string | null;

    /**
     * Taxes paid for freight and shipping.
     */
    shipping_tax_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the shipping
     * tax.
     */
    shipping_tax_currency: string | null;

    /**
     * Tax rate for freight and shipping.
     */
    shipping_tax_rate: string | null;

    /**
     * Indicates how the merchant applied taxes.
     *
     * - `no_tax_applies` - No tax applies
     * - `net_price_line_item_level` - Net price line item level
     * - `net_price_invoice_level` - Net price invoice level
     * - `gross_price_line_item_level` - Gross price line item level
     * - `gross_price_invoice_level` - Gross price invoice level
     */
    tax_treatments:
      | 'no_tax_applies'
      | 'net_price_line_item_level'
      | 'net_price_invoice_level'
      | 'gross_price_line_item_level'
      | 'gross_price_invoice_level'
      | null;

    /**
     * Value added tax invoice reference number.
     */
    unique_value_added_tax_invoice_reference: string | null;
  }

  export interface LineItem {
    /**
     * The Card Purchase Supplement Line Item identifier.
     */
    id: string;

    /**
     * Indicates the type of line item.
     *
     * - `normal` - Normal
     * - `credit` - Credit
     * - `payment` - Purchase
     */
    detail_indicator: 'normal' | 'credit' | 'payment' | null;

    /**
     * Discount amount for this specific line item.
     */
    discount_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the discount.
     */
    discount_currency: string | null;

    /**
     * Indicates how the merchant applied the discount for this specific line item.
     *
     * - `no_line_item_level_discount_provided` - No line item level discount provided
     * - `tax_calculated_on_post_discount_line_item_total` - Tax calculated on post
     *   discount line item total
     * - `tax_calculated_on_pre_discount_line_item_total` - Tax calculated on pre
     *   discount line item total
     */
    discount_treatment_code:
      | 'no_line_item_level_discount_provided'
      | 'tax_calculated_on_post_discount_line_item_total'
      | 'tax_calculated_on_pre_discount_line_item_total'
      | null;

    /**
     * Code used to categorize the purchase item.
     */
    item_commodity_code: string | null;

    /**
     * Description of the purchase item.
     */
    item_descriptor: string | null;

    /**
     * The number of units of the product being purchased.
     */
    item_quantity: string | null;

    /**
     * Code used to categorize the product being purchased.
     */
    product_code: string | null;

    /**
     * Sales tax amount for this line item.
     */
    sales_tax_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the sales tax
     * assessed.
     */
    sales_tax_currency: string | null;

    /**
     * Sales tax rate for this line item.
     */
    sales_tax_rate: string | null;

    /**
     * Total amount of all line items.
     */
    total_amount: number | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the total
     * amount.
     */
    total_amount_currency: string | null;

    /**
     * Cost of line item per unit of measure, in major units.
     */
    unit_cost: string | null;

    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the unit cost.
     */
    unit_cost_currency: string | null;

    /**
     * Code indicating unit of measure (gallons, etc.).
     */
    unit_of_measure_code: string | null;
  }
}

export interface CardPurchaseSupplementListParams extends PageParams {
  /**
   * Filter Card Purchase Supplements to ones belonging to the specified Card
   * Payment.
   */
  card_payment_id?: string;

  created_at?: CardPurchaseSupplementListParams.CreatedAt;
}

export namespace CardPurchaseSupplementListParams {
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

export declare namespace CardPurchaseSupplements {
  export {
    type CardPurchaseSupplement as CardPurchaseSupplement,
    type CardPurchaseSupplementsPage as CardPurchaseSupplementsPage,
    type CardPurchaseSupplementListParams as CardPurchaseSupplementListParams,
  };
}
