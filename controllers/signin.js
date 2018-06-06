const handleSignin = (req,res,db) =>{
	db('login').where({email:req.body.email, hash:req.body.password}).select('*')
	.then(data=>res.json(data[0]))
	.catch(err=>console.log)
}

module.exports = {
	handleSignin:handleSignin
}