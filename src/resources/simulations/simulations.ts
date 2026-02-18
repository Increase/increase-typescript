// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountStatementsAPI from './account-statements';
import { AccountStatementCreateParams, AccountStatements } from './account-statements';
import * as AccountTransfersAPI from './account-transfers';
import { AccountTransfers } from './account-transfers';
import * as ACHTransfersAPI from './ach-transfers';
import {
  ACHTransferCreateNotificationOfChangeParams,
  ACHTransferReturnParams,
  ACHTransferSettleParams,
  ACHTransfers,
} from './ach-transfers';
import * as CardAuthorizationExpirationsAPI from './card-authorization-expirations';
import {
  CardAuthorizationExpirationCreateParams,
  CardAuthorizationExpirations,
} from './card-authorization-expirations';
import * as CardAuthorizationsAPI from './card-authorizations';
import {
  CardAuthorizationCreateParams,
  CardAuthorizationCreateResponse,
  CardAuthorizations,
} from './card-authorizations';
import * as CardBalanceInquiriesAPI from './card-balance-inquiries';
import { CardBalanceInquiries, CardBalanceInquiryCreateParams } from './card-balance-inquiries';
import * as CardDisputesAPI from './card-disputes';
import { CardDisputeActionParams, CardDisputes } from './card-disputes';
import * as CardFuelConfirmationsAPI from './card-fuel-confirmations';
import { CardFuelConfirmationCreateParams, CardFuelConfirmations } from './card-fuel-confirmations';
import * as CardIncrementsAPI from './card-increments';
import { CardIncrementCreateParams, CardIncrements } from './card-increments';
import * as CardRefundsAPI from './card-refunds';
import { CardRefundCreateParams, CardRefunds } from './card-refunds';
import * as CardReversalsAPI from './card-reversals';
import { CardReversalCreateParams, CardReversals } from './card-reversals';
import * as CardSettlementsAPI from './card-settlements';
import { CardSettlementCreateParams, CardSettlements } from './card-settlements';
import * as CardTokensAPI from './card-tokens';
import { CardTokenCreateParams, CardTokens } from './card-tokens';
import * as CheckDepositsAPI from './check-deposits';
import { CheckDepositSubmitParams, CheckDeposits } from './check-deposits';
import * as CheckTransfersAPI from './check-transfers';
import { CheckTransfers } from './check-transfers';
import * as DigitalWalletTokenRequestsAPI from './digital-wallet-token-requests';
import {
  DigitalWalletTokenRequestCreateParams,
  DigitalWalletTokenRequestCreateResponse,
  DigitalWalletTokenRequests,
} from './digital-wallet-token-requests';
import * as ExportsAPI from './exports';
import { ExportCreateParams, Exports } from './exports';
import * as InboundACHTransfersAPI from './inbound-ach-transfers';
import { InboundACHTransferCreateParams, InboundACHTransfers } from './inbound-ach-transfers';
import * as InboundCheckDepositsAPI from './inbound-check-deposits';
import { InboundCheckDepositCreateParams, InboundCheckDeposits } from './inbound-check-deposits';
import * as InboundFednowTransfersAPI from './inbound-fednow-transfers';
import { InboundFednowTransferCreateParams, InboundFednowTransfers } from './inbound-fednow-transfers';
import * as InboundMailItemsAPI from './inbound-mail-items';
import { InboundMailItemCreateParams, InboundMailItems } from './inbound-mail-items';
import * as InboundRealTimePaymentsTransfersAPI from './inbound-real-time-payments-transfers';
import {
  InboundRealTimePaymentsTransferCreateParams,
  InboundRealTimePaymentsTransfers,
} from './inbound-real-time-payments-transfers';
import * as InboundWireDrawdownRequestsAPI from './inbound-wire-drawdown-requests';
import {
  InboundWireDrawdownRequestCreateParams,
  InboundWireDrawdownRequests,
} from './inbound-wire-drawdown-requests';
import * as InboundWireTransfersAPI from './inbound-wire-transfers';
import { InboundWireTransferCreateParams, InboundWireTransfers } from './inbound-wire-transfers';
import * as InterestPaymentsAPI from './interest-payments';
import { InterestPaymentCreateParams, InterestPayments } from './interest-payments';
import * as PendingTransactionsAPI from './pending-transactions';
import { PendingTransactions } from './pending-transactions';
import * as PhysicalCardsAPI from './physical-cards';
import { PhysicalCardAdvanceShipmentParams, PhysicalCardCreateParams, PhysicalCards } from './physical-cards';
import * as ProgramsAPI from './programs';
import { ProgramCreateParams, Programs } from './programs';
import * as RealTimePaymentsTransfersAPI from './real-time-payments-transfers';
import {
  RealTimePaymentsTransferCompleteParams,
  RealTimePaymentsTransfers,
} from './real-time-payments-transfers';
import * as WireDrawdownRequestsAPI from './wire-drawdown-requests';
import { WireDrawdownRequests } from './wire-drawdown-requests';
import * as WireTransfersAPI from './wire-transfers';
import { WireTransfers } from './wire-transfers';

