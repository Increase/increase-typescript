// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BookkeepingEntries extends APIResource {
  /**
   * Retrieve a Bookkeeping Entry
   *
   * @example
   * ```ts
   * const bookkeepingEntry =
   *   await client.bookkeepingEntries.retrieve(
   *     'bookkeeping_entry_ctjpajsj3ks2blx10375',
   *   );
   * ```
   */
  retrieve(bookkeepingEntryID: string, options?: RequestOptions): APIPromise<BookkeepingEntry> {
    return this._client.get(path`/bookkeeping_entries/${bookkeepingEntryID}`, options);
  }

  /**
   * List Bookkeeping Entries
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bookkeepingEntry of client.bookkeepingEntries.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BookkeepingEntryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BookkeepingEntriesPage, BookkeepingEntry> {
    return this._client.getAPIList('/bookkeeping_entries', Page<BookkeepingEntry>, { query, ...options });
  }
}

export type BookkeepingEntriesPage = Page<BookkeepingEntry>;

/**
 * Entries are T-account entries recording debits and credits. Your compliance
 * setup might require annotating money movements using this API. Learn more in our
 * [guide to Bookkeeping](https://increase.com/documentation/bookkeeping#bookkeeping).
 */
export interface BookkeepingEntry {
  /**
   * The entry identifier.
   */
  id: string;

  /**
   * The identifier for the Account the Entry belongs to.
   */
  account_id: string;

  /**
   * The Entry amount in the minor unit of its currency. For dollars, for example,
   * this is cents.
   */
  amount: number;

  /**
   * When the entry set was created.
   */
  created_at: string;

  /**
   * The identifier for the Entry Set the Entry belongs to.
   */
  entry_set_id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `bookkeeping_entry`.
   */
  type: 'bookkeeping_entry';
}

export interface BookkeepingEntryListParams extends PageParams {
  /**
   * The identifier for the Bookkeeping Account to filter by.
   */
  account_id?: string;
}

export declare namespace BookkeepingEntries {
  export {
    type BookkeepingEntry as BookkeepingEntry,
    type BookkeepingEntriesPage as BookkeepingEntriesPage,
    type BookkeepingEntryListParams as BookkeepingEntryListParams,
  };
}
