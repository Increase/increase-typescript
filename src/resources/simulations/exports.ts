// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExportsAPI from '../exports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Exports extends APIResource {
  /**
   * Simulates a tax form export being generated.
   *
   * @example
   * ```ts
   * const _export = await client.simulations.exports.create({
   *   account_id: 'account_in71c4amph0vgo2qllky',
   * });
   * ```
   */
  create(body: ExportCreateParams, options?: RequestOptions): APIPromise<ExportsAPI.Export> {
    return this._client.post('/simulations/exports', { body, ...options });
  }
}

export interface ExportCreateParams {
  /**
   * The identifier of the Account the tax document is for.
   */
  account_id: string;
}

export declare namespace Exports {
  export { type ExportCreateParams as ExportCreateParams };
}
