// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { castToError } from '../internal/errors';

export class IncreaseError extends Error {}

export class APIError<
  TStatus extends number | undefined = number | undefined,
  THeaders extends Headers | undefined = Headers | undefined,
  TError extends Object | undefined = Object | undefined,
> extends IncreaseError {
  /** HTTP status for the response that caused the error */
  readonly status: TStatus;
  /** HTTP headers for the response that caused the error */
  readonly headers: THeaders;
  /** JSON body of the response that caused the error */
  readonly error: TError;

  constructor(status: TStatus, error: TError, message: string | undefined, headers: THeaders) {
    super(`${APIError.makeMessage(status, error, message)}`);
    this.status = status;
    this.headers = headers;
    this.error = error;
  }

  private static makeMessage(status: number | undefined, error: any, message: string | undefined) {
    const msg =
      error?.message ?
        typeof error.message === 'string' ?
          error.message
        : JSON.stringify(error.message)
      : error ? JSON.stringify(error)
      : message;

    if (status && msg) {
      return `${status} ${msg}`;
    }
    if (status) {
      return `${status} status code (no body)`;
    }
    if (msg) {
      return msg;
    }
    return '(no status code or body)';
  }

  static generate(
    status: number | undefined,
    errorResponse: Object | undefined,
    message: string | undefined,
    headers: Headers | undefined,
  ): APIError {
    if (!status || !headers) {
      return new APIConnectionError({ message, cause: castToError(errorResponse) });
    }

    const error = errorResponse as Record<string, any>;

    const type = error?.['type'];

    if (type === 'invalid_parameters_error' && status === 400) {
      return new InvalidParametersError(status, error, message, headers);
    }

    if (type === 'malformed_request_error' && status === 400) {
      return new MalformedRequestError(status, error, message, headers);
    }

    if (type === 'invalid_api_key_error' && status === 401) {
      return new InvalidAPIKeyError(status, error, message, headers);
    }

    if (type === 'environment_mismatch_error' && status === 403) {
      return new EnvironmentMismatchError(status, error, message, headers);
    }

    if (type === 'insufficient_permissions_error' && status === 403) {
      return new InsufficientPermissionsError(status, error, message, headers);
    }

    if (type === 'private_feature_error' && status === 403) {
      return new PrivateFeatureError(status, error, message, headers);
    }

    if (type === 'api_method_not_found_error' && status === 404) {
      return new APIMethodNotFoundError(status, error, message, headers);
    }

    if (type === 'object_not_found_error' && status === 404) {
      return new ObjectNotFoundError(status, error, message, headers);
    }

    if (type === 'idempotency_key_already_used_error' && status === 409) {
      return new IdempotencyKeyAlreadyUsedError(status, error, message, headers);
    }

    if (type === 'invalid_operation_error' && status === 409) {
      return new InvalidOperationError(status, error, message, headers);
    }

    if (type === 'rate_limited_error' && status === 429) {
      return new RateLimitedError(status, error, message, headers);
    }

    if (type === 'internal_server_error' && status === 500) {
      return new InternalServerError(status, error, message, headers);
    }

    if (status === 400) {
      return new BadRequestError(status, error, message, headers);
    }

    if (status === 401) {
      return new AuthenticationError(status, error, message, headers);
    }

    if (status === 403) {
      return new PermissionDeniedError(status, error, message, headers);
    }

    if (status === 404) {
      return new NotFoundError(status, error, message, headers);
    }

    if (status === 409) {
      return new ConflictError(status, error, message, headers);
    }

    if (status === 422) {
      return new UnprocessableEntityError(status, error, message, headers);
    }

    if (status === 429) {
      return new RateLimitError(status, error, message, headers);
    }

    return new APIError(status, error, message, headers);
  }
}

export class APIUserAbortError extends APIError<undefined, undefined, undefined> {
  constructor({ message }: { message?: string } = {}) {
    super(undefined, undefined, message || 'Request was aborted.', undefined);
  }
}

