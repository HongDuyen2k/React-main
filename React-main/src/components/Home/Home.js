import React from "react"

class Home  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name :'',
            age:'',
            city:'',
            about:''
        }
      }
      setName = (event) => {
        this.setState({name : event.target.value})
      }
      setAge =(event)=>{
        this.setState({username: event.target.value})
      }
      setCity =(event)=>{
        this.setState({city: event.target.value})
      }
      setAbout =(event)=>{
        this.setState({about: event.target.value})
      }
      submit =() =>{
        alert("Khai báo thành công")
      }
   render(){
    return <form>
       <div><input type ="text" placeholder="Enter name" value={this.state.name}
        onChange ={this.setName}/></div>
        <div><input type ="text" placeholder="Enter age" value={this.state.username}
        onChange= {this.setUsername}/></div>
        
        <div>
            <select value={this.state.city} onChange ={this.setCity}>
                <option value="HN">Ha Noi</option>
                <option value="HCM">HCM</option>
                <option value="DN">Da Nang</option>
            </select>
        
        </div>
        <div>
            <textarea placeholder="Enter about you" value={this.state.about} onChange ={this.setAbout}></textarea>
        </div>
        <div><button type="button" onClick={this.submit}>Submit</button></div>

    </form>
   }
}

export default Home