// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExportsAPI from '../exports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Exports extends APIResource {
  /**
   * Many exports are created by you via POST /exports or in the Dashboard. Some
   * exports are created automatically by Increase. For example, tax documents are
   * published once a year. In sandbox, you can trigger the arrival of an export that
   * would normally only be created automatically via this simulation.
   *
   * @example
   * ```ts
   * const _export = await client.simulations.exports.create({
   *   category: 'form_1099_int',
   * });
   * ```
   */
  create(body: ExportCreateParams, options?: RequestOptions): APIPromise<ExportsAPI.Export> {
    return this._client.post('/simulations/exports', { body, ...options });
  }
}

export interface ExportCreateParams {
  /**
   * The type of Export to create.
   *
   * - `form_1099_int` - A PDF of an Internal Revenue Service Form 1099-INT.
   */
  category: 'form_1099_int';

  /**
   * Options for the created export. Required if `category` is equal to
   * `form_1099_int`.
   */
  form_1099_int?: ExportCreateParams.Form1099Int;
}

export namespace ExportCreateParams {
  /**
   * Options for the created export. Required if `category` is equal to
   * `form_1099_int`.
   */
  export interface Form1099Int {
    /**
     * The identifier of the Account the tax document is for.
     */
    account_id: string;
  }
}

export declare namespace Exports {
  export { type ExportCreateParams as ExportCreateParams };
}
