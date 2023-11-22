/* global moment:true */
sap.ui.define([], function () {
    "use strict";
    return {
      ambiente: "qas",
      isLocal: false,
      idProyecto: "cap.gestionticketv2",
      urlApiGatewayLocal: "https://portalseidor-ms-gestionticket-base-dev.cfapps.us10-001.hana.ondemand.com/",
      destApiGateway:
        jQuery.sap.getModulePath("cap.gestionticketv2") +
        "/" +
        "GestionTicket_SRV",
      services: {
        //Rol
        obtenerCliente: "/rest/serviceCliente/Cliente",
        //Peps
        obtenerLider: "/rest/serviceLider/Lider",
        //Consultores
        obtenerConsultores: "/rest/serviceConsultor/Consultor",
        //Gestionticket
        obtenerGestionticketXFiltro: "/rest/asignacion/obtenerGestionticketXFiltro",
        registrarAsignacion: "/rest/asignacion/registrarAsignacion",
        eliminarAsignacion: "/rest/asignacion/eliminarAsignacion",
      },
    };
  });
  