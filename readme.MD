Angular 2 Fundamentals Course
========================
This is the getting started package for the Pluralsight course on Angular 2 Fundamentals found here: http://app.pluralsight.com/courses/angular-fundamentals

**Course Status**

The course is currently up-to-date.


Getting Started
---------------
Be sure you're running the recommended node version, which is 6.3.0+: `node --version`

Follow along with the course linked above. To start the server:

```
npm install
npm start

In tsconfig.json // Chnaged to ES6 Version instead of es5
```

//********************Creating First Component 'Hello World'************************// 
---- Start Creating Event Component by Importing Angular Core, 
-- Define App.module.ts, import Event-app Component and Browser Component for Bootstrapping the Application
-- In Main.ts, Import App.modules and platformBrowserDynamic to Initite Bootstrapping of App.module 

                &&&&&&&------------------- Run Application with----- &&&&&&&&&&&&&&&&&
                -- npm run tsc --- To Generate JS  
                -- npm run server  ----,  and Stop 
                -- npm start -----to view by activating file Watcher

                ---Hide JS Files , File->prefereces->

//********************Creating First Data Bind Component************************// 

-- Create folder -- events
-- Events-list.component.ts , and Import angular Core package, Create Component with selector as Event-list
-- use backticks -- String Literals added to JS of ES6 specifications, ability to allow multi line strings
-- Call Selector of Events List into Events App Module Template
-- Register all Components into app.module.ts declaration, and Import that
-- Insert Data into Events-list.component export class clalled "json : event"
-- Add HTML file for Events-list.component.html and then add TenplateUrl to 'ts'

//********************Creating Child Component to pass data into Child communicate '@Input' ************************// -- Organizing Components
-- Perpose of this is to break down page with multiple child Components to Communicate among them Self
-- Create New TS event.thumbnail.component and Import Component and Input from Angular Core, in Export class decorate Input with event Datatype
-- Import Selector of event-thumbnail into event-list.component, // /**passing Vendor Component Event with data into event thumbnail Selector*/
-- Declare new thumbnail Component into App.module.ts
--@Input Paremeters are used when constructing child components in order to pass data 

//********************Creating Child Component to pass data into Parent communicate '@Output' ************************//
-- parent can receive something when an event ex: click occurs in child Component
--Demo //// Add a Button on Thumbnail -- add a click function handleClickMe(), in export class write function to it
-- Output Decorator is Added to Child "event-thumbnail" to let parent know the event "EventEmitter" angular decorator 
-- We can pass only single value with eventEmitter
--On Parent list.component add the property called with the (eventEmitter in child)-- to Selector of thumbnail
-- On Export class of parent call the function defined on selector 
   handleEventClicked (data){
        console.log('received:', data)
        }
//****************create new component and html file for Navbar *******//

//***********Basics of Angular 2 find Binding Template Syntax****///////
-- Interpolatioin {{test:name}}   , Can use expression with in interpolation but with custion 
--Property Binding- img [src] = img.src , -- Event binding ()paranthesies, added at button 
-- Expression Restriction : Assignment =,+=,++ etc  -- new keyword,-- Expression changing with ';', Global Name space
-- Expression Recomandation : No side Effects, fast, simple, Idempotent each time u call exression returns same expression
<!----Event Binding and Statements : <button (click)="dosomthing()"></button>-->
--Statement Restriction : Assignment +=,++ etc  -- new keyword, --Global Name space ans should be simple
-- *ngFor for repeating , add at thumbnail selector *ngFor = "let events of event" 

-- SAFE NAVIGATOR {{event?.name}} 
 // Purpose of this is there might be a change you don't find value of name for one of list this throws an error on html page to avoid this where are uisng safe navigator // next change whould be hide if no value is found

 -- ngIf Directive // this hides the value if it doesn't exists
 // *ngIf ="event?.name" to the div

 --ngSwitch Directive // this shows the value based on the condition defined 
 --ngClass binding //addes multiples class in express with condition
 --ngStyle binding similar to ngClass but we write a coondition ? boolean

 <!--<div [ngClass]="{green:event?.time===8:00AM, bold:event?.time===8:00AM}"
          [ngSwitch]="event?:time"
          Time: {{event?.time}}>

 <span *ngSwitchCase="'8:00AM'">Early Start </span>
 
 <span *ngSwitchCase="'12:00PM'">Noon Start </span>
 
 <span *ngSwitchCase="'6:00PM'">Evening Start </span>

 </div>-->

