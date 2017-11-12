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
  },
  getHomelessDropInCenters: (self) => {
    fetch('https://data.cityofnewyork.us/resource/kjtk-8yxq.json')
      .then(res => res.json())
      .then(locations => {
        let locationsArray = locations.map(location => {
          let locationObject = {
            name: location.center_name,
            address: location.address,
            lat: location.latitude,
            lng: location.longitude,
          }

          return locationObject;
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
  getHospitalCenters: self => {
    fetch('https://data.cityofnewyork.us/resource/ymhw-9cz9.json')
      .then(res => res.json())
      .then(hospitals => {
        let hospitalArray = hospitals.map(hospital => {
          let hospitals_name_address = {
            name: hospital.facility_name,
            address: hospital.human_address,
            lat: hospital.location_1.latitude,
            lng: hospital.location_1.longitude
          };
          return hospitals_name_address;
        });
        self.setState({
          hospitalCenters: hospitalArray
        });
      });
  },
  getMentalHealthLocations: self => {
    fetch('https://data.cityofnewyork.us/resource/8nqg-ia7v.json')
      .then(res => res.json())
      .then(MHCs => {
        let MHCArray = MHCs.map(
          MHC_from_array => {
            let MHC_location = {
              name1: MHC_from_array.name_1,
              name2: MHC_from_array.name_2,
              street: MHC_from_array.street_1,
              zip: MHC_from_array.zip,
              website: MHC_from_array.website,
              lat: MHC_from_array.latitude,
              lng: MHC_from_array.longitude
            };
            return MHC_location;
          }
        );
        self.setState({
          MHC: MHCArray
        });
      });
  },
  getJobLocations: self => {
    fetch('https://data.cityofnewyork.us/resource/8nqg-ia7v.json')
      .then(res => res.json())
      .then(Jobs => {
        let JobsArray = Jobs.map(
          Job => {
            let Job_location = {
              comment: Job.comments,
              street: Job.street_1,
              zip: Job.zip,
              website: Job.website,
              lat: Job.latitude,
              lng: Job.longitude,
              nat: Job.nat
            };
            return Job_location;
          }
        );
        self.setState({
          Jobs: JobsArray
        });
      });
  },
  getSubLocations: self => {
    fetch('https://data.cityofnewyork.us/resource/kk4q-3rt2.json')
      .then(res => res.json())
      .then(Subs => {
        let SubsArray = Subs.map(
          Subs => {
            let Subs_location = {
              line: Subs.line,
              name: Subs.name,
              notes: Subs.notes,
              lat: Subs.the_geom.coordinates[1],
              lng: Subs.the_geom.coordinates[0],
            };
            return Subs_location;
          }
        );
        self.setState({
          Subs: SubsArray
        });
      });
  },
  getFSLocations: self => {
    fetch('https://data.cityofnewyork.us/resource/ma86-m5w3.json')
      .then(res => res.json())
      .then(FS => {
        let FSArray = FS.map(
          FS => {
            let FS_location = {
              facility_name: FS.facility_name,
              street_address: FS.street_address,
              phone_number_s_: FS.phone_number_s_,
              lat: FS.latitude,
              lng: FS.longitude,
            };
            return FS_location;
          }
        );
        self.setState({
          FS: FSArray
        });
      });
  }
};
export default Utility;
