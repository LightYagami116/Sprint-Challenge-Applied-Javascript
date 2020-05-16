// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const data = [
  {
    date: 'March 28, 2019',
    title: 'Lambda Times',
    temp: '98°'
  }
];

const headers = document.querySelector('.header-container');
//loops over data in array
data.forEach((content) => {headers.appendChild(Header(content.date,content.title, content.temp))});
//console.log('content from forEach loop', headers);

function Header(date,title,temp) {
  //create elements
  const header= document.createElement('div');
  const headerDate = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const headerTemp = document.createElement('span');

  //append the children to the elements
  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);

  //add classes to elements
  header.classList.add('header');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  //add content
  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;


  return header;
}
