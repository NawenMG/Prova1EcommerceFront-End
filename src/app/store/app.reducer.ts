import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";

// 🔹 Sicurezza
import { authReducer } from "./securityStore/storeJWT+Sessioni/auth.reducer";
import { oauthReducer } from "./securityStore/storeOAuth2/oauth.reducer";

// 🔹 GraphQL
import { categorieReducer as categorieGraphQLReducer } from "./graphql/categoriaRel/categoriaRelGraphQL.reducer";
import { orderReducer } from "./graphql/orderCas/orderCasGraphQL.reducer";
import { transizioniReducer as transizioniGraphQLReducer } from "./graphql/transizioneCas/transizioneCasGraphQL.reducer";
import { resiReducer } from "./graphql/resoRel/resoRelGraphQL.reducer";
import { prodottiReducer as prodottiGraphQLReducer } from "./graphql/prodottoRel/prodottoRelGraphQL.reducer";
import { recensioniReducer as recensioniGraphQLReducer } from "./graphql/recensioneMon/recensioneMonGraphQL.reducer";
import { salesMonitoringReducer as salesMonitoringGraphQLReducer } from "./graphql/salesMonitoringTS/salesMonitoringTSGraphQL.reducer";
import { schedeProdottiReducer as schedeProdottiGraphQLReducer } from "./graphql/schedaProdottoMon/schedaProdottoMonGraphQL.reducer";
import { segnalazioniReducer as segnalazioniGraphQLReducer } from "./graphql/segnalazioneCas/segnalazioneCasGraphQL.reducer";
import { serverResponseReducer as serverResponseGraphQLReducer } from "./graphql/serverResponseTS/serverResponseTSGraphQL.reducer";
import { trafficAnalysisReducer as trafficAnalysisGraphQLReducer } from "./graphql/trafficAnalysisTS/trafficAnalysisTSGraphQL.reducer";
import { userAnalysisReducer as userAnalysisGraphQLReducer } from "./graphql/userAnalysisTS/userAnalysisTSGraphQL.reducer";

// 🔹 REST
import { carrelloReducer } from "./rest/carrelloAraService/carrelloAraRest.reducer";
import { categorieReducer as categorieRestReducer } from "./rest/categoriaRelService/categoriaRelRest.reducer";
import { cronologiaReducer } from "./rest/cronologiaAraService/cronologiaAraRest.reducer";
import { graphDBReducer } from "./rest/graphNeoService/graphNeoRest.reducer";
import { ordiniReducer } from "./rest/orderCasService/orderCasRest.reducer";
import { prodottiReducer as prodottiRestReducer } from "./rest/prodottoRelService/prodottoRelRest.reducer";
import { transizioniReducer as transizioniRestReducer } from "./rest/transizioneCasService/transizioneCasRest.reducer";
import { recensioniReducer as recensioniRestReducer } from "./rest/recensioneMonService/recensioneMonRest.reducer";
import { salesMonitoringReducer as salesMonitoringRestReducer } from "./rest/salesMonitoringService/salesMonitoringTSRest.reducer";
import { schedeProdottiReducer as schedeProdottiRestReducer } from "./rest/schedaProdottoMonService/schedaProdottoMonRest.reducer";
import { segnalazioniReducer as segnalazioniRestReducer } from "./rest/segnalazioneCasService/segnalazioneCasRest.reducer";
import { serverResponseReducer as serverResponseRestReducer } from "./rest/serverResponseTSService/serverResponseTSRest.reducer";
import { settingSiteReducer } from "./rest/settingSiteAraService/settingSiteAraRest.reducer";
import { trafficAnalysisReducer as trafficAnalysisRestReducer } from "./rest/trafficAnalysisTSService/trafficAnalysisTSRest.reducer";
import { userAnalysisReducer as userAnalysisRestReducer } from "./rest/userAnalysisService/userAnalysisTSRest.reducer";
import { wishListReducer } from "./rest/wishListAraService/wishListAraRest.reducer";

// 🔹 SOAP
import { userReducer } from "./soap/userRelRest/userRelRest.reducer";

// 🔹 WebSocket
import { chatReducer } from "./webSocket/chatFireService/chatFireWS.reducer";
import { notificationsReducer } from "./webSocket/notificationsFireService/notificationsFireWS.reducer";
import { shippingStatusReducer } from "./webSocket/shippingStatusFireService/shippingStatusFireWS.reducer";

// 🔹 Combinazione dei Reducers in un'unica mappa per NgRx
export const appReducers: ActionReducerMap<AppState> = {
  // 🔹 Sicurezza
  auth: authReducer,
  oauth: oauthReducer,

  // 🔹 GraphQL
  categorieGraphQL: categorieGraphQLReducer,
  ordineGraphQL: orderReducer,
  transizioniGraphQL: transizioniGraphQLReducer,
  resiGraphQL: resiReducer,
  prodottiGraphQL: prodottiGraphQLReducer,
  recensioniGraphQL: recensioniGraphQLReducer,
  salesMonitoringGraphQL: salesMonitoringGraphQLReducer,
  schedeProdottiGraphQL: schedeProdottiGraphQLReducer,
  segnalazioniGraphQL: segnalazioniGraphQLReducer,
  serverResponseGraphQL: serverResponseGraphQLReducer,
  trafficAnalysisGraphQL: trafficAnalysisGraphQLReducer,
  userAnalysisGraphQL: userAnalysisGraphQLReducer,

  // 🔹 REST
  carrello: carrelloReducer,
  categorieRest: categorieRestReducer,
  cronologia: cronologiaReducer,
  graphDB: graphDBReducer,
  ordineRest: ordiniReducer,
  prodottiRest: prodottiRestReducer,
  transizioniRest: transizioniRestReducer,
  recensioniRest: recensioniRestReducer,
  salesMonitoringRest: salesMonitoringRestReducer,
  schedeProdottiRest: schedeProdottiRestReducer,
  segnalazioniRest: segnalazioniRestReducer,
  serverResponseRest: serverResponseRestReducer,
  settingSite: settingSiteReducer,
  trafficAnalysisRest: trafficAnalysisRestReducer,
  userAnalysisRest: userAnalysisRestReducer,
  wishList: wishListReducer,

  // 🔹 SOAP
  userSoap: userReducer,

  // 🔹 WebSocket
  chat: chatReducer,
  notifications: notificationsReducer,
  shippingStatus: shippingStatusReducer,
};