export class Simulations extends APIResource {
  interestPayments: InterestPaymentsAPI.InterestPayments = new InterestPaymentsAPI.InterestPayments(
    this._client,
  );
  accountTransfers: AccountTransfersAPI.AccountTransfers = new AccountTransfersAPI.AccountTransfers(
    this._client,
  );
  cardAuthorizations: CardAuthorizationsAPI.CardAuthorizations = new CardAuthorizationsAPI.CardAuthorizations(
    this._client,
  );
  cardBalanceInquiries: CardBalanceInquiriesAPI.CardBalanceInquiries =
    new CardBalanceInquiriesAPI.CardBalanceInquiries(this._client);
  cardAuthorizationExpirations: CardAuthorizationExpirationsAPI.CardAuthorizationExpirations =
    new CardAuthorizationExpirationsAPI.CardAuthorizationExpirations(this._client);
  cardSettlements: CardSettlementsAPI.CardSettlements = new CardSettlementsAPI.CardSettlements(this._client);
  cardReversals: CardReversalsAPI.CardReversals = new CardReversalsAPI.CardReversals(this._client);
  cardIncrements: CardIncrementsAPI.CardIncrements = new CardIncrementsAPI.CardIncrements(this._client);
  cardFuelConfirmations: CardFuelConfirmationsAPI.CardFuelConfirmations =
    new CardFuelConfirmationsAPI.CardFuelConfirmations(this._client);
  cardRefunds: CardRefundsAPI.CardRefunds = new CardRefundsAPI.CardRefunds(this._client);
  cardDisputes: CardDisputesAPI.CardDisputes = new CardDisputesAPI.CardDisputes(this._client);
  physicalCards: PhysicalCardsAPI.PhysicalCards = new PhysicalCardsAPI.PhysicalCards(this._client);
  digitalWalletTokenRequests: DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests =
    new DigitalWalletTokenRequestsAPI.DigitalWalletTokenRequests(this._client);
  pendingTransactions: PendingTransactionsAPI.PendingTransactions =
    new PendingTransactionsAPI.PendingTransactions(this._client);
  achTransfers: ACHTransfersAPI.ACHTransfers = new ACHTransfersAPI.ACHTransfers(this._client);
  inboundACHTransfers: InboundACHTransfersAPI.InboundACHTransfers =
    new InboundACHTransfersAPI.InboundACHTransfers(this._client);
  wireTransfers: WireTransfersAPI.WireTransfers = new WireTransfersAPI.WireTransfers(this._client);
  inboundWireTransfers: InboundWireTransfersAPI.InboundWireTransfers =
    new InboundWireTransfersAPI.InboundWireTransfers(this._client);
  wireDrawdownRequests: WireDrawdownRequestsAPI.WireDrawdownRequests =
    new WireDrawdownRequestsAPI.WireDrawdownRequests(this._client);
  inboundWireDrawdownRequests: InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests =
    new InboundWireDrawdownRequestsAPI.InboundWireDrawdownRequests(this._client);
  checkTransfers: CheckTransfersAPI.CheckTransfers = new CheckTransfersAPI.CheckTransfers(this._client);
  inboundCheckDeposits: InboundCheckDepositsAPI.InboundCheckDeposits =
    new InboundCheckDepositsAPI.InboundCheckDeposits(this._client);
  realTimePaymentsTransfers: RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers =
    new RealTimePaymentsTransfersAPI.RealTimePaymentsTransfers(this._client);
  inboundRealTimePaymentsTransfers: InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfers =
    new InboundRealTimePaymentsTransfersAPI.InboundRealTimePaymentsTransfers(this._client);
  inboundFednowTransfers: InboundFednowTransfersAPI.InboundFednowTransfers =
    new InboundFednowTransfersAPI.InboundFednowTransfers(this._client);
  checkDeposits: CheckDepositsAPI.CheckDeposits = new CheckDepositsAPI.CheckDeposits(this._client);
  inboundMailItems: InboundMailItemsAPI.InboundMailItems = new InboundMailItemsAPI.InboundMailItems(
    this._client,
  );
  programs: ProgramsAPI.Programs = new ProgramsAPI.Programs(this._client);
  accountStatements: AccountStatementsAPI.AccountStatements = new AccountStatementsAPI.AccountStatements(
    this._client,
  );
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  cardTokens: CardTokensAPI.CardTokens = new CardTokensAPI.CardTokens(this._client);
}

