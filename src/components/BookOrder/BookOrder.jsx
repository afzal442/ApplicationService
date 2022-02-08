import React, { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';

const BookOrder = () => {
    const [modal, setModal] = useState(false);
    const [addList, setAddList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("addList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setAddList(obj)
        }

        setModal(true)
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        // let tempList = addList
        addList.push(taskObj)
        localStorage.setItem("addList", JSON.stringify(addList))
        setAddList(addList)
        setModal(false)
    }


    return (
        <>
            {/* <div className="header text-center">
                <h3>Create Your New Year Resolutions' List</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)} >Click To Add</button>
            </div> */}
            <OrderList toggle={toggle} modal={modal} save={saveTask} />
        </>
    );
};

export default BookOrder;