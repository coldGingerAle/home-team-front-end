const ContainerUtil = {
  MapMarkers: (place)=>{
    let info = "";
    for(let key in place){
      if(key !== 'lng' && key !== 'lat'){
      info += (key + " " + place[key] + " ");
      }
    }

    return info;
  },
}
export default ContainerUtil;
