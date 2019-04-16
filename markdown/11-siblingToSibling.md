Sibling to Sibling

Parent (App) with two children
Header and Body would thus be siblings:

App
|**_Header
|_**Body

If we want to pass properties from Body to Header,
we would have to use the App as an intermediary / interface.

Use the Parent / Callback Interface to pass props from Body to App
Then use the Props object to pass it from the App to the Header.
