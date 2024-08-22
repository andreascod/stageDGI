import AuthUser from "../components/AuthUser";
export default function CompteContribuable(){

    const {token,logout,user}=AuthUser();
    const logoutUser   =   ()=>{
        if(token!= undefined){
            logout();
        }
    }
    return (
        <>
          <span role="button"  style={{
                    color: '#00204a',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    margin:"0px 4%",
                    float:'right',
                    }} onClick={logoutUser} >{user.email}</span>
        </>
    )
}