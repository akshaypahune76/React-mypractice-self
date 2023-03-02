import React from "react";

// react hve two types of component 
// 1. class component
// 2. function component

// 1. class component => it is define purely on class basis. it have there own lifecycle. and it os use that lifecycle method to manipulate your componunt.

// state => are work as a variable to that related component.

class HomeComponent extends React.Component<any,any>{
    // initialize class component
    // props=> props are use to comunicate one or more component with each other. we can send data from one component to anather componentusin prop.

    constructor(prop:any){
        super(prop); // direct access all component and method of extends class or inherited class.
        this.state = {
            name:"",
            userarray:[ ], 
            yesorno: false,
            phoneno:9503971606
        }// stat is private property of this component. it will use to process your data or store data in different format into component.
    }
    // lifecycle of component

    // 3 phased of class component life cycle.
    // 1. phase => mounting phase. it will used componentDidMount method.render method this phase also
    componentDidMount(){
        // console.log("state value before setstate", this.state);
        // this.setState({
        //     name:"akshaykumar"

        // });
        // this.setState({
        //     name:"akshaykumar",
        //     userarray:[4535,'hi dear',53,423,"pahune"]

        // });
        console.log("component mount with prop value",this.props)
    }

    // 2 phase => it will trigger component update and render component.

    componentDidUpdate (){
        
        if(this.state){
            console.log("component update",this.state);
            this.callanothermethod();
        }
        // it will used for dependency purpose.
        // componentDidUpdate will capture previous update as well as current update of component state and props.
    }

    // 3 phase => unmount phase means while you close the component this phase has been trigger.

    componentWillUnmount(){
        clearInterval('');   
    }

    callanothermethod=()=> {
        console.log("thismethod trigger base on state update")
    }

    changename =()=>{
        this.setState({
            name:"akshaykumar",
            userarray:[4535,'hi dear',53,423,"pahune"]

        });
        // setInterval(()=> {console.log("statment exe")}, 1000)

    }
    render(){
        const{arraydetails,name,phoneno}=this.props.userdata; //  destructing prop object.

        // return will execute the html element but that element are define in JSX extention.
        // JSX is a exetention which help to make th enormal html element into object type.
        // normal JSX will be in single container like using div element.
        // using fragment tag.<></>
        return(
            // <div className="homeclass">
            // {console.log("state value after setstate", this.state)}

            // <h1>this is my HomeComponent</h1>
            // <h2>this is my HomeComponent</h2>
            // <h3>this is my HomeComponent</h3>
            // </div>
            // we can not assign any attributes for fragment tag.
            <>
              {console.log("state value after setstate", this.state)}
              <h1>state name value: {name }</h1>
              {/* <h2>array value :{this.state.userarray }</h2> */}
              <h2>array value</h2>
              <ul>
                {arraydetails.map((item:any,index:any)=>
                <li key={index}>{item}</li>
                )}
              </ul>
              <h3>{phoneno}</h3>
              <input type={"button"} value={'click me'} onClick={this.changename}/>
            </>
        )
    }
}






export default HomeComponent;