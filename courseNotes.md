# PreReqs
1. Node ... goto install Node
1. angular/cli

## PreInstall
* npm install -g @angular/cli

# New project steps
* ng new udemy
* cd udemy
* npm install --save bootstrap
* Check .angular-cli.json to add        ../node_modules/bootstrap/dist/css/bootstrap.min.css css into styles section

# Start up servers
* ng serve

# Whats happening
Angular injects some js scripts into index.html when it is serverd. These loadup on startup and call
    * main.ts

    This then imports AppModule from app/app.module.ts
    Which then load AppComponent from app.component
    app.component defines app-root element as selector and shows howto render it
    
    Note selector tag can also select based on
    1. Attribute  [app-root]   <div app-root>
    2. css class [.server]   <div class="app-root">
    but not id or pseudo selectors

# Create a component.
* ng g c <component name>  (generate component).

    This will create dir, compoent.ts, compoent.html, componet.css, componet.spec.ts (test), and update app.module.ts to include it

# Data Binding
{{}} string interpolation
class value on screen {{ var}}// can also have literal, or tenery operator {{'hi'}}

# Propty binding []
map value to screen property
screen value to class
e.g. <button [disabled]="!allowNewServer"
    html property disabled will be dispayed depending on boolean value of allowNewServer  varialbe on component class

# Event Binding ()
<button (click)="mymethod"/>  or <input type="text" class="form-control" (input)="mymethod($event)"/>
note for debuging try sending event to console log to see what it is
e.g.
    myMethod(param:any){ 
        this.myvar2=(<HTMLInputElement>event.target).value+"!!"
        console.log(param)}

# 2 way binding
[(ngModel)] =  appParam  # where appParam is a param on the componet that we want tostore the value in
<input type="text" class="form-control" (input)="mymethod($event)"/>

