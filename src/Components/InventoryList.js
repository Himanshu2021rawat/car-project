import React, { useEffect, useState, Fragment } from "react";

const InventoryList = () => {

  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://wagonon.com/api/v1/get-live-stock/2', {
          method: 'GET',
          headers: {
            'Authorization': 'febc8f8ac083f5fc27e032c81e7b536a',
            'Content-Type': 'application/json', // Set other headers if needed
            'Access-Control-Allow-Origin': '*', // Add this header to allow requests from any origin
          },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setData(data);
        setFilteredData(data);
        setName(data[0]?.make);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const [selectedBrands, setSelectedBrands] = useState([]);


const filterResult = (brand) => {
  const updatedBrands = [...selectedBrands];

  if (updatedBrands.includes(brand)) {
    // If the brand is already selected, remove it
    updatedBrands.splice(updatedBrands.indexOf(brand), 1);
  } else {
    // If the brand is not selected, add it
    updatedBrands.push(brand);
  }

  setSelectedBrands(updatedBrands);

  // Filter the data based on the selected brands
  const result = data.filter((curData) => updatedBrands.includes(curData.make));
  setFilteredData(result);
  console.log('Filtered Data', result);
};

const [searchQuery, setSearchQuery] = useState('');
const handleSearch = (e) => {
  const query = e.target.value.toLowerCase();

  // Filter the data based on the search query
  const result = data.filter((car) =>
    car.make.toLowerCase().includes(query) ||
    car.model.toLowerCase().includes(query)
    // Add more fields to search if needed
  );

  setSearchQuery(query);
  setFilteredData(result);
};

  return (
    <>

        <div class="site-breadcrumb" style={{background: 'url(assets/img/breadcrumb/01.jpg)'}}>
            <div class="container">
            <h2 class="breadcrumb-title">Inventory List</h2>
            <ul class="breadcrumb-menu">
            <li><a href="index.html">Home</a></li>
            <li class="active">Inventory List</li>
            </ul>
            </div>
        </div>


        <div class="car-area list bg py-120">
                <div class="container">
                <div class="row">
                <div class="col-lg-3">
                <div class="car-sidebar">
                <div class="car-widget">
                <div class="car-search-form">
                <h4 class="car-widget-title">Search</h4>
                <form action="#">
                <div class="form-group">
                {/* <input type="text" class="form-control" placeholder="Search"/>
                <button type="search"><i class="far fa-search"></i></button> */}

          <input
            type="text"
            class="form-control"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type="submit">
            <i class="far fa-search"></i>
          </button>
                </div>
                </form>
                </div>
                </div>
                <div class="car-widget">
                <h4 class="car-widget-title">Brands</h4>
                <ul>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand"
                 onClick={() => setFilteredData(data)}/>
                <label class="form-check-label" for="brand"> All Brands</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand1"
                            onClick={() => filterResult('Datsun')}
                            checked={selectedBrands.includes('Datsun')}/>
                <label class="form-check-label" for="brand1"> Datsun</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand2"
                            onClick={() => filterResult('Ford')}
                            checked={selectedBrands.includes('Ford')}/>
                <label class="form-check-label" for="brand2"> Ford</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand3"
                     onClick={() => filterResult('Honda')}
                     checked={selectedBrands.includes('Honda')}/>
                <label class="form-check-label" for="brand3"> Honda</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand4"
                     onClick={() => filterResult('Hyundai')}
                     checked={selectedBrands.includes('Hyundai')}/>
                <label class="form-check-label" for="brand4"> Hyundai</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand5"
                     onClick={() => filterResult('Mahindra')}
                     checked={selectedBrands.includes('Mahindra')}/>
                <label class="form-check-label" for="brand5"> Mahindra</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand6"
                           onClick={() => filterResult('Maruti Suzuki')}
                           checked={selectedBrands.includes('Maruti Suzuki')}/>
                <label class="form-check-label" for="brand6"> Maruti Suzuki</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="brand7"
                            onClick={() => filterResult('Toyota')}
                            checked={selectedBrands.includes('Toyota')}/>
                <label class="form-check-label" for="brand7"> Toyota</label>
                </div>
                </li>
                </ul>
                </div>
                {/* <div class="car-widget">
                <h4 class="car-widget-title">Price Range</h4>
                <div class="price-range-box">
                <div class="price-range-input">
                <input type="text" id="price-amount" readonly/>
                </div>
                <div class="price-range"></div>
                </div>
                </div>
                <div class="car-widget">
                <h4 class="car-widget-title">Transmission</h4>
                <ul>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="tran1"/>
                <label class="form-check-label" for="tran1"> Automatic</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" checked type="checkbox" id="tran2"/>
                <label class="form-check-label" for="tran2"> Manual</label>
                </div>
                </li>
                </ul>
                </div>
                <div class="car-widget">
                <h4 class="car-widget-title">Fuel Type</h4>
                <ul>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fuel1"/>
                <label class="form-check-label" for="fuel1"> Gas</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" checked type="checkbox" id="fuel2"/>
                <label class="form-check-label" for="fuel2"> Hybrid</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fuel3"/>
                <label class="form-check-label" for="fuel3"> Diesel</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="fuel4"/>
                <label class="form-check-label" for="fuel4"> Eletric</label>
                </div>
                </li>
                </ul>
                </div>
                <div class="car-widget">
                <h4 class="car-widget-title">Features</h4>
                <ul>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="feature1"/>
                <label class="form-check-label" for="feature1"> Airbag - Driver</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" checked type="checkbox" id="feature2"/>
                <label class="form-check-label" for="feature2"> Airbag - Passenger</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="feature3"/>
                <label class="form-check-label" for="feature3"> Alloy Wheels</label>
                </div>
                </li>
                <li>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="feature4"/>
                <label class="form-check-label" for="feature4"> Anti-lock Braking System</label>
                </div>
                </li>
                </ul>
                </div> */}
                </div>
                </div>
                <div class="col-lg-9">
                <div class="col-md-12">
                <div class="car-sort">
                <h6>Showing 1-10 of 50 Results</h6>
                <div class="car-sort-list-grid">
                <a class="car-sort-grid" href="/inventoryGrid"><i class="far fa-grid-2"></i></a>
                <a class="car-sort-list active" href="/inventoryList"><i class="far fa-list-ul"></i></a>
                </div>
                {/* <div class="col-md-3 car-sort-box">
                <select class="select">
                <option value="1">Sort By Default</option>
                <option value="5">Sort By Featured</option>
                <option value="2">Sort By Latest</option>
                <option value="3">Sort By Low Price</option>
                <option value="4">Sort By High Price</option>
                </select>
                </div> */}
                </div>
                </div>
                {/* <div class="row">
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <span class="car-status status-1">Used</span>
                <img src="assets/img/car/01.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">Mercedes Benz Car</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$45,620</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <img src="assets/img/car/02.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">Yellow Ferrari 458</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$90,250</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <img src="assets/img/car/03.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">Black Audi Q7</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$44,350</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <span class="car-status status-2">New</span>
                <img src="assets/img/car/04.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">BMW Sports Car</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$78,760</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <span class="car-status status-1">Used</span>
                <img src="assets/img/car/05.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">White Tesla Car</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$64,230</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <span class="car-status status-2">New</span>
                <img src="assets/img/car/06.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">White Nissan Car</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$34,540</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <img src="assets/img/car/07.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">Mercedes Benz Suv</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$75,820</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <img src="assets/img/car/08.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">Red Hyundai Car</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$25,620</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-12">
                <div class="car-item">
                <div class="car-img">
                <img src="assets/img/car/09.jpg" alt/>
                <div class="car-btns">
                <a href="#"><i class="far fa-heart"></i></a>
                <a href="#"><i class="far fa-arrows-repeat"></i></a>
                </div>
                </div>
                <div class="car-content">
                <div class="car-top">
                <h4><a href="#">White BMW Car</a></h4>
                <div class="car-rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>5.0 (58.5k Review)</span>
                </div>
                </div>
                <ul class="car-list">
                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-car"></i>Model: 2023</li>
                <li><i class="far fa-gas-pump"></i>Hybrid</li>
                </ul>
                <p>
                There are many variations of passages available but the majority have suffered in some injected humour words slightly believable.
                </p>
                <div class="car-footer">
                <span class="car-price">$22,620</span>
                <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
                </div>
                </div>
                </div>
                </div>
                </div> */}


<div className="row">
      {filteredData && filteredData.map((car, index) => (
        <div key={index} className="col-md-6 col-lg-12">
          <div className="car-item wow fadeInUp" data-wow-delay={`${index * 0.25}s`}>
            <div className="car-img">
              {/* Add your car status and image */}
              <span className={`car-status ${car.status === 'Used' ? 'status-1' : 'status-2'}`}>{car.status}</span>
              <img src={car.stock_pic} alt={car.stock_pic} />
              <div className="car-btns">
                <a href="#"><i className="far fa-heart"></i></a>
                <a href="#"><i className="far fa-arrows-repeat"></i></a>
              </div>
            </div>
            <div className="car-content">
              <div className="car-top">
                <h4><a href={`/inventory/${car.stock_id}`}>{car.make}</a></h4>
                {/* Add your star ratings and other details */}
                <div className="car-rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span>{car.rating}</span>
                </div>
              </div>
              <ul className="car-list">
                {/* <li><i className="far fa-steering-wheel"></i>{car.transmission}</li> */}
                <li><i className="far fa-road"></i>{car.km}</li>
                <li><i className="far fa-car"></i>Model: {car.model}</li>
                <li><i className="far fa-gas-pump"></i>{car.fuel_type}</li>
              </ul>
              <div className="car-footer">
                <span className="car-price">{car.price}</span>
                <a href="#" className="theme-btn"><span className="far fa-eye"></span>Details</a>
              </div>
            </div>
          </div>
        </div>
      ))}
          </div>

                {/* <div class="pagination-area">
                <div aria-label="Page navigation example">
                <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true"><i class="far fa-arrow-left"></i></span>
                </a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true"><i class="far fa-arrow-right"></i></span>
                </a>
                </li>
                </ul>
                </div>
                </div> */}

                </div>
                </div>
                </div>
        </div>
      
    </>
  )
}

export default InventoryList;
