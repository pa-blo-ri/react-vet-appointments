const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, responsable, email, alta, sintomas, id } = paciente;

    const handleEliminar = () => {

        const respuesta = confirm('Are you sure?');

        if(respuesta){
            eliminarPaciente(id);
        }
    }

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
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={ () => setPaciente(paciente) }
                >Edit</button>
                
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={ handleEliminar }
                >Delete</button>
            </div>
        </div>
    )
}

export default Paciente