Simulations.InterestPayments = InterestPayments;
Simulations.AccountTransfers = AccountTransfers;
Simulations.CardAuthorizations = CardAuthorizations;
Simulations.CardBalanceInquiries = CardBalanceInquiries;
Simulations.CardAuthorizationExpirations = CardAuthorizationExpirations;
Simulations.CardSettlements = CardSettlements;
Simulations.CardReversals = CardReversals;
Simulations.CardIncrements = CardIncrements;
Simulations.CardFuelConfirmations = CardFuelConfirmations;
Simulations.CardRefunds = CardRefunds;
Simulations.CardDisputes = CardDisputes;
Simulations.PhysicalCards = PhysicalCards;
Simulations.DigitalWalletTokenRequests = DigitalWalletTokenRequests;
Simulations.PendingTransactions = PendingTransactions;
Simulations.ACHTransfers = ACHTransfers;
Simulations.InboundACHTransfers = InboundACHTransfers;
Simulations.WireTransfers = WireTransfers;
Simulations.InboundWireTransfers = InboundWireTransfers;
Simulations.WireDrawdownRequests = WireDrawdownRequests;
Simulations.InboundWireDrawdownRequests = InboundWireDrawdownRequests;
Simulations.CheckTransfers = CheckTransfers;
Simulations.InboundCheckDeposits = InboundCheckDeposits;
Simulations.RealTimePaymentsTransfers = RealTimePaymentsTransfers;
Simulations.InboundRealTimePaymentsTransfers = InboundRealTimePaymentsTransfers;
Simulations.InboundFednowTransfers = InboundFednowTransfers;
Simulations.CheckDeposits = CheckDeposits;
Simulations.InboundMailItems = InboundMailItems;
Simulations.Programs = Programs;
Simulations.AccountStatements = AccountStatements;
Simulations.Exports = Exports;
Simulations.CardTokens = CardTokens;

export declare namespace Simulations {
  export {
    InterestPayments as InterestPayments,
    type InterestPaymentCreateParams as InterestPaymentCreateParams,
  };

  export { AccountTransfers as AccountTransfers };

  export {
    CardAuthorizations as CardAuthorizations,
    type CardAuthorizationCreateResponse as CardAuthorizationCreateResponse,
    type CardAuthorizationCreateParams as CardAuthorizationCreateParams,
  };

