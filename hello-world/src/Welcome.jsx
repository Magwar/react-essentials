function Welcome() {
  return (
    <div>Welcome, William!</div>
  )
}
export default Welcome

// Arrow function syntax
// const Welcome = () => {
    //   <div>Welcome, William</div>
// }

// default exports vs named exports
// with export default Welcome one must import like so:
// import Welcome from './Welcome'
// The component can be renamed during import like so:
// import AmazingWelcome from './Welcome' and then used as <AmazingWelcome /> in JSX
// without affecting the export name in Welcome.jsx and causing an error

// export const Welcome = () => {} ia a named export and must be imported like so:
//import { Welcome } from './Welcome'
//The component must be used with the same name as exported and can not be changed 
// during import
// This prevents naming confusion when importing multiple components