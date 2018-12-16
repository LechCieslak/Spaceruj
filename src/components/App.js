//Moja Appa koncowa

import React, { Component } from 'react';
import Form from './Form';
import TableComponent from './Table';
import firebase from 'firebase';
import Icon from "./form.png";
// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiY2llc2xha2xlY2giLCJhIjoiY2pvdHMzYWVyMTE2ajNxbGt0ZTZrdHZnYiJ9.O1NO8MkxqzGWWr3NrRN2ZA"
});

const CHILDREN = [
    {
        name: "Jas",
        age: "7",
        city: "Warszawa",
        district: "Mokotów"
    },
    {
        name: "Andrzejek",
        age: "3",
        city: "Warszawa",
        district: "Targówek"
    },
    {
        name: "Robert",
        age: "1.5",
        city: "Warszawa",
        district: "Praga"
    },
];

//const db = firebase.database();

class MapWithIcons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            points: [],
            zoom: [15],
            center: [-87.63097788775872, 41.767174164037044]
        }
    }

    handleClick = (map, ev) => {
        const { lng, lat } = ev.lngLat;
        var { points } = this.state;
        points = [...points, [lng, lat]];
        const zoom = [map.transform.tileZoom + map.transform.zoomFraction];
        this.setState({
            zoom: [15],
            center: [21.481747846041145, 52.3233379650232],
        });
        console.log("jhbhttvyvbubin");
    };

    testClick = (map,e) => {
        let p = this.state.points;
         p.push({lat: e.lngLat.lat, lng: e.lngLat.lng})
        this.setState({
            points: p
        })
    }

    render() {
        console.log(this.state.points);
        const { points, zoom, center } = this.state;
        const image = new Image(20, 30);
        image.src = Icon;
        const images = ["myImage", image];
        return (
            <Map
                     style="mapbox://styles/mapbox/streets-v9"
                     containerStyle={{
                         height: "600px",
                         width: "100%",
                         margin: "50px"
                     }}
                     center={[21.01105,52.25247]}
                     onContextMenu={this.handleClick}
                     onClick={this.testClick}
                 >
                     <Layer
                         type="symbol"
                         id="marker"
                         layout={{ "icon-image": "harbor-15" }}>
                         {
                             points.map((p) => (
                                 <Feature coordinates={[p.lng, p.lat]}/>
                             ))
                         }

                     </Layer>

                 </Map>
        );
    }
}

class App extends React.Component {

    state = {
        children: CHILDREN
    }

    addNewEl = (el) => {
        this.setState({
            children: [...this.state.children, el]
        })
    }

    removeEl = (el) => {
        // this.setState({
        //     children: this.state.children.filter((value) => {
        //         return value !== el.currentTarget.innerText
        //     })
        // })
        console.log("app");
    }

   render(){

     return (
         <div className="App">
             <div className="container">

                 <TableComponent title="Current walks" children={this.state.children}/>
                 <Form addEl={this.addNewEl} remEl={this.removeEl}/>
                 <MapWithIcons />
             </div>
         </div>

     )
   }

    componentDidMount(){

    }
}

export default App;