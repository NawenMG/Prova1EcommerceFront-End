// 🔹 Sicurezza
import { AuthState } from './securityStore/storeJWT+Sessioni/auth.state';
import { OAuthState } from './securityStore/storeOAuth2/oauth.state';

// 🔹 GraphQL
import { CategorieState } from './graphql/categoriaRel/categoriaRelGraphQL.state';
import { OrderState } from './graphql/orderCas/orderCasGraphQL.state';
import { ProdottiState as ProdottiGraphQLState } from './graphql/prodottoRel/prodottoRelGraphQL.state';
import { RecensioniState as RecensioniGraphQLState } from './graphql/recensioneMon/recensioneMonGraphQL.state';
import { ResiState } from './graphql/resoRel/resoRelGraphQL.state';
import { SalesMonitoringState as SalesMonitoringGraphQLState } from './graphql/salesMonitoringTS/salesMonitoringTSGraphQL.state';
import { SchedeProdottiState as SchedeProdottiGraphQLState } from './graphql/schedaProdottoMon/schedaProdottoMonGraphQL.state';
import { SegnalazioniState as SegnalazioniGraphQLState } from './graphql/segnalazioneCas/segnalazioneCasGraphQL.state';
import { ServerResponseState as ServerResponseGraphQLState } from './graphql/serverResponseTS/serverResponseTSGraphQL.state';
import { TrafficAnalysisState as TrafficAnalysisGraphQLState } from './graphql/trafficAnalysisTS/trafficAnalysisTSGraphQL.state';
import { TransizioniState as TransizioniGraphQLState } from './graphql/transizioneCas/transizioneCasGraphQL.state';
import { UserAnalysisState as UserAnalysisGraphQLState } from './graphql/userAnalysisTS/userAnalysisTSGraphQL.state';

// 🔹 REST
import { OrdiniState } from './rest/orderCasService/orderCasRest.state';
import { CarrelloState } from './rest/carrelloAraService/carrelloAraRest.state';
import { CategorieState as CategorieRestState } from './rest/categoriaRelService/categoriaRelRest.state';
import { CronologiaState } from './rest/cronologiaAraService/cronologiaAraRest.state';
import { GraphDBState } from './rest/graphNeoService/graphNeoRest.state';
import { ProdottiState as ProdottiRestState } from './rest/prodottoRelService/prodottoRelRest.state';
import { RecensioniState as RecensioniRestState } from './rest/recensioneMonService/recensioneMonRest.state';
import { SalesMonitoringState as SalesMonitoringRestState } from './rest/salesMonitoringService/salesMonitoringTSRest.state';
import { SchedeProdottiState as SchedeProdottiRestState } from './rest/schedaProdottoMonService/schedaProdottoMonRest.state';
import { SegnalazioniState as SegnalazioniRestState } from './rest/segnalazioneCasService/segnalazioneCasRest.state';
import { ServerResponseState as ServerResponseRestState } from './rest/serverResponseTSService/serverResponseTSRest.state';
import { TrafficAnalysisState as TrafficAnalysisRestState } from './rest/trafficAnalysisTSService/trafficAnalysisTSRest.state';
import { TransizioniState as TransizioniRestState } from './rest/transizioneCasService/transizioneCasRest.state';
import { UserAnalysisState as UserAnalysisRestState } from './rest/userAnalysisService/userAnalysisTSRest.state';
import { WishListState } from './rest/wishListAraService/wishListAraRest.state';
import { SettingSiteState } from './rest/settingSiteAraService/settingSiteAraRest.state';

// 🔹 SOAP
import { UserState } from './soap/userRelRest/userRelRest.state';

// 🔹 WebSocket
import { ChatState } from './webSocket/chatFireService/chatFireWS.state';
import { NotificationsState } from './webSocket/notificationsFireService/notificationsFireWS.state';
import { ShippingStatusState } from './webSocket/shippingStatusFireService/shippingStatusFireWS.state';

// 🔹 Definizione dello stato globale dell’app
export interface AppState {
  // 🔹 Sicurezza
  auth: AuthState;
  oauth: OAuthState;

  // 🔹 GraphQL
  categorieGraphQL: CategorieState;
  ordineGraphQL: OrderState;
  prodottiGraphQL: ProdottiGraphQLState;
  recensioniGraphQL: RecensioniGraphQLState;
  resiGraphQL: ResiState;
  salesMonitoringGraphQL: SalesMonitoringGraphQLState;
  schedeProdottiGraphQL: SchedeProdottiGraphQLState;
  segnalazioniGraphQL: SegnalazioniGraphQLState;
  serverResponseGraphQL: ServerResponseGraphQLState;
  trafficAnalysisGraphQL: TrafficAnalysisGraphQLState;
  transizioniGraphQL: TransizioniGraphQLState;
  userAnalysisGraphQL: UserAnalysisGraphQLState;

  // 🔹 REST
  ordineRest: OrdiniState;
  carrello: CarrelloState;
  categorieRest: CategorieRestState;
  cronologia: CronologiaState;
  graphDB: GraphDBState;
  prodottiRest: ProdottiRestState;
  recensioniRest: RecensioniRestState;
  salesMonitoringRest: SalesMonitoringRestState;
  schedeProdottiRest: SchedeProdottiRestState;
  segnalazioniRest: SegnalazioniRestState;
  serverResponseRest: ServerResponseRestState;
  trafficAnalysisRest: TrafficAnalysisRestState;
  transizioniRest: TransizioniRestState;
  userAnalysisRest: UserAnalysisRestState;
  wishList: WishListState;
  settingSite: SettingSiteState;

  // 🔹 SOAP
  userSoap: UserState;

  // 🔹 WebSocket
  chat: ChatState;
  notifications: NotificationsState;
  shippingStatus: ShippingStatusState;
}
