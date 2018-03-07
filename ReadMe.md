*lib directory is going to be shared by client and server side
*every node will be a web server to begin with
*every server node will serve static and public assets
*public asset will contain react application
*we configure express applicaiton in lib/server.js


Note:
arrays are easier to list records
for finding an element object are a better way
*** sometimes we need a transform layer between an API and React application ***



*Note:
In summary, if an object reference is given as the function is called,
the this value will point to that object. However, if no object is given
(or that reference is null or undefined), the this value will point to
the Global Window Object.

var foo = {
  bar: function(){
    return this;
  }
}

foo.bar(); // the value of 'this' is going to be the foo object as we give a reference
//wait!!

var baz = foo.bar;

baz();// now 'this' is pointing to the global window object

//==============================================================================

//Lexical environment:
function foo(){
  var name = 'peyman';
  function bar(){
    alert(name);
  }
  bar();
}
foo();


//==============================================================================

let and const are block-scoped while var scope is the current execution context
which can be enclosing function or the global context
const means that the identifier can not be changed
let identifier can be changed

                          **********************


Perhaps the most important thing you can learn to be a better coder is
to keep things simple.
In the context of identifiers, that means that a single identifier
should only be used to represent a single concept.

**********************

“A closure is a special kind of object that combines two things: a function,
and the environment in which that function was created. The environment consists
of any local variables that were in-scope at the time that the closure was created.”

**********************


//==============================================================================
-In global code, the environment record is the object environment record.
-For function code, it is the declarative environment record.

//==============================================================================
- apply(this,array);
- call(this,list of parameters);
- bind(this,parameters);
- reduce(); it takes accumolator and current
