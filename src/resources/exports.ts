// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Exports extends APIResource {
  /**
   * Create an Export
   *
   * @example
   * ```ts
   * const _export = await client.exports.create({
   *   category: 'transaction_csv',
   * });
   * ```
   */
  create(body: ExportCreateParams, options?: RequestOptions): APIPromise<Export> {
    return this._client.post('/exports', { body, ...options });
  }

  /**
   * Retrieve an Export
   *
   * @example
   * ```ts
   * const _export = await client.exports.retrieve(
   *   'export_8s4m48qz3bclzje0zwh9',
   * );
   * ```
   */
  retrieve(exportID: string, options?: RequestOptions): APIPromise<Export> {
    return this._client.get(path`/exports/${exportID}`, options);
  }

  /**
   * List Exports
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const _export of client.exports.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExportsPage, Export> {
    return this._client.getAPIList('/exports', Page<Export>, { query, ...options });
  }
}

export type ExportsPage = Page<Export>;

/**
 * Exports are generated files. Some exports can contain a lot of data, like a CSV
 * of your transactions. Others can be a single document, like a tax form. Since
 * they can take a while, they are generated asynchronously. We send a webhook when
 * they are ready. For more information, please read our
 * [Exports documentation](https://increase.com/documentation/exports).
 */
export interface Export {
  /**
   * The Export identifier.
   */
  id: string;

  /**
   * Details of the account statement BAI2 export. This field will be present when
   * the `category` is equal to `account_statement_bai2`.
   */
  account_statement_bai2: Export.AccountStatementBai2 | null;

  /**
   * Details of the account statement OFX export. This field will be present when the
   * `category` is equal to `account_statement_ofx`.
   */
  account_statement_ofx: Export.AccountStatementOfx | null;

  /**
   * Details of the account verification letter export. This field will be present
   * when the `category` is equal to `account_verification_letter`.
   */
  account_verification_letter: Export.AccountVerificationLetter | null;

  /**
   * Details of the balance CSV export. This field will be present when the
   * `category` is equal to `balance_csv`.
   */
  balance_csv: Export.BalanceCsv | null;

  /**
   * Details of the bookkeeping account balance CSV export. This field will be
   * present when the `category` is equal to `bookkeeping_account_balance_csv`.
   */
  bookkeeping_account_balance_csv: Export.BookkeepingAccountBalanceCsv | null;

  /**
   * The category of the Export. We may add additional possible values for this enum
   * over time; your application should be able to handle that gracefully.
   *
   * - `account_statement_ofx` - Export an Open Financial Exchange (OFX) file of
   *   transactions and balances for a given time range and Account.
   * - `account_statement_bai2` - Export a BAI2 file of transactions and balances for
   *   a given date and optional Account.
   * - `transaction_csv` - Export a CSV of all transactions for a given time range.
   * - `balance_csv` - Export a CSV of account balances for the dates in a given
   *   range.
   * - `bookkeeping_account_balance_csv` - Export a CSV of bookkeeping account
   *   balances for the dates in a given range.
   * - `entity_csv` - Export a CSV of entities with a given status.
   * - `vendor_csv` - Export a CSV of vendors added to the third-party risk
   *   management dashboard.
   * - `dashboard_table_csv` - Certain dashboard tables are available as CSV exports.
   *   This export cannot be created via the API.
   * - `account_verification_letter` - A PDF of an account verification letter.
   * - `funding_instructions` - A PDF of funding instructions.
   * - `form_1099_int` - A PDF of an Internal Revenue Service Form 1099-INT.
   * - `form_1099_misc` - A PDF of an Internal Revenue Service Form 1099-MISC.
   */
  category:
    | 'account_statement_ofx'
    | 'account_statement_bai2'
    | 'transaction_csv'
    | 'balance_csv'
    | 'bookkeeping_account_balance_csv'
    | 'entity_csv'
    | 'vendor_csv'
    | 'dashboard_table_csv'
    | 'account_verification_letter'
    | 'funding_instructions'
    | 'form_1099_int'
    | 'form_1099_misc';

  /**
   * The time the Export was created.
   */
  created_at: string;

  /**
   * Details of the dashboard table CSV export. This field will be present when the
   * `category` is equal to `dashboard_table_csv`.
   */
  dashboard_table_csv: Export.DashboardTableCsv | null;

  /**
   * Details of the entity CSV export. This field will be present when the `category`
   * is equal to `entity_csv`.
   */
  entity_csv: Export.EntityCsv | null;

  /**
   * Details of the Form 1099-INT export. This field will be present when the
   * `category` is equal to `form_1099_int`.
   */
  form_1099_int: Export.Form1099Int | null;

