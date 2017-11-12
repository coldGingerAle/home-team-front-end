const ContainerUtil = {
 MapMarkers: place => {
   let info = '';
   for (let key in place) {
     if (key !== 'lng' && key !== 'lat') {
       if (place[key] !== undefined) {
         info += key.toUpperCase() + ': ' + place[key] + " ,  ";
       }
     }
   }

   return info;
 }
};
export default ContainerUtil;
