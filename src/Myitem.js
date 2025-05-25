import React from "react";



//create the component for the afiliationitem

class AffiliationItem extends React.Component{
    render(){
        return(
                <li>
                    {this.props.aff}
                </li>
        )
    }
}

class StarWars extends React.Component{

    //create state
    constructor(){
        super()
        this.state={
            visibleStats:false,
            image:null,
            height:null,
            homeworld:null,
            affiliations:[],
        }
    }

    //update state every time a click event is created
    generateCharacter(){
        //Create a random numbers generator
        const number=Math.random() * 87
        const randomNumber=Math.round(number)
        //api request
        fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(Response => Response.json())
        .then(data =>{
            
        console.log(data)

        this.setState({
            visibleStats:true,
            image:data.image,
            name:data.name,
            height:data.height,
            homeworld:data.homeworld,
            affiliations:data.affiliations,
        })
        })

    }

    render()
    {
        //craete a variable for the affiliation object
        //ise the map function
        const affiliation=this.state.affiliations.map(aff =>{
            return <AffiliationItem aff={aff}/>
            //use the component and give it a prop
        })

        return(
        
           <div>
            {/* if statement taht specifies that the stats will show only when the
            button is pressed */}
            {this.state.visibleStats &&
            <div>

                <div >
                    <img src={this.state.image} className="characterImage"></img>
                </div>
                <h1>{this.state.name}</h1>
                <p>height: {this.state.height} m</p>
                <h3>Homeworld</h3> 
                {this.state.homeworld} 
                <ul>
                    {/* loop through the affilications array */}
                    <h2>Affiliations</h2> 
                    {/* use map function to loop through array */}
                {affiliation}
                </ul>

            </div>

            }
            
            <button onClick={()=> this.generateCharacter()}
            type="button" 
            className="btn" >Generate Character</button>
           </div>
           
        )
    }
}

export default StarWars;