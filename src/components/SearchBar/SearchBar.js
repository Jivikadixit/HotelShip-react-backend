// // import React, { useState, useEffect } from 'react'
// // import './SearchBar.css'
// // import Select from 'react-select';
// // import axios from 'axios';
// // import DatePicker from 'react-datepicker';
// // import 'react-datepicker/dist/react-datepicker.css';

// // export default function SearchBar() {
// //     const [filterData,SetFilterData]= useState('');
// //     const [stateOptions, setStateOptions] = useState(null)
// //     const [selectedCity, setSelectedCity] = useState(null);
// //     const [checkInDate, setCheckInDate] = useState(new Date());
// //     const [checkOutDate, setCheckOutDate] = useState(new Date());


// //     const [formData, setFormData] = useState({
// //         search: '',
// //         date: '',
// //         quantity: ''
// //     })
// //     const handleChange = (event) => {
// //        if(event.target.value==='')
// //        {
// //             SetFilterData("")
// //        }
// //        else{
// //         const filterResult=stateOptions.filter(state=>state.toLowerCase().include(event.target.value.toLowerCase()))
// //         console.log(filterResult)   
// //     }

// //     }

// //     // Fetch the list of states from your backend API using Axios
// //     useEffect(() => {
// //         axios
// //             .get('http://127.0.0.1:5000/name/state')
// //             .then((response) => {
// //                 const stateData = response.data.map((state) => ({
// //                     value: state.state,
// //                     label: state.state,
// //                 }));
// //                 setStateOptions(stateData);
// //             })
// //             .catch((error) => {
// //                 console.error('Error loading states:', error);
// //             });

// //     }, []);
// //     console.log("this is a city option ")

// //     const today = new Date();
// //     const tomorrow = new Date(today);
// //     tomorrow.setDate(tomorrow.getDate() + 1);


// //     const handleSubmit = async (event) => {
// //         event.preventDefault();
// //         try {

// //         }
// //         catch (error) {
// //             console.log('error', error)
// //         }
// //     }

// //     return (
// //         <div>
// //             <div className="nav-bar">
// //                 <nav className='home-navbar'>
// //                     <p className='p'>Over 10 hotels across mathura and vrindavan</p>
// //                     <form onSubmit={handleSubmit}>
// //                         <div className="flex">
// //                             <label >
// //                                 <input className='search-input' type="text"
// //                                     placeholder='Search by city,locality,hotel'
// //                                     value={formData.search}
// //                                     onChange={handleChange}
// //                                     name='search'
// //                                 /></label>
// //                             {/*Check In Date*/}
// //                             <label >
// //                                 checkIn:
// //                                 <DatePicker
// //                                     selected={checkInDate}
// //                                     onChange={(date) => {
// //                                         if (date >= tomorrow) {
// //                                             setCheckInDate(date);
// //                                         }
// //                                     }}
// //                                     minDate={tomorrow}
// //                                     dateFormat="dd/MM/yyyy"
// //                                 /></label>

// //                             {/*Check Out Date*/}
// //                             <label >
// //                                 checkout:
// //                                 <DatePicker
// //                                     selected={checkOutDate}
// //                                     onChange={(date) => {
// //                                         if (date >= tomorrow) {
// //                                             setCheckOutDate(date);
// //                                         }
// //                                     }}
// //                                     minDate={checkInDate}
// //                                     dateFormat="dd/MM/yyyy"
// //                                 /></label>
// //                             <button className='search-button'>Search</button>
// //                         </div>
// //                     </form>
// //                 </nav></div>
// //         </div>
// //     )
// // }




// import React, { useState, useEffect } from 'react';
// import './SearchBar.css';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SearchBar() {
//     const [stateOptions, setStateOptions] = useState([]);
//     const [cityOptions, setCityOptions] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [checkInDate, setCheckInDate] = useState(new Date());
//     const [checkOutDate, setCheckOutDate] = useState(new Date());

//     const handleChange = (event) => {
//         const input = event.target.value;
//         setSearchTerm(input);

//         if (input !== '') {
//             const filterStates = stateOptions.filter(state => state.value.toLowerCase().includes(input.toLowerCase()));
//             // const filterCities = cityOptions.filter(city => city.value.toLowerCase().includes(input.toLowerCase()));
//             // console.log(filterCities)
//              console.log(filterStates)

//             if (filterStates.length === 1) {
//                 fetchCitiesForState(filterStates[0].value);
//             }
//         }
//     };

//     useEffect(() => {
//         axios
//             .get('http://127.0.0.1:5000/name/state')
//             .then((response) => {
//                 const stateData = response.data.map((state) => ({
//                     value: state.state,
//                 }));
//                 setStateOptions(stateData);
//             })
//             .catch((error) => {
//                 console.error('Error loading states:', error);
//             });
//     }, []);

