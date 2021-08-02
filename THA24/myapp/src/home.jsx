const Home = (props)=>{

    function toLogIn()
    {
        props.setLoading("Loading...");
        setTimeout(()=>{
             props.setLogin("loggedIn");
             props.setLoading("");
        },1000)
    }

    function toLogOut()
    {
        props.setLoading("Loading...");
        setTimeout(()=>{
             props.setLogin("notLoggedIn");
             props.setLoading("");
        },1000)
    }

    return<div className="home page-container">
        <div className="title">
        Ghar
        </div>
        <div className="content">
            Jab tak login nahi ha tab tak app profile aur dashboard access nahi kar sakte ha
        </div>
        <div className="btn">
            {
            props.loading===""?
            (
            props.login==="loggedIn"?
            (
            <button onClick={toLogOut}>Logout</button>
            )
            :
            (
            <button onClick={toLogIn}>Login</button>
            )
            ):("")}
        </div>
        {
        
        
        <></>
        }
    </div>
}

export default Home;