  /**
   * Details of the Form 1099-MISC export. This field will be present when the
   * `category` is equal to `form_1099_misc`.
   */
  form_1099_misc: Export.Form1099Misc | null;

  /**
   * Details of the funding instructions export. This field will be present when the
   * `category` is equal to `funding_instructions`.
   */
  funding_instructions: Export.FundingInstructions | null;

  /**
   * The idempotency key you chose for this object. This value is unique across
   * Increase and is used to ensure that a request is only processed once. Learn more
   * about [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key: string | null;

  /**
   * The result of the Export. This will be present when the Export's status
   * transitions to `complete`.
   */
  result: Export.Result | null;

  /**
   * The status of the Export.
   *
   * - `pending` - Increase is generating the export.
   * - `complete` - The export has been successfully generated.
   * - `failed` - The export failed to generate. Increase will reach out to you to
   *   resolve the issue.
   */
  status: 'pending' | 'complete' | 'failed';

  /**
   * Details of the transaction CSV export. This field will be present when the
   * `category` is equal to `transaction_csv`.
   */
  transaction_csv: Export.TransactionCsv | null;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `export`.
   */
  type: 'export';

  /**
   * Details of the vendor CSV export. This field will be present when the `category`
   * is equal to `vendor_csv`.
   */
  vendor_csv: Export.VendorCsv | null;
}

export namespace Export {
  /**
   * Details of the account statement BAI2 export. This field will be present when
   * the `category` is equal to `account_statement_bai2`.
   */
  export interface AccountStatementBai2 {
    /**
     * Filter results by Account.
     */
    account_id: string | null;

    /**
     * The date for which to retrieve the balance.
     */
    effective_date: string | null;

    /**
     * Filter results by Program.
     */
    program_id: string | null;
  }

  /**
   * Details of the account statement OFX export. This field will be present when the
   * `category` is equal to `account_statement_ofx`.
   */
  export interface AccountStatementOfx {
    /**
     * The Account to create a statement for.
     */
    account_id: string;

    /**
     * Filter transactions by their created date.
     */
    created_at: AccountStatementOfx.CreatedAt | null;
  }

  export namespace AccountStatementOfx {
    /**
     * Filter transactions by their created date.
     */
    export interface CreatedAt {
      /**
       * Filter results to transactions created after this time.
       */
      after: string | null;

      /**
       * Filter results to transactions created before this time.
       */
      before: string | null;
    }
  }

  /**
   * Details of the account verification letter export. This field will be present
   * when the `category` is equal to `account_verification_letter`.
   */
  export interface AccountVerificationLetter {
    /**
     * The Account Number to create a letter for.
     */
    account_number_id: string;

    /**
     * The date of the balance to include in the letter.
     */
    balance_date: string | null;
  }

  /**
   * Details of the balance CSV export. This field will be present when the
   * `category` is equal to `balance_csv`.
   */
  export interface BalanceCsv {
    /**
     * Filter results by Account.
     */
    account_id: string | null;

    /**
     * Filter balances by their created date.
     */
    created_at: BalanceCsv.CreatedAt | null;
  }

  export namespace BalanceCsv {
    /**
     * Filter balances by their created date.
     */
    export interface CreatedAt {
      /**
       * Filter balances created after this time.
       */
      after: string | null;

      /**
       * Filter balances created before this time.
       */
      before: string | null;
    }
  }

  /**
   * Details of the bookkeeping account balance CSV export. This field will be
   * present when the `category` is equal to `bookkeeping_account_balance_csv`.
   */
  export interface BookkeepingAccountBalanceCsv {
    /**
     * Filter results by Bookkeeping Account.
     */
    bookkeeping_account_id: string | null;

    /**
     * Filter balances by their created date.
     */
    created_at: BookkeepingAccountBalanceCsv.CreatedAt | null;
  }

  export namespace BookkeepingAccountBalanceCsv {
    /**
     * Filter balances by their created date.
     */
    export interface CreatedAt {
      /**
       * Filter balances created after this time.
       */
      after: string | null;

      /**
       * Filter balances created before this time.
       */
      before: string | null;
    }
  }

  /**
   * Details of the dashboard table CSV export. This field will be present when the
   * `category` is equal to `dashboard_table_csv`.
   */
  export interface DashboardTableCsv {}

  /**
   * Details of the entity CSV export. This field will be present when the `category`
   * is equal to `entity_csv`.
   */
  export interface EntityCsv {}

