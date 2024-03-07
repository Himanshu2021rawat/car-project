import React, { useEffect, useState, Fragment } from "react";
//import DataService from "./Services/data.service";
const Home = () => {  

 

  const [data, setData] = useState("");
  const [name, setName] = useState("");


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
        setName(data[0]?.make);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  //const make = data.make;
  console.log("Data",data);

  
  return (
    <>
    <div class="hero-section">
       
            <div class="hero-single" 
                style={{backgroundImage: 'url(assets/img/slider/slider-1.jpg)'}}
            >
            <div class="container">
            <div class="row align-items-center">
            <div class="col-md-12 col-lg-6">
            <div class="hero-content">
                
            <h6 class="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
            Motex!</h6>
            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
            Best Way To Find Your <span>Dream</span> Car
            </h1>
            <p data-animation="fadeInLeft" data-delay=".75s">
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
            </p>
            <div class="hero-btn" data-animation="fadeInUp" data-delay="1s">
            <a href="#" class="theme-btn">About More<i class="fas fa-arrow-right-long"></i></a>
            <a href="#" class="theme-btn theme-btn2">Learn More<i class="fas fa-arrow-right-long"></i></a>
            </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-6">
            <div class="hero-right">
            <div class="hero-img">
            <img src="assets/img/slider/hero-1.png" alt="" data-animation="fadeInRight" data-delay=".25s"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            {/* <div class="hero-single" style={{backgroundImage: 'url(assets/img/slider/slider-2.jpg)'}}>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-md-12 col-lg-6">
            <div class="hero-content">
            <h6 class="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
            Motex!</h6>
            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
            Best Way To Find Your <span>Dream</span> Car
            </h1>
            <p data-animation="fadeInLeft" data-delay=".75s">
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
            </p>
            <div class="hero-btn" data-animation="fadeInUp" data-delay="1s">
            <a href="#" class="theme-btn">About More<i class="fas fa-arrow-right-long"></i></a>
            <a href="#" class="theme-btn theme-btn2">Learn More<i class="fas fa-arrow-right-long"></i></a>
            </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-6">
            <div class="hero-right">
            <div class="hero-img">
            <img src="assets/img/slider/hero-2.png" alt="" data-animation="fadeInRight" data-delay=".25s"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="hero-single" style={{backgroundImage: 'url(assets/img/slider/slider-3.jpg)'}}>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-md-12 col-lg-6">
            <div class="hero-content">
            <h6 class="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
            Motex!</h6>
            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
            Best Way To Find Your <span>Dream</span> Car
            </h1>
            <p data-animation="fadeInLeft" data-delay=".75s">
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
            </p>
            <div class="hero-btn" data-animation="fadeInUp" data-delay="1s">
            <a href="#" class="theme-btn">About More<i class="fas fa-arrow-right-long"></i></a>
            <a href="#" class="theme-btn theme-btn2">Learn More<i class="fas fa-arrow-right-long"></i></a>
            </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-6">
            <div class="hero-right">
            <div class="hero-img">
            <img src="assets/img/slider/hero-4.png" alt="" data-animation="fadeInRight" data-delay=".25s"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div> */}
      
    </div>


    
       {/* <div class="hero-section">
            <div class="hero-slider owl-carousel owl-theme">
            <div class="hero-single" 
                style={{backgroundImage: 'url(assets/img/slider/slider-1.jpg)'}}
            >
            <div class="container">
            <div class="row align-items-center">
            <div class="col-md-12 col-lg-6">
            <div class="hero-content">
                
            <h6 class="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
            Motex!</h6>
            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
            Best Way To Find Your <span>Dream</span> Car
            </h1>
            <p data-animation="fadeInLeft" data-delay=".75s">
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
            </p>
            <div class="hero-btn" data-animation="fadeInUp" data-delay="1s">
            <a href="#" class="theme-btn">About More<i class="fas fa-arrow-right-long"></i></a>
            <a href="#" class="theme-btn theme-btn2">Learn More<i class="fas fa-arrow-right-long"></i></a>
            </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-6">
            <div class="hero-right">
            <div class="hero-img">
            <img src="assets/img/slider/hero-1.png" alt="" data-animation="fadeInRight" data-delay=".25s"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="hero-single" style={{backgroundImage: 'url(assets/img/slider/slider-2.jpg)'}}>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-md-12 col-lg-6">
            <div class="hero-content">
            <h6 class="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
            Motex!</h6>
            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
            Best Way To Find Your <span>Dream</span> Car
            </h1>
            <p data-animation="fadeInLeft" data-delay=".75s">
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
            </p>
            <div class="hero-btn" data-animation="fadeInUp" data-delay="1s">
            <a href="#" class="theme-btn">About More<i class="fas fa-arrow-right-long"></i></a>
            <a href="#" class="theme-btn theme-btn2">Learn More<i class="fas fa-arrow-right-long"></i></a>
            </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-6">
            <div class="hero-right">
            <div class="hero-img">
            <img src="assets/img/slider/hero-2.png" alt="" data-animation="fadeInRight" data-delay=".25s"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="hero-single" style={{backgroundImage: 'url(assets/img/slider/slider-3.jpg)'}}>
            <div class="container">
            <div class="row align-items-center">
            <div class="col-md-12 col-lg-6">
            <div class="hero-content">
            <h6 class="hero-sub-title" data-animation="fadeInUp" data-delay=".25s">Welcome To
            Motex!</h6>
            <h1 class="hero-title" data-animation="fadeInRight" data-delay=".50s">
            Best Way To Find Your <span>Dream</span> Car
            </h1>
            <p data-animation="fadeInLeft" data-delay=".75s">
            There are many variations of passages orem psum available but the majority have
            suffered alteration in some form by injected humour.
            </p>
            <div class="hero-btn" data-animation="fadeInUp" data-delay="1s">
            <a href="#" class="theme-btn">About More<i class="fas fa-arrow-right-long"></i></a>
            <a href="#" class="theme-btn theme-btn2">Learn More<i class="fas fa-arrow-right-long"></i></a>
            </div>
            </div>
            </div>
            <div class="col-md-12 col-lg-6">
            <div class="hero-right">
            <div class="hero-img">
            <img src="assets/img/slider/hero-4.png" alt="" data-animation="fadeInRight" data-delay=".25s"/>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
       </div> */}



{/*  
<div class="find-car">
<div class="container">
<div class="find-car-form">
<h4 class="find-car-title">Let's Find Your Perfect Car</h4>
<form action="#">
<div class="row">
<div class="col-lg-3">
<div class="form-group">
<label>Car Condition</label>
<select class="select">
<option value="1">All Status</option>
<option value="2">New Car</option>
<option value="3">Used Car</option>
</select>
</div>
</div>
<div class="col-lg-3">
<div class="form-group">
<label>Brand Name</label>
<select class="select">
<option value="1">All Brand</option>
<option value="2">BMW</option>
<option value="3">Ferrari</option>
<option value="4">Marcediz Benz</option>
<option value="5">Hyundai</option>
<option value="6">Nissan</option>
</select>
</div>
</div>
<div class="col-lg-3">
<div class="form-group">
<label>Car Model</label>
<select class="select">
<option value="1">All Model</option>
<option value="2">3-Series </option>
<option value="3">Carrera</option>
<option value="4">G-TR</option>
<option value="3">Macan</option>
<option value="3">N-Series</option>
</select>
</div>
</div>
<div class="col-lg-3">
<div class="form-group">
<label>Choose Year</label>
<select class="select">
<option value="1">All Year</option>
<option value="2">2023</option>
<option value="3">2022</option>
<option value="4">2021</option>
<option value="5">2020</option>
</select>
</div>
</div>
<div class="col-lg-3">
<div class="form-group">
<label>Choose Milieage</label>
<select class="select">
<option value="1">All Milieage</option>
<option value="2">2000 Miles</option>
<option value="3">3000 Miles</option>
<option value="4">4000 Miles</option>
<option value="5">5000 Miles</option>
</select>
</div>
</div>
<div class="col-lg-3">
<div class="form-group">
<label>Price Range</label>
<select class="select">
<option value="1">All Price</option>
<option value="2">$1,000 - $5,000</option>
<option value="3">$5,000 - $10,000</option>
<option value="4">$15,000 - $20,000</option>
<option value="5">$20,000 - $25,000</option>
<option value="6">$25,000 - $30,000</option>
</select>
</div>
</div>
<div class="col-lg-3">
<div class="form-group">
<label>Body Type</label>
<select class="select">
<option value="1">All Body Type</option>
<option value="2">Sedan</option>
<option value="5">Compact</option>
<option value="3">Coupe</option>
<option value="4">Wagon</option>
</select>
</div>
</div>
<div class="col-lg-3 align-self-end">
<button class="theme-btn" type="submit"><span class="far fa-search"></span> Find Your
Car</button>
</div>
</div>
</form>
</div>
</div>
</div> */}


<div class="about-area py-120">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="about-left wow fadeInLeft" data-wow-delay=".25s">
<div class="about-img">
<img src="assets/img/about/01.png" alt/>
</div>
<div class="about-experience">
<div class="about-experience-icon">
<i class="flaticon-car"></i>
</div>
<b>30 Years Of <br/> Quality Service</b>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="about-right wow fadeInRight" data-wow-delay=".25s">
<div class="site-heading mb-3">
<span class="site-title-tagline justify-content-start">
<i class="flaticon-drive"></i> About Us
</span>
<h2 class="site-title">
Delhi NCR Largest <span>Pre Owned Cars</span> Dealership.
</h2>
</div>
<p class="about-text">
There are many variations of passages of Lorem Ipsum available, but the majority have
suffered alteration in some form, by injected humour.
</p>
<div class="about-list-wrapper">
<ul class="about-list list-unstyled">
<li>
At vero eos et accusamus et iusto odio.
</li>
<li>
Established fact that a reader will be distracted.
</li>
<li>
Sed ut perspiciatis unde omnis iste natus sit.
</li>
</ul>
</div>
<a href="/about" class="theme-btn mt-4">Discover More<i class="fas fa-arrow-right-long"></i></a>
</div>
</div>
</div>
</div>
</div>


<div class="counter-area pt-30 pb-30">
<div class="container">
<div class="row">
<div class="col-lg-3 col-sm-6">
<div class="counter-box">
<div class="icon">
<i class="flaticon-car-rental"></i>
</div>
<div>
<span class="counter" data-count="+" data-to="500" data-speed="3000">500</span>
<h6 class="title">+ Available Cars </h6>
</div>
</div>
</div>
<div class="col-lg-3 col-sm-6">
<div class="counter-box">
<div class="icon">
<i class="flaticon-car-key"></i>
</div>
<div>
<span class="counter" data-count="+" data-to="900" data-speed="3000">900</span>
<h6 class="title">+ Happy Clients</h6>
</div>
</div>
</div>
<div class="col-lg-3 col-sm-6">
<div class="counter-box">
<div class="icon">
<i class="flaticon-screwdriver"></i>
</div>
<div>
<span class="counter" data-count="+" data-to="1500" data-speed="3000">1500</span>
<h6 class="title">+ Team Workers</h6>
</div>
</div>
</div>
<div class="col-lg-3 col-sm-6">
<div class="counter-box">
<div class="icon">
<i class="flaticon-review"></i>
</div>
<div>
<span class="counter" data-count="+" data-to="30" data-speed="3000">30</span>
<h6 class="title">+ Years Of Experience</h6>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="car-area bg py-120">
<div class="container">
<div class="row">
<div class="col-lg-6 mx-auto">
<div class="site-heading text-center">
<span class="site-title-tagline"><i class="flaticon-drive"></i> New Arrivals</span>
<h2 class="site-title">Let's Check Latest <span>Cars</span></h2>
<div class="heading-divider"></div>
</div>
</div>
</div>
{/* <div class="row">
<div class="col-md-6 col-lg-4 col-xl-3">
<div class="car-item wow fadeInUp" data-wow-delay=".25s">
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
<div class="car-item wow fadeInUp" data-wow-delay=".50s">
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
<div class="car-item wow fadeInUp" data-wow-delay=".75s">
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
<div class="car-item wow fadeInUp" data-wow-delay="1s">
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
<div class="col-md-6 col-lg-4 col-xl-3">
<div class="car-item wow fadeInUp" data-wow-delay=".25s">
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
<div class="car-footer">
<span class="car-price">$64,230</span>
<a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
</div>
</div>
</div>
</div>
<div class="col-md-6 col-lg-4 col-xl-3">
<div class="car-item wow fadeInUp" data-wow-delay=".50s">
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
<div class="car-footer">
<span class="car-price">$34,540</span>
<a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
</div>
</div>
</div>
</div>
<div class="col-md-6 col-lg-4 col-xl-3">
<div class="car-item wow fadeInUp" data-wow-delay=".75s">
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
<div class="car-footer">
<span class="car-price">$75,820</span>
<a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
</div>
</div>
</div>
</div>
<div class="col-md-6 col-lg-4 col-xl-3">
<div class="car-item wow fadeInUp" data-wow-delay="1s">
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
<div class="car-footer">
<span class="car-price">$25,620</span>
<a href="#" class="theme-btn"><span class="far fa-eye"></span>Details</a>
</div>
</div>
</div>
</div>
</div> */}


<div className="row">
      {data && data.slice(0,12).map((car, index) => (
        <div key={index} className="col-md-6 col-lg-4 col-xl-3">
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

<div class="text-center mt-4">
<a href="/inventoryGrid" class="theme-btn">Load More <i class="far fa-arrow-rotate-right"></i> </a>
</div>
</div>
</div>


<div class="car-category py-120">
<div class="container">
<div class="row">
<div class="col-lg-6 mx-auto">
<div class="site-heading text-center">
<span class="site-title-tagline"><i class="flaticon-drive"></i> Car Category</span>
<h2 class="site-title">Car By Body <span>Types</span></h2>
<div class="heading-divider"></div>
</div>
</div>
</div>
<div class="row">
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay=".25s">
<div class="category-img">
<img src="assets/img/category/01.png" alt/>
</div>
<h5>Sedan</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay=".50s">
<div class="category-img">
<img src="assets/img/category/02.png" alt/>
</div>
<h5>Compact</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay=".75s">
<div class="category-img">
<img src="assets/img/category/03.png" alt/>
</div>
<h5>Convertible</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay="1s">
<div class="category-img">
<img src="assets/img/category/04.png" alt/>
</div>
<h5>SUV</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay="1.25s">
<div class="category-img">
<img src="assets/img/category/05.png" alt/>
</div>
<h5>Crossover</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay="1.50s">
<div class="category-img">
<img src="assets/img/category/06.png" alt/>
</div>
<h5>Wagon</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay=".25s">
<div class="category-img">
<img src="assets/img/category/07.png" alt/>
</div>
<h5>Sports</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay=".50s">
<div class="category-img">
<img src="assets/img/category/08.png" alt/>
</div>
<h5>Pickup</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay=".75s">
<div class="category-img">
<img src="assets/img/category/09.png" alt/>
</div>
<h5>Family MPV</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay="1s">
<div class="category-img">
<img src="assets/img/category/10.png" alt/>
</div>
<h5>Coupe</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay="1.25s">
<div class="category-img">
<img src="assets/img/category/11.png" alt/>
</div>
<h5>Electric</h5>
</a>
</div>
<div class="col-6 col-md-4 col-lg-2">
<a href="#" class="category-item wow fadeInUp" data-wow-delay="1.50s">
<div class="category-img">
<img src="assets/img/category/12.png" alt/>
</div>
<h5>Luxury</h5>
</a>
</div>
</div>
</div>
</div>





<div class="car-dealer pb-120">
<div class="container">
<div class="row">
<div class="col-lg-6 mx-auto">
<div class="site-heading text-center">
<span class="site-title-tagline"><i class="flaticon-drive"></i> Car Dealers</span>
<h2 class="site-title">Best Dealers In <span>Your City</span></h2>
<div class="heading-divider"></div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay=".25s">
<div class="dealer-img">
<span class="dealer-listing">25 Listing</span>
<img src="assets/img/dealer/01.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Automotive Gear</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay=".50s">
<div class="dealer-img">
<span class="dealer-listing">35 Listing</span>
<img src="assets/img/dealer/02.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Keithson Car</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay=".75s">
<div class="dealer-img">
<span class="dealer-listing">15 Listing</span>
<img src="assets/img/dealer/03.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Superious Automotive</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay="1s">
<div class="dealer-img">
<span class="dealer-listing">20 Listing</span>
<img src="assets/img/dealer/04.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Racing Gear Car</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay=".25s">
<div class="dealer-img">
<span class="dealer-listing">19 Listing</span>
<img src="assets/img/dealer/05.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Car Showromio</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay=".50s">
<div class="dealer-img">
<span class="dealer-listing">40 Listing</span>
<img src="assets/img/dealer/06.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Fastspeedio Car</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay=".75s">
<div class="dealer-img">
<span class="dealer-listing">59 Listing</span>
<img src="assets/img/dealer/07.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Star AutoMall</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="dealer-item wow fadeInUp" data-wow-delay="1s">
<div class="dealer-img">
<span class="dealer-listing">28 Listing</span>
<img src="assets/img/dealer/08.png" alt/>
</div>
<div class="dealer-content">
<h4><a href="#">Superspeed Auto</a></h4>
<ul>
<li><i class="far fa-location-dot"></i> 25/B Milford Road, New York</li>
<li><i class="far fa-phone"></i> <a href="tel:+21236547898">+2 123 654 7898</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="choose-area py-120">
<div class="container">
<div class="row align-items-center">
<div class="col-lg-6">
<div class="choose-content">
<div class="site-heading wow fadeInDown" data-wow-delay=".25s">
<span class="site-title-tagline text-white justify-content-start">
<i class="flaticon-drive"></i> Why Choose Us
</span>
<h2 class="site-title text-white mb-10">We are dedicated <span>to provide</span> quality service</h2>
<p class="text-white">
There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.
</p>
</div>
<div class="choose-img wow fadeInUp" data-wow-delay=".25s">
<img src="assets/img/choose/01.png" alt/>
</div>
</div>
</div>
<div class="col-lg-6">
<div class="choose-content-wrapper wow fadeInRight" data-wow-delay=".25s">
<div class="row">
<div class="col-md-6 col-lg-6 mt-lg-5">
<div class="choose-item">
<span class="choose-count">01</span>
<div class="choose-item-icon">
<i class="flaticon-car"></i>
</div>
<div class="choose-item-info">
<h3>Best Quality Cars</h3>
<p>There are many variations of the passages available but the
majo have suffered fact that reader will be dist alteration.</p>
</div>
</div>
<div class="choose-item mb-lg-0">
<span class="choose-count">03</span>
<div class="choose-item-icon">
<i class="flaticon-drive-thru"></i>
</div>
<div class="choose-item-info">
<h3>Popular Brands</h3>
<p>There are many variations of the passages available but the
majo have suffered fact that reader will be dist alteration.</p>
</div>
</div>
</div>
<div class="col-md-6 col-lg-6">
<div class="choose-item">
<span class="choose-count">02</span>
<div class="choose-item-icon">
<i class="flaticon-chauffeur"></i>
</div>
<div class="choose-item-info">
<h3>Certified Mechanics</h3>
<p>There are many variations of the passages available but the
majo have suffered fact that reader will be dist alteration.</p>
</div>
</div>
<div class="choose-item mb-lg-0">
<span class="choose-count">04</span>
<div class="choose-item-icon">
<i class="flaticon-online-payment"></i>
</div>
<div class="choose-item-info">
<h3>Reasonable Price</h3>
<p>There are many variations of the passages available but the
majo have suffered fact that reader will be dist alteration.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="car-brand py-120">
<div class="container">
<div class="row">
<div class="col-lg-6 mx-auto">
<div class="site-heading text-center">
<span class="site-title-tagline"><i class="flaticon-drive"></i> Popular Brands</span>
<h2 class="site-title">Our Top Quality <span>Brands</span></h2>
<div class="heading-divider"></div>
</div>
</div>
</div>
<div class="row">
<div class="col-6 col-md-3 col-lg-2">
<a href="#" class="brand-item wow fadeInUp" data-wow-delay=".25s">
<div class="brand-img">
<img src="assets/img/brand/01.png" alt/>
</div>
<h5>Ferrari</h5>
</a>
</div>
<div class="col-6 col-md-3 col-lg-2">
<a href="#" class="brand-item wow fadeInUp" data-wow-delay=".50s">
<div class="brand-img">
<img src="assets/img/brand/02.png" alt/>
</div>
<h5>Hyundai</h5>
</a>
</div>
<div class="col-6 col-md-3 col-lg-2">
<a href="#" class="brand-item wow fadeInUp" data-wow-delay=".75s">
<div class="brand-img">
<img src="assets/img/brand/03.png" alt/>
</div>
<h5>Mercedes Benz</h5>
</a>
</div>
<div class="col-6 col-md-3 col-lg-2">
<a href="#" class="brand-item wow fadeInUp" data-wow-delay="1s">
<div class="brand-img">
<img src="assets/img/brand/04.png" alt/>
</div>
<h5>Toyota</h5>
</a>
</div>
<div class="col-6 col-md-3 col-lg-2">
<a href="#" class="brand-item wow fadeInUp" data-wow-delay="1.25s">
<div class="brand-img">
<img src="assets/img/brand/05.png" alt/>
</div>
<h5>BMW</h5>
</a>
</div>
<div class="col-6 col-md-3 col-lg-2">
<a href="#" class="brand-item wow fadeInUp" data-wow-delay="1.50s">
<div class="brand-img">
<img src="assets/img/brand/06.png" alt/>
</div>
<h5>Nissan</h5>
</a>
</div>
</div>
</div>
</div>



{/* <div class="download-area mb-120">
<div class="container">
<div class="download-wrapper">
<div class="row">
<div class="col-lg-6">
<div class="download-content">
<div class="site-heading mb-4">
<span class="site-title-tagline justify-content-start">
<i class="flaticon-drive"></i> Get Our App
</span>
<h2 class="site-title mb-10">Download <span>Our Motex</span> App For Free</h2>
<p>
There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.
</p>
</div>
<div class="download-btn">
<a href="#">
<i class="fab fa-google-play"></i>
<div class="download-btn-content">
<span>Get It On</span>
<strong>Google Play</strong>
</div>
</a>
<a href="#">
<i class="fab fa-app-store"></i>
<div class="download-btn-content">
<span>Get It On</span>
<strong>App Store</strong>
</div>
</a>
</div>
</div>
</div>
</div>
<div class="download-img">
<img src="assets/img/download/01.png" alt/>
</div>
</div>
</div>
</div>  */}
      
    </>
  )
}

export default Home
