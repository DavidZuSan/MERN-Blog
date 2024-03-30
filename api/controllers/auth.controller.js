import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Comprueba si username, email o password están vacíos. Si es así, llama a la función errorHandler con un código de estado 400 y un mensaje de error, y termina la ejecución de la función.
    if (!username || 
        !email || 
        !password || 
        username === "" || 
        email === "" || 
        password === ""
        ) {
        next(errorHandler(400, "All fields are required"));
    }

    // Encripta la contraseña utilizando bcryptjs. El '10' es el número de rondas que bcryptjs utilizará para generar el "salt". Un salt es una cadena aleatoria que se añade a la contraseña antes de hashearla para evitar ataques de diccionario y de tabla arco iris.
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Crea una nueva instancia de User con username, email y la contraseña encriptada.
    const newUser = new User({ 
        username, 
        email, 
        password: hashedPassword 
    });

    try {
        // Intenta guardar el nuevo usuario en la base de datos. Si la operación es exitosa, envía una respuesta con el mensaje "User created".
        await newUser.save();
        res.json("User created");
    } catch (error) {
        // Si ocurre un error al guardar el usuario, pasa el error al siguiente middleware de manejo de errores.
        next(error);
    }
};