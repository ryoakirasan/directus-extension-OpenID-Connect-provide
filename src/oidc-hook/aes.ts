import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const SALT_LENGTH = 16; // Salt length in bytes
const ITERATIONS = 10000; // PBKDF2 iterations
const KEY_LENGTH = 32; // Key length in bytes for AES-256
const DIGEST = 'sha512'; // Hashing algorithm for PBKDF2

/**
 * AES encryption function
 * @param {string} plaintext - The string to encrypt
 * @param {string} secret - The secret key for encryption
 * @returns {string} Encrypted string in the format: salt:iv:ciphertext (all in hex)
 * @throws {Error} If an error occurs during encryption
 */
export const aesEncrypt = (plaintext, secret) => {
    try {
        const salt = crypto.randomBytes(SALT_LENGTH);
        const key = crypto.pbkdf2Sync(secret, salt, ITERATIONS, KEY_LENGTH, DIGEST);
        const iv = crypto.randomBytes(16); // IV length is always 16 for AES-CBC

        const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

        let encrypted = cipher.update(plaintext, 'utf8', 'hex');
        encrypted += cipher.final('hex');

        return `${salt.toString('hex')}:${iv.toString('hex')}:${encrypted}`;
    } catch (err) {
        console.error('Encryption failed:', err);
        throw new Error('An error occurred during encryption');
    }
}

/**
 * AES decryption function
 * @param {string} ciphertext - The string to decrypt (format: salt:iv:ciphertext - all in hex)
 * @param {string} secret - The secret key for decryption
 * @returns {string} The decrypted plaintext string
 * @throws {Error} If the ciphertext format is invalid, key is incorrect, or an error occurs during decryption
 */
export const aesDecrypt = (ciphertext, secret) => {
    try {
        const [saltHex, ivHex, encryptedText] = ciphertext.split(':');

        if (!saltHex || !ivHex || !encryptedText) {
             throw new Error('Invalid ciphertext format');
        }

        const salt = Buffer.from(saltHex, 'hex');
        const iv = Buffer.from(ivHex, 'hex');

        const key = crypto.pbkdf2Sync(secret, salt, ITERATIONS, KEY_LENGTH, DIGEST);

        const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);

        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        return decrypted;
    } catch (err) {
        console.error('Decryption failed:', err);
        throw new Error('An error occurred during decryption - potentially invalid key or corrupted ciphertext');
    }
}
