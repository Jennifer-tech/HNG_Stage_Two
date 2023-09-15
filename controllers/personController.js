const personModel = require('../models/personModel')

// Create Person
exports.createPerson = async (req, res) => {
    const personInfo = req.body
    try {
        const existingEmail = await personModel.findOne({ name: personInfo.name })

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
    const { name: name } = req.params
    try {
        const person = await personModel.findOne({ name });
        if (!person) return res.status(404).json({ success: false, message: "person does not exist" })
        res.status(200).json({ success: true, message: person })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// Update Person
exports.updatePerson = async (req, res) => {
    try {
        const user = { name: req.params.name };
        const personInfo = req.body

        const person = await personModel.findOneAndUpdate(user, personInfo, { new: true });

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
    const name = req.params.name

    try {
        const person = await personModel.findOneAndDelete({ name })
        if (!person) {
           return res.status(404).json({ message: "Person does not exist" })
        }
        res.status(500).json({ success: true, message: "Person deleted successfully" })
    } catch (err) {
        res.status(500).json({ success: false, message: err })
    }
}
