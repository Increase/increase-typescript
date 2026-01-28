// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type PageParams, PageResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AccountNumber,
  AccountNumberCreateParams,
  AccountNumberListParams,
  AccountNumberUpdateParams,
  AccountNumbers,
  AccountNumbersPage,
} from './resources/account-numbers';
import {
  AccountStatement,
  AccountStatementListParams,
  AccountStatements,
  AccountStatementsPage,
} from './resources/account-statements';
import {
  AccountTransfer,
  AccountTransferCreateParams,
  AccountTransferListParams,
  AccountTransfers,
  AccountTransfersPage,
} from './resources/account-transfers';
import {
  Account,
  AccountBalanceParams,
  AccountCreateParams,
  AccountListParams,
  AccountUpdateParams,
  Accounts,
  AccountsPage,
  BalanceLookup,
} from './resources/accounts';
import {
  ACHPrenotification,
  ACHPrenotificationCreateParams,
  ACHPrenotificationListParams,
  ACHPrenotifications,
  ACHPrenotificationsPage,
} from './resources/ach-prenotifications';
import {
  ACHTransfer,
  ACHTransferCreateParams,
  ACHTransferListParams,
  ACHTransfers,
  ACHTransfersPage,
} from './resources/ach-transfers';
import {
  BookkeepingAccount,
  BookkeepingAccountBalanceParams,
  BookkeepingAccountCreateParams,
  BookkeepingAccountListParams,
  BookkeepingAccountUpdateParams,
  BookkeepingAccounts,
  BookkeepingAccountsPage,
  BookkeepingBalanceLookup,
} from './resources/bookkeeping-accounts';
import {
  BookkeepingEntries,
  BookkeepingEntriesPage,
  BookkeepingEntry,
  BookkeepingEntryListParams,
} from './resources/bookkeeping-entries';
import {
  BookkeepingEntrySet,
  BookkeepingEntrySetCreateParams,
  BookkeepingEntrySetListParams,
  BookkeepingEntrySets,
  BookkeepingEntrySetsPage,
} from './resources/bookkeeping-entry-sets';
import {
  CardDispute,
  CardDisputeCreateParams,
  CardDisputeListParams,
  CardDisputeSubmitUserSubmissionParams,
  CardDisputeWithdrawParams,
  CardDisputes,
  CardDisputesPage,
} from './resources/card-disputes';
import {
  CardPayment,
  CardPaymentListParams,
  CardPayments,
  CardPaymentsPage,
} from './resources/card-payments';
import {
  CardPurchaseSupplement,
  CardPurchaseSupplementListParams,
  CardPurchaseSupplements,
  CardPurchaseSupplementsPage,
} from './resources/card-purchase-supplements';
import {
  CardPushTransfer,
  CardPushTransferCreateParams,
  CardPushTransferListParams,
  CardPushTransfers,
  CardPushTransfersPage,
} from './resources/card-push-transfers';
import {
  CardToken,
  CardTokenCapabilities,
  CardTokenListParams,
  CardTokens,
  CardTokensPage,
} from './resources/card-tokens';
import {
  CardValidation,
  CardValidationCreateParams,
  CardValidationListParams,
  CardValidations,
  CardValidationsPage,
} from './resources/card-validations';
import {
  Card,
  CardCreateDetailsIframeParams,
  CardCreateParams,
  CardDetails,
  CardIframeURL,
  CardListParams,
  CardUpdateParams,
  CardUpdatePinParams,
  Cards,
  CardsPage,
} from './resources/cards';
import {
  CheckDeposit,
  CheckDepositCreateParams,
  CheckDepositListParams,
  CheckDeposits,
  CheckDepositsPage,
} from './resources/check-deposits';
import {
  CheckTransfer,
  CheckTransferCreateParams,
  CheckTransferListParams,
  CheckTransferStopPaymentParams,
  CheckTransfers,
  CheckTransfersPage,
} from './resources/check-transfers';
import {
  DeclinedTransaction,
  DeclinedTransactionListParams,
  DeclinedTransactions,
  DeclinedTransactionsPage,
} from './resources/declined-transactions';
import {
  DigitalCardProfile,
  DigitalCardProfileCloneParams,
  DigitalCardProfileCreateParams,
  DigitalCardProfileListParams,
  DigitalCardProfiles,
  DigitalCardProfilesPage,
} from './resources/digital-card-profiles';
import {
  DigitalWalletToken,
  DigitalWalletTokenListParams,
  DigitalWalletTokens,
  DigitalWalletTokensPage,
} from './resources/digital-wallet-tokens';
import {
  Entities,
  EntitiesPage,
  Entity,
  EntityArchiveBeneficialOwnerParams,
  EntityConfirmParams,
  EntityCreateBeneficialOwnerParams,
  EntityCreateParams,
  EntityListParams,
  EntityUpdateAddressParams,
  EntityUpdateBeneficialOwnerAddressParams,
  EntityUpdateIndustryCodeParams,
  EntityUpdateParams,
} from './resources/entities';
import {
  EventSubscription,
  EventSubscriptionCreateParams,
  EventSubscriptionListParams,
  EventSubscriptionUpdateParams,
  EventSubscriptions,
  EventSubscriptionsPage,
} from './resources/event-subscriptions';
import { Event, EventListParams, Events, EventsPage, UnwrapWebhookEvent } from './resources/events';
import { Export, ExportCreateParams, ExportListParams, Exports, ExportsPage } from './resources/exports';
import {
  ExternalAccount,
  ExternalAccountCreateParams,
  ExternalAccountListParams,
  ExternalAccountUpdateParams,
  ExternalAccounts,
  ExternalAccountsPage,
} from './resources/external-accounts';
import {
  FednowTransfer,
  FednowTransferCreateParams,
  FednowTransferListParams,
  FednowTransfers,
  FednowTransfersPage,
} from './resources/fednow-transfers';
import { FileLink, FileLinkCreateParams, FileLinks } from './resources/file-links';
import { File, FileCreateParams, FileListParams, Files, FilesPage } from './resources/files';
import { Group, Groups } from './resources/groups';
import {
  InboundACHTransfer,
  InboundACHTransferCreateNotificationOfChangeParams,
  InboundACHTransferDeclineParams,
  InboundACHTransferListParams,
  InboundACHTransferTransferReturnParams,
  InboundACHTransfers,
  InboundACHTransfersPage,
} from './resources/inbound-ach-transfers';
import {
  InboundCheckDeposit,
  InboundCheckDepositListParams,
  InboundCheckDepositReturnParams,
  InboundCheckDeposits,
  InboundCheckDepositsPage,
} from './resources/inbound-check-deposits';
import {
  InboundFednowTransfer,
  InboundFednowTransferListParams,
  InboundFednowTransfers,
  InboundFednowTransfersPage,
} from './resources/inbound-fednow-transfers';
import {
  InboundMailItem,
  InboundMailItemActionParams,
  InboundMailItemListParams,
  InboundMailItems,
  InboundMailItemsPage,
} from './resources/inbound-mail-items';
import {
  InboundRealTimePaymentsTransfer,
  InboundRealTimePaymentsTransferListParams,
  InboundRealTimePaymentsTransfers,
  InboundRealTimePaymentsTransfersPage,
} from './resources/inbound-real-time-payments-transfers';
import {
  InboundWireDrawdownRequest,
  InboundWireDrawdownRequestListParams,
  InboundWireDrawdownRequests,
  InboundWireDrawdownRequestsPage,
} from './resources/inbound-wire-drawdown-requests';
import {
  InboundWireTransfer,
  InboundWireTransferListParams,
  InboundWireTransferReverseParams,
  InboundWireTransfers,
  InboundWireTransfersPage,
} from './resources/inbound-wire-transfers';
import {
  IntrafiAccountEnrollment,
  IntrafiAccountEnrollmentCreateParams,
  IntrafiAccountEnrollmentListParams,
  IntrafiAccountEnrollments,
  IntrafiAccountEnrollmentsPage,
} from './resources/intrafi-account-enrollments';
import { IntrafiBalance, IntrafiBalances } from './resources/intrafi-balances';
import {
  IntrafiExclusion,
  IntrafiExclusionCreateParams,
  IntrafiExclusionListParams,
  IntrafiExclusions,
  IntrafiExclusionsPage,
} from './resources/intrafi-exclusions';
import {
  Lockbox,
  LockboxCreateParams,
  LockboxListParams,
  LockboxUpdateParams,
  Lockboxes,
  LockboxesPage,
} from './resources/lockboxes';
import {
  OAuthApplication,
  OAuthApplicationListParams,
  OAuthApplications,
  OAuthApplicationsPage,
} from './resources/oauth-applications';
import {
  OAuthConnection,
  OAuthConnectionListParams,
  OAuthConnections,
  OAuthConnectionsPage,
} from './resources/oauth-connections';
import { OAuthToken, OAuthTokenCreateParams, OAuthTokens } from './resources/oauth-tokens';
import {
  PendingTransaction,
  PendingTransactionCreateParams,
  PendingTransactionListParams,
  PendingTransactions,
  PendingTransactionsPage,
} from './resources/pending-transactions';
import {
  PhysicalCardProfile,
  PhysicalCardProfileCloneParams,
  PhysicalCardProfileCreateParams,
  PhysicalCardProfileListParams,
  PhysicalCardProfiles,
  PhysicalCardProfilesPage,
} from './resources/physical-card-profiles';
import {
  PhysicalCard,
  PhysicalCardCreateParams,
  PhysicalCardListParams,
  PhysicalCardUpdateParams,
  PhysicalCards,
  PhysicalCardsPage,
} from './resources/physical-cards';
import { Program, ProgramListParams, Programs, ProgramsPage } from './resources/programs';
import {
  RealTimeDecision,
  RealTimeDecisionActionParams,
  RealTimeDecisions,
} from './resources/real-time-decisions';
import {
  RealTimePaymentsTransfer,
  RealTimePaymentsTransferCreateParams,
  RealTimePaymentsTransferListParams,
  RealTimePaymentsTransfers,
  RealTimePaymentsTransfersPage,
} from './resources/real-time-payments-transfers';
import {
  RoutingNumberListParams,
  RoutingNumberListResponse,
  RoutingNumberListResponsesPage,
  RoutingNumbers,
} from './resources/routing-numbers';
import {
  EntitySupplementalDocument,
  EntitySupplementalDocumentsPage,
  SupplementalDocumentCreateParams,
  SupplementalDocumentListParams,
  SupplementalDocuments,
} from './resources/supplemental-documents';
import {
  SwiftTransfer,
  SwiftTransferCreateParams,
  SwiftTransferListParams,
  SwiftTransfers,
  SwiftTransfersPage,
} from './resources/swift-transfers';
import { Transaction, TransactionListParams, Transactions, TransactionsPage } from './resources/transactions';
import {
  WireDrawdownRequest,
  WireDrawdownRequestCreateParams,
  WireDrawdownRequestListParams,
  WireDrawdownRequests,
  WireDrawdownRequestsPage,
} from './resources/wire-drawdown-requests';
import {
  WireTransfer,
  WireTransferCreateParams,
  WireTransferListParams,
  WireTransfers,
  WireTransfersPage,
} from './resources/wire-transfers';
import { Simulations } from './resources/simulations/simulations';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