export class APIConnectionError extends APIError<undefined, undefined, undefined> {
  constructor({ message, cause }: { message?: string | undefined; cause?: Error | undefined }) {
    super(undefined, undefined, message || 'Connection error.', undefined);
    // in some environments the 'cause' property is already declared
    // @ts-ignore
    if (cause) this.cause = cause;
  }
}

export class APIConnectionTimeoutError extends APIConnectionError {
  constructor({ message }: { message?: string } = {}) {
    super({ message: message ?? 'Request timed out.' });
  }
}

export class BadRequestError extends APIError<400, Headers> {}

export class AuthenticationError extends APIError<401, Headers> {}

export class PermissionDeniedError extends APIError<403, Headers> {}

export class NotFoundError extends APIError<404, Headers> {}

export class ConflictError extends APIError<409, Headers> {}

export class UnprocessableEntityError extends APIError<422, Headers> {}

export class RateLimitError extends APIError<429, Headers> {}

export class InvalidParametersError extends BadRequestError {
  detail: string | null;

  /**
   * All errors related to parsing the request parameters.
   */
  errors: Array<{ [key: string]: unknown }>;

  override status: 400;

  title: string;

  type: 'invalid_parameters_error';

  constructor(status: 400, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.errors = data?.['errors'] ?? [];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class MalformedRequestError extends BadRequestError {
  detail: string | null;

  override status: 400;

  title: string;

  type: 'malformed_request_error';

  constructor(status: 400, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InvalidAPIKeyError extends AuthenticationError {
  detail: string | null;

  /**
   * - `deleted_credential` - deleted_credential
   * - `expired_credential` - expired_credential
   * - `ip_not_allowed` - ip_not_allowed
   * - `no_credential` - no_credential
   * - `no_header` - no_header
   * - `no_api_access` - no_api_access
   * - `wrong_environment` - wrong_environment
   */
  reason:
    | 'deleted_credential'
    | 'expired_credential'
    | 'ip_not_allowed'
    | 'no_credential'
    | 'no_header'
    | 'no_api_access'
    | 'wrong_environment';

  override status: 401;

  title: string;

  type: 'invalid_api_key_error';

  constructor(status: 401, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.reason = data?.['reason'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class EnvironmentMismatchError extends PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'environment_mismatch_error';

  constructor(status: 403, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InsufficientPermissionsError extends PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'insufficient_permissions_error';

  constructor(status: 403, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class PrivateFeatureError extends PermissionDeniedError {
  detail: string | null;

  override status: 403;

  title: string;

  type: 'private_feature_error';

  constructor(status: 403, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class APIMethodNotFoundError extends NotFoundError {
  detail: string | null;

  override status: 404;

  title: string;

  type: 'api_method_not_found_error';

  constructor(status: 404, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class ObjectNotFoundError extends NotFoundError {
  detail: string | null;

  override status: 404;

  title: string;

  type: 'object_not_found_error';

  constructor(status: 404, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class IdempotencyKeyAlreadyUsedError extends ConflictError {
  detail: string | null;

  resource_id: string;

  override status: 409;

  title: string;

  type: 'idempotency_key_already_used_error';

  constructor(status: 409, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.resource_id = data?.['resource_id'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class InvalidOperationError extends ConflictError {
  detail: string | null;

  override status: 409;

  title: string;

  type: 'invalid_operation_error';

  constructor(status: 409, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}

export class RateLimitedError extends RateLimitError {
  detail: string | null;

  override status: 429;

  title: string;

  type: 'rate_limited_error';

  retry_after?: number | null;

  constructor(status: 429, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
    this.retry_after = data?.['retry_after'];
  }
}

export class InternalServerError extends APIError<number, Headers> {
  detail: string | null;

  override status: 500;

  title: string;

  type: 'internal_server_error';

  constructor(status: 500, error: Object, message: string | undefined, headers: Headers) {
    const data = error as Record<string, any>;
    super(status, error, data?.['title'] || message, headers);

    this.detail = data?.['detail'];
    this.status = data?.['status'];
    this.title = data?.['title'];
    this.type = data?.['type'];
  }
}
