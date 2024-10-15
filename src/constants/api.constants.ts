// src/app/constants/api.constants.ts

export const ApiConstants = {
    API_URL: 'http://localhost:8080',
    // Endpoint Partenaires
    PARTNERS_BASE_URL: '/api/partenaires',
      
    // Endpoint Artistes
    ARTIST_BASE_URL: '/api/artistes',
     
    // Endpoint Scènes
    SCENES_BASE_URL: '/api/scenes',
     
    // Endpoint Programmes
    PROGRAMS_BASE_URL: '/api/programmes',
  
    // Endpoint Utilisateur
    USER_BASE_URL: '/api/utilisateurs',
    REGISTER_URL: '/inscription',
    LOGOUT_URL: '/deconnexion',
    LOGIN_URL: '/connexion',
    PERSONAL_SPACE_URL: '/compte',
    CONTACT_FORM_URL : '/contact-question',
    CONTACT_RESPONSE_URL : "/contact-reponse/{id}",
    
    //Endpoint Map
    MAP_BASE_URL : '/api/carte',

    //Endpoint Markers
    MARKER_BASE_URL : '/api/marqueurs',
   

    //Endpoint Favorite
    FAVORITE_BASE_URL:'/api/favoris',
    FAVORITE_CREATE_URL : '/{artistId}',
    FAVORITE_GET_ALL_URL : '',
    FAVORITE_DELETE_URL : '/{artistId}',

     //Endpoint Mention légale
    LEGAL_NOTICE_BASE_URL : '/api/mentions-legales',
   
  };
  





