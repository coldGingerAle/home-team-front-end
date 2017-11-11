
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
  },

  getHomeBaseLocations: (self) => {
      fetch('https://data.cityofnewyork.us/resource/5ud2-iqje.json')
          .then(res => res.json())
          .then(homeBases => {
              let homeBaseArray = homeBases.map(homeBase =>{
                  let homeBase_location = {
                      name:homeBase.homebase_office,
                      address: homeBase.address,
                      lat: homeBase.latitude,
                      lng: homeBase.longitude,
                      nta: homeBase.nta,
                  }
                  return homeBase_location;
              })
              self.setState({
                  homeBases: homeBaseArray
              })
          })
  },

  /*This function returns the location and contact info
of nyc hospitals and health facilities*/
  getHospitalCenters: (self) => {
      fetch('https://data.cityofnewyork.us/resource/ymhw-9cz9.json')
      .then(res => res.json())
      .then(hospitals =>{
          let hospitalArray = hospitals.map(hospital =>{
              let hospitals_name_address ={
                  name: hospital.facility_name,
                  address: hospital.human_address,
                  lat: hospital.location_1.latitude,
                  lng: hospital.location_1.longitude
              }
              return hospitals_name_address;
          })
          self.setState({
              hospitalCenters: hospitalArray
          })
          console.log(self.state.hospitalCenters);
      })
  }

}

export default Utility;
