// import { React } from "react";

import {
   CatalogueMain,CatalogueCards, CatalogueLoader, CatalogueHeader
} from "../Styled/Catalogue.styled";

import { useEffect, useState} from 'react';
import { getUsers, getArray, recordsPerPage } from 'MockapiAPI';
import { CarCard } from "../CarCard";
import  ButtonLoadMore  from "../ButtonLoadMore";
import Loader from '../Loader';




const Favorites = () => {
    const [page, setPage] = useState(0);
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [disabled, setdDisabled] = useState(false);
  const [amount, setAmount] = useState(0);
  

  useEffect(() => {
        setPage(1);
      async function fetchArray() {
        try {          
          const response = await getArray();
          const ArrayLength = await response.json();
          const count = parseInt(ArrayLength.length);
          setAmount(count);         
      } catch (err) {
            console.log(err.message);
        }
        finally {
      }
      }  
     fetchArray();
  }, []);
 
  useEffect(() => {
      async function fetchData() {
       setLoader(true);
        try {          
          const response = await getUsers(page);
          const usersData = await response.json();
          setUsers(prev => [...prev, ...usersData]);     
            // setUsers([...usersData]); 
      } catch (err) {
            console.log(err.message);
        }
        finally {
        setLoader(false);
      }
    }
    fetchData();
    }, [page]);
    
  const handleButtonClick = () => {
    setPage(prev => prev + 1);
     console.log(page);
    if (users.length >= amount - recordsPerPage) {
             console.log(users.length, recordsPerPage);
            setdDisabled(true);
            return;
        }
  };

  return (
    < CatalogueMain> 
      <CatalogueHeader>Find a car for rent</CatalogueHeader>
      <CatalogueCards>
        {users.map(({ id, year, make, model, type, img, rentalPrice,
           address, rentalCompany, accessories }) => {
            return (
                <CarCard
                    key={id}
                    data-id={id}
                    year={year}
                    make={make}
                    model={model}
                type={type}
                rentalPrice={rentalPrice}
                address={address}
                rentalCompany={rentalCompany}
                id={id}
                accessories={accessories}
                    img={img}
              />
          )
        })}
    
           </CatalogueCards>
      <CatalogueLoader>
              <Loader isVisible = {loader} />
</CatalogueLoader>
        
      
     
    {users.length > 0 && <ButtonLoadMore disabled={disabled} onClick={handleButtonClick} />}
      </CatalogueMain>
   
  );
}

export default Favorites;