module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  
  return next();
};

  // let returnedObject;

  // if (result.length > 0) {
  //   console.log(`O result é ${result}`);
  //   returnedObject = {
  //     message: result,
  //     status: statusCodes.OK
  //   };
  //   console.log(`O returnedObject é ${returnedObject}`);
  // }

  // returnedObject = {
  //   message: errorMessages.notFoundData,
  //   status: statusCodes.badRequest
  // }
  // res.status(returnedObject.status).json(returnedObject.message);