const environments = {
  production: 'https://api.increase.com',
  sandbox: 'https://sandbox.increase.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['INCREASE_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['INCREASE_WEBHOOK_SECRET'].
   */
  webhookSecret?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.increase.com`
   * - `sandbox` corresponds to `https://sandbox.increase.com`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['INCREASE_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['INCREASE_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Increase API.
 */
export class Increase {
  apiKey: string;
  webhookSecret: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Increase API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['INCREASE_API_KEY'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['INCREASE_WEBHOOK_SECRET'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['INCREASE_BASE_URL'] ?? https://api.increase.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('INCREASE_BASE_URL'),
    apiKey = readEnv('INCREASE_API_KEY'),
    webhookSecret = readEnv('INCREASE_WEBHOOK_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.IncreaseError(
        "The INCREASE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Increase client with an apiKey option, like new Increase({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      webhookSecret,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.IncreaseError(
        'Ambiguous URL; The `baseURL` option (or INCREASE_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    this.baseURL = options.baseURL || environments[options.environment || 'production'];
    this.timeout = options.timeout ?? Increase.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('INCREASE_LOG'), "process.env['INCREASE_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.apiKey = apiKey;
    this.webhookSecret = webhookSecret;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      environment: options.environment ? options.environment : undefined,
      baseURL: options.environment ? undefined : this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      webhookSecret: this.webhookSecret,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { allowDots: true, arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Increase, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Increase = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static IncreaseError = Errors.IncreaseError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static RateLimitedError = Errors.RateLimitedError;
  static InvalidAPIKeyError = Errors.InvalidAPIKeyError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static ObjectNotFoundError = Errors.ObjectNotFoundError;
  static PrivateFeatureError = Errors.PrivateFeatureError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static InvalidOperationError = Errors.InvalidOperationError;
  static MalformedRequestError = Errors.MalformedRequestError;
  static APIMethodNotFoundError = Errors.APIMethodNotFoundError;
  static InvalidParametersError = Errors.InvalidParametersError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;
  static EnvironmentMismatchError = Errors.EnvironmentMismatchError;
  static InsufficientPermissionsError = Errors.InsufficientPermissionsError;
  static IdempotencyKeyAlreadyUsedError = Errors.IdempotencyKeyAlreadyUsedError;

  static toFile = Uploads.toFile;

  accounts: API.Accounts = new API.Accounts(this);
  accountNumbers: API.AccountNumbers = new API.AccountNumbers(this);
  accountTransfers: API.AccountTransfers = new API.AccountTransfers(this);
  cards: API.Cards = new API.Cards(this);
  cardPayments: API.CardPayments = new API.CardPayments(this);
  cardPurchaseSupplements: API.CardPurchaseSupplements = new API.CardPurchaseSupplements(this);
  cardDisputes: API.CardDisputes = new API.CardDisputes(this);
  physicalCards: API.PhysicalCards = new API.PhysicalCards(this);
  digitalCardProfiles: API.DigitalCardProfiles = new API.DigitalCardProfiles(this);
  physicalCardProfiles: API.PhysicalCardProfiles = new API.PhysicalCardProfiles(this);
  digitalWalletTokens: API.DigitalWalletTokens = new API.DigitalWalletTokens(this);
  transactions: API.Transactions = new API.Transactions(this);
  pendingTransactions: API.PendingTransactions = new API.PendingTransactions(this);
  declinedTransactions: API.DeclinedTransactions = new API.DeclinedTransactions(this);
  achTransfers: API.ACHTransfers = new API.ACHTransfers(this);
  achPrenotifications: API.ACHPrenotifications = new API.ACHPrenotifications(this);
  inboundACHTransfers: API.InboundACHTransfers = new API.InboundACHTransfers(this);
  wireTransfers: API.WireTransfers = new API.WireTransfers(this);
  inboundWireTransfers: API.InboundWireTransfers = new API.InboundWireTransfers(this);
  wireDrawdownRequests: API.WireDrawdownRequests = new API.WireDrawdownRequests(this);
  inboundWireDrawdownRequests: API.InboundWireDrawdownRequests = new API.InboundWireDrawdownRequests(this);
  checkTransfers: API.CheckTransfers = new API.CheckTransfers(this);
  inboundCheckDeposits: API.InboundCheckDeposits = new API.InboundCheckDeposits(this);
  realTimePaymentsTransfers: API.RealTimePaymentsTransfers = new API.RealTimePaymentsTransfers(this);
  inboundRealTimePaymentsTransfers: API.InboundRealTimePaymentsTransfers =
    new API.InboundRealTimePaymentsTransfers(this);
  fednowTransfers: API.FednowTransfers = new API.FednowTransfers(this);
  inboundFednowTransfers: API.InboundFednowTransfers = new API.InboundFednowTransfers(this);
  swiftTransfers: API.SwiftTransfers = new API.SwiftTransfers(this);
  checkDeposits: API.CheckDeposits = new API.CheckDeposits(this);
  lockboxes: API.Lockboxes = new API.Lockboxes(this);
  inboundMailItems: API.InboundMailItems = new API.InboundMailItems(this);
  routingNumbers: API.RoutingNumbers = new API.RoutingNumbers(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  entities: API.Entities = new API.Entities(this);
  supplementalDocuments: API.SupplementalDocuments = new API.SupplementalDocuments(this);
  programs: API.Programs = new API.Programs(this);
  accountStatements: API.AccountStatements = new API.AccountStatements(this);
  files: API.Files = new API.Files(this);
  fileLinks: API.FileLinks = new API.FileLinks(this);
  exports: API.Exports = new API.Exports(this);
  events: API.Events = new API.Events(this);
  eventSubscriptions: API.EventSubscriptions = new API.EventSubscriptions(this);
  realTimeDecisions: API.RealTimeDecisions = new API.RealTimeDecisions(this);
  bookkeepingAccounts: API.BookkeepingAccounts = new API.BookkeepingAccounts(this);
  bookkeepingEntrySets: API.BookkeepingEntrySets = new API.BookkeepingEntrySets(this);
  bookkeepingEntries: API.BookkeepingEntries = new API.BookkeepingEntries(this);
  groups: API.Groups = new API.Groups(this);
  oauthApplications: API.OAuthApplications = new API.OAuthApplications(this);
  oauthConnections: API.OAuthConnections = new API.OAuthConnections(this);
  oauthTokens: API.OAuthTokens = new API.OAuthTokens(this);
  intrafiAccountEnrollments: API.IntrafiAccountEnrollments = new API.IntrafiAccountEnrollments(this);
  intrafiBalances: API.IntrafiBalances = new API.IntrafiBalances(this);
  intrafiExclusions: API.IntrafiExclusions = new API.IntrafiExclusions(this);
  cardTokens: API.CardTokens = new API.CardTokens(this);
  cardPushTransfers: API.CardPushTransfers = new API.CardPushTransfers(this);
  cardValidations: API.CardValidations = new API.CardValidations(this);
  simulations: API.Simulations = new API.Simulations(this);
}

Increase.Accounts = Accounts;
Increase.AccountNumbers = AccountNumbers;
Increase.AccountTransfers = AccountTransfers;
Increase.Cards = Cards;
Increase.CardPayments = CardPayments;
Increase.CardPurchaseSupplements = CardPurchaseSupplements;
Increase.CardDisputes = CardDisputes;
Increase.PhysicalCards = PhysicalCards;
Increase.DigitalCardProfiles = DigitalCardProfiles;
Increase.PhysicalCardProfiles = PhysicalCardProfiles;
Increase.DigitalWalletTokens = DigitalWalletTokens;
Increase.Transactions = Transactions;
Increase.PendingTransactions = PendingTransactions;
Increase.DeclinedTransactions = DeclinedTransactions;
Increase.ACHTransfers = ACHTransfers;
Increase.ACHPrenotifications = ACHPrenotifications;
Increase.InboundACHTransfers = InboundACHTransfers;
Increase.WireTransfers = WireTransfers;
Increase.InboundWireTransfers = InboundWireTransfers;
Increase.WireDrawdownRequests = WireDrawdownRequests;
Increase.InboundWireDrawdownRequests = InboundWireDrawdownRequests;
Increase.CheckTransfers = CheckTransfers;
Increase.InboundCheckDeposits = InboundCheckDeposits;
Increase.RealTimePaymentsTransfers = RealTimePaymentsTransfers;
Increase.InboundRealTimePaymentsTransfers = InboundRealTimePaymentsTransfers;
Increase.FednowTransfers = FednowTransfers;
Increase.InboundFednowTransfers = InboundFednowTransfers;
Increase.SwiftTransfers = SwiftTransfers;
Increase.CheckDeposits = CheckDeposits;
Increase.Lockboxes = Lockboxes;
Increase.InboundMailItems = InboundMailItems;
Increase.RoutingNumbers = RoutingNumbers;
Increase.ExternalAccounts = ExternalAccounts;
Increase.Entities = Entities;
Increase.SupplementalDocuments = SupplementalDocuments;
Increase.Programs = Programs;
Increase.AccountStatements = AccountStatements;
Increase.Files = Files;
Increase.FileLinks = FileLinks;
Increase.Exports = Exports;
Increase.Events = Events;
Increase.EventSubscriptions = EventSubscriptions;
Increase.RealTimeDecisions = RealTimeDecisions;
Increase.BookkeepingAccounts = BookkeepingAccounts;
Increase.BookkeepingEntrySets = BookkeepingEntrySets;
Increase.BookkeepingEntries = BookkeepingEntries;
Increase.Groups = Groups;
Increase.OAuthApplications = OAuthApplications;
Increase.OAuthConnections = OAuthConnections;
Increase.OAuthTokens = OAuthTokens;
Increase.IntrafiAccountEnrollments = IntrafiAccountEnrollments;
Increase.IntrafiBalances = IntrafiBalances;
Increase.IntrafiExclusions = IntrafiExclusions;
Increase.CardTokens = CardTokens;
Increase.CardPushTransfers = CardPushTransfers;
Increase.CardValidations = CardValidations;
Increase.Simulations = Simulations;

export declare namespace Increase {
  export type RequestOptions = Opts.RequestOptions;

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export {
    Accounts as Accounts,
    type Account as Account,
    type BalanceLookup as BalanceLookup,
    type AccountsPage as AccountsPage,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountBalanceParams as AccountBalanceParams,
  };

  export {
    AccountNumbers as AccountNumbers,
    type AccountNumber as AccountNumber,
    type AccountNumbersPage as AccountNumbersPage,
    type AccountNumberCreateParams as AccountNumberCreateParams,
    type AccountNumberUpdateParams as AccountNumberUpdateParams,
    type AccountNumberListParams as AccountNumberListParams,
  };

  export {
    AccountTransfers as AccountTransfers,
    type AccountTransfer as AccountTransfer,
    type AccountTransfersPage as AccountTransfersPage,
    type AccountTransferCreateParams as AccountTransferCreateParams,
    type AccountTransferListParams as AccountTransferListParams,
  };

  export {
    Cards as Cards,
    type Card as Card,
    type CardDetails as CardDetails,
    type CardIframeURL as CardIframeURL,
    type CardsPage as CardsPage,
    type CardCreateParams as CardCreateParams,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
    type CardCreateDetailsIframeParams as CardCreateDetailsIframeParams,
    type CardUpdatePinParams as CardUpdatePinParams,
  };

  export {
    CardPayments as CardPayments,
    type CardPayment as CardPayment,
    type CardPaymentsPage as CardPaymentsPage,
    type CardPaymentListParams as CardPaymentListParams,
  };

  export {
    CardPurchaseSupplements as CardPurchaseSupplements,
    type CardPurchaseSupplement as CardPurchaseSupplement,
    type CardPurchaseSupplementsPage as CardPurchaseSupplementsPage,
    type CardPurchaseSupplementListParams as CardPurchaseSupplementListParams,
  };

  export {
    CardDisputes as CardDisputes,
    type CardDispute as CardDispute,
    type CardDisputesPage as CardDisputesPage,
    type CardDisputeCreateParams as CardDisputeCreateParams,
    type CardDisputeListParams as CardDisputeListParams,
    type CardDisputeSubmitUserSubmissionParams as CardDisputeSubmitUserSubmissionParams,
    type CardDisputeWithdrawParams as CardDisputeWithdrawParams,
  };

  export {
    PhysicalCards as PhysicalCards,
    type PhysicalCard as PhysicalCard,
    type PhysicalCardsPage as PhysicalCardsPage,
    type PhysicalCardCreateParams as PhysicalCardCreateParams,
    type PhysicalCardUpdateParams as PhysicalCardUpdateParams,
    type PhysicalCardListParams as PhysicalCardListParams,
  };

  export {
    DigitalCardProfiles as DigitalCardProfiles,
    type DigitalCardProfile as DigitalCardProfile,
    type DigitalCardProfilesPage as DigitalCardProfilesPage,
    type DigitalCardProfileCreateParams as DigitalCardProfileCreateParams,
    type DigitalCardProfileListParams as DigitalCardProfileListParams,
    type DigitalCardProfileCloneParams as DigitalCardProfileCloneParams,
  };

  export {
    PhysicalCardProfiles as PhysicalCardProfiles,
    type PhysicalCardProfile as PhysicalCardProfile,
    type PhysicalCardProfilesPage as PhysicalCardProfilesPage,
    type PhysicalCardProfileCreateParams as PhysicalCardProfileCreateParams,
    type PhysicalCardProfileListParams as PhysicalCardProfileListParams,
    type PhysicalCardProfileCloneParams as PhysicalCardProfileCloneParams,
  };

  export {
    DigitalWalletTokens as DigitalWalletTokens,
    type DigitalWalletToken as DigitalWalletToken,
    type DigitalWalletTokensPage as DigitalWalletTokensPage,
    type DigitalWalletTokenListParams as DigitalWalletTokenListParams,
  };

  export {
    Transactions as Transactions,
    type Transaction as Transaction,
    type TransactionsPage as TransactionsPage,
    type TransactionListParams as TransactionListParams,
  };

  export {
    PendingTransactions as PendingTransactions,
    type PendingTransaction as PendingTransaction,
    type PendingTransactionsPage as PendingTransactionsPage,
    type PendingTransactionCreateParams as PendingTransactionCreateParams,
    type PendingTransactionListParams as PendingTransactionListParams,
  };

  export {
    DeclinedTransactions as DeclinedTransactions,
    type DeclinedTransaction as DeclinedTransaction,
    type DeclinedTransactionsPage as DeclinedTransactionsPage,
    type DeclinedTransactionListParams as DeclinedTransactionListParams,
  };

  export {
    ACHTransfers as ACHTransfers,
    type ACHTransfer as ACHTransfer,
    type ACHTransfersPage as ACHTransfersPage,
    type ACHTransferCreateParams as ACHTransferCreateParams,
    type ACHTransferListParams as ACHTransferListParams,
  };

  export {
    ACHPrenotifications as ACHPrenotifications,
    type ACHPrenotification as ACHPrenotification,
    type ACHPrenotificationsPage as ACHPrenotificationsPage,
    type ACHPrenotificationCreateParams as ACHPrenotificationCreateParams,
    type ACHPrenotificationListParams as ACHPrenotificationListParams,
  };

  export {
    InboundACHTransfers as InboundACHTransfers,
    type InboundACHTransfer as InboundACHTransfer,
    type InboundACHTransfersPage as InboundACHTransfersPage,
    type InboundACHTransferListParams as InboundACHTransferListParams,
    type InboundACHTransferCreateNotificationOfChangeParams as InboundACHTransferCreateNotificationOfChangeParams,
    type InboundACHTransferDeclineParams as InboundACHTransferDeclineParams,
    type InboundACHTransferTransferReturnParams as InboundACHTransferTransferReturnParams,
  };

  export {
    WireTransfers as WireTransfers,
    type WireTransfer as WireTransfer,
    type WireTransfersPage as WireTransfersPage,
    type WireTransferCreateParams as WireTransferCreateParams,
    type WireTransferListParams as WireTransferListParams,
  };

  export {
    InboundWireTransfers as InboundWireTransfers,
    type InboundWireTransfer as InboundWireTransfer,
    type InboundWireTransfersPage as InboundWireTransfersPage,
    type InboundWireTransferListParams as InboundWireTransferListParams,
    type InboundWireTransferReverseParams as InboundWireTransferReverseParams,
  };

  export {
    WireDrawdownRequests as WireDrawdownRequests,
    type WireDrawdownRequest as WireDrawdownRequest,
    type WireDrawdownRequestsPage as WireDrawdownRequestsPage,
    type WireDrawdownRequestCreateParams as WireDrawdownRequestCreateParams,
    type WireDrawdownRequestListParams as WireDrawdownRequestListParams,
  };

  export {
    InboundWireDrawdownRequests as InboundWireDrawdownRequests,
    type InboundWireDrawdownRequest as InboundWireDrawdownRequest,
    type InboundWireDrawdownRequestsPage as InboundWireDrawdownRequestsPage,
    type InboundWireDrawdownRequestListParams as InboundWireDrawdownRequestListParams,
  };

  export {
    CheckTransfers as CheckTransfers,
    type CheckTransfer as CheckTransfer,
    type CheckTransfersPage as CheckTransfersPage,
    type CheckTransferCreateParams as CheckTransferCreateParams,
    type CheckTransferListParams as CheckTransferListParams,
    type CheckTransferStopPaymentParams as CheckTransferStopPaymentParams,
  };

  export {
    InboundCheckDeposits as InboundCheckDeposits,
    type InboundCheckDeposit as InboundCheckDeposit,
    type InboundCheckDepositsPage as InboundCheckDepositsPage,
    type InboundCheckDepositListParams as InboundCheckDepositListParams,
    type InboundCheckDepositReturnParams as InboundCheckDepositReturnParams,
  };

  export {
    RealTimePaymentsTransfers as RealTimePaymentsTransfers,
    type RealTimePaymentsTransfer as RealTimePaymentsTransfer,
    type RealTimePaymentsTransfersPage as RealTimePaymentsTransfersPage,
    type RealTimePaymentsTransferCreateParams as RealTimePaymentsTransferCreateParams,
    type RealTimePaymentsTransferListParams as RealTimePaymentsTransferListParams,
  };

  export {
    InboundRealTimePaymentsTransfers as InboundRealTimePaymentsTransfers,
    type InboundRealTimePaymentsTransfer as InboundRealTimePaymentsTransfer,
    type InboundRealTimePaymentsTransfersPage as InboundRealTimePaymentsTransfersPage,
    type InboundRealTimePaymentsTransferListParams as InboundRealTimePaymentsTransferListParams,
  };

  export {
    FednowTransfers as FednowTransfers,
    type FednowTransfer as FednowTransfer,
    type FednowTransfersPage as FednowTransfersPage,
    type FednowTransferCreateParams as FednowTransferCreateParams,
    type FednowTransferListParams as FednowTransferListParams,
  };

  export {
    InboundFednowTransfers as InboundFednowTransfers,
    type InboundFednowTransfer as InboundFednowTransfer,
    type InboundFednowTransfersPage as InboundFednowTransfersPage,
    type InboundFednowTransferListParams as InboundFednowTransferListParams,
  };

  export {
    SwiftTransfers as SwiftTransfers,
    type SwiftTransfer as SwiftTransfer,
    type SwiftTransfersPage as SwiftTransfersPage,
    type SwiftTransferCreateParams as SwiftTransferCreateParams,
    type SwiftTransferListParams as SwiftTransferListParams,
  };

  export {
    CheckDeposits as CheckDeposits,
    type CheckDeposit as CheckDeposit,
    type CheckDepositsPage as CheckDepositsPage,
    type CheckDepositCreateParams as CheckDepositCreateParams,
    type CheckDepositListParams as CheckDepositListParams,
  };

  export {
    Lockboxes as Lockboxes,
    type Lockbox as Lockbox,
    type LockboxesPage as LockboxesPage,
    type LockboxCreateParams as LockboxCreateParams,
    type LockboxUpdateParams as LockboxUpdateParams,
    type LockboxListParams as LockboxListParams,
  };

  export {
    InboundMailItems as InboundMailItems,
    type InboundMailItem as InboundMailItem,
    type InboundMailItemsPage as InboundMailItemsPage,
    type InboundMailItemListParams as InboundMailItemListParams,
    type InboundMailItemActionParams as InboundMailItemActionParams,
  };

  export {
    RoutingNumbers as RoutingNumbers,
    type RoutingNumberListResponse as RoutingNumberListResponse,
    type RoutingNumberListResponsesPage as RoutingNumberListResponsesPage,
    type RoutingNumberListParams as RoutingNumberListParams,
  };

  export {
    ExternalAccounts as ExternalAccounts,
    type ExternalAccount as ExternalAccount,
    type ExternalAccountsPage as ExternalAccountsPage,
    type ExternalAccountCreateParams as ExternalAccountCreateParams,
    type ExternalAccountUpdateParams as ExternalAccountUpdateParams,
    type ExternalAccountListParams as ExternalAccountListParams,
  };

  export {
    Entities as Entities,
    type Entity as Entity,
    type EntitiesPage as EntitiesPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityArchiveBeneficialOwnerParams as EntityArchiveBeneficialOwnerParams,
    type EntityConfirmParams as EntityConfirmParams,
    type EntityCreateBeneficialOwnerParams as EntityCreateBeneficialOwnerParams,
    type EntityUpdateAddressParams as EntityUpdateAddressParams,
    type EntityUpdateBeneficialOwnerAddressParams as EntityUpdateBeneficialOwnerAddressParams,
    type EntityUpdateIndustryCodeParams as EntityUpdateIndustryCodeParams,
  };

  export {
    SupplementalDocuments as SupplementalDocuments,
    type EntitySupplementalDocument as EntitySupplementalDocument,
    type EntitySupplementalDocumentsPage as EntitySupplementalDocumentsPage,
    type SupplementalDocumentCreateParams as SupplementalDocumentCreateParams,
    type SupplementalDocumentListParams as SupplementalDocumentListParams,
  };

  export {
    Programs as Programs,
    type Program as Program,
    type ProgramsPage as ProgramsPage,
    type ProgramListParams as ProgramListParams,
  };

  export {
    AccountStatements as AccountStatements,
    type AccountStatement as AccountStatement,
    type AccountStatementsPage as AccountStatementsPage,
    type AccountStatementListParams as AccountStatementListParams,
  };

  export {
    Files as Files,
    type File as File,
    type FilesPage as FilesPage,
    type FileCreateParams as FileCreateParams,
    type FileListParams as FileListParams,
  };

  export {
    FileLinks as FileLinks,
    type FileLink as FileLink,
    type FileLinkCreateParams as FileLinkCreateParams,
  };

  export {
    Exports as Exports,
    type Export as Export,
    type ExportsPage as ExportsPage,
    type ExportCreateParams as ExportCreateParams,
    type ExportListParams as ExportListParams,
  };

  export {
    Events as Events,
    type Event as Event,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
    type EventsPage as EventsPage,
    type EventListParams as EventListParams,
  };

  export {
    EventSubscriptions as EventSubscriptions,
    type EventSubscription as EventSubscription,
    type EventSubscriptionsPage as EventSubscriptionsPage,
    type EventSubscriptionCreateParams as EventSubscriptionCreateParams,
    type EventSubscriptionUpdateParams as EventSubscriptionUpdateParams,
    type EventSubscriptionListParams as EventSubscriptionListParams,
  };

  export {
    RealTimeDecisions as RealTimeDecisions,
    type RealTimeDecision as RealTimeDecision,
    type RealTimeDecisionActionParams as RealTimeDecisionActionParams,
  };

  export {
    BookkeepingAccounts as BookkeepingAccounts,
    type BookkeepingAccount as BookkeepingAccount,
    type BookkeepingBalanceLookup as BookkeepingBalanceLookup,
    type BookkeepingAccountsPage as BookkeepingAccountsPage,
    type BookkeepingAccountCreateParams as BookkeepingAccountCreateParams,
    type BookkeepingAccountUpdateParams as BookkeepingAccountUpdateParams,
    type BookkeepingAccountListParams as BookkeepingAccountListParams,
    type BookkeepingAccountBalanceParams as BookkeepingAccountBalanceParams,
  };

  export {
    BookkeepingEntrySets as BookkeepingEntrySets,
    type BookkeepingEntrySet as BookkeepingEntrySet,
    type BookkeepingEntrySetsPage as BookkeepingEntrySetsPage,
    type BookkeepingEntrySetCreateParams as BookkeepingEntrySetCreateParams,
    type BookkeepingEntrySetListParams as BookkeepingEntrySetListParams,
  };

  export {
    BookkeepingEntries as BookkeepingEntries,
    type BookkeepingEntry as BookkeepingEntry,
    type BookkeepingEntriesPage as BookkeepingEntriesPage,
    type BookkeepingEntryListParams as BookkeepingEntryListParams,
  };

  export { Groups as Groups, type Group as Group };

  export {
    OAuthApplications as OAuthApplications,
    type OAuthApplication as OAuthApplication,
    type OAuthApplicationsPage as OAuthApplicationsPage,
    type OAuthApplicationListParams as OAuthApplicationListParams,
  };

  export {
    OAuthConnections as OAuthConnections,
    type OAuthConnection as OAuthConnection,
    type OAuthConnectionsPage as OAuthConnectionsPage,
    type OAuthConnectionListParams as OAuthConnectionListParams,
  };

  export {
    OAuthTokens as OAuthTokens,
    type OAuthToken as OAuthToken,
    type OAuthTokenCreateParams as OAuthTokenCreateParams,
  };

  export {
    IntrafiAccountEnrollments as IntrafiAccountEnrollments,
    type IntrafiAccountEnrollment as IntrafiAccountEnrollment,
    type IntrafiAccountEnrollmentsPage as IntrafiAccountEnrollmentsPage,
    type IntrafiAccountEnrollmentCreateParams as IntrafiAccountEnrollmentCreateParams,
    type IntrafiAccountEnrollmentListParams as IntrafiAccountEnrollmentListParams,
  };

  export { IntrafiBalances as IntrafiBalances, type IntrafiBalance as IntrafiBalance };

  export {
    IntrafiExclusions as IntrafiExclusions,
    type IntrafiExclusion as IntrafiExclusion,
    type IntrafiExclusionsPage as IntrafiExclusionsPage,
    type IntrafiExclusionCreateParams as IntrafiExclusionCreateParams,
    type IntrafiExclusionListParams as IntrafiExclusionListParams,
  };

  export {
    CardTokens as CardTokens,
    type CardToken as CardToken,
    type CardTokenCapabilities as CardTokenCapabilities,
    type CardTokensPage as CardTokensPage,
    type CardTokenListParams as CardTokenListParams,
  };

  export {
    CardPushTransfers as CardPushTransfers,
    type CardPushTransfer as CardPushTransfer,
    type CardPushTransfersPage as CardPushTransfersPage,
    type CardPushTransferCreateParams as CardPushTransferCreateParams,
    type CardPushTransferListParams as CardPushTransferListParams,
  };

  export {
    CardValidations as CardValidations,
    type CardValidation as CardValidation,
    type CardValidationsPage as CardValidationsPage,
    type CardValidationCreateParams as CardValidationCreateParams,
    type CardValidationListParams as CardValidationListParams,
  };

  export { Simulations as Simulations };
}
