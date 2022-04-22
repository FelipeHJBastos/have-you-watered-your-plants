import { Router } from 'express'
import { getAuth, signInWithCustomToken } from "firebase/auth";

const loginRouter = new Router();

loginRouter.post('/', async (req, res) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithCustomToken(auth, token);

    const user = userCredential.user;
    return res.json({user})
  } catch (error) {
    console.log({
      code: error.code,
      message: error.message
    })
  }
})

export { loginRouter };