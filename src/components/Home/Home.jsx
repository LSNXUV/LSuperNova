import React from 'react'
import "./Home.css"

import { Link,Outlet } from 'react-router-dom'
// import { hover } from '@testing-library/user-event/dist/hover'

import routes from '../../routes'

export default function Home() {




  return (
 
      <div className='home' >
        <div className="navigator">
        
        <svg t="1662177657760" className="icon" viewBox="0 0 1566 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1416" 
          width="80" height="80"><path d="M294.575285 543.051294C309.935285 811.369412 522.746579 1024 783.08352 1024c116.103529 0 222.72-42.315294 306.627765-113.001412-119.296-35.629176-251.542588-85.654588-387.46353-147.425882-149.383529-67.885176-289.370353-143.811765-407.642353-220.521412zM328.487755 322.017882c122.066824 86.738824 281.6 176.399059 451.734589 253.711059 133.330824 60.596706 266.450824 110.592 384.963764 144.534588 19.877647 5.692235 39.273412 10.902588 58.096941 15.631059a531.275294 531.275294 0 0 0 48.248471-254.945882C1256.17152 212.630588 1043.360226 0 783.023285 0c-116.073412 0-222.72 42.315294-306.597647 113.001412a510.614588 510.614588 0 0 0-133.601883 175.104c-5.150118 11.083294-9.938824 22.407529-14.336 33.91247z" p-id="1417" fill="#00E4FF"></path><path d="M1314.298579 603.286588c-3.855059 37.014588-7.258353 43.610353-18.010353 79.028706 51.621647 38.550588 94.900706 75.866353 125.831529 108.604235 10.029176 10.661647 17.950118 19.937882 24.184471 27.858824a330.992941 330.992941 0 0 1-17.227294 0.421647c-66.921412 0-165.255529-17.588706-276.811294-49.573647-120.711529-34.575059-256.120471-85.383529-391.529412-146.944-180.284235-81.92-349.214118-177.694118-475.708235-269.763765-58.368-42.465882-107.128471-83.937882-141.040942-119.868235a411.015529 411.015529 0 0 1-24.214588-27.828706c5.150118-0.271059 10.872471-0.421647 17.227294-0.421647 46.832941 0 109.025882 8.613647 180.314353 24.726588 17.829647-32.015059 21.383529-40.658824 44.875294-68.517647C283.431755 131.192471 203.830814 110.471529 136.999755 102.4 62.368226 93.364706 13.607755 120.079059 2.464226 157.244235-31.388009 270.275765 290.599755 520.734118 721.703755 716.619294c289.249882 131.463529 554.164706 204.980706 707.373177 204.980706 75.143529 0 123.392-17.679059 134.535529-54.844235 19.395765-64.692706-74.059294-149.955765-249.313882-263.469177z" p-id="1418" fill="#00E4FF"></path></svg>
        
          <div className="routes">
            <ul type='none'>
              <li>
                <Link 
                  to={'/home/intro?id=0'}
                  
                >intro</Link></li>
              <li><Link to={'/home/about'}>about</Link></li>
              <li><Link to={'/login'}>contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    
  )
}
