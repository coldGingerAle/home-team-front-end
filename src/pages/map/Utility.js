const Utility = {
  Add: (x) => {
    console.log("Called Add", x)
  },

  Subtract: (x) => {
    console.log("Called subtract", x)
  },

  getWifiHotSpots: (self) => {
    fetch('https://data.cityofnewyork.us/resource/24t3-xqyv.json')
      .then(res => res.json())
      .then(hotspots => {
        let hotspotsArray = hotspots.map(hotspot => {
          let hotspot_lat_long = {
            lat: hotspot.location_lat_long.coordinates[1],
            lng: hotspot.location_lat_long.coordinates[0]
          }
          return hotspot_lat_long;
        })
        self.setState({
          wifihotspots: hotspotsArray
        })
      })
  }
}

export default Utility;
