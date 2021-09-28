import React from 'react'



const Description = ({list,match}) => {
    let item=list.find(el=>el.id==match.params.id)

    return (
          
        <div>
            <h1 style={{color:"white",marginLeft:"250px"}}>{item.name}</h1>
            {/* <img src={item.imgs}/> */}
            <iframe style={{marginLeft:"250px"}}
             width="900"
             height="506"
             src={item.vid}
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write;
               encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               <p style={{color:"white", fontFamily:'Arial', fontSize:"20px", marginLeft:"250px", marginRight:"250px"}}>{item.description}</p>

        </div>
        
    )
}

export default Description
