import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
  "realm": "master",
  "url": "https://felicity.iiit.ac.in/auth/",
  "ssl-required": "external",
  "resource": "reactapp",
  "public-client": true,
  "clientId": "reactapp"
});