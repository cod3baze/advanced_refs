import React, {useState, useCallback, forwardRef, useImperativeHandle} from 'react';

// import { Container } from './styles';

export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  if(!visible) {
    return null
  }

  return (
    <div>
      Modal Aberto

      <button type="button" onClick={handleCloseModal}>
        Fechar modal
      </button>
    </div>
  );
}

export default forwardRef(Modal);
