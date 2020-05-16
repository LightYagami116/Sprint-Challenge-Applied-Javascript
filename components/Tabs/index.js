// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const contents = document.querySelector('.topics');
//requests data from server
axios.get('https://lambda-times-backend.herokuapp.com/topics')

//after GET request completes run this block of code if successful
.then(response => {
  console.log(response)
  const topicData = response.data.topics
  topicData.forEach((topic) => { contents.append(Tab(topic))
  })
})
//check for any errors and log them to console
.catch(error => { console.log(error); });



//creates funtion that adds content into the individual Tabs
function Tab(topics){
  //create tab element
  const tab = document.createElement('div');
  //adds classes to tabs
  tab.classList.add('tab');
  tab.textContent = topics;

  //returns tab elements so they can be rendered to page
  return tab;
}
