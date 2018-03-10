<h1>Advanced React</h1>


##React Component Lifecycle##

###Mounting: These methods are called when an instance of a component is being created and inserted into the DOM: *constructor() *componentWillMount() *render() *componentDidMount()

##Updating: An update can cause by changes to props or state. these methods are called when a component being re-render. *componentWillReceiveProps() *shouldComponentUpdate() *componentWillUpdate() *render() *componentDidUpdate()

##unmounting: this method is called when a component is being removed from the DOM. *componentWillUnmount()

##Handlling Errors *componentDidCatch() this method is called for handling errors when they occur during rendering, in a lifecycle method or in the constructor of any child component

##APIs: *setState() *forceUpdate()

##Class Properties: *defaultProps *displayName

##Instance Properties: *props *state
