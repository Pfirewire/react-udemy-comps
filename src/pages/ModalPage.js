import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            Here is an important agreement
        </Modal>
    );

    return(
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et volutpat magna. Sed at fermentum nisi. Nulla facilisi. Integer purus felis, ultricies ac suscipit nec, ultricies eget quam. Mauris condimentum eros vel tellus auctor, eu suscipit nibh bibendum. Sed consequat odio in quam vestibulum interdum. Curabitur pretium metus magna, vitae interdum augue auctor eu. In fringilla sem nec aliquam fermentum. Etiam hendrerit ut diam eget porta.
            </p>
        </div>
    )
}

export default ModalPage;