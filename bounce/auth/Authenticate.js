/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { getApp } from 'firebase/app';



export default function Authenticate(_phNum) {
    const app = getApp();
    const auth = getAuth();
    async () => {
        console.log('entered Authenticate');
        // The FirebaseRecaptchaVerifierModal ref implements the
        // FirebaseAuthApplicationVerifier interface and can be
        // passed directly to `verifyPhoneNumber`.
        try {
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
                _phNum,
                recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
                text: 'Verification code has been sent to your phone.',
            });
        } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
        }
    }
}
