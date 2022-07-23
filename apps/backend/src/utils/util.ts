import bcrypt from 'bcrypt';

/**
 * 
 * @param password pass incoming password to encrypt
 * @param userPassword 
 * 
 */
export const validatePassword = async (password: string, userPassword: string)
    : Promise<Error | boolean> => {

    return await bcrypt.compare(password, userPassword);

}

export default { validatePassword }