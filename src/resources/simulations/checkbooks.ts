// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckbooksAPI from '../checkbooks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Checkbooks extends APIResource {
  /**
   * Simulates the mailing of a [Checkbook](#checkbooks), which happens periodically
   * throughout the day in production but can be sped up in sandbox. This Checkbook
   * must have a `status` of `pending_submission` or `pending_mailing`.
   *
   * @example
   * ```ts
   * const checkbook = await client.simulations.checkbooks.mail(
   *   'checkbook_7iudxhxum6vlkcjxmi8y',
   * );
   * ```
   */
  mail(checkbookID: string, options?: RequestOptions): APIPromise<CheckbooksAPI.Checkbook> {
    return this._client.post(path`/simulations/checkbooks/${checkbookID}/mail`, options);
  }
}
