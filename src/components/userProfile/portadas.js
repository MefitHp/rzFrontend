export const code = require('../../assets/portadas/code.jpeg');
export const desk = require('../../assets/portadas/desk.jpeg');
export const desk2 = require('../../assets/portadas/desk2.jpeg');
export const idea = require('../../assets/portadas/idea.jpeg');
export const love = require('../../assets/portadas/love.jpeg');
export const otra = require('../../assets/portadas/otra.jpeg');

 export const portadas = [
     code,
     desk,
     desk2,
     idea,
     love,
     otra
 ];

 export const portadasArray = portadas.map( img => {
     return "url(" + img + ")";
 });