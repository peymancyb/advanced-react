<h1>Advanced React</h1>

![1_lxpawhurzkye3fq2ibzcqg](https://user-images.githubusercontent.com/18486930/37240052-de40a0d8-245e-11e8-9014-2caa3b8cd018.png)

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
<pre>
componentWillReceiveProps(nextProps){
        // every time the parent component re-render the child component receive props
    }
</pre>
<br>
*shouldComponentUpdate()
<pre>
shouldComponentUpdate(nextProps,nextState){
        // return true || false
    }
 </pre>
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

<hr>

<h1>performance optimization:</h1>

<p>
1) you should measure it first
in react application most of the optimization concerns happens during the update operation of a component.

*componentWillReceiveProps() method is not super useful for performance analysis

</p>