  export {
    CardBalanceInquiries as CardBalanceInquiries,
    type CardBalanceInquiryCreateParams as CardBalanceInquiryCreateParams,
  };

  export {
    CardAuthorizationExpirations as CardAuthorizationExpirations,
    type CardAuthorizationExpirationCreateParams as CardAuthorizationExpirationCreateParams,
  };

  export {
    CardSettlements as CardSettlements,
    type CardSettlementCreateParams as CardSettlementCreateParams,
  };

  export { CardReversals as CardReversals, type CardReversalCreateParams as CardReversalCreateParams };

  export { CardIncrements as CardIncrements, type CardIncrementCreateParams as CardIncrementCreateParams };

  export {
    CardFuelConfirmations as CardFuelConfirmations,
    type CardFuelConfirmationCreateParams as CardFuelConfirmationCreateParams,
  };

  export { CardRefunds as CardRefunds, type CardRefundCreateParams as CardRefundCreateParams };

  export { CardDisputes as CardDisputes, type CardDisputeActionParams as CardDisputeActionParams };

  export {
    PhysicalCards as PhysicalCards,
    type PhysicalCardCreateParams as PhysicalCardCreateParams,
    type PhysicalCardAdvanceShipmentParams as PhysicalCardAdvanceShipmentParams,
  };

  export {
    DigitalWalletTokenRequests as DigitalWalletTokenRequests,
    type DigitalWalletTokenRequestCreateResponse as DigitalWalletTokenRequestCreateResponse,
    type DigitalWalletTokenRequestCreateParams as DigitalWalletTokenRequestCreateParams,
  };

  export { PendingTransactions as PendingTransactions };

  export {
    ACHTransfers as ACHTransfers,
    type ACHTransferCreateNotificationOfChangeParams as ACHTransferCreateNotificationOfChangeParams,
    type ACHTransferReturnParams as ACHTransferReturnParams,
    type ACHTransferSettleParams as ACHTransferSettleParams,
  };

  export {
    InboundACHTransfers as InboundACHTransfers,
    type InboundACHTransferCreateParams as InboundACHTransferCreateParams,
  };

  export { WireTransfers as WireTransfers };

  export {
    InboundWireTransfers as InboundWireTransfers,
    type InboundWireTransferCreateParams as InboundWireTransferCreateParams,
  };

  export { WireDrawdownRequests as WireDrawdownRequests };

  export {
    InboundWireDrawdownRequests as InboundWireDrawdownRequests,
    type InboundWireDrawdownRequestCreateParams as InboundWireDrawdownRequestCreateParams,
  };

  export { CheckTransfers as CheckTransfers };

  export {
    InboundCheckDeposits as InboundCheckDeposits,
    type InboundCheckDepositCreateParams as InboundCheckDepositCreateParams,
  };

  export {
    RealTimePaymentsTransfers as RealTimePaymentsTransfers,
    type RealTimePaymentsTransferCompleteParams as RealTimePaymentsTransferCompleteParams,
  };

  export {
    InboundRealTimePaymentsTransfers as InboundRealTimePaymentsTransfers,
    type InboundRealTimePaymentsTransferCreateParams as InboundRealTimePaymentsTransferCreateParams,
  };

  export {
    InboundFednowTransfers as InboundFednowTransfers,
    type InboundFednowTransferCreateParams as InboundFednowTransferCreateParams,
  };

  export { CheckDeposits as CheckDeposits, type CheckDepositSubmitParams as CheckDepositSubmitParams };

  export {
    InboundMailItems as InboundMailItems,
    type InboundMailItemCreateParams as InboundMailItemCreateParams,
  };

  export { Programs as Programs, type ProgramCreateParams as ProgramCreateParams };

  export {
    AccountStatements as AccountStatements,
    type AccountStatementCreateParams as AccountStatementCreateParams,
  };

  export { Exports as Exports, type ExportCreateParams as ExportCreateParams };

  export { CardTokens as CardTokens, type CardTokenCreateParams as CardTokenCreateParams };
}
