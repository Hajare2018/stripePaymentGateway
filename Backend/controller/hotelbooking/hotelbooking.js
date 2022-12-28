const connection = require("../../model/connection");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const hotel_get = async (req, res) => {
  try {

    const querry = "SELECT * FROM hotelbooking ";
    await connection.query(querry, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      } else {
        res.send(result);
      }
      res.end();
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

const paymentGet = async (req, res) => {
  try {
    const querry = "SELECT * FROM payment";
    await connection.query(querry, async (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      } else {
        let paymentStatus = [];
        let session;
        const payData = await result.map(async (data) => {
          console.log("object", data.session_id);
          session = await stripe.checkout.sessions.retrieve(
            `${data.session_id}`
          );
          let k = paymentStatus.push(session);
          console.log("session status", session);
        });
        setTimeout(() => {
          res.send({ result, ok: payData });
        }, 0);
        console.log("object", paymentStatus);
      }
      //   res.end();
    });
  } catch (err) {
    res.send(err.sqlMessage);
  }
};

const hotel_post = async(req,res)=>{
  try{
  const querry = "INSERT INTO hotelbooking SET ?"
  const data = req.body
  await connection.query(querry,data,(err,result)=>{
      if(err){
          return res.send(err.sqlMessage)
      }else{
          res.send(result)
      }
  })
  }catch(err){
      res.send(err.sqlMessage)
  }
}

module.exports = { hotel_get, hotel_post, paymentGet };
