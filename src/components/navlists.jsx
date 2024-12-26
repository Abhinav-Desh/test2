const navlists = ()=>{

    return(
        <div className="navbar"style={{position: 'sticky',
            top: 0,
            overflow: 'hidden'}} >
        <div className="nav-lists" >
            <div className="right-section">
                <div className="right-child" style={{borderRadius:3}}>
                    Navbar
                </div>
            </div>
            <div className="left-section">
            <li className="list-1 nav-left-child" style={{borderRight:'2px grey solid',width:'16%',cursor:"pointer"}}>About Me</li>
            <li className="list-2 nav-left-child" style={{borderRight:'2px grey solid',width:'16%',cursor:"pointer"}}>Projects</li>
            <li className="list-3 nav-left-child"style={{borderRight:'2px grey solid',width:'25%',cursor:"pointer"}}>Contact Form</li>
            <li className="list-4 nav-left-child"style={{width:'25%',cursor:"pointer"}}>skills</li>
            </div>
        </div>

        </div>
    );
}

export default navlists;