  /**
   * Details of the Form 1099-INT export. This field will be present when the
   * `category` is equal to `form_1099_int`.
   */
  export interface Form1099Int {
    /**
     * The Account the tax form is for.
     */
    account_id: string;

    /**
     * Whether the tax form is a corrected form.
     */
    corrected: boolean;

    /**
     * A description of the tax form.
     */
    description: string;

    /**
     * The tax year for the tax form.
     */
    year: number;
  }

  /**
   * Details of the Form 1099-MISC export. This field will be present when the
   * `category` is equal to `form_1099_misc`.
   */
  export interface Form1099Misc {
    /**
     * The Account the tax form is for.
     */
    account_id: string;

    /**
     * Whether the tax form is a corrected form.
     */
    corrected: boolean;

    /**
     * The tax year for the tax form.
     */
    year: number;
  }

  /**
   * Details of the funding instructions export. This field will be present when the
   * `category` is equal to `funding_instructions`.
   */
  export interface FundingInstructions {
    /**
     * The Account Number to create funding instructions for.
     */
    account_number_id: string;
  }

  /**
   * The result of the Export. This will be present when the Export's status
   * transitions to `complete`.
   */
  export interface Result {
    /**
     * The File containing the contents of the Export.
     */
    file_id: string;
  }

  /**
   * Details of the transaction CSV export. This field will be present when the
   * `category` is equal to `transaction_csv`.
   */
  export interface TransactionCsv {
    /**
     * Filter results by Account.
     */
    account_id: string | null;

    /**
     * Filter transactions by their created date.
     */
    created_at: TransactionCsv.CreatedAt | null;
  }

  export namespace TransactionCsv {
    /**
     * Filter transactions by their created date.
     */
    export interface CreatedAt {
      /**
       * Filter transactions created after this time.
       */
      after: string | null;

      /**
       * Filter transactions created before this time.
       */
      before: string | null;
    }
  }

  /**
   * Details of the vendor CSV export. This field will be present when the `category`
   * is equal to `vendor_csv`.
   */
  export interface VendorCsv {}
}

export interface ExportCreateParams {
  /**
   * The type of Export to create.
   *
   * - `account_statement_ofx` - Export an Open Financial Exchange (OFX) file of
   *   transactions and balances for a given time range and Account.
   * - `account_statement_bai2` - Export a BAI2 file of transactions and balances for
   *   a given date and optional Account.
   * - `transaction_csv` - Export a CSV of all transactions for a given time range.
   * - `balance_csv` - Export a CSV of account balances for the dates in a given
   *   range.
   * - `bookkeeping_account_balance_csv` - Export a CSV of bookkeeping account
   *   balances for the dates in a given range.
   * - `entity_csv` - Export a CSV of entities with a given status.
   * - `vendor_csv` - Export a CSV of vendors added to the third-party risk
   *   management dashboard.
   * - `account_verification_letter` - A PDF of an account verification letter.
   * - `funding_instructions` - A PDF of funding instructions.
   */
  category:
    | 'account_statement_ofx'
    | 'account_statement_bai2'
    | 'transaction_csv'
    | 'balance_csv'
    | 'bookkeeping_account_balance_csv'
    | 'entity_csv'
    | 'vendor_csv'
    | 'account_verification_letter'
    | 'funding_instructions';

  /**
   * Options for the created export. Required if `category` is equal to
   * `account_statement_bai2`.
   */
  account_statement_bai2?: ExportCreateParams.AccountStatementBai2;

  /**
   * Options for the created export. Required if `category` is equal to
   * `account_statement_ofx`.
   */
  account_statement_ofx?: ExportCreateParams.AccountStatementOfx;

  /**
   * Options for the created export. Required if `category` is equal to
   * `account_verification_letter`.
   */
  account_verification_letter?: ExportCreateParams.AccountVerificationLetter;

  /**
   * Options for the created export. Required if `category` is equal to
   * `balance_csv`.
   */
  balance_csv?: ExportCreateParams.BalanceCsv;

  /**
   * Options for the created export. Required if `category` is equal to
   * `bookkeeping_account_balance_csv`.
   */
  bookkeeping_account_balance_csv?: ExportCreateParams.BookkeepingAccountBalanceCsv;

  /**
   * Options for the created export. Required if `category` is equal to `entity_csv`.
   */
  entity_csv?: ExportCreateParams.EntityCsv;

  /**
   * Options for the created export. Required if `category` is equal to
   * `funding_instructions`.
   */
  funding_instructions?: ExportCreateParams.FundingInstructions;

  /**
   * Options for the created export. Required if `category` is equal to
   * `transaction_csv`.
   */
  transaction_csv?: ExportCreateParams.TransactionCsv;

