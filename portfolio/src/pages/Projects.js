import { Link } from "react-router-dom"
const Projects = () => {
    return (
        <div className="App-header-2">
            <h1>My Projects:</h1>
            <div className="project">
                <div className="project-div" >
                    <h2>East Coast Ski Resort Info Site:</h2>
                    <img className='img' src='https://i.paste.pics/60c05991f734943a9e7660aa8b8139bc.png' />
                    <div className="text-div"></div>
                    <li><a className="list" target="_blank" href="https://github.com/dxs19/SkiResortClient"> Github</a></li>
                    <li> <a className="list" target="_blank" href="https://skiresort-client.herokuapp.com/resorts"> Deployed Website</a></li>
                    <div className="text-div"></div>
                </div>

                <div className="project-div">
                    <h2>Coasterpedia:</h2>
                    <img className='img' src='https://i.paste.pics/772ecbf9f6f850d3c4262b06be55a57b.png' />
                    <div className="text-div">
                        <li> <a className="list" target="_blank" href="https://github.com/julialima08/Coasterpedia"> Github</a></li>
                        <li><a className="list" target="_blank" href="https://coasterpedia-app.herokuapp.com/"> Deployed Website</a></li>
                    </div>
                </div >

                <div className="project-div">
                    <h2>Book hub:</h2>
                    <img className='img' src='https://i.paste.pics/a253588905b1615f30822fcc1c49c2b1.png' />
                    <div className="text-div">
                        <li> <a className="list" target="_blank" href="https://github.com/dxs19/SkiResortClient"> Github</a></li>
                        <li>  <a className="list" target="_blank" href="https://github.com/Bluepanda93/book_hub_frontend"> Deployed Website</a></li>
                    </div>
                </div>

            </div>

        </div>
    )


}

export default Projects
