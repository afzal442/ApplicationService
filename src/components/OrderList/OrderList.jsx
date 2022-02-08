import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OrderList = ({ modal, toggle, save}) => {
    const [order, setOrder] = useState('');
    const [description, setDescription] = useState('');



    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "order") {
            setOrder(value)
        } else {
            setDescription(value)
            // setTodo({
            //     message: {
            //         body: value
            //     },
            //     submitting: true,
            //     error: false
            // })
        }

    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = order
        taskObj["Description"] = description
        save(taskObj)
        window.alert("Order Booked Successfully")
    }

    return (
        <>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Book Your Order</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Item Type</label>
                    <input type="text" className="form-control" value={order} onChange={handleChange} name="order" />
                </div>
                <div className="form-group">
                    <label>Item Names</label>
                    <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Order</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </>
    );
};

export default OrderList;