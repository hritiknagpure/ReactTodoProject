import AddTodo from "./assets/Componenets/AddTodo"
import Appname from "./assets/Componenets/Appname"

function App() {
 

  return<div>
    <center classname='todolist'>
    <Appname/>
    <div class="container text-center">
  <div class="row">
   <div class="col-6">
    <input type="text" placeholder="Enter Todo here"></input>
   </div>
    <div class="col-4">
      <input type="date"></input>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
</div>
<div class="row">
   <div class="col-6">Buy Milk
   </div>
    <div class="col-4">
      4/10/2023
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">DELETE</button>
    </div>
   <AddTodo/>
  </div>
    </center>
  </div> 
  
}

export default App
