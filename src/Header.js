import React,{useState,useEffect} from 'react';
import './App.css';
import Main from './Main';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import {store} from './Store.js';
import Echart from './Echart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import ReactECharts from 'echarts-for-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiHamburgerMenu } from "react-icons/gi";

const Header=()=>
{
	const [itemCount, setItemCount] = useState(0);
	  const [fullscreen, setFullscreen] = useState(true);

	const [cart,setCart]=useState({

		'carties':[]
	}
	);


	const[value1,setValue]=useState("");

    const[bazzar,setBazzar]=useState(false);

    const [show, setShow] = useState(false);
    const[show1,setShow1]=useState(false);
  var datas=[];
  var title=[];
	
  // var carting=[];  

// cart[0].carties.map((cart)=>{

// })

// useEffect(()=>{
// 	 localStorage.setItem('cart',JSON.stringify(cart));
// })
 

  store.map((stores)=>{
            return(
            datas.push(stores.rating.rate)
              )
            
          })
store.map((stores)=>{
            return(
            title.push(stores.id)
              )
            
          })
	const handleChange=(itemCount1)=>
  {
    setItemCount(itemCount1);
  }
  const handleCart=()=>{
  	setShow1(true);
  }


  const handleChart=()=>{
  	setShow(true);
  }

  const handleBazzar=()=>{
  	window.location.reload();

  }
  const handleClose = () => {setShow(false);setShow1(false)}
  


  	// const data = JSON.parse(localStorage.getItem('cart'))

  	const[data1,setData]=useState({
		  'carton': cart.carties
	  });
	// useEffect(()=>{
	// 	localStorage.setItem('data',data1);
	// })
	 
  console.log("the data1 ",data1);

  	const handlePersonCart=(personcart)=>{
  		data1.carton.push(personcart);
  }

    const[total1,setTotal]=useState(0);


  const handleIncrement=(id,price1)=>{
  		data1.carton.map((prizing)=>{
  			
  			if(id===prizing.id)
  			{
  				prizing.total=prizing.total+1;
  				prizing.price1=prizing.total*prizing.price;

  				setData({...data1,total:prizing.total,price1:prizing.price1})

  			}
  			
  		})

  }


  const handleDecrement=(id,price2)=>{
  		data1.carton.map((prizing)=>{
  			
  			if(id===prizing.id)
  			{
  				prizing.total=prizing.total-1;
  				prizing.price1=prizing.total*prizing.price;
  				
  				setData({...data1,total:prizing.total,price1:prizing.price1})
  			}
  			
  		})
  }

  	// const[price,setPrice]=useState(0);

  	var p=0;

  	data1.carton.map((price)=>{
		if(price.total===1)
		{
			p+=price.price;
			
		}
	   
		else
		{
			p+=price.price1;
		}
  	})

	return(
		<div>

		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-info">
				<div className="container-fluid">
    			
					 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    						<span class="navbar-toggler-icon"></span>
 					 </button>
			<div class="collapse navbar-collapse navbar-nav mr-auto " id="navbarSupportedContent">
			 <div class="p-2 flex-grow-1 bd-highlight">
					<h1 onClick={handleBazzar} style={{fontFamily: 'Arial, Helvetica, sans-serif',fontSize:'2rem',display:'flex',justifyContent:'center',padding:'25px',cursor:'pointer'}} >Bazzar</h1>
			 </div>
				<div class="d-flex flex-column bd-highlight mb-3">
					<div class="p-2 bd-highlight">
					<span style={{color:'black',fontSize:'1rem'}} >Cart:</span><Badge onClick={handleCart} style={{cursor:'pointer'}} color="secondary" badgeContent={itemCount}>
			          <ShoppingCartIcon />{" "}
			        </Badge>
		 			</div>

				<label><span style={{color:'black',fontSize:'1rem'}}>Search:</span><select value={value1} onChange={(e)=>{setValue(e.target.value)}}>
					<option value="">
						select collection
					</option>
					<option value="men's clothing">mens's collection</option>
					<option value="women's clothing">women's collection</option>
					<option value="jewelery">jewelery</option>
					<option value="electronics">electronics</option>
					<option value="All">All</option>
				</select></label>
		    </div>
				<a href="#" className="link" onClick={handleChart}>E-chart</a>
			</div>
			
	</div>
	 </nav>
			</header>
			
			 {(show===true) ? null :<Main handleChange1={handleChange} items={value1} item={itemCount} handleCart1={handlePersonCart} />}
			 {show===true && <Echart echart={value1} />}
				
			{show1===true ?	<Modal
				        show={show1}
				        onHide={handleClose}
				        backdrop="static"
				        keyboard={false}
				         dialogClassName="modal-130w"
        				aria-labelledby="example-custom-modal-styling-title"
				      	fullscreen={fullscreen}
				      	>
				        <Modal.Header closeButton>
				          <Modal.Title>
				          		Your Cart are
				          </Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				    
				        <ul className="unoder">
				      		{ (data1.carton.length===0) ? <h1 style={{color:'red',textAlign:'center',position:'relative'}}>your cart is empty</h1> :
				      			data1.carton.map((items)=>{
				      				
				      				return(
				      				<li key={items.id} className="listing">
							 			<img src={items.image} alt={items.description}  className="imgs" />
										  <div class="containers">
										    <h4><b>{items.title}</b></h4> 
										    <p style={{fontSize:'20px'}}><strong><span style={{textDecoration: 'underline'}}>price:</span></strong> {items.price}&#x20B9;</p> 
										  </div>
										 <span><strong>Quantity:</strong></span><button onClick={()=>{handleIncrement(items.id,items.price)}}>+</button>{items.total}<button onClick={()=>{handleDecrement(items.id,items.price)}}>-</button>
									</li>

				      					)

				      			})
				      		
				      		}						      	
				      		
				      	</ul>

				        </Modal.Body>
				        <h1 style={{float:'right'}}>total:<span>{Math.round(p)}&#x20B9;</span></h1>
				        <Modal.Footer>

				          <Button variant="secondary" onClick={handleClose}>
				            Close
				          </Button>
				         
				        </Modal.Footer>
				    </Modal>:null}
		
		 </div>
		)
	
}
export default Header;