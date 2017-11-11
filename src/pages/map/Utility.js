
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
          hotspot.loc= hotspot_lat_long;
         
          return hotspot;
        })
        self.setState({
          wifihotspots: hotspotsArray
        })
      })
  },

  getHomelessDropInCenters: (self) => {
    fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
      .then(res => res.json())
      .then(locations => {
        let locationsArray = locations.map(location => {
          let locationObject = {
            lat: location.latitude,
            lng: location.longitude,
          }
          location.loc= locationObject;
          return location;
        })
        self.setState({
          dropInCenters: locationsArray
        })
      })
  }

}

export default Utility;
