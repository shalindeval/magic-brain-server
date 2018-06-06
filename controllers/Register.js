const handleRegister = (req,res,db,knex) =>{
	db.transaction(trx=>{
		trx.insert({
			hash:req.body.password, 
			email:req.body.email
		})
		.into('login')
		.returning('email')

		.then(emailLogin =>{
			db('users')
			.returning('*')
			.insert({name:req.body.name, email:emailLogin, hash:req.body.password})
			.then(user=>res.json(user[0]))
			.catch(console.log)
			.then(trx.commit)
			.catch(trx.rollback)
		})
	
	})
	.catch(console.log)
}

module.exports={
	handleRegister:handleRegister
}