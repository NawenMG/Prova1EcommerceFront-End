import { AppState } from "./app.state";

// 🔹 Sicurezza
import { AuthEffects } from "./securityStore/storeJWT+Sessioni/auth.effects";
import { OAuthEffects } from "./securityStore/storeOAuth2/oauth.effects";

// 🔹 GraphQL
import { CategorieEffects as CategorieEffectsGraphQL } from "./graphql/categoriaRel/categoriaRelGraphQL.effects";
import { OrderEffects } from "./graphql/orderCas/orderCasGraphQL.effects";
import { TransizioniEffects as TransizioniEffectsGraphQL } from "./graphql/transizioneCas/transizioneCasGraphQL.effects";
import { ProdottiEffects as ProdottiEffectsGraphQL } from "./graphql/prodottoRel/prodottoRelGraphQL.effects";
import { RecensioniEffects as RecensioniEffectsGraphQL } from "./graphql/recensioneMon/recensioneMonGraphQL.effects";
import { ResiEffects as ResiEffectsGraphQL } from "./graphql/resoRel/resoRelGraphQL.effects";
import { SalesMonitoringEffects as SalesMonitoringEffectsGraphQL } from "./graphql/salesMonitoringTS/salesMonitoringTSGraphQL.effects";
import { SchedeProdottiEffects as SchedeProdottiEffectsGraphQL } from "./graphql/schedaProdottoMon/schedaProdottoMonGraphQL.effects";
import { SegnalazioniEffects as SegnalazioniEffectsGraphQL } from "./graphql/segnalazioneCas/segnalazioneCasGraphQL.effects";
import { ServerResponseEffects as ServerResponseEffectsGraphQL } from "./graphql/serverResponseTS/serverResponseTSGraphQL.effects";
import { TrafficAnalysisEffects as TrafficAnalysisEffectsGraphQL } from "./graphql/trafficAnalysisTS/trafficAnalysisTSGraphQL.effects";
import { UserAnalysisEffects as UserAnalysisEffectsGraphQL } from "./graphql/userAnalysisTS/userAnalysisTSGraphQL.effects";

// 🔹 REST
import { CarrelloEffects } from "./rest/carrelloAraService/carrelloAraRest.effects";
import { CategorieEffects as CategorieEffectsRest } from "./rest/categoriaRelService/categoriaRelRest.effects";
import { CronologiaEffects } from "./rest/cronologiaAraService/cronologiaAraRest.effects";
import { GraphDBEffects } from "./rest/graphNeoService/graphNeoRest.effects";
import { OrdiniEffects } from "./rest/orderCasService/orderCasRest.effects";
import { TransizioniEffects as TransizioniEffectsRest } from "./rest/transizioneCasService/transizioneCasRest.effects";
import { ProdottiEffects as ProdottiEffectsRest } from "./rest/prodottoRelService/prodottoRelRest.effects";
import { RecensioniEffects as RecensioniEffectsRest } from "./rest/recensioneMonService/recensioneMonRest.effects";
import { ResiEffects as ResiEffectsRest } from "./rest/resoRelService/resoRelRest.effects";
import { SalesMonitoringEffects as SalesMonitoringEffectsRest } from "./rest/salesMonitoringService/salesMonitoringTSRest.effects";
import { SchedeProdottiEffects as SchedeProdottiEffectsRest } from "./rest/schedaProdottoMonService/schedaProdottoMonRest.effects";
import { SegnalazioniEffects as SegnalazioniEffectsRest } from "./rest/segnalazioneCasService/segnalazioneCasRest.effects";
import { ServerResponseEffects as ServerResponseEffectsRest } from "./rest/serverResponseTSService/serverResponseTSRest.effects";
import { SettingSiteEffects } from "./rest/settingSiteAraService/settingSiteAraRest.effects";
import { TrafficAnalysisEffects as TrafficAnalysisEffectsRest } from "./rest/trafficAnalysisTSService/trafficAnalysisTSRest.effects";
import { UserAnalysisEffects as UserAnalysisEffectsRest } from "./rest/userAnalysisService/userAnalysisTSRest.effects";
import { WishListEffects } from "./rest/wishListAraService/wishListAraRest.effects";

// 🔹 SOAP
import { UserEffects } from "./soap/userRelRest/userRelRest.effects";

// 🔹 WebSocket
import { ChatEffects } from "./webSocket/chatFireService/chatFireWS.effects";
import { NotificationsEffects } from "./webSocket/notificationsFireService/notificationsFireWS.effects";
import { ShippingStatusEffects } from "./webSocket/shippingStatusFireService/shippingStatusFireWS.effects";

// 🔹 Combinazione di tutti gli Effects per NgRx
export const appEffects = [
  // 🔹 Sicurezza
  AuthEffects,
  OAuthEffects,

  // 🔹 GraphQL
  CategorieEffectsGraphQL,
  OrderEffects,
  TransizioniEffectsGraphQL,
  ProdottiEffectsGraphQL,
  RecensioniEffectsGraphQL,
  ResiEffectsGraphQL,
  SalesMonitoringEffectsGraphQL,
  SchedeProdottiEffectsGraphQL,
  SegnalazioniEffectsGraphQL,
  ServerResponseEffectsGraphQL,
  TrafficAnalysisEffectsGraphQL,
  UserAnalysisEffectsGraphQL,

  // 🔹 REST
  CarrelloEffects,
  CategorieEffectsRest,
  CronologiaEffects,
  GraphDBEffects,
  OrdiniEffects,
  TransizioniEffectsRest,
  ProdottiEffectsRest,
  RecensioniEffectsRest,
  ResiEffectsRest,
  SalesMonitoringEffectsRest,
  SchedeProdottiEffectsRest,
  SegnalazioniEffectsRest,
  ServerResponseEffectsRest,
  SettingSiteEffects,
  TrafficAnalysisEffectsRest,
  UserAnalysisEffectsRest,
  WishListEffects,

  // 🔹 SOAP
  UserEffects,

  // 🔹 WebSocket
  ChatEffects,
  NotificationsEffects,
  ShippingStatusEffects
];
