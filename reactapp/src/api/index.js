var baseAPI = "https://felicity.iiit.ac.in/backend";
var eventsBaseAPI = baseAPI + "/events";

export var eventsTechnicalApi = eventsBaseAPI +  "/?type=technical";
export var eventsCulturalApi = eventsBaseAPI + "/?type=cultural";
export var eventsApi = eventsBaseAPI;
export var eventsRegisterApi = eventsBaseAPI + "/register";