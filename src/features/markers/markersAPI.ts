import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getMarkersDistance = createAsyncThunk(
//   'map/fetchMarkersDistance',
//   async (
//     markers: Array<markerInterface>
//     // !! why does'nt it let me put two identical parameters as optional arguments?
//     // , coordinates: Array<CoordinatesInterface>
//   ) => {
//     try {
//       if (
//         !markers ||
//         markers.length !== 2
//         // || !coordinates || coordinates.length !== 2
//       )
//         throw new Error(
//           'no markers were provided, getMarkersDistance -17 markersAPI'
//         );

//       const { data } = await axios.post('/api/distancematrix/getDistance', {
//         markers,
//       });
//       const { duration, distance } = data[0].elements[0];
//       const result = { duration, distance };
//       if (duration && distance) {
//         return result;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=AddYourOwnKeyHere