  /**
   * Options for the created export. Required if `category` is equal to `vendor_csv`.
   */
  vendor_csv?: ExportCreateParams.VendorCsv;

  [k: string]: unknown;
}

export namespace ExportCreateParams {
  /**
   * Options for the created export. Required if `category` is equal to
   * `account_statement_bai2`.
   */
  export interface AccountStatementBai2 {
    /**
     * The Account to create a BAI2 report for. If not provided, all open accounts will
     * be included.
     */
    account_id?: string;

    /**
     * The date to create a BAI2 report for. If not provided, the current date will be
     * used. The timezone is UTC. If the current date is used, the report will include
     * intraday balances, otherwise it will include end-of-day balances for the
     * provided date.
     */
    effective_date?: string;

    /**
     * The Program to create a BAI2 report for. If not provided, all open accounts will
     * be included.
     */
    program_id?: string;
  }

  /**
   * Options for the created export. Required if `category` is equal to
   * `account_statement_ofx`.
   */
  export interface AccountStatementOfx {
    /**
     * The Account to create a statement for.
     */
    account_id: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: AccountStatementOfx.CreatedAt;
  }

  export namespace AccountStatementOfx {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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

  /**
   * Options for the created export. Required if `category` is equal to
   * `account_verification_letter`.
   */
  export interface AccountVerificationLetter {
    /**
     * The Account Number to create a letter for.
     */
    account_number_id: string;

    /**
     * The date of the balance to include in the letter. Defaults to the current date.
     */
    balance_date?: string;
  }

  /**
   * Options for the created export. Required if `category` is equal to
   * `balance_csv`.
   */
  export interface BalanceCsv {
    /**
     * Filter exported Balances to the specified Account.
     */
    account_id?: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: BalanceCsv.CreatedAt;
  }

  export namespace BalanceCsv {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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

  /**
   * Options for the created export. Required if `category` is equal to
   * `bookkeeping_account_balance_csv`.
   */
  export interface BookkeepingAccountBalanceCsv {
    /**
     * Filter exported Bookkeeping Account Balances to the specified Bookkeeping
     * Account.
     */
    bookkeeping_account_id?: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: BookkeepingAccountBalanceCsv.CreatedAt;
  }

  export namespace BookkeepingAccountBalanceCsv {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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

  /**
   * Options for the created export. Required if `category` is equal to `entity_csv`.
   */
  export interface EntityCsv {}

  /**
   * Options for the created export. Required if `category` is equal to
   * `funding_instructions`.
   */
  export interface FundingInstructions {
    /**
     * The Account Number to create funding instructions for.
     */
    account_number_id: string;
  }

  /**
   * Options for the created export. Required if `category` is equal to
   * `transaction_csv`.
   */
  export interface TransactionCsv {
    /**
     * Filter exported Transactions to the specified Account.
     */
    account_id?: string;

    /**
     * Filter results by time range on the `created_at` attribute.
     */
    created_at?: TransactionCsv.CreatedAt;
  }

  export namespace TransactionCsv {
    /**
     * Filter results by time range on the `created_at` attribute.
     */
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

  /**
   * Options for the created export. Required if `category` is equal to `vendor_csv`.
   */
  export interface VendorCsv {}
}

export interface ExportListParams extends PageParams {
  category?: ExportListParams.Category;

  created_at?: ExportListParams.CreatedAt;

  /**
   * Filter records to the one with the specified `idempotency_key` you chose for
   * that object. This value is unique across Increase and is used to ensure that a
   * request is only processed once. Learn more about
   * [idempotency](https://increase.com/documentation/idempotency-keys).
   */
  idempotency_key?: string;

  status?: ExportListParams.Status;
}

export namespace ExportListParams {
  export interface Category {
    /**
     * Filter Exports for those with the specified category or categories. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'account_statement_ofx'
      | 'account_statement_bai2'
      | 'transaction_csv'
      | 'balance_csv'
      | 'bookkeeping_account_balance_csv'
      | 'entity_csv'
      | 'vendor_csv'
      | 'dashboard_table_csv'
      | 'account_verification_letter'
      | 'funding_instructions'
      | 'form_1099_int'
      | 'form_1099_misc'
    >;
  }

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
     * Filter Exports for those with the specified status or statuses. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<'pending' | 'complete' | 'failed'>;
  }
}

export declare namespace Exports {
  export {
    type Export as Export,
    type ExportsPage as ExportsPage,
    type ExportCreateParams as ExportCreateParams,
    type ExportListParams as ExportListParams,
  };
}
