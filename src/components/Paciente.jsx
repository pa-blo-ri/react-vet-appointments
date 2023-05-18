const Paciente = ({ paciente }) => {

    const { nombre, responsable, email, alta, sintomas } = paciente;

  return (

    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-3">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Responsable: {''}
                    <span className="font-normal normal-case">{responsable}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha alta: {''}
                    <span className="font-normal normal-case">{alta}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Síntomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
            </div>
  )
}

export default Paciente