import cookie from 'cookie';

export default (req, res) => {

  res.setHeader(
    'Set-Cookie', 
    cookie.serialize('loggedin', req.body.loggedin, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
      path: '/'
    })
  );
  res.statusCode = 200;
  res.json({
    success: true
  });
}