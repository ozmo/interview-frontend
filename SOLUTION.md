# Solution Docs

<!-- Include documentation, additional setup instructions, notes etc. here -->
To esure multiple instances of the component can be used on the same page, I gave the component an option for a unique id.
I added an eventlistener to the input to allow for the movement with arrow keys. Added a tabindex to get the focus funtion to work.
To allow selection, I added an eventlistener to each list item to listen for the enter key and call the onselection function already provided.
Allowed the url to be a parameter for the component.