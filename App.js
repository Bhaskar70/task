import React from "react";
import content from "./content";
import "./App.css";
function App() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>city</th>
                    <th>suit</th>
                    <th>zip code</th>
                    
                </tr>
                
                <tr>
                    <td>{content[0].id}</td>
                    <td>{content[0].name}</td>
                    <td>{content[0].username}</td>
                    <td>{content[0].address.city}</td>
                    <td>{content[0].address.suite}</td>
                    <td>{content[0].address.zipcode}</td>
                </tr>
                <tr>
                    <td>{content[1].id}</td>
                    <td>{content[1].name}</td>
                    <td>{content[1].username}</td>
                    <td>{content[1].address.city}</td>
                    <td>{content[1].address.suite}</td>
                    <td>{content[1].address.zipcode}</td>
                </tr>
                <tr>
                    <td>{content[2].id}</td>
                    <td>{content[2].name}</td>
                    <td>{content[2].username}</td>
                    <td>{content[2].address.city}</td>
                    <td>{content[2].address.suite}</td>
                    <td>{content[2].address.zipcode}</td>
                </tr>
                <tr>
                    <td>{content[3].id}</td>
                    <td>{content[3].name}</td>
                    <td>{content[3].username}</td>
                    <td>{content[3].address.city}</td>
                    <td>{content[3].address.suite}</td>
                    <td>{content[3].address.zipcode}</td>
                </tr>
                <tr>
                    <td>{content[4].id}</td>
                    <td>{content[4].name}</td>
                    <td>{content[4].username}</td>
                    <td>{content[4].address.city}</td>
                    <td>{content[4].address.suite}</td>
                    <td>{content[4].address.zipcode}</td>
                </tr>
                
                <tr>
                    <td>{content[5].id}</td>
                    <td>{content[5].name}</td>
                    <td>{content[5].username}</td>
                    <td>{content[5].address.city}</td>
                    <td>{content[5].address.suite}</td>
                    <td>{content[5].address.zipcode}</td>
                </tr>
                <tr>
                    <td>{content[6].id}</td>
                    <td>{content[6].name}</td>
                    <td>{content[6].username}</td>
                    <td>{content[6].address.city}</td>
                    <td>{content[6].address.suite}</td>
                    <td>{content[6].address.zipcode}</td>
                </tr>
               <tr>
                    <td>{content[7].id}</td>
                    <td>{content[7].name}</td>
                    <td>{content[7].username}</td>
                    <td>{content[7].address.city}</td>
                    <td>{content[7].address.suite}</td>
                    <td>{content[7].address.zipcode}</td>
                </tr> 
                <tr>
                    <td>{content[8].id}</td>
                    <td>{content[8].name}</td>
                    <td>{content[8].username}</td>
                    <td>{content[8].address.city}</td>
                    <td>{content[8].address.suite}</td>
                    <td>{content[8].address.zipcode}</td>
                </tr>
                <tr>
                    <td>{content[9].id}</td>
                    <td>{content[9].name}</td>
                    <td>{content[9].username}</td>
                    <td>{content[9].address.city}</td>
                    <td>{content[9].address.suite}</td>
                    <td>{content[9].address.zipcode}</td>
                </tr>
            </table>
        </div>
    );
}

export default App;