import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [responsable, setResponsable] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect( () => {
        if( Object.keys(paciente).length > 0 ){
            setNombre(paciente.nombre)
            setResponsable(paciente.responsable)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Form validation
        if ([nombre, responsable, email, alta, sintomas].includes('')) {

            setError(true);
            return
        }

        setError(false);

        //Objeto de paciente
        const objPaciente = {
            nombre,
            responsable,
            email,
            alta,
            sintomas,
            id: generateId()
        }

        if( paciente.id ) {
            //Editando
            objPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState);

            setPacientes(pacientesActualizados);
            setPaciente({});

        } else {
            //Creando nuevo
            objPaciente.id = generateId();
            setPacientes([...pacientes, objPaciente]);
        }

        

        //Form reset
        setNombre('');
        setResponsable('');
        setEmail('');
        setAlta('');
        setSintomas('');

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-xl mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                { error && <Error><p>All fields must have content</p></Error> }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="mascota"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="responsable" className="block text-gray-700 uppercase font-bold">Nombre Responsable</label>
                    <input
                        type="text"
                        placeholder="Nombre de la persona responsable"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="responsable"
                        value={responsable}
                        onChange={(e) => setResponsable(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                        type="email"
                        placeholder="Email de contacto de la persona responsable"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        id="alta"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
                    value= { paciente.id ? "Editar paciente" : "Agregar Paciente" }
                />

            </form>
        </div>
    )
}

export default Formulario