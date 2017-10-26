# PreReqs
1.Node ... goto install Node
1.angular cli

## PreInstall

* npm install -g @angular/cli

# New project steps

* ng new udemy
* cd udemy
* npm install --save bootstrap
** Check .angular-cli.json to add ../node_modules/bootstrap/dist/css/bootstrap.min.css css into styles section

#Start up server

* ng serve

#Whats happening

Angular injects some js scripts into index.html when it is serverd. These loadup on startup and call
    * main.ts
    .. This then imports AppModule from app/app.module.ts
    .. Which then load AppComponent from app.component
    ..app.component defines app-root element as selector and shows howto * * * render it
    * Note selector tag can also select based on
    ..Attribute  [app-root]   <div app-root>
    ..css class [.server]   <div class="app-root">
    .. but not id or pseudo selectors

#Createa component.

    * ng g c <component name>  (generate component)
    .. This will create dir, compoent.ts, compoent.html, componet.css, componet.spec.ts (test), and update app.module.ts to include it

