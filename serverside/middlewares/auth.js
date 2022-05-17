import jwt from 'jsonwebtoken';


const auth = async (req, res, next) => {
    try {
        const token = req.header('authorization').split(' ')[1];
        const isCustomAuth=token.length<500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            req.userId=decodedData?.id;

        }
            
         else {
            decodedData=jwt.decode(token);
            req.userId=decodedData?.sub;
        }
        next();

    } catch (e) {
        res.status(401).send({ error: 'please authenticate' });
    }
}

export default auth;