//********************Services using dependency Injection @Injectable() ************************//
--Import Injectable from angular core
--Decorate @Injetable to the method which return EVENTS
--Create a Const with name EVENTS = [all events]
-- Injectable is helpful to  a service which has constructor with HTTP Service
-- Register the crated service TS into app.Module.ts as a Provide and import it
--now inject this EventService into event.list-component by Importing and constructing a private
                        <!--constructor(private eventService:EventService){
                         events :any[]
                        constructor(private eventService:EventService){
                       
                        }-->  eventService is a short hand for  " this.eventService = eventservice"
                        <!--ngOnInit(){
                                this.events = this.eventService.getEvents()
                        }-->
//********************3rd party Services Injecting into application eg: Alert Services with Toaster************************//
npm install toastr --save
Call toastr js and Css on index
-- create Folder called COMMON, toastr.service.ts
-- Import Injectable service, Decorate export class with Injectable
-- Methods to call alerts types
-- Import this alert service into event-list.component export class of constructor
-- Import toaster service in app.Module

//********************Adding Multiple pages To APP ************************//

--for Event details create a Folder with Event-details.componentts and Html
--create getEvent(id:number) method by passing Id of the Event which returns EVENTS.find(event=>event.id===id) in Event Service
-- Create a Construtor in eventDetail with this.event 
--Create Route.ts and import all the components including Routes Decorator
-- Set path with url name and Component associated
--Import Route into App.Module
<!----Add a base Tag on Index.html : <base href="/">-->
-- Remove eventList Selector because we are handling in Router.ts and Add <Router-oulet> to events-app.component


//********************Routing Event Details by ID ************************//
-- Import "ActivatedRoute" in event-details.component
--in Constructor add a private name route to ActivatedRoute service of Angular
-- and on ngOnInit replace (1) with +this.routes.snapshot.params['id'] where Id Matches with id in path defined in routes.ts

//********************Routing Event Details by ID on Click over Events ************************//

-- Add a [routerLink]="['/events',event.id]"  Property of Angular to Thumbnail
-- to Navbar add link [routerLink]="['/events']" to Anchor Tagto all events

//********************Navigate with in Page************************//
to create new event page create-event.component.ts
-- import it to app.module
-- define path in routes.ts /events/new
-- Add Active Routing event at navbar for Create New event link
--Import  Router service to Create New event and Inject in Contructor to export
-- add Cancel method on the cancel button "this.router.navigate['/events]"

//********************Guarding Against Route Activation************************//
-- create error Folder, 404.component.ts
-- Import error Component into app.module
-- Add path for 404 Component
-- Add a event Route Activator service in event-details folder
-- In Activator Service import CanActivate, and Injectable
-- Implement CanActivate in export, logic for canActivate method by passing event Service to verify ID
-- Import Route Activator Service in App.module, and routes.ts 
-- canActivate:[EventRouteActivator] to path of event :/id


//********************Guarding Against Route Can De-Activation************************//
// Purpose is to show an warning meassage incase user is cancel a form without saving
// Add a CanDeactivate property to path -- this can be added in to ways either by service or by function
-- add CanDeavtivateEvent function to that propery at the route path "canDeactivateCreateEvent" register as a provider in               app.module as a longHand Approach
-- {provide:'canDeactivateCreateEvent',useValue:checkDirtyState} in checkDirtyState function return false
-- In Create Event component add a property iSdirty and use that in app.module  checkDirtyState function


//********************Pre Loading Data Show a message while Data is loading(Spinner)************************//
-- Create a new file under App events-list-resolver.service and in Resolve we implement an Asynchronous call like AJAX and return data resived from observables with map "events=>events" same as "events {return events}"
-- to Pass the data as an RX/JX Observable in event Service
-- OBSERVABLE are like Steams of Data
-- Add Resolve handlers to path of Event and import reslover service
-- Inject route in event-list component 


//**************************Activate Links on Navbar on Active*********//

--  routerLinkActive="active" [routerLinkActiveOptions]='{exact:true}'   to Navlink and active class CSS on navbar Component 


//**************************Lazy Loading Feature Module*********//
// Purpose is to load different module for user 
-- create a folder -- User, Create a profile-component for user profile
-- Create a user.Module and Import , NgModule, Common Module, Router Module
-- For Feature Module we will import Common Module this is Key Difference for App module and Feature (or) Lazyload Module
-- Create new User.routes in User Folder Create a Path called profile wire this "profile path" in route.ts and add RouteLink over
//********************Barrel for Import Statement belon to APP**********//
-- create a index.ts on  events folder, add Export from 
add this mail index of events is added to app.module and routes

//**************************Using Models for Type Safty*********//
//Purspose is to Avoid an data type issues while debuging 
-- Create a new interface or Class in Shared Folder , export in shared->index
-- Import that interface in Service, event-list, event-thumbnail, event-detail
-- Change in export class of each component event any [] to event IEvent
-- in event-service add IEvent to Observables

//**************Advantages to Model Based or Reactive forms from Template based forms************//
-- Cross Field Validation for form we end up with lot of logic in html
-- We can't use unit test for form for all validation logic if we go with template based form
--Allows you to build logic inside component  

//**************Login Form************//
-- Create Component and Template with Login Form, import angular form in user.module, create a model for data fields
-- add a Service auth.Service and import in app.module since we are using it accross module
-- add a route to navbar by importing the auth service, by creating constructor 
-- for Form Validation adding invalid, disabled mouseover properties.
//**Create Event Form, Session From with template based and Reactive forms**//

//***Create Session and Add Session List to Event Details using Selector**///

/***----------Passing Data out of Child Component to Parent Component-----------***//
-- Adding Session to its parent Event
-- Add Session Toggle Mode, Which hides session list and enables create session form
-- Add new Instances Output,EventEmitter, then on OnInit , @Output()  on create -session.component
    saveNewSession = new EventEmitter()
    on save session button  call --
     this.saveNewSession.emit(session)
     call this method on to event detail create-session tag , (saveNewSession)="saveNewSession($event)
-- import ISession model on to event detail since, each session has to bind to its own event
-- Method to save Session in Current Event and update in Event Details Array, 
-- Update method is written in Event Service   
-- to Cancel New Session : add output emitter on create session.ts , then call that emitter to with a method to cancelSesion button function
-- then define the createNewSession binded to html of eventdetails tag of create session
-- then on event details component method is called for cancelNewSession disbale to false 

/***----------Content Projection Collapsble Sessions with Title display on Collpase-----------***//---------------------------------------Joe
-- Create a New Component collapsable-well.component 
-- Add Tiltle and then Bind Body Content of Well using ng-content and add visbility condition in ngIf
---**********Multiple Content Projection*-------
-- Import that into App.module
-- using ng-content with attributes 

/***----------Pipes to format Data----------***//

currency:'USD':true  -- Display dollar amount with icon
date:'shortDate' -- Date fomat can use 'y/m/d'

--- to Create a custome pipe , define a component in shared and import that in app.module 
-- pipe for Duration 


/***----------Filtering and Sorting----------***//


/***----------Toaster Service----------***//
-- Opaque Token : create a token to DI register to use
-- In app module " declare let toastr : Toaster "
-- and inject the Provider Service to use'TOASTR_Token' with "Toastr" Interface
-- import toastr service in profile component 
9290874927
//*****Search Box Functionality to Search Sessions***///

--define ngSubmit to Form tag of serach with Serach Term as a parameter of Text field
- Import Event Service and Isession on to NavbarComponent  
searchTerm: string ="";
foundSessions:ISession[];

and method for Search Service
 searchSessions(searchTerm){
        this.eventService.searchSessions(searchTerm).subscribe(sessions => this.foundSessions = sessions)
    }
    

#   A n g u l a r 2 _ I n t r o  
 