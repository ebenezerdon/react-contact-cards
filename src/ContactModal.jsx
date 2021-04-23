import { motion } from 'framer-motion'

const ContactModal = ({ contact, setSelectedContact }) => {
  const closeModal = event => {
    if(event.keyCode === 27 || event.currentTarget === event.target) {
      setSelectedContact(null)
    }
  }

  window.addEventListener('keydown', event => closeModal(event))

  return (
    <div className={style.overlay}>
      <div className={style.container} onClick={event => closeModal(event)}>
        <motion.div
          animate={{ scale: [0.7, 1.5, 1] }}
          exit={{ scale: 0 }}
          className={style.modal}
        >
          <p className={style.title}>
            {contact.name.title} {contact.name.first} {contact.name.last}
          </p>
          <div className={style.content}>
            <p className="font-medium">Username:</p>
            <p>{contact.login.username}</p>
            <p className="font-medium">Gender:</p>
            <p>{contact.gender}</p>
            <p className="font-medium">City:</p>
            <p>{contact.location.city}, {contact.location.state}</p>
            <p className="font-medium">Country:</p>
            <p>{contact.location.country}</p>
            <p className="font-medium">Postcode:</p>
            <p>{contact.location.postcode}</p>
            <p className="font-medium">Phone Number:</p>
            <p>{contact.cell}</p>
            <p className="font-medium">Email:</p>
            <p>{contact.email}</p>
            <p className="font-medium">Age:</p>
            <p>{contact.dob.age}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const style = {
  overlay: 'fixed top-0 h-screen w-screen bg-black bg-opacity-10',
  container: 'flex h-screen',
  modal: 'm-auto bg-white rounded-lg shadow-lg px-14 pt-5 pb-10',
  title: 'text-center mb-5 text-gray-700 font-semibold text-xl',
  content: 'grid grid-cols-2 text-gray-600 gap-x-0'
}

export default ContactModal
