const Home = () => {

    return (<div className="App-header">
        <h1>Portfolio</h1>
        <div className="grid">
            <div className="background">
                <h2>Background</h2>
                <h3>Hello, my name is Daniel Shull. I am a fullstack developer with a background in
                    Environmental Science and Japanese.</h3>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <h5>Languages & Frameworks:
                    Python, React, Django, Javascript, jQuery, Node, Express, AJAX, Bootstrap, Phaser</h5>
                <h5>Management & Deployment:
                    Git, Github, Heroku</h5>
                <h5>Databases:
                    SQL, PostgreSQL, MongoDB</h5>
            </div>
        </div>
        <div>
            <h1>
                Contact Info:
            </h1>
            <h2><li >Email: danielshull121@gmail.com
                <li >Phone Number: 814-574-2326</li>
                <li ><a className="list" target="_blank" href="https://github.com/dxs19/">GitHub</a></li>
                <li ><a className="list" target="_blank" href="https://www.linkedin.com/in/daniel-shull/">LinkedIn</a></li>
            </li></h2>


        </div>
    </div>

    )
}

export default Home