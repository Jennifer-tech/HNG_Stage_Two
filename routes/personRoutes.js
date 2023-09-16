const router = require("express").Router()
const validate = require('../middlewares/validateMiddleware')
const {createPerson, getPerson, updatePerson, deletePerson,  getAllPerson} = require('../controllers/personController')
const {
    createSchema,
    updateSchema
} = require('../schema/personSchema')

router.get('/all', getAllPerson)
router.get('/:id', getPerson)
router.patch('/:id', validate(updateSchema), updatePerson)
router.delete('/:id', deletePerson)
router.post('/', validate(createSchema), createPerson)

module.exports = router;