import React from "react";

export default class Users extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            entreprises:[]
        };
    }
    componentDidMount(){
        fetch("http://localhost:8000/api/entreprises")
        .then(res =>res.json())
        .then(
         (result)=>{
            this.setState({
                isLoaded:true,
                entreprises:result
            });
         },

         (error) =>{
            this.setState({
                isLoaded:true,
                error
            });
         }
        )
    }
    render(){
        const{error,isLoaded,entreprises} = this.state;
        if(error){
            return <div>Error:{error.message}</div>;
        
        }else if(!isLoaded){
            return <div>Loading...</div>
        }else{
            return(
                <ul>
                    {entreprises.map(item =>(
                        <li key={item.id}>
                            {item.Id_entreprise}: {item.Nom_entreprise}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}