import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PZone from '../PZone/PZone';

const LeftNav = () => {
  
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
          fetch('https://news-server-hasantalukder1234.vercel.app/categories')
          .then(res => res.json())
          .then(data => setCategories(data))
          .catch(error =>console.log(error));
    }, [])


    return (
        <div>
           <h4>All Category </h4>
          <div className='ps-4'>
          {
            categories.map(category => <p
            key={category.id}
            >
               <Link to={`/category/${category.id}`} className='text-info-emphasi text-decoration-none'>{category.name}</Link>
            </p>)
           }
          </div>
          <div>
            <PZone></PZone>
          </div>
        </div>
    );
};

export default LeftNav;