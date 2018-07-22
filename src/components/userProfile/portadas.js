export const code = 'http://www.wallpaperbetter.com/wallpaper/513/91/777/cool-technology-code-1080P-wallpaper-middle-size.jpg'
export const desk = 'https://images.unsplash.com/photo-1494249465471-5655b7878482?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=191559dc1cae3f8967d568dfd8a77093&w=1000&q=80'
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