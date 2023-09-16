const personModel = require('../models/personModel')

// Create Person
exports.createPerson = async (req, res) => {
    const personInfo = req.body
    try {
        const existingEmail = await personModel.findOne({ name: personInfo.name }).maxTimeMS(30000); 

        if (existingEmail) {
            res.status(409).json({ error: "Person data already exists" })
            return
        }

        const personData = await personModel.create({ ...personInfo })
        return res.status(200).json({ Success: true, message: personData })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

// Read Persons
exports.getPerson = async (req, res) => {
    const { id: _id } = req.params
    try {
        const person = await personModel.findById({ _id }); 
        if (!person) return res.status(404).json({ success: false, message: "person does not exist" })
        res.status(200).json({ success: true, message: person })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// Read Persons
exports.getAllPerson = async (req, res) => {
    let queryStr = JSON.stringify(req.query);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    const queryObj = JSON.parse(queryStr)
    try {
        const persons = await personModel.find(queryObj);
        if (persons.length === 0) {
            return res.status(404).json({ success: false, message: "No persons found" });
        }
        res.status(200).json({ success: true, message: persons });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

// Update Person
exports.updatePerson = async (req, res) => {
    try {
        const {id: _id} = req.params
        const personInfo = req.body

        const person = await personModel.findByIdAndUpdate(_id , personInfo, { new: true, maxTimeMS: 30000 });

        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }
        res.status(200).json({ success: true, message: person })

    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }

}

// Delete person
exports.deletePerson = async (req, res) => {
    const {id: _id} = req.params

    try {
        const person = await personModel.findByIdAndDelete({_id })
        if (!person) {
            return res.status(404).json({ message: "Person does not exist" })
        }
        res.status(500).json({ success: true, message: "Person deleted successfully" })
    } catch (err) {
        res.status(500).json({ success: false, message: err })
    }
}
