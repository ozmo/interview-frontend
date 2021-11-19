import 'regenerator-runtime/runtime'

export default class Autocomplete {
  constructor(rootEl, url, id, options = {}) {
    this.rootEl = rootEl;
	this.url = url;
	this.id = id;
    this.options = {
      numOfResults: 10,
      data: [],
      ...options,
    };

    this.init();
  }

  /**
   * Given an array and a query, return a filtered array based on the query.
   */
  getResults(query, data) {
    if (!query) return [];

    // Filter for matching strings
    return data.filter((item) => {
      return item.text.toLowerCase().includes(query.toLowerCase());
    });
  }

  async onQueryChange(query) {
	let results;
	  
    // Get data for the dropdown
	if (query.length > 0) {
		await this.fetchData(query).then((data)=> {
			this.results = data;
		});
	} else {
		this.results = [];
	}
	
    this.updateDropdown(this.results);
  }
  
  async fetchData (query) {
	  return fetch(this.url + query + "&per_page=" + this.options.numOfResults)
		.then((resp) => resp.json())
		.then(function(data) {
			let items = data.items
			return items.map(item => ({
				text: item[Object.keys(item)[0]],
				value: item[Object.keys(item)[1]],
				}));
		})
		.catch(function(error) {
			console.log(error);
		});
  }

  updateDropdown(results) {
    this.listEl.innerHTML = '';
    this.listEl.appendChild(this.createResultsEl(results));
  }

  createResultsEl(results) {
    const fragment = document.createDocumentFragment();
    results.forEach((result, i) => {
      const el = document.createElement('li');
      el.classList.add('result');
      el.textContent = result.text;
	  el.setAttribute('tabindex', i);

      // Pass the value to the onSelect callback
      el.addEventListener('click', () => {
        const { onSelect } = this.options;
        if (typeof onSelect === 'function') onSelect(result.value);
      });
	  
	  el.addEventListener('keypress', (e) => {
		if(e.keyCode === 13) {  
			const { onSelect } = this.options;
			if (typeof onSelect === 'function') onSelect(result.value);
		}
      });


      fragment.appendChild(el);
    });
    return fragment;
  }
  
 scrollList() {
  var list = document.getElementById(this.id + "list");
  var first = list.firstChild;
  var input = document.getElementById(this.id);
  document.onkeydown = function(e) {
	switch (e.keyCode) {
	  case 38: //up
		if (document.activeElement == first) {
		  break;
		}
		else {
			document.activeElement.previousSibling.focus();
		}
		break;
	  case 40: //down
		if (document.activeElement == input) { 
			first.focus();
		}
		else {
			document.activeElement.nextSibling.focus();
		}
	  break;
	}
  }
}

  createQueryInputEl() {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'search');
    inputEl.setAttribute('name', 'query');
	inputEl.setAttribute('id', this.id);
    inputEl.setAttribute('autocomplete', 'off');

    inputEl.addEventListener('input',
      event => this.onQueryChange(event.target.value));
	inputEl.addEventListener('keydown', this.scrollList);
    return inputEl;
  }

  init() {
    // Build query input
    this.inputEl = this.createQueryInputEl();
    this.rootEl.appendChild(this.inputEl)

    // Build results dropdown
    this.listEl = document.createElement('ul');
    this.listEl.classList.add('results');
	this.listEl.setAttribute('id', this.id + "list");
    this.rootEl.appendChild(this.listEl);
  }
}
