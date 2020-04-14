import React from 'react';
import './Main.css';


class Main extends React.Component {
     constructor(props){
        super(props);
        
        this.state={
           
             editingElementId: null,
             newName: null,
        };
 }
    
changeName = e => {
 this.setState({ newName: e.target.value})
 }
 
 startEditing = ({ id, name }) => {
    this.setState({ newName: name, editingElementId: id})
     
     console.log(this.state.newName)
 }
 
finishEditing = () => {
const newName = this.state.newName
console.log(newName)
   const newTasks = this.props.taskFolder.map((task) => (
    task.id === this.state.editingElementId ? { ...task, text: newName} : task
    ))
   
    console.log(newTasks)
    this.props.updateTasks(newTasks)
   this.setState((prevState) => ({ newName: null, editingElementId: null }))
 }  
render(){

const {taskFolder ,removeTask}=this.props;
    
    return (
<section>
   
     
<div id = "taskWrapper" > 
            
  {taskFolder.map(task=>{
    return <div className="taskCard" key={task.id}>   
  
   <div> { this.state.editingElementId ===  task.id? (
       <textarea id="changeText" onBlur={this.finishEditing} onChange={this.changeName}></textarea> 
    ) : (
        <div className ="editTask" onClick={() => this.startEditing(task)} > {task.text} </div> 

    )} </div>
        
    <span className="uathor">{task.author}</span>     
                          
                    
      <div className="btnCardBlock">
        
        <img src="https://img.icons8.com/color/48/000000/filled-message.png" alt="mail icon" />
                    
        <img src="https://img.icons8.com/color/48/000000/multiply.png" alt="close icon"   onClick={()=>{removeTask(task)
        }} />
          
          </div>
  
     </div>
     })
    
    }
            
         </div> 

    </section >

)}
}


export default Main;