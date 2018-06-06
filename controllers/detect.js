const Clarifai = require('clarifai')

const app = new Clarifai.App({
 apiKey: 'ec8b8027f37a4603a0ba8b10d5736100'
})

const handleClarifai = (req,res) => {

	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(response=>res.json(response))
    .catch(console.log)
}

module.exports={
	handleClarifai:handleClarifai
}