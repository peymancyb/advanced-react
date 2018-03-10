<h1>Advanced React</h1>


<h2>React Component Lifecycle</h2>

<h3>Mounting:</h3>
<p> These methods are called when an instance of a component is being created and inserted into the DOM: </p>
*constructor()
<br>
*componentWillMount()
<br>
*render()
<br>
*componentDidMount()
<br>

<h2>Updating:</h2>
<p> An update can cause by changes to props or state. these methods are called when a component being re-render. </p>
*componentWillReceiveProps()
<br>
*shouldComponentUpdate()
<br>
*componentWillUpdate()
<br>
*render()
<br>
*componentDidUpdate()
<br>

<h2>unmounting:</h2>
<p> this method is called when a component is being removed from the DOM. </p>
*componentWillUnmount()
<br>

<h2>Handlling Errors: </h2>
 *componentDidCatch()
 <br>
 this method is called for handling errors when they occur during rendering, in a lifecycle method or in the constructor of any child component
 <br>

<h2>APIs:</h2>
 *setState()
 <br>
 *forceUpdate()
 <br>

<h2>Class Properties:</h2>
*defaultProps
<br>
*displayName
<br>

<h2>Instance Properties:</h2>
 *props
 <br>
 *state
 <br>

