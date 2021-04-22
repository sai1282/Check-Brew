import {React} from 'react'
import { FcPlus } from 'react-icons/fc';
import './products.css';
import Popup from './popUp';


function Products() {



    return (
        <div className='products'>
            <FcPlus className="btn_addProduct"/>
            <Popup trigger={true}>

            </Popup>
        </div>
    );
}

export default Products;