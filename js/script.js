'use strict'

// Image object array:

const images = [
  {
    id: 1,
    title: 'La Sagrada Familia',
    description: 'Gothic style Roman Catholic minor basilica in Barcelona, Spain.',
    width: 600,
    height: 400,
    pathURL: 'images/danil-sorokin-lasagradafamilia-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Sagrada_Fam%C3%ADlia',
    credit: 'Danil Sorokin',
    creditURL:'https://unsplash.com/@dvnil?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 2,
    title: 'Milad Tower',
    description: 'A multi-purpose tower in Tehran, Iran. It is the sixth-tallest tower in the world.',
    width: 600,
    height: 400,
    pathURL: 'images/khashayar-kouchpeydeh-miladtower-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Milad_Tower',
    credit: 'Khashayar Kouchpeydeh',
    creditURL:'https://unsplash.com/@kouchpeydeh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 3,
    title: 'Santa Fe',
    description: 'A building in Santa Fe in the style of Pueblo Revival architecture.',
    width: 600,
    height: 400,
    pathURL: 'images/gabriel-tovar-santafe-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Pueblo_Revival_architecture',
    credit: 'Gabriel Tovar',
    creditURL:'https://unsplash.com/@gabrielrana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 4,
    title: 'Belém Tower',
    description: 'A defensive fort in Lisbon, Portugal on the bank of the Tagus river.',
    width: 600,
    height: 400,
    pathURL: 'images/leticia-pelissari-lisboa-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Bel%C3%A9m_Tower',
    credit: 'Leticia Pelissari',
    creditURL:'https://unsplash.com/@leticiapelissari?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 5,
    title: 'Preveil Beach',
    description: 'A remote beach on the south coast of the Greek island of Crete.',
    width: 600,
    height: 400,
    pathURL: 'images/error-420-prevelibeach-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Preveli',
    credit: 'ERROR 420',
    creditURL:'https://unsplash.com/@error420?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 6,
    title: 'Al-Masjid an-Nabawi',
    description: "Known as The Prophet's mosque. Built by the last islamic prophet Muhammad in the city of Medina, Saudi Arabia.",
    width: 600,
    height: 400,
    pathURL: 'images/said-alamri-medina-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Al-Masjid_an-Nabawi',
    credit: 'Said Alamri',
    creditURL:'https://unsplash.com/@saidalamri63?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 7,
    title: 'Flatiron Building',
    description: 'Located in Manhattan, New York. One of the tallest buildings in the city when it was built in 1902.',
    width: 600,
    height: 400,
    pathURL: 'images/jason-briscoe-sfze-flatiron-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flatiron_Building',
    credit: 'Jason Briscoe',
    creditURL:'https://unsplash.com/@jsnbrsc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 8,
    title: 'Balat',
    description: 'A down-to-earth neighborhood in Istanbul, Turkey. Known for cobbled streets and colorful houses.',
    width: 600,
    height: 400,
    pathURL: 'images/volkan-vardar-balat-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Balat,_Fatih',
    credit: 'Volkan Vardar',
    creditURL:'https://unsplash.com/@vardarious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
  {
    id: 9,
    title: 'Marrakech',
    description: 'An upward view of buildings in Marrakech, Morocco. Buildings in the style of Moroccan architecture.',
    width: 600,
    height: 400,
    pathURL: 'images/sofia-lyu-marrakech-unsplash.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Marrakesh',
    credit: 'Sofia Lyu',
    creditURL:'https://unsplash.com/@sofialyu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  },
];

// container variable to append to:

const container = document.querySelector('.gallery-container');

// gallery generating forEach loop. The loop cycles through the images array and creates a figure element with the appropriate nested elements for each object.

images.forEach( function(image){

// a figure element is created and nested within the container

  const figure = document.createElement('figure');
  container.appendChild(figure);

// a title element is created and nested within a figure element

  const title = document.createElement('h2');
  title.innerHTML = image.title;
  figure.appendChild(title);

// an anchor element is created for the image link and nested within a figure element  

  const imgLink = document.createElement('a');
  imgLink.href = image.linkURL;
  figure.appendChild(imgLink);

// a img element is created, its src, alt, width, and height are set and then it is nested within an anchor element

  const img = document.createElement('img')
  img.src = image.pathURL;
  img.alt = image.description;
  img.width = image.width;
  img.height = image.height;
  imgLink.appendChild(img);

// a figcaption element is created, its inner text is set, and it is nested within a figure element


  const figCaption = document.createElement('figcaption')
  figCaption.innerHTML = `${image.description} Photo by `;
  figure.appendChild(figCaption);

// an anchor element is created for the credit link and nested within a figcaption

  const creditLink = document.createElement('a');
  creditLink.href = image.creditURL;
  creditLink.innerHTML = image.credit;
  figCaption.appendChild(creditLink);

});
