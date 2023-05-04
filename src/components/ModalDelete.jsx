import './styles/modalDelete.css'

const ModalDelete = ({ deleteInfo, setDeleteUser, deleteUser, deleteUserByID }) => {

    const handleDeleteUser = () => {
        setDeleteUser(true)
        deleteUserByID(deleteInfo.id)
    }
    const handleExit = () => {
        setDeleteUser(true)
    }

  return (
    <div className={`modal__container ${deleteUser && 'close'}`}>
        <article className='modal'>
            <h1 className='modal__title'>Eliminar usuario</h1>
            <span onClick={handleExit} className='modal__exit'>x</span>
            <span className='modal__label'>{`El usuario ${deleteInfo?.first_name} ${deleteInfo?.last_name} se ha eliminado.`}</span>
            <button className='modal__btn' onClick={handleDeleteUser}>Aceptar</button>
        </article>
    </div>
  )
}

export default ModalDelete