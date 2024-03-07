import React, {useEffect, useState, Fragment} from 'react'
//import React, { useEffect, useState, Fragment } from "react";
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//npm install react-slick slick-carousel (Slider Library )
import '../assets/css/style.css';
import '../assets/css/all-fontawesome.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/flex-slider.min.css'
import '../assets/css/jquery-ui.min.css';
import '../assets/css/magnific-popup.min.css';
import '../assets/css/nice-select.min.css';
import '../assets/css/owl.carousel.min.css';

//import breadcrumbImage from '../assets/img/breadcrumb/01.jpg';

const Inventory = () => {
  const { stock_id } = useParams();
    const [data, setData] = useState("");
    const [stock, setStock] = useState("");
    const [image,setImage] = useState("");

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

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
     
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://wagonon.com/api/v2/get-stock-details/${stock_id}/live`, {
              method: 'GET',
              headers: {
                'Authorization': 'febc8f8ac083f5fc27e032c81e7b536a',
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setStock(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      },[stock_id]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://wagonon.com/api/v2/get-car-img/${stock_id}`, {
              method: 'GET',
              headers: {
                'Authorization': 'febc8f8ac083f5fc27e032c81e7b536a',
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setImage(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      },[stock_id]);

  return (
    <div>
    <div class="site-breadcrumb" style={{background: 'url(../assets/img/breadcrumb/01.jpg)'}}>
            <div class="container">
            <h2 class="breadcrumb-title">Inventory Single</h2>
            <ul class="breadcrumb-menu">
            <li><a href="index.html">Home</a></li>
            <li class="active">Inventory Single</li>
            </ul>
            </div>
    </div>


    <div class="car-item-single bg py-120">
        <div class="container">
        <div class="car-single-wrapper">
        <div class="row">
        <div class="col-lg-8">
        <div class="car-single-details">
        <div class="car-single-widget">
        <div class="car-single-top">
        <span class="car-status status-1">Brand New</span>
        <h3 class="car-single-title">{stock.make}</h3>
        <ul class="car-single-meta">
        <li><i class="far fa-clock"></i> Listed On: Sat, Jan 25, 2023</li>
        <li><i class="far fa-eye"></i> Views: 850</li>
        </ul>
        </div>
        {/* <div class="car-single-slider">
        <div class="item-gallery">
        <div class="flexslider-thumbnails">
        <ul class="slides">
        <li data-thumb="assets/img/car/single-1.jpg">
        <img src="assets/img/car/single-1.jpg" alt="#"/>
        </li>
        <li data-thumb="assets/img/car/single-2.jpg">
        <img src="assets/img/car/single-2.jpg" alt="#"/>
        </li>
        <li data-thumb="assets/img/car/single-3.jpg">
        <img src="assets/img/car/single-3.jpg" alt="#"/>
        </li>
        <li data-thumb="assets/img/car/single-4.jpg">
        <img src="assets/img/car/single-4.jpg" alt="#"/>
        </li>
        </ul>
        </div>
        </div>
        </div> */}

    {/* <div className="car-single-slider">
      <div className="item-gallery">
        <Slider {...settings}>
          <div>
            <img src="../assets/img/car/single-1.jpg" alt="#" />
          </div>
          <div>
            <img src="../assets/img/car/single-2.jpg" alt="#" />
          </div>
          <div>
            <img src="../assets/img/car/single-3.jpg" alt="#" />
          </div>
          <div>
            <img src="../assets/img/car/single-4.jpg" alt="#" />
          </div>
        </Slider>
      </div>
    </div> */}

<div className="car-single-slider">
      <div className="item-gallery">
        <Slider {...settings}>
          {image && image.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl.img_url} alt={`Car Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>

        </div>
        <div class="car-single-widget">
        <h4 class="mb-4">Key Information</h4>
        <div class="car-key-info">
        <div class="row">
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Model</span>
        <h6>{stock.model}</h6>
        </div>
        </div>
        </div>
     
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-speedometer"></i>
        </div>
        <div class="car-key-content">
        <span>Mileage</span>
        <h6>{stock.km}</h6>
        </div>
        </div>
        </div>
       
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Year</span>
        <h6>{stock.mfg_year}</h6>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-gas-station"></i>
        </div>
        <div class="car-key-content">
        <span>Fuel Type</span>
        <h6>{stock.fuel_type}</h6>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Color</span>
        <h6>{stock.color}</h6>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Registration No.</span>
        <h6>{stock.reg_no}</h6>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Owners</span>
        <h6>{stock.owners}</h6>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Price</span>
        <h6>{stock.price}</h6>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <div class="car-key-item">
        <div class="car-key-icon">
        <i class="flaticon-drive"></i>
        </div>
        <div class="car-key-content">
        <span>Warrenty</span>
        <h6>{stock.warrenty}</h6>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div class="car-single-widget">
        <div class="car-single-overview">
        <h4 class="mb-3">Description</h4>
        <div class="mb-4">
         <p>{stock.other_desc}</p>
        </div>
        {/* <h4 class="mb-3">Car Features</h4>
        <div class="row mb-3">
        <div class="col-lg-4">
        <ul class="car-single-list">
        <li><i class="far fa-check-circle"></i>{stock.features}</li>
        </ul>
        </div>
        <div class="col-lg-4">
        <ul class="car-single-list">
        <li><i class="far fa-check-circle"></i> Premium sound system</li>
        <li><i class="far fa-check-circle"></i> Bluetooth</li>
        <li><i class="far fa-check-circle"></i> Andriod Auto</li>
        <li><i class="far fa-check-circle"></i> Intermittent wipers</li>
        </ul>
        </div>
        </div> */}
        {/* <h4 class="mb-4">Location</h4>
        <div class="car-single-map">
        <div class="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.759040329405195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4a01c8df6fb3cb8!2sSolomon%20R.%20Guggenheim%20Museum!5e0!3m2!1sen!2sbd!4v1619410634508!5m2!1sen!2s"></iframe>

        </div>
        </div> */}
        </div>
        </div>
        </div>
        </div>
        {/* <div class="col-lg-4">
        <div class="car-single-widget">
        <h4 class="car-single-price">$50,560</h4>
        <ul class="car-single-meta">
        <li><i class="fa-regular fa-gauge-high"></i> 50k Miles</li>
        <li><i class="far fa-location-dot"></i> 25/B Milford, New York</li>
        </ul>
        </div>
        <div class="car-single-widget">
        <div class="car-single-author">
        <img src="../assets/img/car/author.jpg" alt/>
        <div class="car-single-author-content">
        <h5>Marid Anderson</h5>
        <span>Customer Advisor</span>
        <div class="car-single-author-social">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        </div>
        </div>
        </div>
        <div class="car-single-widget">
        <h5 class="mb-3">Contact Details</h5>
        <div class="car-single-form">
        <form action="#">
        <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter Name"/>
        </div>
        <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter Email"/>
        </div>
        <div class="form-group">
        <textarea class="form-control" rows="3" placeholder="Write Message"></textarea>
        </div>
        <div class="form-group">
        <button type="submit" class="theme-btn">Send Now<i class="fas fa-arrow-right-long"></i></button>
        </div>
        </form>
        </div>
        </div>
        </div> */}
        </div>
        <div class="car-single-related mt-5">
        <h3 class="mb-30">Related Listing</h3>
        {/* <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3">
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
        <div class="car-footer">
        <span class="car-price">$45,620</span>
        <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
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
        <div class="car-footer">
        <span class="car-price">$90,250</span>
        <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
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
        <div class="car-footer">
        <span class="car-price">$44,350</span>
        <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
        </div>
        </div>
        </div>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
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
        <div class="car-footer">
        <span class="car-price">$78,760</span>
        <a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
        </div>
        </div>
        </div>
        </div>
        </div> */}

        <div className="row">
            {data && data.slice(0,6).map((car, index) => (
              <div key={index} className="col-md-6 col-lg-4">
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
                      {/* <h4><a href="/inventory/+(car.stock_id)">{car.make}</a></h4> */}
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

        </div>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default Inventory;
