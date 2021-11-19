/* eslint-disable no-new */
import Autocomplete from './Autocomplete';
import usStates from './us-states';
import './main.css';

// Github Users
new Autocomplete(document.getElementById('gh-user'), "https://api.github.com/search/users?q=", "users",{
  onSelect: (ghUserId) => {
    console.log('selected github user id:', ghUserId);
  },
});

// Github Topics
new Autocomplete(document.getElementById('gh-topic'), "https://api.github.com/search/topics?q=", "topics", {
  onSelect: (ghTopic) => {
    console.log('selected github topic:', ghTopic);
  },
});