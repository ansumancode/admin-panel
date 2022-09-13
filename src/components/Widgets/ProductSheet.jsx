import React, { useState } from 'react'
import './ProductSheet.scss'
import { ProductSheetData } from '../../data/Data'

function ProductSheet() {

    const [productSheet, setProductSheet] = useState(ProductSheetData)

    return (
        <div>
        {
            productSheet.slice(0,5).map((val, index) => {
                return(
                    <div className="productSheet" key={index}>
                <div className="productSheetLeft">
                    <div className='procustSheetIcon'>
                        <span>{val.id}</span>
                    </div>
                    <div className="productSheetDetails">
                        <p className="productSheetTitle">{val.title}</p>
                        <p className="productSheetAmount">{val.amount}</p>

                    </div>
                </div>

                <div className="productSheetRight">
                    <div className="productOrder">
                        <p className='productValume'>{val.volum}</p>
                    </div>
                </div>

            </div>
                    
                )
                
            })
        }
            
            


        </div>
    )
}

export default ProductSheet