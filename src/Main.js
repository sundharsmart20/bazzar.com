import React,{useState,useEffect} from 'react';
import './App.css';
import {store} from './Store.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

import Echart from './Echart.js';
import {Container,Row,Col} from 'react-bootstrap';

const Main=(props)=>{

	const[item,setItem]=useState([]);
	const[button1,setButton1]=useState(false);
	// const[show,setShow]=useState(false);
	const [show, setShow] = useState(false);

  
	var collects=[];

useEffect(()=>{
	setItem(store);
        },[])
	

    store.map((stores)=>{
    	if(props.items===stores.category)
	    {
	    	collects.push(stores);
	    }
	    if(props.items==="All" || props.items==="")
	    {
	    	collects.push(stores);
	    }
    })

    
var [id,setId]=useState(0);
const handleModel=(id)=>{

	item.filter((i)=>{
		if(i.id===id)
		{
			setShow(true);		
			setId(id);
		}

	})
  
}

const handleClose = () => setShow(false);

const handleClick=(id,index)=>{
	
	item.map((items)=>{
		if(items.id===id)
		{
			props.handleChange1(props.item+1);
			items.btn=true
			props.handleCart1(items);
		}
	})
		
			
	}

	return(
		<div>

		  <div className="container-fluid mt-5" >
                <div className="row text-center">
		
			{
				collects.map((items,index)=>{
					return(
				<div  className="col-10 col-md-4 shadow p-3 mb-5 bg-red rounded mt-3 align-items-center"  key={items.id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">

							 <div className="image "> <img src={ items.image } className="rounded" width="155" /> </div>
							<div className="ml-3 w-100">
							     <h4 className="mb-0 mt-0 textLeft">{items.title}</h4>
							
							    <p style={{fontSize:'20px'}}><strong><span style={{textDecoration: 'underline'}}>price:</span></strong> {items.price}&#x20B9;</p> 
							 
							 <div className="d-flex p-2 flex-column bd-highlight  rounded-pill">                                             
							  		{items.btn==true ? <p className="heading  rounded-pill">This product added to cart</p> : <Button variant="secondary" className="rounded-pill" onClick={()=>{handleClick(items.id,index)}}>Add Cart</Button>}
							  </div>
							  <div className="d-flex flex-column">
								  <Button variant="primary" className="rounded-pill" onClick={()=>{handleModel(items.id)}}>
							        View
							      </Button>
						      </div>
						    </div>
						    
						
					</div>
					</div>
					</div>
  					
						)
				})

			}
			</div>
			</div>

	
		<div>
			{
				item.map((items)=>{
				   if(items.id===id)
				   {
					return(
						<Modal
				        show={show}
				        onHide={handleClose}
				        backdrop="static"
				        keyboard={false}
				      	>
				        <Modal.Header closeButton>
				          <Modal.Title>
				          	<img src={items.image} alt={items.description}  className="imgs" />{ items.title}
				          </Modal.Title>
				        </Modal.Header>
				        <Modal.Body>
				         <p><strong>Description</strong>: {items.description}</p>
				         <p><strong>Price</strong> {items.price}</p>
				        </Modal.Body>
				        <Modal.Footer>
				          <Button variant="secondary" onClick={handleClose}>
				            Close
				          </Button>
				         
				        </Modal.Footer>
				      </Modal>
						)
				}
				})
			}
		</div>
		
		</div>
		)
}
export default Main;