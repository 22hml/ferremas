import { ModalStyles } from "./style"

export const Modal = () => {
  return (
    <ModalStyles>
      <div className="content">
        <img src="/assets/check.svg" alt="" />
        <p>Transaccion realizada con exito!</p>
      </div>
    </ModalStyles>
  )
}