//     const fetchCitiesForState = (stateName) => {
//         axios
//             .get(`http://127.0.0.1:5000/nameOf/${stateName}/district`)
//             .then((response) => {
//                 const cityData = response.data.map((city) => ({
//                     value: city.district,
//                 }));
//                 setCityOptions(cityData);

//             })
//             .catch((error) => {
//                 console.error('Error loading cities for state:', error);
//             });
//     }
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // Handle form submission here
//     };

//     return (
//         <div>
//             <div className="nav-bar">
//                 <nav className='home-navbar'>
//                     <p className='p'>Over 10 hotels across mathura and vrindavan</p>
//                     <form onSubmit={handleSubmit}>
//                         <div className="flex">
//                             <label>
//                                 <input className='search-input' type="text"
//                                     placeholder='Search by city, locality, hotel'
//                                     value={searchTerm}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                             <label>
//                                 checkIn:
//                                 <DatePicker
//                                     selected={checkInDate}
//                                     onChange={(date) => {
//                                         if (date >= tomorrow) {
//                                             setCheckInDate(date);
//                                         }
//                                     }}
//                                     minDate={tomorrow}
//                                     dateFormat="dd/MM/yyyy"
//                                 />
//                             </label>
//                             <label>
//                                 checkout:
//                                 <DatePicker
//                                     selected={checkOutDate}
//                                     onChange={(date) => {
//                                         if (date >= tomorrow) {
//                                             setCheckOutDate(date);
//                                         }
//                                     }}
//                                     minDate={checkInDate}
//                                     dateFormat="dd/MM/yyyy"
//                                 />
//                             </label>
//                             <button className='search-button'>Search</button>
//                         </div>
//                     </form>
//                 </nav>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Import Axios
import './SearchBar.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [source, setSource] = useState(null); // Axios cancel token source

  // Function to load cities based on the selected state
  const loadCities = async () => {
    if (selectedState) {
      // Cancel previous request if it's still pending
      if (source) {
        source.cancel('Request canceled');
      }

      // Create a new cancel token source
      const newSource = axios.CancelToken.source();
      setSource(newSource);

      try {
        const response = await axios.get(`http://127.0.0.1:5000/nameOf/${selectedState.value}/district`, {
          cancelToken: newSource.token,
        });

        const cityData = response.data[0].district.split(',');
        const formattedCityData = cityData.map((city) => ({
          value: city.trim(),
          label: city.trim(),
        }));
        setCityOptions(formattedCityData);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error loading cities:', error);
        }
      }
    } else {
      setCityOptions([]);
    }
  };

  // Date restrictions
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      selectedState,
      selectedCity,
      checkInDate,
      checkOutDate,
    });

    // Ensure that both state and city are selected before navigating
    if (selectedState && selectedCity) {
      navigate(`/nameOf/${selectedState.value}/${encodeURIComponent(selectedCity.value)}/district`);
    }
  };

  // Fetch the list of states from your backend API using Axios
  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/name/state')
      .then((response) => {
        const stateData = response.data.map((state) => ({
          value: state.state,
          label: state.state,
        }));
        setStateOptions(stateData);
      })
      .catch((error) => {
        console.error('Error loading states:', error);
      });
  }, []);

  // Watch for changes in selectedState and load cities accordingly
  useEffect(() => {
    loadCities();
  }, [selectedState]);

  return (
    <div className="search-main">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <div className="searchbar-heading">SEARCH HOTEL</div>
          <div className="searchinput">
            <div className="search-input">
              <label>
                <Select className='search-select'
                  placeholder='Select State'
                  options={stateOptions}
                  value={selectedState}
                  onChange={(selectedOption) => {
                    setSelectedState(selectedOption);
                    setSelectedCity(null);
                  }}
                  isClearable={true}
                />
              </label>
            </div>
            <div className="search-input">
              <label>
                <Select className='search-select'
                  placeholder='Select City'
                  options={cityOptions}
                  value={selectedCity}
                  onChange={(selectedOption) => setSelectedCity(selectedOption)}
                  isClearable={true}
                />
              </label>
            </div>
          </div>

          <div className="checkin-checkout">
            <div className="checkin">
              <label className='checkin-label'>Check-in Date:</label>
              <br />
              <DatePicker className='datepicker'
                selected={checkInDate}
                onChange={(date) => {
                  if (date >= today) {
                    setCheckInDate(date);
                    if (date >= checkOutDate) {
                      setCheckOutDate(new Date(date));
                    }
                  }
                }}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div className="checkout">
              <label className='checkout-label'>Check-out Date:</label>
              <br />
              <DatePicker className='datepicker'
                selected={checkOutDate}
                onChange={(date) => {
                  if (date >= tomorrow) {
                    setCheckOutDate(date);
                  }
                }}
                minDate={checkInDate}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div >
            <button className="searchbutton" type="submit">Search For Hotels</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;