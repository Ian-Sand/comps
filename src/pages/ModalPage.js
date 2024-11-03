import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      setShowModal(true);
    }

    const handleClose = () => {
      setShowModal(false);
    }

    const actionBar = (
      <div>
        <Button onClick={handleClose} primary>I Accept</Button>
      </div>
    );

    const modal = (
      <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
          Here is an important agreement for you to accept
        </p>
      </Modal>
    );

    return (
      <div className='relative'>
          <Button onClick={handleClick} primary>Open Modal</Button>
          {showModal && modal}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus, magna sed varius dignissim, justo turpis porttitor urna, a sodales tellus ligula ac mi. Curabitur sollicitudin bibendum dui, id consectetur felis mollis eu. Cras facilisis eget erat ut condimentum. Praesent varius massa vel gravida blandit. Ut sit amet dolor maximus, volutpat nisi vel, dictum augue. Sed convallis est efficitur, mattis elit sit amet, pretium sapien. Mauris in suscipit tortor. Cras sit amet turpis tortor. Nullam interdum malesuada eros, sit amet pulvinar lorem condimentum non. Mauris ac turpis tincidunt quam tristique euismod eget a nulla. Morbi congue neque non porttitor consequat. Donec convallis id odio ac tristique. Nam sodales diam sed nulla ultrices, at hendrerit augue efficitur. Sed imperdiet massa et erat sollicitudin, non convallis dui facilisis. Praesent et aliquet risus. Nam sed vulputate lacus. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus, magna sed varius dignissim, justo turpis porttitor urna, a sodales tellus ligula ac mi. Curabitur sollicitudin bibendum dui, id consectetur felis mollis eu. Cras facilisis eget erat ut condimentum. Praesent varius massa vel gravida blandit. Ut sit amet dolor maximus, volutpat nisi vel, dictum augue. Sed convallis est efficitur, mattis elit sit amet, pretium sapien. Mauris in suscipit tortor. Cras sit amet turpis tortor. Nullam interdum malesuada eros, sit amet pulvinar lorem condimentum non. Mauris ac turpis tincidunt quam tristique euismod eget a nulla. Morbi congue neque non porttitor consequat. Donec convallis id odio ac tristique. Nam sodales diam sed nulla ultrices, at hendrerit augue efficitur. Sed imperdiet massa et erat sollicitudin, non convallis dui facilisis. Praesent et aliquet risus. Nam sed vulputate lacus. 
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus, magna sed varius dignissim, justo turpis porttitor urna, a sodales tellus ligula ac mi. Curabitur sollicitudin bibendum dui, id consectetur felis mollis eu. Cras facilisis eget erat ut condimentum. Praesent varius massa vel gravida blandit. Ut sit amet dolor maximus, volutpat nisi vel, dictum augue. Sed convallis est efficitur, mattis elit sit amet, pretium sapien. Mauris in suscipit tortor. Cras sit amet turpis tortor. Nullam interdum malesuada eros, sit amet pulvinar lorem condimentum non. Mauris ac turpis tincidunt quam tristique euismod eget a nulla. Morbi congue neque non porttitor consequat. Donec convallis id odio ac tristique. Nam sodales diam sed nulla ultrices, at hendrerit augue efficitur. Sed imperdiet massa et erat sollicitudin, non convallis dui facilisis. Praesent et aliquet risus. Nam sed vulputate lacus. 
          </p>
      </div>
    );
}

export default ModalPage;