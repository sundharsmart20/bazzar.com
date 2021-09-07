import React from 'react';
import ReactECharts from 'echarts-for-react';
import {store} from './Store.js';

const Echart=(props)=>{

	var datas=[];
    var title=[];
  


 //    store.map((stores)=>{
 //            return(
 //            datas.push(stores.rating.rate)
 //              )
            
 //          })
	// store.map((stores)=>{
	//             return(
	//             title.push(stores.id)
	//               )
	            
	//           })

	var val=[];


 
	console.log(val);

	 store.map((stores)=>{
    	if(props.echart===stores.category)
	    {
	    	datas.push(stores.rating.rate);
	    	title.push(stores.id);
	    	val.push({'value':stores.rating.rate,'name':stores.title});
	    }
	    if(props.echart==="All" || props.echart==="")
	    {
	    	datas.push(stores.rating.rate);
	    	title.push(stores.id);
	    	val.push({'value':stores.rating.rate,'name':stores.title})
	    }
    })

	 const styles = {
  chartContainer: {
    flex: 1,

  }
}
	return(
		<>
		<ReactECharts 
							style={styles.chartContainer}
						        option = {{
						    xAxis: {
						        type: 'category',
						        data: [...title]
						    },

						     tooltip: {
						        trigger: 'item',
						       
						        useHTML:true,

						       	formatter: function(c) {
										      var targetValue = 0;
										      
										      store.map((stores)=> {
										      
										      	if(stores.rating.rate===c.data)
										      	{
										        	targetValue='<p>'+'<img src="'+stores.image+'" height="auto" width="100" />'+'</p>'+'<br/>'+'<strong>'+'Title'+'</strong>'+':'+stores.title+' '+','+'<strong>Rating</strong>'+':'+stores.rating.rate;
										      	}
										      });
										      return targetValue;
										    }
									},
						    yAxis: {
						        type: 'value'
						    },
						    series: [{
						        data: [...datas],
						        type: 'line',
						         symbol: 'triangle',
						         symbolSize: 20,
						          lineStyle: {
						            color: '#5470C6',
						            width: 4,
						            type: 'dashed'
						        },
						        itemStyle: {
							            borderWidth: 3,
							            borderColor: '#EE6666',
							            color: 'yellow'
							        }
						    }]
						}}
						
						/>
				<br/>
				<span style={{fontSize:'20px',display:'flex',justifyContent:'center',fontWeight:'bold'}}>{props.echart}</span>
				
				<ReactECharts 
					option = {{
					    
					    tooltip: {
					        trigger: 'item'
					    },
					    legend: {
					        orient: 'horizontal',
					        left:0,
					        type: 'scroll',
    						show: true,
    						bottom:0
					    },
						  
					    series: [
					        {
					            name: 'bazzar',
					            type: 'pie',
					            radius: '50%',
					            left:0,
					            data: [...val],
					            emphasis: {
					                itemStyle: {
					                    shadowBlur: 10,
					                    shadowOffsetX: 0,
					                    shadowColor: 'rgba(0, 0, 0, 0.5)'
					                }
					            }
					        }
					    ]
					}}
				/>
			</>
		)
}
export default Echart;